#!/usr/bin/env python3
"""Local portfolio preview: conditional caching, text gzip and single byte ranges.

Standard library only; Python 3.9+. Run ``python3 server.py --open``.
"""

import argparse
from collections import OrderedDict
from datetime import timezone
from email.utils import parsedate_to_datetime
import gzip
import hashlib
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import io
import os
from pathlib import Path
import re
import stat
import threading
from urllib.parse import parse_qs, quote, urlsplit, urlunsplit
import webbrowser


CHUNK_SIZE = 256 * 1024
GZIP_MIN_SIZE = 512
GZIP_MAX_SIZE = 8 * 1024 * 1024
TEXT_TYPES = {
    "application/javascript", "application/json", "application/manifest+json",
    "application/xml", "image/svg+xml", "text/javascript",
}


class RepresentationCache:
    """Bounded metadata/gzip cache, invalidated by inode/size/mtime/ctime changes."""

    def __init__(self):
        self.entries = OrderedDict()
        self.lock = threading.Lock()

    def get(self, source, path, info, compress=False):
        key = (str(path), info.st_dev, info.st_ino, info.st_size,
               info.st_mtime_ns, info.st_ctime_ns)
        with self.lock:
            entry = self.entries.get(key)
            if entry is None:
                digest = hashlib.sha256()
                source.seek(0)
                while True:
                    block = source.read(CHUNK_SIZE)
                    if not block:
                        break
                    digest.update(block)
                entry = {"digest": digest.hexdigest(), "gzip": None}
                self.entries[key] = entry
            if compress and entry["gzip"] is None:
                source.seek(0)
                encoded = gzip.compress(source.read(), compresslevel=5, mtime=0)
                # False records an unhelpful compression result without retrying it.
                entry["gzip"] = encoded if len(encoded) < info.st_size else False
            self.entries.move_to_end(key)
            while len(self.entries) > 128 or sum(
                len(item["gzip"]) if item["gzip"] else 0
                for item in self.entries.values()
            ) > 32 * 1024 * 1024:
                self.entries.popitem(last=False)
            source.seek(0)
            return entry


def accepts_gzip(value):
    """Honor an explicit gzip;q=0 even if a wildcard allows other encodings."""
    weights = {}
    for part in value.split(","):
        fields = part.strip().lower().split(";")
        if not fields[0]:
            continue
        weight = 1.0
        for parameter in fields[1:]:
            if parameter.strip().startswith("q="):
                try:
                    weight = float(parameter.strip()[2:])
                    if not 0 <= weight <= 1:
                        weight = 0
                except ValueError:
                    weight = 0
        weights[fields[0]] = weight
    return weights.get("gzip", weights.get("*", 0)) > 0


def http_timestamp(value):
    try:
        parsed = parsedate_to_datetime(value)
        if parsed.tzinfo is None:
            parsed = parsed.replace(tzinfo=timezone.utc)
        return int(parsed.timestamp())
    except (TypeError, ValueError, OverflowError):
        return None


def single_range(value, size):
    """Return inclusive bounds, False for unsatisfiable, None when unsupported.

    Malformed/multiple ranges are ignored (a complete 200 response); only a
    syntactically valid, unsatisfiable single byte range receives 416.
    """
    match = re.fullmatch(r"bytes\s*=\s*(\d*)\s*-\s*(\d*)\s*", value, re.I)
    if not match or not any(match.groups()):
        return None
    first, last = match.groups()
    try:
        if first:
            start = int(first)
            end = int(last) if last else size - 1
            if last and start > end:
                return None
            if start >= size:
                return False
            return start, min(end, size - 1)
        suffix = int(last)
        if not suffix or not size:
            return False
        return max(0, size - suffix), size - 1
    except ValueError:
        return None


class PortfolioHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"
    server_version = "PortfolioPreview/1.0"
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript", ".mjs": "text/javascript",
        ".webp": "image/webp", ".avif": "image/avif",
        ".mp4": "video/mp4", ".webm": "video/webm",
        ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf",
    }

    def __init__(self, request, client_address, server):
        super().__init__(request, client_address, server, directory=str(server.root))

    def do_GET(self):
        try:
            super().do_GET()
        except (BrokenPipeError, ConnectionResetError):
            # Browsers routinely abort video/poster requests when scrolling away.
            self.close_connection = True

    def list_directory(self, path):
        self.send_error(HTTPStatus.NOT_FOUND, "Directory index not found")
        return None

    def _safe_path(self):
        # Keep stdlib URL decoding/normalization, then also block symlink escapes.
        translated = super().translate_path(self.path)
        if "\x00" in translated:
            raise ValueError("Invalid path")
        path = Path(translated).resolve()
        path.relative_to(self.server.root)
        return path

    def _cache_control(self, path, digest):
        if path.suffix.lower() in {".html", ".htm"}:
            return "no-cache"
        version = parse_qs(urlsplit(self.path).query).get("v", [""])[0].lower()
        # Arbitrary ?v=2x/date labels must not make mutable files immutable.
        if re.fullmatch(r"[0-9a-f]{8,64}", version) and digest.startswith(version):
            return "public, max-age=31536000, immutable"
        return "no-cache"

    def _representation_headers(self, mime, length, etag, modified,
                                cache_control, vary, encoded=False):
        self.send_header("Content-Type", mime)
        self.send_header("Content-Length", str(length))
        self.send_header("ETag", etag)
        self.send_header("Last-Modified", self.date_time_string(modified))
        self.send_header("Cache-Control", cache_control)
        self.send_header("Accept-Ranges", "bytes")
        if vary:
            self.send_header("Vary", "Accept-Encoding")
        if encoded:
            self.send_header("Content-Encoding", "gzip")

    def _not_modified(self, etag, modified):
        if "If-None-Match" in self.headers:
            candidates = ",".join(self.headers.get_all("If-None-Match")).strip()
            return candidates == "*" or any(
                item.strip().removeprefix("W/") == etag
                for item in candidates.split(",")
            )
        since = http_timestamp(self.headers.get("If-Modified-Since"))
        return since is not None and int(modified) <= since

    def _if_range_matches(self, etag, modified):
        validator = self.headers.get("If-Range")
        if validator is None:
            return True
        validator = validator.strip()
        if validator.startswith(('"', 'W/')):
            return validator == etag  # Strong comparison: weak tags never match.
        return http_timestamp(validator) == int(modified)

    def send_head(self):
        self._range_bounds = None
        source = None
        try:
            path = self._safe_path()
            parts = urlsplit(self.path)
            if path.is_dir():
                if not parts.path.endswith("/"):
                    target = urlunsplit(("", "", parts.path + "/", parts.query, ""))
                    self.send_response(HTTPStatus.MOVED_PERMANENTLY)
                    self.send_header("Location", quote(target, safe="/%?=&:+,;@!$'()*~-._"))
                    self.send_header("Content-Length", "0")
                    self.send_header("Cache-Control", "no-cache")
                    self.end_headers()
                    return None
                for name in ("index.html", "index.htm"):
                    candidate = (path / name).resolve()
                    candidate.relative_to(self.server.root)
                    if candidate.is_file():
                        path = candidate
                        break
                else:
                    return self.list_directory(str(path))
            elif parts.path.endswith("/"):
                self.send_error(HTTPStatus.NOT_FOUND, "File not found")
                return None
            if not path.is_file():
                self.send_error(HTTPStatus.NOT_FOUND, "File not found")
                return None
            source = path.open("rb")
            info = os.fstat(source.fileno())
            if not stat.S_ISREG(info.st_mode):
                source.close()
                self.send_error(HTTPStatus.NOT_FOUND, "File not found")
                return None
            mime = self.guess_type(str(path))
            vary = (mime.startswith("text/") or mime in TEXT_TYPES)
            # Media always remains byte-identical; Range is only defined for GET.
            range_value = (",".join(self.headers.get_all("Range", []))
                           if self.command == "GET" else "")
            compress = (vary and GZIP_MIN_SIZE <= info.st_size <= GZIP_MAX_SIZE
                        and not range_value
                        and accepts_gzip(",".join(self.headers.get_all("Accept-Encoding", []))))
            entry = self.server.representations.get(source, path, info, compress)
            encoded = entry["gzip"] if compress else None
            digest = entry["digest"]
            etag = '"' + (hashlib.sha256(encoded).hexdigest() if encoded else digest) + '"'
            length = len(encoded) if encoded else info.st_size
            cache_control = self._cache_control(path, digest)

            if self._not_modified(etag, info.st_mtime):
                self.send_response(HTTPStatus.NOT_MODIFIED)
                # A 304 has no body; omit Content-Length (not the length zero).
                self.send_header("ETag", etag)
                self.send_header("Last-Modified", self.date_time_string(info.st_mtime))
                self.send_header("Cache-Control", cache_control)
                if vary:
                    self.send_header("Vary", "Accept-Encoding")
                self.end_headers()
                source.close()
                return None

            bounds = None
            if range_value and self._if_range_matches(etag, info.st_mtime):
                bounds = single_range(range_value, info.st_size)
            if bounds is False:
                self.send_response(HTTPStatus.REQUESTED_RANGE_NOT_SATISFIABLE)
                self._representation_headers(mime, 0, etag, info.st_mtime,
                                             cache_control, vary)
                self.send_header("Content-Range", "bytes */" + str(info.st_size))
                self.end_headers()
                source.close()
                return None
            if bounds:
                start, end = bounds
                self._range_bounds = bounds
                self.send_response(HTTPStatus.PARTIAL_CONTENT)
                self._representation_headers(mime, end - start + 1, etag,
                                             info.st_mtime, cache_control, vary)
                self.send_header("Content-Range", "bytes {}-{}/{}".format(
                    start, end, info.st_size))
                self.end_headers()
                source.seek(start)
                return source

            self.send_response(HTTPStatus.OK)
            self._representation_headers(mime, length, etag, info.st_mtime,
                                         cache_control, vary, bool(encoded))
            self.end_headers()
            if encoded:
                source.close()
                return io.BytesIO(encoded)
            return source
        except (OSError, ValueError) as error:
            if source is not None:
                source.close()
            status = HTTPStatus.FORBIDDEN if isinstance(error, PermissionError) else HTTPStatus.NOT_FOUND
            self.send_error(status, "File not found or outside the site directory")
            return None

    def copyfile(self, source, outputfile):
        remaining = None
        if self._range_bounds is not None:
            start, end = self._range_bounds
            remaining = end - start + 1
        while remaining is None or remaining > 0:
            block = source.read(CHUNK_SIZE if remaining is None else min(CHUNK_SIZE, remaining))
            if not block:
                break
            outputfile.write(block)
            if remaining is not None:
                remaining -= len(block)


def make_server(directory, host="127.0.0.1", port=0):
    root = Path(directory).resolve(strict=True)
    if not root.is_dir():
        raise ValueError("The site directory must be a folder")
    server = ThreadingHTTPServer((host, port), PortfolioHandler)
    server.root = root
    server.representations = RepresentationCache()
    server.daemon_threads = True
    return server


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--directory", type=Path, default=Path(__file__).resolve().parent)
    parser.add_argument("--bind", default="127.0.0.1", help="Default: this computer only")
    parser.add_argument("--port", type=int, default=0, help="Default: any available port")
    parser.add_argument("--open", action="store_true", help="Open the Russian page in a browser")
    args = parser.parse_args()
    server = make_server(args.directory, args.bind, args.port)
    host = "127.0.0.1" if args.bind in {"0.0.0.0", ""} else args.bind
    url = "http://{}:{}".format(host, server.server_port)
    print("Личный сайт: " + url + "/index.html", flush=True)
    print("English: " + url + "/en.html", flush=True)
    print("Чтобы остановить просмотр, нажмите Control + C или закройте это окно.", flush=True)
    if args.open:
        webbrowser.open(url + "/index.html")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
