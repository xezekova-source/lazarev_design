/* config.js */
// Все внешние ссылки и параметры видео находятся здесь.
window.PORTFOLIO = {
  links: {
    telegram: 'https://t.me/IvanLazarevDir',
    behance: 'https://www.behance.net/LazarevIvan',
    linkedin: 'https://www.linkedin.com/in/ivan-lazarev-designer/',
    cv: 'https://drive.google.com/file/d/1Hu8fIIX6miIuUjbHDFMCBWsXQy5wtI4f/view?usp=sharing',
    playlist: 'https://music.yandex.ru/playlists/lk.0236706e-eb12-4a8a-8f59-614e6b9103a2?utm_source=web&utm_medium=copy_link'
  },
  heroVideo: 'assets/optimized/hero-desktop.mp4',
  heroVideoMobile: 'assets/optimized/hero-mobile.mp4',
  videoPause: 2,
  videoFade: .5
};
;

/* assets/optimized/media-previews.js */
/* Tiny inline image placeholders; generated from the exact source composition. */
window.PORTFOLIO_PREVIEWS={"assets/optimized/hero@2x.webp":"data:image/webp;base64,UklGRhoBAABXRUJQVlA4IA4BAABQCACdASpAACQAPxF+tFMsKKUiqAuJgCIJYwDGfHASgeHCq1guoBB+BBg/8InAFGW3SGcJ4g7ORCQnVdhSRMY695spLG695GQDqgAA/vrrOJUGLYbxWnUC3Ln6c6t6fCnhzg7SGfzUphSRXK6m8mWU92HWHW98HlfjQn+GzhU6QJd4zctGAw4YQsj3dG8oQsd1Zeq4dw5gp/DHUyh3fqrV6Gx15bPcFfp+lS/PSkRbJxqrRowX0Tgn9ymfeJxbfQxgQBRud4Tn5saS5F7CdtLCaDSpWthlI4goEsHfbu+2W1XXGWSHEPkDV1xg1LyvUfkPp7VXDrlUSe4abyhDm3i6A0Ud1NGIUntSEPZ1gAA=","assets/optimized/case-praxium@2x.webp":"data:image/webp;base64,UklGRrgBAABXRUJQVlA4IKwBAABQCgCdASpAACMAPxF0tFIsJqUirVZraYAiCWUAzvGv8bQbihQ9+Elv/tGWr0VGADBA9+17k0w3dNrtoibz/51GNCDAlEYgCOFw0hheGLRZJORhom6d3DQ9XowAAP73c6UBwpgAA7XOUCJY41fhWzbzkbZ1zywjcGfWn9Fdz8Mu+x32Y43QQD+I5qeupGV7+ILj4FepMHLk9iUDVlRnlfOywgHSy9/Z3wApPsAI5bDUyWGl+IVgfhBgGXYJrMKdDwC2eSqHjj6+qevS3Kzpsk8PbRuqVigGOkIjP8oHJNazqoMba8KetOYN74QbrOeX+FNsf27JLK7vCaCo+/E4g9QDdE2cl2U9QzIwo6m+gTgbEkzn5HExaqusArjHvmbbUjV1gIcu3Qum4/jcMHKCCK6QD6P12G/Q6V2O9VCJc2pKnPNwGtFGioONn/nlXEbjZb3hLqlEwUKxVm2UmgHQ9RFvU6IOBrZOxz9v6qyvrHGzlwDrt2QXH67uVDgGO4tBDL5jESkxN6d4kmweffJFEsQgU9eqVM+N+Ai4Ch7NIYfdplpjfD1GABFkAAAAAA==","assets/optimized/case-sms-man@2x.webp":"data:image/webp;base64,UklGRqYBAABXRUJQVlA4IJoBAACwCgCdASpAACMAPxF0sVIsJqUiqrQO+YAiCWwArz+ARFFQhBCMa/lkq8TH9E0eaVdRyLWK9OfoI+Dla498O2jm6Iz14AanAd1ebtW/j0gd2DE3J1dKJkJOsSbKAcyAAP6dJbS8jNf/xDnaj4gnrP0KfUsgnFV6c/LegBhZdAjvlelwgMk9fiH/FCvaLCVOjAVAkhjSkPjJPUmOKWsBzH7vbetGa+2r6EsNRirHpFbassS5yS4osZX2nMtCARhxNwVD9IqiGomAOd8sM8iMCkZF85aTwxPrrw587evCSb3M9kbIA6WbbH7SAdwkV5Aj0XlFGpd4cKE8wz7ppO7c4kcH1lC3Qakv36GNoaX5xh7KKd2bVQQXv5lYJQny4KM8AKv0oQh8qc8XmT9ZEEpT/xRbDTBWcHJt7KN+UasdIULyTC05hK5A+JStdWQhQyC8GvdRYccTJTjIyWm++siqLbajaY0CzHPBz6Ji+6OsriTPNTprAKf6iZCT6HZZXyX6Pp7x2xaWnBUXJATuOBOXnhlaC1BL6dOSQkMgAA==","assets/optimized/case-vtb-pay@2x.webp":"data:image/webp;base64,UklGRpYBAABXRUJQVlA4IIoBAABQCQCdASpAACMAPxFur1CsJiQ1LVmdsqAiCWIAxydihFy3DdVxZM1obChgLwERy9RyKczzoQiQx36KMiAtCEF76kTXEf7OEhnMl/oEiP5VqlwuIAD+9otfv6he2m4JF80miy4PaKvQaBPS5y7pFWNkRJuQjQM0jJBzT64cfF97w4Rt1yixVSxltVbHTC0uzxdkpHOt+I/VvwPFjEK4Y0OJqoz395JrE6IzMPoMRXV7JFJ2F3LPll1U99y5mE2s53i+pzj404rDhfkHQtct6NwZipPTIe3gouBlSGVyWswPLZlPqdNxsld+YzUVGL+0nKtuCtWBOpRCJ8QgFwLX4SRbbrJOUsrGBCDE+GKJ1Y8IR9NCIO7SurhcLQLztU90e5U8RDl6zALs1s4YzvMuWd1H+hgWxpFdo9RK+YQ4YI7bNmmkxHbKsErQLoW/+EFsKSbaUv9y4/weNj8kQSMeLzQlV+9fheDEbG495+cnRWgTeQwVVPNb/OegmysQmbfDvkp+ZKVyD8GzMdAA","assets/optimized/case-vtb-services@2x.webp":"data:image/webp;base64,UklGRuQAAABXRUJQVlA4INgAAABQBwCdASpAACMAPxFys1AsJqSisBK9UYAiCUAZoYyPoEdQSxsR23OPLKmnyMjYCZPM5dW1gDuT2SAdUN1qCe6EOr0AAP7xGe29f7Kl+NRUgWAfc03vDEyINwj4ilRI6YwGc4hco6n9v8qhJsLVjXYqz4pIHD79FI0oT6bcKUx4lbnTiF3AL+m+O6O672+MIbMQqGk6ydFZfVDtX2bnG8SoyxQPeaehW8wJmAIAIAldq4pnI0yiSVdqsxwWNcDjGGLqY1VZwmw1r4JTa1mt34FZn8nn+laIAAA=","assets/optimized/about-60ce3.webp":"data:image/webp;base64,UklGRjYEAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSOEBAAABkKPtfxo5f8Fih2FOvXCDbMqZOUSo32fvkOl2pk222m3DOQwzMzPJ0u95DLL0/wfaiHDgNpIiVTUN7R5f9Rfo/0WljbXW1PZpxT9jLLXQGtYJXc2oA52VtY0zZzbWVroHVTWh+XYQTXZPXfmFCH9dPd2bJGLaUFb7Tt5DSe8aLFDyXn8fkeF4t2jr4FO15kMsBO888Gm4lbTKnz32HHAeCfQOeH4id9LSzLmyCkhkKIsLs2SzfPF2o8oobi+SzfDlD3DIpMPHw8lm6NA3FMhmge/LZBJ9/iM8GOjxaT7JtJ66V685ynvTWqfkS7ET+QcukUnwI6WDz460mtKzb7zng/dvZrVqy8MygzMNW5JWu776wIngv+5S0SOW+mUGb+qTja2ricfwvPB4PKFUbL1TOritE1u2tB4cN1xYjw2VuS4RrpvmQNOB3wjcCPh9gHRzpYcC7CzQay5YWoXjh8Mq2SYGMhjGsCmDzSYMnZHBGTLykB6IbxmQlb+Q/OdW/nsj/r2V/92Q/92S/90U/92W/98Q/9+S/98U/9+W1Q2XycjrljTd9IlNNy2QSdVt3/l0m7hulNWtS2TzdPN5Tt2ceICO5+t28b5Bum/h7JuupvVNzH1bt71vk+4bpfvW/xYJAFZQOCAuAgAAMA4AnQEqQABAAD8Rcq5SrCYjoq4ZKqmAIglqAM5ZE/rnnsrJhfWZjZadWWcV7xHzALepMpAPDlQfIyTkbjvVCR/tQWVxcxK1IveE2kmcyzPV2M+9RGAPp4S373E2z+cJUcfg57Kj8271BDmsWlZBqAFyJofsOR1nPzAA/vvZRCMX1yyEgENuz1zV6TqvUW0/jMwUQnMiC+P2zYBHOOO8XtRQk+dTf49/ses7IrKyHP1fswX/mJxjJ8nCNlTvZcgpUKb3HSHYEZcQOEswqUpX4kwr2nsRh2XYylNDZMoYRITbpbE8qP+q26DEfYdfYENx1DMY0JzGQAap7jbhMAuK1nyy0GwL/W7vizzqQvY7f5YkB3ZgXn9hm8mQCpQdFpqGXL9Puw32yp4YWDPAn/jP48ifUcazaVKoQXxLCNYDaw2dp7FadYV9c9e6cP2/l0p+sJcI/SaeZRy1tdq4DqXS0O+6jItNh7erMatwGY6VrBRh3jb9J3uo4rVPiQOew3GUj6bui/G2odm/qWw2cO9SJuTL8A472WQtPgq5k9RUVCiYelOWYYCT/N+uav06YdZ36xQfb4tdz5UxMeghWUEo99voF5p5yykQpu/sFIO/Mp56xPRM0d/Jpb8FsgX4q+pfzuTxUf46at2aDQd6SthYFxHSNLJZZBaS7jKErwab5T0+UAN1eizsjWg+s5B1/924GYGNsOz6JweuIXL0pH+39zjZCwjdrRKQAm/xAAAA","assets/optimized/about-photo-judy@2x.webp":"data:image/webp;base64,UklGRvICAABXRUJQVlA4IOYCAACQDwCdASpAAEAAPw1wrlAsJiQisfcckYAhiWQAx+r09ZB2ZOe+F/0f/HeXpCevDuzZPUoWpooHZW0qqa/JX697uT93OxhwGShN7pnoi8e1Z8MkOzultZ61EQ1nNqHCiqwkzUbSl9z1kiyyf71FGwO2PYh5Am4owmbHbIpEm5+fxbTLsPkAAP7iPzPTZZGBZQ5n/7TdgIqf1q3/Gyu6FMOJ98uTtVgeuor6/2eWyBoBkNGXN71f9EjctpcakbLVPSSxV3oVFCdS2gciJY6ZWMG0N8MZlJyNrnfy5CQQ7QVOuNvpL8O9DfNnpGCh95Kp0fU4Re117EsuxlWOqpnnLHgZK5RwtXKEP8nrB9YEH0bazNFylypl4wOx0NCm221O21MQINVkcSTVAiKkGLlqqy5UtM2tImhFpiMpSCCLSKyWC365AHkFzVJXnimfTP0XY9CQQDTMZ4p0aU4ruB4U6tacstl5281wng5dudYpDxvvrO+d/jSGObxmtu5fJGfyl8M9bf6m0yF1OPyogqzyMtdr5ZZhhD/QYNfZtbSWj/HL9FbhYsq/dNnWfHPFQK68htrjFQj2N4yOD39rrtPW8IAmuUW3rLwQPNn7jtjnkGwEQ0iWSUPgiogDAyMS48YfQDxw92YObLY0NyGqwyOl5Z8arSKAuJ7hf/VwqYU08mkrBpfTvWvFiDuCsL72sfM4H2a7SyeIEge+rXrNUQhXMeOmu8LnVAc9k83yJ6wsAcknbGLE1tt09j77M6F57GflGdlR9x4KvgIqar2oGHxY1stnczPm6Bghe97WpN6ljOl+vjNhWEXfRYcse6HT8TPY8eaOjMEar+YbcPt76DCwAVQ3LCbXSHtjFONHgkL3YCLAaJ8eGlN/jqwjg05p8NgKlXpopYYazIYf8vrpntcrCkNu1wu2Dh+SvcfGNiRANX1Zfj/zDJXxfg7cPXnhqt5+R1/IwHJhjjXU2VMPVQOuF4GXrafAAAAA","assets/optimized/about-photo-street@2x.webp":"data:image/webp;base64,UklGRuACAABXRUJQVlA4INQCAADQDgCdASpAAEAAPwlqqlArpaOisfxraXAhCWYAxuxW/d+dta3/SZoITG0mgFH41jc0A86JZkvyngVcksF5e0OQ3eWxynh/bQUvPIKnDVDqO6OkmbbJqYVUkwxyzAyK5LurZDOp/WvneyP8t4oM0gh9EhCvB4b8Uy61ZzrVG4MAAP7w7E91L3OD9luCwBkOu/Apcq3dPunaOkAVXyD5u4n70xZcnqQ5VsRQ+BT2WbpQ8Ly8RzHMdS9nI9ayY/mAwR0MZnLXvlRgH6oKjv5r2c3eU9BVq29rsXwqvcvSnsLQE6/0zOcNKj8poLLFwmBmWFmigmP5xC8KnPTVE4HU56vowO51EyaaA7VeyI1qW7c/wZ4X+B7R8D30dqAWkwISnfzLXrKgQgR+1uR335kpB9IYYNLfSpyC1ADWyBxOGPq14iurayKYKVnuSn1C+5NLPWFef2wsBZafz7ODcKWSbAaUKfNrjYf+mQKrWZmGHzuhxRQEsBhAF+M5MAkPfOWuD8Solg+f6tmH0TcWE6Y5Jitp15KVsoZo/mENkI7uM3VHvhfQNTDmdvzCGtCm/CvoOX+R7Feh74YTQqkmf2UPi/4YBDZP2LxLjJ6T0/fUqjILjpxqCm4BvEo2F3eNWEr6sW7iUFlxveoYAeYLRUWLzxF0MqIgxd8EjxwtO4dKiDPqZv1R5ViVG9o6ItcTzsoc/nNYBnVx+Uw+OuyJs2QrvtQOOnMSXjaYYNXSExxhp7+VkHKneel1saQ16f4R2yq8WOTBS8ekYMcgb/HgB1HxOw7IwclrJeLG5yz1S+WSmZ/EUDQr32q8zrQDrUAKBNGYsYAe0F1YwK2CqY21/z8iAd8A2rQ77luMTIAt0XOGB8fQuMGcdnVje0eCf1rWi/d3b3YL+jlZeeK7UloRHtpoTAN5wkFYZGaf4CvX6sVgmDdrROwHA1baQ+QbByc0lwRFEOFoAAAA","assets/optimized/about-photo-talk@2x.webp":"data:image/webp;base64,UklGRm4DAABXRUJQVlA4IGIDAADwEwCdASpAAFUAPxF6tFOsJ6SiqBqsAYAiCWIAyjQlTQJqm9fkCxzl4nwjd1bAsootciTrbBu/Y/ju+/dMZzSLg7ftJ7CKaEGCfxXSBAb6XQ1LpWfGSmdRLKhHMUk4nltOCyTbyNcprAh/X7xSZvm1vVrxPaa21eDKHlrsoljrJClXpkvdqQkX+PlcvAf+upYrJ7JCX1pAd8lrruaV+2PtqJ9rzInlmcAA/otydogREMfIvo7RuUKTyyTrfFB5CF/8jr84Ptp/7ysX1avKaWDPrXhr1RaKjiGMknS2Cm03uk0fq6aazd3GQIZxS7IwEXWhRm4pWVWoCLscQbDpeaB56p4Ddtw4mveIST8RXt4g1yvamXRiFHdWColgKwIBlWzg7lw4IIEr4GnGhHuLSX7IBGSyZQ1IS2CyWLxXYO3VnG9uVensztnCNZvGqcE28MQc34hl5XhZp9eLwi/MLCuzcubS3+W+GWMJcms5N461WNJhmTh5frwrYIs5CybgoJcVFQ2fPJwKlHH+vmo0pbpg5vFkR7K21U+kfuGcUJjca46opQHW21XoROE+3F2DGvrRRvFRhMfaloM3c/WA0V0fH6XaGcnU+S+wnjQnnAeXufR4daIfG1dOwbtdWHk+KjFJVNRutSzo0QtRM4V6IfCljCkCAvIZxsht2/kTT4tIplgYAAjl8zfliIKNU6o1utIAmQSVfF5uU6XVb7ldkFwJX6fgsfXOFCzrN2cMBnJe75hQXJNWzwo0bDg4A7yTdWE07L1V/7GnnlrFcdHmEDC1+NFC7bPAk7cjop8Zj38Z6L+goecTbRJ/MQCJMe8ypZ/f3GqF5NXQST5WZJQNOaUg/St+Fo/JebIbox44VUIAC+Q/VWK9U6sXtRTe0Bc/JHSSi5NbRcc6HRaQcr7vr62+Msp8yUqX59RWFjf+U0ktL91AdnqRBZDBLlXdgI4AjeiySVmZ5m5e0vY/6EHvNn4x1XdoJYqYTy/x1jTZab7kjHFvC13yZ3THKsdegbjRTFsVRUpYw85/6PdKlKQB8PGbwBQG3tniX5v7DZVcIrXW7LnmQH09Y3+FAP7n8due8BpL9hUY+nud+WHL1fkdeMiGFJwrd0LBJNoaxem7DpXvwBxUcZV0pGI8ZV24pqsbXmWAAA==","assets/optimized/project-372-36173.webp":"data:image/webp;base64,UklGRmoBAABXRUJQVlA4IF4BAABQCQCdASpAADIAPxF8s1SsJyUjLBK6aYAiCWgAzw0gRCiFAXeag6jm84Z7EBvGyTNOmbgjjFY7q9Hc8F/zLYg0EyKkbD+BXp2v0ph41l4rYv0uAAD+8NBOBaOQ0/Cp9BykHneDDmPn9SkByRu4GI2NkGZBjQlQkIEemWQQX21nFtrf1MdiaqhPz7wuxUJWS89hCP1QltFuYg22Vm1393kG12uhjslnfTvf+l0fd1Hzx1WeQaTy7X6nch+HjCkd4EUc5jafewatLH3I0iAutK7m4CyFblGD1yob5yOSChTN4ZTCKbuE2qIDxg9APUy73onYxZ+EAC3Wo5WYwNwboGkqWBNB1ChqOgwhGG+qPvpB+l/GnyXMTyI0Ber4+UF9LvarIfcRNykF1fH3Vn2vIoRp2GwVd4GAUCTl0g2wUATQMQEuYNOyatrGBPdBACFlm0mNLwIYT7MsPjAYWEJAAA==","assets/optimized/project-372-36175.webp":"data:image/webp;base64,UklGRqwBAABXRUJQVlA4IKABAABwCwCdASpAADIAPxF2tVKsJyUirhSaqYAiCWUAy2wL0e477ZEINNocVIXSqezhN0K1cwda48RjiGh2vZmBevum0N2qkV0fI8KgJfLUrIoPFPHB+xcog77a14RIMgZG0+jLhbKAAP7za1e+MvBjEPTCls598653efeVXEfaTVSg4aDfO9U7am1Ato0Z+7l6SGmZlY4Sh4LEq6ECnSGpanIkL6V3Sscudmykpmpsl5hgTXXDH5Tr6mKXRxXJOcXcaqMQlM9EPLtXGoiBOiqhjUh3QbR8YrubCuOuY4mAs227iOXhQgYtiFwhHAKNzoxlE+3Yi1KN9G+F2+MoR+rZafEq5/Q02Aqxn+ujWu/GmrjomklPUynBpRtGvRMoKrDrV6EMJp+qNsgZ+hAZsXx3mtfQR/1ji96Z7I7nE3Jo2pFVBouoaYRsIgmvJ6LWvfbwc/sMzAlJSAiKmfAOxNwd5u6MTtDgHNbOXMWp7iPg1JmKamtP/i0gaYZ7ExKVvTgZTgJlmKzmee7Cpg8Mma4pQmVky5rUZxO5RvTZNU/SxJBAAA==","assets/optimized/project-372-36177.webp":"data:image/webp;base64,UklGRvwAAABXRUJQVlA4IPAAAABwBwCdASpAACkAPxFyr1CsJqQisrbZmYAiCWMA1BiSdZWJdRXEky83HcTJlAPc/U+ZHa3wtkVOaF7vh8dxYrEyltsqeAD+8K0MgQhCXBAB8ZRVgBi6W+R5gsM0RTQmC9DUV4VMhgUVKbM9jYz6myImN66qXkuWZe+enxCT77I+CfaKR0yQfINOxPPR4isy9Qiz8zIjiEK57Yz7UV+FzlPYwMF0i2a8He/tYV9FAn9AOWwQU611g9CEcJeQ17/GTf/N/0xGsWsPyE4EA55YaJCkOEI8qIHIw/lqtcHauHz161sTUTKNEC/VgECXqDUcAAA=","assets/optimized/project-372-36179.webp":"data:image/webp;base64,UklGRkQBAABXRUJQVlA4IDgBAAAwCQCdASpAACUAPv1qrlArJiSit/VdUWAfiWQAw2P7k/qMx1D/0eaRAYSl6lF4D8p6nFVLmgf8z0Bpj5Ixo//xVvov7TUuenG/h011MVW2qQ4AAP7zK4lqC6gQAE4O8WPWAQqLP1PV7uJVd9XsNKC7MPHrWbYRb5yXKjlfZAT2NbIA+N452bzvy/rinUTr+e1BrkVTkXRkMN+ecwYopKhVHO7ZeO2RrnFWc/uMztAEt2bqMn8QFzNESYwwJ/PGbuNVS771K3xKX0/2pHryJckM+gD+KpuA0MMvaP589ffE3tbK47fzU2bD9MVXhBERMRgBTLFD6w6JH4WdtWpEnO7rsfalwivcz7vFOyN/TOnTFz7TkgLe7aFS2xnRMIZF0VFmmn3p2pFbZzQlE+4AbuQUZsNlkPSGAAA=","assets/optimized/project-372-36343.webp":"data:image/webp;base64,UklGRg4BAABXRUJQVlA4IAIBAACwCACdASpAADMAPw1uslAsJiSisfcbaYAhiUAaMqAAF75lLhV76fuiTA8Ubulkm8AMtJv+Jfrg61ZonjsEmzE1Eo+I2eSPyw1tISRQ4QAA/uKj5uCc5F0GRIsvVATPBltqpC2V96QrJtZv4WWZpBJHMDYZFXftu1I9mHpeiK3KCWGeGLCOwgyv7AZBKa6zFlDEpmQI29wfROX5JdQE4gQZVOE+rgU/Y71Od6ahdpg8yL34UhooTXaMQgKHf+YYD2rl0ksjlB8Bj9qUUoKE6efnsBJ/UKYtYtbAG/Q2uIKcZoqOs77awkAayxY9UgnN1Jfcr8XI9OuqOozKJOj/SuIAAAA=","assets/optimized/project-372-36383.webp":"data:image/webp;base64,UklGRnQCAABXRUJQVlA4IGgCAAAQDwCdASpAAGYAPxFytFIsJqUiqTIOYYAiCUAZyzk/tbaw3G72AFACPHCFa2GaIkxmHEB7Yd8hoqZrL2fQiXyWUYo8Vl4E5fb7YStU7bPSNaPyqZZGAJrg2KBhxujSPdzOr1h4dmWuME/outXMAYTYiFv9J82P53mGUkFoCjmtDgAA/srD3X82ZKgQhi/r7yh2GXl+fkD+HypxZdRfNwpTmmHx369fASIDGjAdgROP5XQM6T7ekBVdJsPyoLDPErwR99sL4b2tK3pFAaNWt1fKJXJ4KE6DGRnUTbHD+shxEZlREJnSADF2977caftwR/CB6A3qPeAHM+yFCKQ7v4uUXLoNniJnYoT+Yu6krvb6KZhOUCB8D3wxotvVWq9mI4zcEDVqjo8WZmQABC5XSGgpL/lD46ySZQ8oJEAtEAnGhoAYmVD/rxQzxnCe4MNM6dK/6rSudKmnzOoO1l6czR134mgPPWn6p60JBnV/hk06a4E5jqpsBP10DsQ66Ui/gUwDX8usD8LMTaZORJjZzs3qlRBDtRoBXoTlP4KB9yoGbhZknqgZ1KFQsLmQ8h6WtPdd5/FVIGFnWJQUAvtyW7V9f3BWzkPM4bHWS9FN6ZjKumj9S5yXyIiFKuPoNWI3kIeSIb1SwGG49IL5JdbeA3NfJvehjQuMgRpQqDOmdQmGvGA3ZoFa+N3DH3F06pnOdIZeGV8Yso9F7tmCKdAeNSaQvA7CBtxYtRH/Na9ZbZxzueLtO6zfhw4iFqimWZI2rlnYQLByo5uCFkD7T2fZH+CEwlJ3RbEt/otdQa7emXJhUfPAVuImoAAA","assets/optimized/project-372-36514.webp":"data:image/webp;base64,UklGRrgDAABXRUJQVlA4IKwDAAAwFACdASpAAG4APxF2rlIsJyQirJdNKYAiCWMA0HW6eff5jwJlxhKM1PyePqmekG/RKrcEjpFMHO11iwniPEEH2HMWoC2Qc8hLudl6JV/iQ1EY1431ASYtdjwaE7U4Lo04Ui6zk95LVc8V52dEW/3z2StmEGXQ/8jhON7fbRl48CGdMaZ7m4Wt4o5vLbm4x5xfP0aby2DVtyG1jtcPBaPOfnfqJmLq3WvfiAD++hBBerJtjr7LaY7zvP9hLChmVJM7welPjJ3J/TZ3VThJzzXyB/0X4Qzoq2H/lS6zk1uMhHn6DhO0A07V45Ot3L/RDPOXVueDEOY4YkqDKv0JJLMX535Z0r6mZNXOqAPDfjGzbdX52AJPKwn0YKLFwEGmtCQ08wg5Ytg/+PK16CsSYlwn/NcvugMmMs6C26l7AAcWBfuNwQAKT//y2s1TW4XPXvjtF4Nz37UWdXSwdhUZXyclXLINZdma8Dm2OIgZ73Qo9CgMyDDEQbPLwynoqAxO6YjFZ9AIW6rmzeNAZ/wOT0U+5Jtlq+ycjaHgRDnRVS7RyHtq8aAwjGPzWR+V7H3nInCUZqTw+MK1I09Vh8mBMnFkOKE3FRQuZ/BbzVit+iu8dZhEakW3N0KnmxL8grWcCh5HhSTfhRhoH7Kr2niuM8bvjnrA3osOMytLIi2sKY+ZDh6uSIiesWSybzTF36gJojJk8XWnkogAqGlJI964tqSVHrBFz+Yk9l/o0fSGy8NPeGaI1H2x5ZRWeoNGnUJZ8J+AeuxL69U4pQ0EoDrVSKuu6uNHSVuC4ZiZh/iRlYdRcNGwg0gtn0xUz6+qjDPjSZ6S6dEAV4SZ4O2k6KiBpmkgZtkYPxznts9B6cxl4Crko3b5R1x9OmmbkL7fxaUVdOMGrsFyVO+sYVvzT3Vk8hQoGGr8E5+am7sBDOFVqdimXyReSh+RtLvms0quFJVt7dN770+QQffFLAO6daZjiN0vtISsfEbMpoQldK1WIjplUH1yA12BXL27gqpMhyldbo9LfacncD0iE846pGBAoxjKCPMci9MXLVdxZzzKIJY2uQlIS5/IuygvzCgI3obpqyVF//b3t18v+JjW8HjRh5vHb4mZ5L411e5kS35XWYiefwE6O8QPM8Q/fJijhVgCAvIjRm2DMZ67INCAiIKXLFmhaUr81b+Q7/dotG4Al6nc1xjLO8APADwAsHUluuIXFqalF3OzowID0sUtXbrRGaZrteY7unq34ciYfAAA","assets/optimized/project-372-36713.webp":"data:image/webp;base64,UklGRiQCAABXRUJQVlA4IBgCAACQDwCdASpAAGsAPxF8sVIsKCUiqBbecYAiCWUA0cSppYe2EPWM8ALRmPOw5IEalVzrm3PxQCk9o9mZqV+cvxuNniOr8lzDTUXkYpeEzJIbVqzKDxqITkI+EJTgfFIzmVt79jkpY20JCZuuUSAdV33VY/fMlSmlub8jBnWOf6h/VvD8Wn+AAP76mPdzJ9rolzpOWxXkklG8wfZPMkLPDsgHi5X3mu6oxa2Gs4/JOVNDmTlD0temuXfEQe5n/hRzhWb6+/L3MsGRr4PZgOlJTGA+cECDLDV3HavKpK7Na2iQTW/FGuAAdxnq8AocNndpHtZxPTNr29AJaoug0+dZoYndt7Hg3SagvHKaDNvLo+nKA4l8T0+9OfpwFrZM4ym2mBXJ89DXmFAFRK5Ju04bl6nKUt9KU7Zl8AmTA6NFDbkm83P+gkdTl2O03w9tMcIr8TAPy3UZgw7ZiKpMQP2CCtjLRa0zRwnoWGmOHkIC/m4qu2E+7Rni9vUK7bznq7pTBEQqhL6v4ZtA/cPg6wXpRggXbU8dqmfY3MhiIF224Owxcw4eFnMn96nMlpNMEOV7JhCkqf+fZ4uB5pFo4XeaHgn0Ob36ZpbNAZWHXP5G0BiQ7e4CoDI6I3BgWgJ/SySL+xwgYTIbmna1BZOYHziiNp7wb+fLguf/j6CEN5JPqrCVNn55GdG897oz+oI1TbgQR1YXs7mt/AAAAA==","assets/optimized/project-372-36715.webp":"data:image/webp;base64,UklGRkgBAABXRUJQVlA4IDwBAADwCACdASpAABkAPxGCtlSsKSUjKBgKqYAiCWQAwowOhH1bVIQt2nocbdfpm/V4DCB1zwkAI6PuKzUU6Jukm4fhHIJfcye6HvPLqKFRRyAGQAD+4wNIJfD9JsoKWD0mY1vRbEJTvLPSIvl+6cmTtCUMKxkP4CXfK8tFwOXoSQHqkEyRs7npO5tU2jlk39tOh1xRoJDbWDcTvdkbE7TKzbXKZum6TEB1yYsspS55MdWS1KtoZfNZKuMDqGhaAyPGPX9xa84/Yj5C41v7BQbCW872GG1I/zAflFJ8UXyqxcOXrAALgfe/6FxzLa3SFK5gXyag0GFz8oBpIlProAgqqDmjAJeZKNo7mNSx5dLQ+GjXEUASSv5P1aici66MFUiCny9nMR9LRePMUZmBiYF/vDu9h0w2dXqPS7OAAAAA","assets/optimized/project-372-36723.webp":"data:image/webp;base64,UklGRhICAABXRUJQVlA4IAYCAADQCQCdASpAABkAPxGAuFYsJ6UjpApJgCIJbACdMoSAKTdzyjeyyf6EHS1I1sazom/B2g6A5xnTgd1ML8qguzFajkHczJpP41gFXFpQL/+7sy9rXlAZqMwA/rjg5vhIlu0C8KoDqdYUcdkbTbUGzm/95cwCY91m+n7ifpOVD6h0KdP/ni3+dhf8A+LAkVlTH5y2w/wcmK+GjKmWeC9OQtXsB67a/1k8u66sLx96INR8vOOzX0FJsmo7WCJg1dPfJp2DH9ePxKC1e24TDvzfzaeF7U773gX3el/SjhnPohiICWgn5OYUBgb80pwA1QVa9zlZJQwwq6k2w556TTJ+7dbnX+KNlUzu0Lzycs1qCFG18nM2bxmz9YnhHDzrruMqkBwP9iKGQkbc1+ofzC7IOFoPfwmv+XIi0FAlm36VP/xxUu42f7tp/z/x89J+3p9/+Df0quo4nQNaVskrDJMCG6y+qqk/680UHtNmudXrYww1E7pd9MX6EU7fDzZUGEBcg5vTR12/Y3o0qX6W5SevzuI0ow2wbuHpaCzg4X/clPXMWWZZXiAvflHrHsUJCkRske3+xsfft8nYEv+GBeU9fn/rH7qAlnWe+/wbh5Nv8dxkml2pS6qyi/DvRKee7c7GwySKBNTw4aN0b3UzW+WVn+nqsFtLunvCH3nPagX/hwbxwILguMAAAA==","assets/optimized/project-372-36725.webp":"data:image/webp;base64,UklGRs4CAABXRUJQVlA4IMICAAAwDwCdASpAAE0APxF2rlCsJ6QisBM9mYAiCUAZ1rhWOcufQkvDJB5wLu0UXbKpvdG+ZGSVG/KZeUkNIAI97B8KOIEsquzOPG3Sk0/3T/SUt8czW8G8I2Uvd/0O3A5zOXCKLI5ZsSEPoJHXyoWb0T264tGyk+49iFkjvham0pN1sW+AAP5cg7q8F/6HSBz28vZAaTztZybhmLTzMoLUszGoctI9HbnR4mNmKYDngLArHH0g4vJ1aCn3sJBpLQaxwPy5Do5xGvynw9CHEzCmuBJ9sneUmsDcuwuMMp7nhT90UBwvMk9PNNAKsMgP0IK0V2j/6/BwMAew3R9/oq91U/UMpD5Oa/mv0PWT/YHjrRIZOMOU3tTboI+iaNVJ3r4hKZaHHlUVKxeJOIoKfb3TXQcKnEA5OlxoZGszWPN4UwSHBTcrQdVE1hE4wA9UJrahgR9oUEo+kHIP6oc03OQGOmSozN9UimQQ30PtiKBL72cIFar4ckiTKwd3Wxm0R4jK0iR8Utn/Hv1HOJjECXIzpi8X7HIY58Q0eY+9CVzZM9ByXuZSicnpTlJZycdgiJbE23pm4PeaQ1fzQYYmhEzSfAnYITt6tKcM/Iu+PrVjTdHotzbb8TvYFx/VbQDig8giIz3qc8+Z3PkK7O5zh5ejJL9Cn+4gnE2KmD7GWu9HyJFyTLyt6FcltKmZqaDanRshKyUl95P4JdXEhZIoziPz8xuDJUIf8tndaCRIJ8KTTOC99zmlnz7xDm5mjk2gwRj3h659aGsiyE5q7NYsbVpo1TiFbpxrBU85lBapx+jcoFyIFBCX0CS0cfobHudlMfLDS3/6Ex6ChjFVX/DCT7uby63b0WFkv6FmPoevkaQB86B/n1w8AvxeVDKitea5dDp0VbIrIipJl3ho57j0iTVpO0kZRPpVj7AMye9pjmdk6XniAsAA","assets/optimized/project-372-36727.webp":"data:image/webp;base64,UklGRpYCAABXRUJQVlA4IIoCAABQDgCdASpAADQAPxF6r1KsJ6QirBVcyYAiCWYAwCB1THW2Tpme8jsAcAL91datxGAV3HCucIf+6SZW6o1PHUjoWyAuFwqNXpWKsEcCBAFKyVreX2LicL//P9dxePYW5TVD1ubEoD4PB3Zo15Wj2oS7VOvRyvm1Md7NMIAA/vDLKS/LvUkJ7DoPgUP+b69XrBoFm6QfQf45VEJ4WyFzMOZSjNWraQ3weK5FKEdhtVY5OEcHm62cydjuviaKuefZajO6V/CZjCroN+WnX9Lw5cgOMEwxb6w+udajMPuGrqOWMTGvgKbmt2T/KJDkR/ourRzVzSXgxPcM0lmxm1d2MavfVl4xxctAHSrwFzyz3IbvNlG8cG1M8ACbBjIWBkMTHhWTjga3rnzGxFW1y/yLUWP2Wa9dfmLO6cYqx/RrrswBpcbmKe4V90NBLGOz0/Q/0OScRYnW9iE6Hnd7wn1QpE021oantoWStB3Hp6HLpMu444zANmN06ctgIC8SqkM3kgH5TgrQ9jHHAoqHnT+ejWCiLD1hrQnHuB03fsfAT0arLLyd2I4eXlptg2vJjDBvZCmExv/61uvZ7m6XOLmz3zdd9PX2bgBzEwfUQdzFjFu9DhyBwMdw1sEhf6Sz45mLbdRinw2Rc2jyV4Z3xXVMSBfW6dmXCpCpHKjMlUnafgxrwqJT7H5+rLSGnnofLepqabveab5nDAQV6JGhC5esL60AoUsPdh5nvSN0BAnaEj7dEvdoa9Cnz/jMhSsY98mKBvvOaQAr2xSeqQjR6vd8UHUy9TVX51dRjmrpCpQdcrCon+Xy/Hkjr8msOqws+W1ZPzNH1cYg5XWjcU2wZbDhXWmScK94bsVbg4AAAA==","assets/optimized/project-372-36729.webp":"data:image/webp;base64,UklGRp4CAABXRUJQVlA4IJICAABwEACdASpAAFEAPxF2r1GsJyQirVmcAYAiCWwAtRvRDJjqh4wX7ZonnnJimuVPH0K7BOL/ya+V7p13rb5SS0BBKzp/3pLlP9ZVgHYKW6K0+wgaYOya9cx/hykVpOjG1Nmt1fzoQszQfvaDTvHD2263Sf7NtmzBx53tC/u/Ty6NwKSZGX3iYzvzbJQJoAD+2bHq6rjqZar/N98bN3/5xL/QL75OLiSNSarovRisjGJRl7icH+BnJv8XrxmA/o05NyEPXLse3jNtnIfXk9stgFvIHBiCV5mK2J/S5m7uguOcz9CHeoN5qutpu2flvwp3LVa6yz2ureI0Y3HhMf9u4YBFibB9rF/9ulFQhWGhgZjsyo885J7r8R1KTSbhXTjjTkVx6vLjEXXf4Jdp8PMMvqEC4gv2zs1SS1TPdy6j/7A3JuEraHjUIPa08cusSuu+SjxER3XDblfPQNlKkmCoJjYEb2qGgUo7zvPszTjUxKJQN4VsddInQ6FHdQ5Prwlps32J7Ne1ehE9807X2Cpz77Za9GqF+ysytV7m1VgAx7z4rFEP9sQxY7VJzSz4EPLzfvBjkv3dcqOcPWtTpsoTcaQOmnxfoBmkRC0PHbviEo+iZfVTvzUhliCOkIJEabAwOvYuK6qPfs1EP4tLPnA03n+5SIvXxGTmmH9sS9rbz9sr512fbecilWjfjLtNxdXY0YUHVL2yhKZii4y0j+zaOx1ktWrqLLxC/o1Pf3a+Y/sGwH8nSssGexNoR37rRa6Qt45d+80KdQhHVRbXCltosCkhmPHPcnnQ4T19zJWG/T2PTRULhQS5vKVZF89wo9UI82jIgat5F4m25yuIQW+4dyXs0DKg9aBTlW8ySxWsKrUvDAAA","assets/optimized/project-372-36741.webp":"data:image/webp;base64,UklGRsIDAABXRUJQVlA4ILYDAACwEwCdASpAAFEAPxF0r1AsJyQmsBasqYAiCWYAxRIrXfYR51NmGOHu1l06c5pD+9j2tpe8K5epDR9jenVhehVbcjU7H++aaCOe5jrcZv1a2+QRV0utrCmTTa56ToVtCSjDJIJJ3YjRkB6a3HqnH3ylBSn/u2XXTFBHTGbjXwDVYGC9EXIrFiC3LaN6c11o8e6Y/EdaPJRGzAH1pn/ncjqbEcpRauIAAPnTmyMqjFlrqUqOvFMYq6Sr4cwE0eoMHpb9Aqyhx0gr6tjXSxVTMn+JsKgwICMpM02zfgGiAsus21nwyBuseEKSxDrrHdwMW/7yhjEN9RSYPr47p+vpH7rEgvn9I/aigBmI6H0to9UKirJhsQJ5mkEl+axLADnP9J6Vlxw/+cVbKQYr7i2QTGOWpudpC32yMvLdcb7vAc5sa3Hlcpu85QnFJJ5h9s7Eg12JTbpg6gecmFxtehacdQaH3VkMNXS6N37+6Y/V9nCcqsxfKw44xawt5w9QIoPJVS9XaDAuKAhyBn98whFub6cTb7K5mtKROl9IikPwNX8Tsz1TgKMGS3QqG9R8xWsUuQqZSmuJRzeSUlBp5s8AHAM+HLbtjO+SDddNaEqh1gEZ32ozAkesxOQ2sIo5qRUi3Ao4McQY16Nh7OFTEdrdNf67d8wWQNQWZT8iPyA/q/xS/CfRaJe38cmKx09berIG8m6DFKMQgTivJfNItSVNyHgO4xCbDM8/kiUX/C+Hmq5lv8bRZdjNtOSnOlrnnZ/boFIx8rJMFKFyCHdPIBnqt6mVD0CVxZbI/8bE7/w0ajEhlZdoM0OhvceOnI8pekHao6sFg0DivCNrREjh7j8JRaPESYAGDezUErBelldhrEYFbXHG9ooenCxAYnE2keTyTbjKnnD+gcaUPMazPnS2w/9CP0dUUAT5sYeGlgAh9k+c6fnSO3MsMYX6c6n14DBRUtqXZT6KWSywbUy02/n4TjKcQ+42Chni5HluX6bQ80bAP7eXE5Z5KPGYyE6ozn4UrLmsoHPJmE9nbwToulWBlspOnAIrkC0pW7311B8RooBjYZFQLJxw2ndlGcEhLllco9sC8Gyx13eBRBehskQly99dZA/Qt62EcsNVsZdIcdmYGzt4JzxcGcJtBdb7e5uti1zToYH7YCWmnC3tCnwE5bccNo77Rhx64zT/hMzgddjCMW0qupzh+WYR0p2AZuqb3UFo3iHyvfCPP2FIGJ2ZvoxoIkBFXa1AkAOG5QkOo/I2NQwDMAAAAA==","assets/optimized/project-372-36855.webp":"data:image/webp;base64,UklGRrwAAABXRUJQVlA4ILAAAACQBQCdASpAADgAPxGIvFUsKaajKBv4qYAiCUAPCUCqySSt23stC3e+MU11Bw78FmtzcySOAAD+15X/155obo///iHPpW+S65ISnAZ/qpPR9bViwmTMICCnmV3u/Brm1RP+uWP+/X1zbTjBIhQFcaWPP3pB8QNC2Pq87joenBTQwQGp7J6rDI4ky3woNnLApKkum0fnJWlxzELHIpUp41HVev4j/fAd+GC9XVKXYAAAAA==","assets/optimized/project-372-36857.webp":"data:image/webp;base64,UklGRtIAAABXRUJQVlA4IMYAAAAQBgCdASpAABEAPxFurFCsJiQisBv6AYAiCUAYoXqEfgFLBjQiApBKTd/pBHWvXuU2aRXWn9uOwAAA/sPybULBvo8gdX1d85QOKSySzcRwWr1uaT9/cI+SKr/+RW/Tt+KV53iMWPsNjeENk02t3viiLmhtKfhsisIyFNj27WyywywitAzP7Q6VdBYIpeZPJ4Vwt1GEQv0bcwAcOAFsuJLKS/b+BATzo+MWaeWdPrulelumQhARt4rdKj4ObxTzcMeE2idAAAA=","assets/optimized/project-372-36861.webp":"data:image/webp;base64,UklGRqgCAABXRUJQVlA4IJwCAABwEACdASpAAFAAPxGAuFcsJ6UjpnQJgYAiCWgNwsV2rAHVWiE7hg5UmrtP9ADpcn2tXqiBmoEJIBu2EUsQ986EVCCHVpgdemtM+k4wHFlYhtM/xoBKDR0+adm7j8CiNW3ogN/d5VLQgqFoWcumEixBJcreiktBu66cZcB3D5jYyzsB/wqedEgD3j20AAD+6mIEMa6En88P+AhLZYi6U0u2QMyi3pZ/qcf+Tj/ycdn9RvVVBh3/Wf20+bR3Oy5ZL7Bx+Ui6QkLVNhdUxJrxxPC59woS8Jzj3499zRrrIj6/UjxbovCHHNoOPMu58+X8+CC9vzqN8fRsQzu+1zYhqEBjpUXD6IQ5epceyKdxwV5QY5DvSGK2cPyvAANcuF7MLXGKBBgK827sTb8+p7l6Q5WLvR12P7sL46/pzRxHLqhKo/WREwNLKQbgextmtW2nfUJoKkhbZCONei97LRjiNbadT3/HeDrLzrexa6i6hUU9jnbHWHcMa3zjfLmkez7TQpaqjBD916fNm5HR1l/XC0DMPWwRlzRlDkMgxg2mMXTXweKWxSfDIB7t5NJrIpfnaA3/nGa1FPagR3kgwOyybTmp008Z1qgbKoEDb0J09YbA6M+GC/Tk0Ng9dznxIz/VDRHpLi8j9IpEkkC74j8J8+8mZcuzNJtXcIzudZQOg29uLyuncnHDUGOQn+iPvIZsU2sVCTvcuyEFe6jX3bS0ZWifUjOL61oZ/DJaYdphBZDdCNT7DpRT5x8jPSDkJDjjJq8rfeaKknd69sxMvzh+nU/fiX3pkrBHvBqJZb6owzXWTrQDB7nkJBc1MT4iNXgzcR0N/UQWX6iP0sHq3mGRdV1mixpsN1drIGHlMDotM+e7QVhVttz0cuRALYAAAA==","assets/optimized/project-372-36862.webp":"data:image/webp;base64,UklGRvYBAABXRUJQVlA4IOoBAADwCwCdASpAAEAAPwFurFArJqQisfce2WAgCWIA1KWgNsBz/54Jy/jr6hOXuTF+6owZeyCsqVygq77mUgKkslIakGnEIwojW2MnPnrzMZkpQOA7VvsikZ/SdyvNuNqp4fmTRAm0eLJKAAD+89VsVTEUy0hThde/NuDgr+TuKXnqzvJqkISjB03xdzs2EN3z7a92dzvqHAi6Vz3Adpsb/QZoNPelonYRECyGOSdiy8w577t7aemq3Qe73tz4yfGpuSuhFb2MbSS3M57kkmmbecjNJgQv/r6nxGSkQKkY5CGdbte8sBIl9tMOO57uuWf49SAnE6paGoYHQPdXsjuJB8NcN6lY7fm1NqQN89f8323rszeyN081BHDNyQQaM70pJYUUXS39tKfamQ+BzgnSozX8QYxk7hKMtxLYjbiuw+7jaLRUqAn39bSLVhH8A2JonpkO50reOajIH2DPVavXoHthhLylp/yoNxgisD0400AxA8tRxGnwbIWPfvDWjb/JojiEO3YTYu/s6DMqEorm4uw9EE/FM1bn3AtotLZ5fPhM6Ah2ZlHd88XdH4V8KN/NvONXv4IpxPKNV/MixSpMhG4HsHy1NAIW6zHhkGrGUJIQF9aULGU3r+KKE4X9KtlK6dQFgbfYleEKwYAA","assets/optimized/project-video-acquiring.webp":"data:image/webp;base64,UklGRuwBAABXRUJQVlA4IOABAADQDACdASpAAEAAPxF6sFGsKCSirBVdmYAiCWwA0qRMhdAOPd7a3ngDwBllMHyNUG/5oFq4L0mS7K/8FPwYyogW/E5jo5mup55F7rcA5tuz/VtE+p3pF6TJ1CIRisKgZZnTYjB7hpoMLZQjU10ETgAA/vYARdIEOaHz948KfiDTyHieCeUXLo4azFx2D0o+mkyEuB3lNTD4ImNP8N0n939I4+GC3pTP0h68L4COTUwHLFM1OZee+TpwR2JR+O1fDq7WNqzZpHrTQ/JQzXMpupomQ3g6gx0CesHe/sWCZp+1/TOMAAhYtb5l0Elr5gnTrFY1tvv4SvhGSy+4MmHi4aTGJviHfBrkTun3WCnqibcPu8I0nSnOQGJk10WxAkAggBPae97K0FiKg633FdzJjqJ7psbbzFy7PtVsT6I1DlNfrh37XmW0WPqO2xyqH+3wKOpUSatKqj+WfhjBRy/v24wArZAhXynrtVn0lh0TyhM9W/RifS9GSmJpH7XxyIjnOXXXkxRocVxkBvxUhuJhp8+k4Xv8IjhS19UZPuF8ojH4QKIBXsQAfbLlSfz0EXf/9jEIXTRjUziJu1rSm0yOkYWZdoNrt7ReaQIU/FTdllQM6PAqoVECEOBEj8/GFUEAAAA=","assets/optimized/project-video-folder.webp":"data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAQBQCdASpAAEAAPxGIuVYsKiWjphqpOYAiCWkAAEDik9f64jFfsaNlvoIyPOmVAVoAAP7wC068SDSh+tzdz98CzQI3dmHVJzxQCpmAAAA=","assets/optimized/project-video-keychain.webp":"data:image/webp;base64,UklGRsoBAABXRUJQVlA4IL4BAAAwCwCdASpAAD8APxF+slKsKKSiqBv9UYAiCWYAzaWdyZ7c+7Od5lb+Wb2waqkYEEdbG6g8m7jN+f5zSaPnrQHpeM8Xtd39D8sabp0MPIY1lyk6zBzgARs4H7d7W4RvCYYkAAD+8wSzyFWLy7nKTgT65/3ge4teqtW+EI+CRdtP/At2ZDNUej1XCmiRgXW828NmQ1LnB9k/+I2vgYYQuOv1wRueb8xsnSaWLhF1C50LfrWRCToWzU2ZM6kyNHTgxO+wW3jG6ZiOEeGt/7FbI2iwV5Gz2Yw/ZszU3t23LmO3ALN4pTAVAUJa6QVp1JoUneLjGvlsjHpuUZIBEb5lNmjUPi+lIb0wO8G16/A+SQ6Od9X0f+Ys80l3gOKNa97Em/wkxoFK6f8ymTNyU+V6gIzQDPZb+J4QdsBMcIMpdB1Wb65mbmAV+1TcgFs50jvXiR0DhERBYGtnrOwh5K8o4Y87uEoxIsOp7Q91iY4lU2P+CVHNYjS9QMPuds3fb0vYlEOzWFw5D8e5eci8IEQhjgOMeJUFWT4xHZDerYSus4xuzP6eLdPc4/u3Nwda1HM8dJNseIMAylz3rgPpeiQAAA==","assets/optimized/project-video-navigation.webp":"data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAABwBgCdASpAABgAPxF0s1CsJqSisBgKAYAiCWgAxNg0b+GQ+Yres7QzHxA5gMJgoOM9pgU2EkVSPx+fSdAA/vVl8+gXvI1Ox9zGWdL/UbUkP+FOOKIJQ3bZn6wX1j26cuWR3ULxoJDv9OoA0LAOfiaOXu4kcNUwF3GRKIMkbz5NaAAA","assets/optimized/case-praxium@mobile.webp":"data:image/webp;base64,UklGRsADAABXRUJQVlA4ILQDAADwEwCdASpAAGgAPxF6s1OsJ6Siq3M8AYAiCWUAznr2vluCLGu3Ny3NMxNT8vkZMIlYupZygFvyblMXx21JaHQId9fhG18m2PLaY7PGgLd8IBv5d5E/NDvXJnLIYP3RgNUdtbd65kUjHdHq3duSUNsghZwFWuzKsVanuozo7xuN2s4W+IwAzL5XNf9HhOAKycx+WsmhjWSOIOyGYZe1qi3WhpwTfa4NdgAA/vd4VFODu4i1JgjxGgME58K72kj2NtEIt/ifBCrnuTg/H0F4UnBWOd2VzaUNFkLsrnPJWsNogjtF4yQR+WyQvWT3FjUzwllo32HX3vwYhySQSNRU/iYbfOP+qU3eUwEr0sC/HKvD8zXm1T+/7eIwvROQz1xm5/vaiEp75WwQjJbLfQzghW2n6iScYXOAoxU1aBhBCs4nSeWD4mkYCoytRVi+vJ2KzU9iHLAw6shU7LnYjlAZLTUOPN8hR+5fOymvbU1HneHalo+yRZ9Vd1ViOlvqUGtnK9rFMeXKhREof3Te85iFsYY+gs/MZC3UdA7evxJVqrfGyCwnLSuz+oee/FXrHp3mP0wVn58HvtWdu1Gdmm+6o26/hVbOznWB7C80NgMBgWoHjwSy/awDTu1TB+n7bpgDQFuuNPmziayhWqELUuZwiwvz50V8K7f0flqro1luG3duHr4rXXK4F98TBGx6RT+e982FW+deccr7gv+7x/g65KJqYZ8ErrH8ej/ftZ1ycZSLY6guyjHC+9ggvmI2TKIyItwN8+gJ9gKmYxJS9TO3dPMNmTRlkWrBABFFniGccpVVJKPz0p+tAIsXfnbDQRYdBxES4GMwUZtoR/qVDZZ09eqZ8LkkITdR9u64cbqOEkrxvgLOJ6Le1bT40lelURHIkd0xSnKRTVp8CxsZ7lSOt3t6ZRrLMCTfGPCh7MXU4cs9THXZeSuUTqUXf+eQxxxq7XCzPQbWPTuo5upiWZBKGh9TrIPygJzmMvq030AvvLb/B7b5n9MrmxxAY/43XHGmC3IC47FgztocWXT/OW5XBkXh4ovWqRcLTVkN3ersdUjqvUuQvFDmlEPlURbARd5m0wcCNdXElg6Cu0vAV7u2J/lPHHB3SX7U5uklvhwj3EC/ZY3sEj4vQ/kU7CrjTH0z4LTghur9wp7tzr0Ez/MmLeAnaIAjGJZMAYFW44BIUuZnd0vsR4xNThKZ4Z/+Q/c5BHZpcpB+Cg6Qbm3k85MVKNApE0zGh2T6eN6Vhy7K/JcNcK5AAAA=","assets/optimized/case-sms-man@mobile.webp":"data:image/webp;base64,UklGRtwDAABXRUJQVlA4INADAAAQFQCdASpAAGgAPxF8s1QsJ6QjKTYMAYAiCWwAsskAOhw8Pm8Eam5z1WmiOxB7ZzYwgki8kAAWyPoOGniGzaXXF9jlOwjRUDin16CZQR/WGfuOFpeEwFsHfelQ4uOmk7jG8QLSl35JDN+pzFdnqoB2IrZh9yayWJrlsX1FnHGMz1PkVIKGixbCLiA3Ng93NfJPxkQyRlmrfvWy0bXfuLNeJcxz5cO+e6UG6n2aJyT/mEAA/tiVr97vWGQbixAX65vfhtbP4ILiDnT9GxXiNKZfO6jb4X57kiqcBy7XL2Gic8HDIydkkMGgwfDvS4qD3YOIKcGj8A1FCrMWP3JGtEeR9mELuV9dyuvmEfjZe6kCx2MGJuNLF60fCvNzK/Yh++loEALMV7pyYqF/HBSXR5Lg2PMhs7ZBQp6k2FAu5it895nWfWtaH5LlTKWg7aP9slGYCVIjHV8w6JcJ4L9mfrBm9+vq2udQBeTsPM4suH777+NXtZPP5Ofc/grBpqKuIHQU29iV9fzcihNQaz1VT6IvVNKRpp4n1daIEAxNUOjLZFF497ODAHJLeLF2aIwW5VUwiUS9v9wxtHorC/38lmJDxne4FNVCQSm/FCqV5zmGL+HH6xJce07L0fw8cKDUxQlZVUdcTIV5hVaVX7kUnJU75rGqE4KstzRpMOoMzF9s+VkW8tLk3xX6Xtf95i0Ld/rjxK1LluHq9Wejs4P3CI/SGDlgdJQBRjHm2cL/otwoP3BQpNTVJea6Tjdypsgae44/t8juFclxeWxhVJqC5smiizEqWR2URQalrSLQKsgpjdloCezqFFnv15FlyTuK1UIcuwSfNMk6zsCmzDhSSsG40D4pWT/9PVOrIwfMw90rPsxjK0dAAlfIV3kSKzIpyU5ciH4izldIvj+zE+56dKpBMrMdj0BDQEkFG0W5+hb4JQFo7MWLP73g10kixj6BM3wQfBeMZRTilUXXKIa8N2YWRs341YiCiHXdSaeHopRlJwLYvSMzHjyvFQhbLftAA1RrLN+LEvQEP0/7uOLemnpmWep8MNfQYYmTTDOrNG+YC32jDZIsBwLfcCozZJIcUk37gxFW6wAzKr1TgFtlv8O4LqP9h1M10UIIufk3A4VAcjxlKoEf/nmRmQMNsOaXkV0Z3g7rM3x9VkqoU8I+G9801apVnZpudmD/M1PghyWbuCgKqU/PccXCKbPgFAlwL6au0BqyelJbGoMHpzmcce1wt7kSq8faoyHm3X3F+ujplS5QRXiro3KvrqppiRHbrKpHgZMqFXFDCqt6yNpUC4AA","assets/optimized/case-vtb-pay@mobile.webp":"data:image/webp;base64,UklGRuQCAABXRUJQVlA4INgCAADwEACdASpAAGgAPxF2s1MsJqSiqTgNMYAiCUAY5QN5T9n6JCYizMtZeJiua0RXLfj5Ulb+TSj6fgCk7po9ssjCeVr1QRKR02/tfoxonm+WGPTEb0RjK2t3bJI0TT03RVXJ/WUO2wjHbxaHXNfzv9m16EQyuWUX7DsR8qLBmp5WClXqU44YfzNvYnv6ThO6HTAA/u52MBb2r9ku+7MTe6T/riU3/4IL9Dnqc5vDssX5Va5nZsBKRhazzDfh4Yko8BAtqEs9P/nrKUxdp39M9cZ4/n/DFN46LjaHnXXrYLrmvxuilyekiRXNhH3IKSaf+j06uWa2mnsI/LS+rQaFQ3kvb0W0D3trBllK59WpkjtIFbsOIvivlzelJlBapSzzCSPQTz2qE7ouUnL8mLY2EHSKgTvQepylz40kv9F7v22T+jlr6+pb8sOqmAhevXeuDm9IZhLEuUqmvorx3ZCW48+hvA3lLLXoL1xhyfEpQAPuTq27Pd6FOEBNUgPY9mjLjiVrly4gBi4g1sK7GjWXSy7iPgaF88YTM0rANkNYwz2gN+AphQ0hOO7x7GGYCJ/PeeyqR+W+0BTGd9rbtC79U4XYfvS1m5r8uE0etZMy+6PylR5OPc6OMQPlKQn3A4uPj8bvzUPfVxcq9q8egGL3UZEGqsmIzNM6gY0A2pM+hisZlRUJgnIKTr1s5lRMGdN8alUjAnFlIMM6vVfdYRfMHPZPLbsLmEDlxhXIl5jrfQuFpHG5tcja4eNJWvEq7J5p9MgEc0jidobsEKFDySMWzD9HvnixV0K5u1ROTGXv8fJbVmadKzu5g5U5l165nbNRj5JYvUnCiT3Pz6jGwYwU6QCPbh2t2/GAGxio7nIA/994toDzsaxON+SEgKcxi3l9+uj1s+m+Np9wEzX8CZw5hczxo/DnnJJM0fVLQbP8NisFZIKd7MsO4ICC6fYr/yXR7GpE3PusOe2AAA==","assets/optimized/case-vtb-services@mobile.webp":"data:image/webp;base64,UklGRg4CAABXRUJQVlA4IAICAACwDACdASpAAGgAPxF2tlUsJrYkKTQLMsAiCUAYZZCyQVT6X/PENUH3/qqytk2tN7RMyNr/PwN4wlQ9vDp3eStaSQ3FxoUhhlNcB8dzF2LoJVban1IP7gfYiCZe/vyH4a7iKw6LhXIpnPCUPdMywAD+7wzYP+q/in2xjwKunMhCQl6RmCOscg+JClYc+E0LtoRAoC+bzIENwRtsijgCARaL7xnL4XTNT6w1INJu9sEufW06Pz3UyKozKYiM1xaqaviP3H+Bmha1MiqM1S+q8xK136sAZhDIlE/FIYJUBaibreYnmL9gTMhdQ87JOC5EwvA+mzZbSJ2cFU6S24GcpzsLGsUezPV4WOnU6E02g6gFvVMp9DKvfONlmyb6KZn4GFkpPyepmF+ojqNcvqRtnkXNYFLVEgUjXhaHAjG0fGK+owEP+8K3oDHW4AEzZbT14xyzAWB0bIQoCFhGinZUG046Kz4V4YFwq44eIMmgfaIYYFANCbRemeutpFIQ5ruw23zYfhMTJ08HFrRPVuhcVG1l4pDzAeJe3TbA62EKHpqd59yEou8awWYCYTfaz+WFKq9uL35hNypAjJGqky/R1ZFU2ocZfI5PyjheX/6LFJKA8HLrm11otiPETeG2v7Dzc/yJ7vXcUYGUIz0gN4FnlxEP07hAzujSM0A/1axpeiRcUAAA","assets/optimized/about-b354a@960.webp":"data:image/webp;base64,UklGRvYCAABXRUJQVlA4IOoCAAAwEACdASpAAFUAPxF4sVEsJ6SirBqsQYAiCWIAuzQgjbRHY7Lb0ddEmFA1J/rbP09qnCcJoD+0d9rXhRBADJTjD7C2//MolqHyAqk8GGqqajOGqxfEdTRz9VbduAgi/qN1YkwI3X+UoFCI2N5SNoewk4iZdyfd5fJxzUAaDafBnjZnM8+lScq8x8AA2hmGz+bPHVBZ6oov1K34Yxj/29s6B8HyOeBPf3GSxmuzrzgkhHaFD3dGzsZ7zRrfdRgeFBT+vzwu+t2PUoGmbtuzzGGn/FdLUTDDGPBFdMEyWgJnAGwh97hHY9vL2J3bdbcZnIiXJosZ5bGoRgi5pTqEDdrGGiBgg03mo4jGrgobg+vImBPz3YEOP9J5xO7VGMpV1R115O3t2SZnrZY/Tj8FYc6CQXh7Xg5lIuexE+X6MgxIRE9PPD+eFTdIy9pp42Ihq7N6KtNqFOFPf1zJhYG2SlcgbX7LEqyVpbXRCcv3zKBD9cckZUT6+D7z4W3cEiKm8u/Jb8c6CYNmzkZXcmAFFBAE2Q1fQclCJsgKtS1+IpF1cDJIj0w5ACukdNzi70t50oxeiHkDU4E3k+Vj1+gNcTm1LBn4Ci/EeCJY03cpgrN2GLQfMMJKowDiW/14NQw+pQJV1qGm1RHDcuAZamWkKiGHlN3PQIhhxI/qQ3eZhaZC0UtbwvmHDK/J/4rgTgO7kusIaf73tNxOLdtpKOd3zpuKYxqhmBgsEJFdk20wFXA0ajkUxveAf1HX6WyehWZSnZIiWwJSCJL6zJ1YwOYQ4FskeA8/sxDj3OluuvQ0V1E/093ievEzid6lh68RsdVkcdko+LVL0tXP3zEY6APxKUtoGydf5h2/P/C2c2Eqi+7sZpAIVfB6ATgN8BTM9mxXc6GCkGeTPccBHuOjy4/U+bSWSwLkiCxv2dOt6h/lpZyw7n4GqVrdEDac8yO2P+5YmdacFJoPlW6ujLKTJv1XPrtS3FXnf3KE3uAAAA==","assets/optimized/about-bae5e@896.webp":"data:image/webp;base64,UklGRpoFAABXRUJQVlA4WAoAAAAQAAAAPwAAVQAAQUxQSFADAAABoEVtmyFJ+v4/osfG2rZt27aubNu2bdu2bdu2tyoi/u8ip6oyIhe3ETEB+L8rAmmQqAMEKk0RAMNGjhoAqDRC4aY++Z07Dj1nrj5AGqBY+d7vWf3jzdPHQIpTTPMxGVJKieQTY6CFiQx8jW1j1VKbj42GlOWwNgO7bPPKqXxZirstdmMpLgItSDHjkn/RuqFxIbiiFniaxq6jbVKUYLLvmLpLLG3k29adsT0LtCAITmR3kU+ooCgd8DJTN4GnwRcFj60ZujuiNCdzm3W3b3Fugt9pXe3k+5XkHIAXmTqZtaYA1BUiqsCEm17ynVknsnXXLlMD6qQAAbDI5T+yxj9vXBIlCvrmvZVkDNZDDCSvW75PJZNizCukRWONFo28Fi6PuL7rGCNrj4HrQ7M4HME2c1pqTw/NIPBfpZSFgYfDZ3BYNCTmjXY7XAaPgxhy8WFolrOyJb4IyXJhtsjHoFkuyBZ4NVwGh1sZs50GnwHyOlO2Q3MoJvqdxhhrs8q+eaaIISTWHhmtnQ7PAdUnSF5+B60eGhm4VR5MfvbVawHXMNZg7YNmvfAvPjxMJMO4+8m5DL0Zv1NgqrkAQVb1zjnczVjHrxOqByDIr7i/jsRPB0FUBQV6nMbQW+Ce8CjUYT3GOrYtafU6UloerhSPdWow/jAMUorD4kw1/DpBSSvV8tOYchST/Unr7ccR5QjG/Nxb5N2iKGf0T70FHg9f0KAvmHo7rKgBn9WxbVHuvU5m40pcFK4YCF7o1NH4yyhIOYr7U6wkPvM1jWTkvVCU63AP25Vgh9zNRDJwd/iCVFb4hIFk5HpnM5A0LgxXEAQTPMfEyJtwaMX42/iQkuAx+nZLKcwvZ1QS39bCoMBDtNaUuLkSeR8UhffJ+TH8OBqPM5KB58GX5rEVeS36vcdUOaQ8kUHn3Tg5xvxIq2xbXsdpQiVyrSaIcx7z0kiazQEtD4Birkril4MgjRCM9xuNgZfDoZGKmVpmTFy6KR67MzDZqypoygkMjDwcviEOq6WU+P4QkYbAYX+2+BAUjZFZmfj1IEhTBBP+ymRzQJsz+Cu2uBN8cwZ+xhaPadKAz9iyw5sDwXPxT27QII8Dya9HiDRGZMiZN8wLRcMFTRbnFP9lAVZQOCAkAgAAkAwAnQEqQABWAD8RgLlXLCelo6V0CgGAIgljANNsEkyJm49BP+JdC7n5/lP2AV+sHHylIAs1a74IOp0kJ9R/G77VI+MYFMvFHCjX43U1MdmlJ/7bYxzK4spJj+L8HtaqwmSVtAfmT/sF0IBagAD+9YTexPQP69pdYFIGH4fkPTzHe4ZGLcGRCt5vpkTngTc03CNBP0Mkx1UvtVrvq5Hv9uSwdylRW/R8xxa0FZA35+QMyrAbvajDqqZm4sNYg2cRVKu1W37uNxm7HrrJwdIfOFGqONgnfss+f63qYlPPxQzLTYsmviCbtSbMM2vWeBN3wVKWeTvUB10nsWS/I+m6DJjq3gBIovb+lYKzrte8FwfXKV8039+gLnWSd5+hzPk5QJqFYsUjedDHC+efVvVQBc3Eobkom9U3ZLc8HS5CQG+1JwHi98JO4YCHBTEV8a6xdALWgDUJrEjxazhvSfpPnuXnivHDq9hgANKN5681KVENDRYJilaIw37M4NIQXU7gIZvh/sG6q2+GHNkLCXzM8XfcyGp/YUDvnM1PIusnUtfhW8IfnrIpFKqErggdjLPtkkW0q0krCTAJKRBCf4PvJr9/+6zuHefuxuc64Piv7L7Es99gMxz7x30ehWH0oJRaCpmJABdewhDDZVHyocFNWyo4a/ZJ9CMIlpxWysAb3AUqiiPIc988g8150YWA6y9+t8+8ZFiIGKy0vmbag+chCngAAAA="};

// portfolio:asset-hashes:start
window.PORTFOLIO_ASSET_HASHES = {"assets/optimized/about-60ce3.webp":"387dd1bdae86","assets/optimized/about-b354a@960.webp":"bb9d4c8ddae9","assets/optimized/about-bae5e@896.webp":"de3ce2421f5d","assets/optimized/about-photo-judy@2x.webp":"8dbce68ef4f3","assets/optimized/about-photo-judy@4x.webp":"1256e266d5cd","assets/optimized/about-photo-street@2x.webp":"0050f840d2eb","assets/optimized/about-photo-street@4x.webp":"b6bc4d8f8b0b","assets/optimized/about-photo-talk@2x.webp":"0fd7cacfe68d","assets/optimized/about-photo-talk@4x.webp":"67d8e931b670","assets/optimized/case-praxium@2x.webp":"e0a3b3a64fee","assets/optimized/case-praxium@mobile.webp":"e8da4015f3c5","assets/optimized/case-sms-man@2x.webp":"d7d2c51b2e3e","assets/optimized/case-sms-man@mobile.webp":"bbf5509aa1af","assets/optimized/case-vtb-pay@2x.webp":"e9c11b75e051","assets/optimized/case-vtb-pay@mobile.webp":"faba377305d0","assets/optimized/case-vtb-services@2x.webp":"cc9503dfe576","assets/optimized/case-vtb-services@mobile.webp":"20ada6ec88e5","assets/optimized/geist-400.woff2":"abb4c4e12e5a","assets/optimized/geist-500.woff2":"96ea30318bb4","assets/optimized/geist-600.woff2":"6446a9eb78b9","assets/optimized/geist-700.woff2":"5fe951085cce","assets/optimized/geist-900.woff2":"671b9d38cf7c","assets/optimized/golos-black.woff2":"af68c0653c53","assets/optimized/golos-regular.woff2":"4e6759c40289","assets/optimized/hero-desktop.mp4":"8b66661cc081","assets/optimized/hero-mobile.mp4":"b6a77365f89b","assets/optimized/hero@2x.avif":"82ee5974e156","assets/optimized/hero@2x.webp":"44edbe528ad0","assets/optimized/project-372-36173.webp":"02a42444ce5f","assets/optimized/project-372-36175.webp":"80752a6dd9d8","assets/optimized/project-372-36177.webp":"63455f99c5b2","assets/optimized/project-372-36179.webp":"65771c8f8510","assets/optimized/project-372-36343.webp":"378164c57fc8","assets/optimized/project-372-36343@4x.webp":"a45e778c3347","assets/optimized/project-372-36383.webp":"f88a9993975a","assets/optimized/project-372-36383@4x.webp":"4b58ef8bb65a","assets/optimized/project-372-36514.webp":"9973b0b1adb1","assets/optimized/project-372-36514@4x.webp":"9a638f4169cf","assets/optimized/project-372-36713.webp":"e6335972570d","assets/optimized/project-372-36713@4x.webp":"a0e6ad35cbb5","assets/optimized/project-372-36715.webp":"a4b9bedd649a","assets/optimized/project-372-36723.webp":"e0f35803585b","assets/optimized/project-372-36725.webp":"d8daed5ae60d","assets/optimized/project-372-36725@4x.webp":"086ec1cdd460","assets/optimized/project-372-36727.webp":"99a74f1ef4ad","assets/optimized/project-372-36727@4x.webp":"9e7ae7076c53","assets/optimized/project-372-36729.webp":"917a3d4e93bd","assets/optimized/project-372-36729@4x.webp":"f95417d8222a","assets/optimized/project-372-36741.webp":"35fbbb05943c","assets/optimized/project-372-36741@4x.webp":"ca1d36ebeaa1","assets/optimized/project-372-36855.webp":"26c6af5268f8","assets/optimized/project-372-36855@4x.webp":"ea0f4b46cdc4","assets/optimized/project-372-36857.webp":"11d77552133a","assets/optimized/project-372-36857@4x.webp":"ab6486996223","assets/optimized/project-372-36861.webp":"535560ec9c2c","assets/optimized/project-372-36861@4x.webp":"1cfc9fa86ecd","assets/optimized/project-372-36862.webp":"493924615180","assets/optimized/project-372-36862@4x.webp":"2b3bc952a450","assets/optimized/project-video-acquiring.webp":"fd96c1fb74ed","assets/optimized/project-video-folder.webp":"17e40c087244","assets/optimized/project-video-keychain.webp":"438402801e71","assets/optimized/project-video-navigation.webp":"ae14d51d1462"};
// portfolio:asset-hashes:end
;

/* media-loader.js */
/* Explicit image scheduling: the first screen owns the initial connection. */
(function () {
  'use strict';
  const previews = window.PORTFOLIO_PREVIEWS || {};
  const blank = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
  const records = new WeakMap();
  const pending = [];
  let active = 0;
  let unlocked = !['', '#me'].includes(location.hash);
  let caseNear = false;
  let caseFront = 0;
  let casesAllowed = !/^#(?:projects|about|contact)$/.test(location.hash);
  let wasBelowCases = false;
  let cases = [];
  let watchedCases = null;
  const pathOf = value => String(value || '').split('?')[0];
  function asset(value) {
    const path = pathOf(value);
    const hash = window.PORTFOLIO_ASSET_HASHES?.[path];
    return hash ? path + '?v=' + hash : value;
  }
  const sourceSet = value => String(value || '').split(',').map(candidate => {
    const [url, descriptor] = candidate.trim().split(/\s+/);
    return asset(url) + (descriptor ? ' ' + descriptor : '');
  }).join(', ');

  function deferImage(image, src, srcset) {
    image.dataset.src = asset(src);
    if (srcset) image.dataset.srcset = sourceSet(srcset);
    image.src = previews[pathOf(src)] || blank;
    image.dataset.mediaState = 'preview';
  }

  function finish(record, success) {
    const image = record.image;
    if (!record.loading) return;
    record.loading = false;
    record.done = true;
    image.dataset.mediaState = success ? 'ready' : 'error';
    if (success) {
      image.removeAttribute('data-src');
      image.removeAttribute('data-srcset');
      image.dispatchEvent(new Event('portfolio:imageready'));
    } else {
      image.closest('picture')?.querySelectorAll('source').forEach(source => source.removeAttribute('srcset'));
      image.removeAttribute('srcset');
      image.src = record.preview;
    }
    active -= 1;
    drain();
  }

  function start(record) {
    record.queued = false;
    if (record.done || record.loading) return;
    const image = record.image;
    record.loading = true;
    image.dataset.mediaState = 'loading';
    active += 1;
    image.loading = 'eager';
    image.decoding = 'async';
    image.fetchPriority = record.priority === 0 ? 'auto' : 'low';
    image.closest('picture')?.querySelectorAll('source[data-srcset]').forEach(source => {
      source.srcset = sourceSet(source.dataset.srcset);
    });
    if (image.dataset.srcset) image.srcset = sourceSet(image.dataset.srcset);
    image.src = asset(image.dataset.src);
  }

  function drain() {
    if (!unlocked) return;
    pending.sort((a, b) => a.priority - b.priority);
    while (active < 2 && pending.length) {
      const record = pending.shift();
      const index = cases.indexOf(record.image);
      if (index >= 0 && (!caseNear || (index !== caseFront && index !== caseFront + 1))) {
        record.queued = false;
        continue;
      }
      start(record);
    }
  }

  function register(image) {
    if (records.has(image)) return records.get(image);
    const record = { image, preview: image.getAttribute('src') || blank,
      queued: false, loading: false, done: false, priority: 1 };
    records.set(image, record);
    image.addEventListener('load', () => {
      if (!record.loading || image.currentSrc.startsWith('data:')) return;
      // Video layers may now use this complete image as their permanent fallback.
      finish(record, true);
    });
    image.addEventListener('error', () => finish(record, false));
    return record;
  }

  function request(image, priority = 1) {
    if (!image?.dataset.src) return;
    const record = register(image);
    record.priority = Math.min(record.priority, priority);
    if (record.done || record.loading || record.queued) return;
    record.queued = true;
    pending.push(record);
    drain();
  }

  const proximity = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const rect = entry.boundingClientRect;
      request(entry.target, rect.top < innerHeight && rect.bottom > 0 ? 0 : 1);
      proximity.unobserve(entry.target);
    });
  }, { rootMargin: '600px 0px', threshold: 0 });
  const caseProximity = new IntersectionObserver(entries => {
    caseNear = entries.some(entry => entry.isIntersecting);
    prepareCases(caseFront);
  }, { rootMargin: '600px 0px', threshold: 0 });

  function prepareCases(front) {
    caseFront = Math.max(0, Number(front) || 0);
    if (!casesAllowed || !caseNear || caseFront >= cases.length) return;
    request(cases[caseFront], 0);
    request(cases[caseFront + 1], 1);
  }

  function observe(root = document) {
    root.querySelectorAll('img[data-src]').forEach(image => {
      if (image.closest('.case-card') || records.has(image)) return;
      register(image);
      proximity.observe(image);
    });
    const section = document.getElementById('cases');
    if (section && section !== watchedCases) {
      watchedCases = section;
      wasBelowCases = wasBelowCases || section.getBoundingClientRect().bottom <= 0;
      cases = [...section.querySelectorAll('.case-card img[data-src]')];
      cases.forEach(register);
      caseProximity.observe(section);
    }
  }

  function unlock() {
    if (unlocked) { drain(); return; }
    unlocked = true;
    drain();
  }
  function onScroll() {
    const hero = document.querySelector('.hero');
    if (hero && scrollY >= hero.offsetHeight * .6) unlock();
    if (watchedCases) {
      const bottom = watchedCases.getBoundingClientRect().bottom;
      if (bottom <= 0) wasBelowCases = true;
      else if (wasBelowCases && !casesAllowed) { casesAllowed = true; prepareCases(caseFront); }
    }
  }
  const ready = window.PORTFOLIO_INTRO_READY;
  if (ready) ready.then(unlock);
  else {
    const poster = document.querySelector('.hero-poster');
    const open = () => requestAnimationFrame(() => requestAnimationFrame(unlock));
    if (!poster || poster.complete) open();
    else { poster.addEventListener('load', open, { once: true }); poster.addEventListener('error', open, { once: true }); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('hashchange', () => { if (!['', '#me'].includes(location.hash)) unlock(); });
  document.addEventListener('click', event => {
    if (event.target.closest?.('.bottom-nav a')?.hash === '#cases') {
      casesAllowed = true;
      prepareCases(caseFront);
    }
  });

  // Rewrites markup before insertion, so the parser never starts distant requests.
  function markup(html) {
    return html.replace(/<img\b[^>]*>/g, tag => {
      const match = tag.match(/\bsrc="([^"]+)"/);
      if (!match || !/\.(?:png|jpe?g|webp)(?:\?|$)/i.test(match[1])) return tag;
      const url = match[1];
      let next = tag.replace(/\bsrcset="([^"]+)"/, (_, sources) => 'data-srcset="' + sourceSet(sources) + '"');
      next = next.replace(/\bsrc="[^"]+"/, 'data-src="' + asset(url) + '" src="' + (previews[pathOf(url)] || blank) + '" data-media-state="preview"');
      return next;
    });
  }
  window.portfolioMedia = { asset, deferImage, markup, observe, prepareCases, request };
}());
;

/* locales.js */
(function () {
  'use strict';
  const locale = document.documentElement.lang.toLowerCase().startsWith('en') ? 'en' : 'ru';
  window.PORTFOLIO_LOCALE = locale;
  window.PORTFOLIO_TRANSLATIONS = {
    ru: {
      title: 'Иван Лазарев — Lead Designer & Art Director',
      description: 'Иван Лазарев — Lead Designer и Art Director. Продуктовый дизайн, команды и цифровые проекты.',
      skip: 'Перейти к работам', profiles: 'Профили и резюме', cv: 'Открыть CV',
      heroAlt: 'Иван Лазарев за работой за ноутбуком',
      name: ['Lазарев', 'Иван'],
      facts: ['12 лет (6 лидом) _', 'Более 50 успешных проектов', '_ Спикер _ AI Workflow'],
      nav: ['Иван', 'Кейсы', 'Проекты', 'Обо мне'], navLabel: 'Разделы портфолио',
      casesHeading: 'Кейсы', projectsHeading: 'Проекты', aboutLabel: 'Обо мне',
      contact: 'Напиши мне', contactLabel: 'Связаться со мной', contactAria: 'Написать Ивану в Telegram',
      switchLabel: 'v_English', switchAria: 'Открыть английскую версию', otherPage: 'en.html', otherLanguage: 'en',
      linkSoon: 'Ссылка скоро появится',
      cases: [
        { title: ['ВТБ, разработка сервисов Справки и Наследники'], alt: 'Обложка ВТБ: сервисы справок и наследства на планшете над синим креслом' },
        { title: ['Praxium*, разработка клиники нового поколения'], alt: 'Обложка Praxium: клиника нового поколения, врачи и мобильный сайт' },
        { title: ['ВТБ, Концепт вертикали карты и ВТБ Pay'], alt: 'Обложка ВТБ: интерфейсы банковской карты и ВТБ Pay на трёх мобильных экранах' },
        { title: ['SMS-MAN, Редизайн международного сервиса'], alt: 'Обложка SMS-MAN: международный сервис на ноутбуке и объёмные иконки мессенджеров' }
      ]
    },
    en: {
      title: 'Ivan Lazarev — Lead Designer & Art Director',
      description: 'Ivan Lazarev — Lead Designer and Art Director. Digital products, design teams and selected projects.',
      skip: 'Skip to selected work', profiles: 'Social profiles and CV', cv: 'View CV',
      heroAlt: 'Ivan Lazarev working on his laptop',
      name: ['Lazarev', 'Ivan'],
      facts: ['12 years (6 as lead) _', 'Over 50 successful projects', '_ Speaker _ AI Workflow'],
      nav: ['Me', 'Cases', 'Project', 'About'], navLabel: 'Portfolio sections',
      casesHeading: 'Cases', projectsHeading: 'Projects', aboutLabel: 'About me',
      contact: 'Get in touch', contactLabel: 'Contact me', contactAria: 'Message Ivan on Telegram',
      switchLabel: 'v_Русский', switchAria: 'Switch to Russian', otherPage: 'index.html', otherLanguage: 'ru',
      linkSoon: 'Link coming soon',
      cases: [
        { title: ['VTB, certificate and inheritance service design'], alt: 'VTB cover: certificate and inheritance services on a tablet above a blue armchair' },
        { title: ['Praxium*, next-generation clinic development'], alt: 'Praxium cover: a new clinic network, doctors and a mobile website' },
        { title: ['VTB, card experience and VTB Pay concept'], alt: 'VTB cover: bank card experience and VTB Pay across three mobile screens' },
        { title: ['SMS-MAN, international service redesign'], alt: 'SMS-MAN cover: an international service on a laptop with 3D messenger icons' }
      ]
    }
  };
  window.PORTFOLIO_COPY = window.PORTFOLIO_TRANSLATIONS[locale];
})();
;

/* page.js */
(function () {
  'use strict';
  // One page structure for both languages. Only copy comes from locales.js.
  const t = window.PORTFOLIO_COPY;
  const escape = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const lines = values => values.map(escape).join('<br>');
  const caseTitle = values => values.map(escape).join(' ');
  const asset = path => window.PORTFOLIO_ASSET_HASHES?.[path] ? path + '?v=' + window.PORTFOLIO_ASSET_HASHES[path] : path;
  const caseSources = ['case-vtb-services', 'case-praxium', 'case-vtb-pay', 'case-sms-man']
    .map(name => 'assets/optimized/' + name + '@2x.webp');
  const caseImage = (src, alt) => {
    const mobile = src.replace('@2x.webp', '@mobile.webp');
    const mobilePreview = window.PORTFOLIO_PREVIEWS?.[mobile] || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    const preview = window.PORTFOLIO_PREVIEWS?.[src] || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    return `<picture><source media="(max-width:1023px) and (min-height:560px) and (orientation:portrait)" width="1920" height="3120" srcset="${mobilePreview}" data-srcset="${asset(mobile)}"><img src="${preview}" data-src="${asset(src)}" data-media-state="preview" alt="${escape(alt)}" width="2000" height="1100" loading="lazy" decoding="async" draggable="false"></picture>`;
  };
  const caseIcons = [
    '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Zm0 0v6h6M8 13h8M8 17h5"/>',
    '<path d="M12 5v14M5 12h14"/>',
    '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',
    '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8Z"/>'
  ];
  const sections = ['me', 'cases', 'projects', 'about'];
  if (!document.getElementById('hero')) document.body.insertAdjacentHTML('afterbegin', `
    <a class="skip-link" href="#cases">${escape(t.skip)}</a>
    <main>
      <span id="me" class="top-anchor" aria-hidden="true"></span>
      <section class="hero" id="hero" aria-labelledby="hero-name" data-section="me">
        <div class="hero-media"><div class="hero-media-plane">
          <picture><source data-hero-source="true" type="image/avif" srcset="${asset('assets/optimized/hero@2x.avif')}"><img class="hero-poster" src="${asset('assets/optimized/hero@2x.webp')}" width="3225" height="1800" alt="${escape(t.heroAlt)}" fetchpriority="high" decoding="async"></picture>
          <video class="hero-video" muted playsinline preload="none" aria-hidden="true" tabindex="-1"></video>
        </div></div>
        <div class="hero-content">
          <div class="hero-social hero-enter" aria-label="${escape(t.profiles)}">
            <a data-link="behance" aria-label="Behance">Be</a>
            <a data-link="cv" aria-label="${escape(t.cv)}">CV</a>
            <a data-link="linkedin" aria-label="LinkedIn"><span class="desktop-label">LinkedIn</span><span class="mobile-label">in</span></a>
          </div>
          <p class="hero-role hero-enter">Lead designer<br>Art-director</p>
          <p class="hero-facts hero-enter">${lines(t.facts)}</p>
          <h1 id="hero-name" class="hero-name hero-enter">${lines(t.name)}</h1>
        </div>
      </section>
      <section class="cases" id="cases" aria-labelledby="cases-heading" data-section>
        <div class="cases-stage section-shell">
          <h2 class="section-heading" id="cases-heading">${escape(t.casesHeading)}</h2>
          <div class="cases-cards">${t.cases.map((item, index) => `
            <article class="case-card" data-case="${index}" data-case-url="" ${index ? '' : 'data-front'} tabindex="${index ? -1 : 0}" aria-hidden="${index ? 'true' : 'false'}" aria-labelledby="case-${index+1}-title">
              <header class="case-copy"><span class="case-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${caseIcons[index]}</svg></span><h3 id="case-${index+1}-title">${caseTitle(item.title)}</h3></header>
              <div class="case-image case-image-cover">${caseImage(caseSources[index], item.alt)}</div>
              <span class="case-shade" aria-hidden="true"></span>
            </article>`).join('')}
          </div>
        </div>
      </section>
      <section class="projects" id="projects" aria-labelledby="projects-heading" data-section>
        <div class="section-shell"><h2 id="projects-heading" class="section-heading">${escape(t.projectsHeading)}</h2><div id="projects-grid"></div></div>
      </section>
      <section class="about" id="about" aria-label="${escape(t.aboutLabel)}" data-section>
        <div id="about-content"></div>
        <footer class="contact" id="contact" aria-label="${escape(t.contactLabel)}"><div class="contact-target" aria-hidden="true"></div></footer>
      </section>
    </main>
    <div class="dock hero-enter">
      <nav class="bottom-nav" aria-label="${escape(t.navLabel)}">
        <span class="nav-indicator" aria-hidden="true"></span>
        ${t.nav.map((label,index) => `<a href="#${sections[index]}" ${index ? '' : 'aria-current="location"'}>${escape(label)}</a>`).join('')}
      </nav>
      <span class="contact-origin" aria-hidden="true"></span>
      <a class="language-switch" href="${t.otherPage}" lang="${t.otherLanguage}" hreflang="${t.otherLanguage}" aria-label="${escape(t.switchAria)}">${escape(t.switchLabel)}</a>
    </div>
    <a class="contact-link hero-enter" data-link="telegram" aria-label="${escape(t.contactAria)}">
      <span class="contact-icon"><img src="assets/telegram.svg" alt="" width="16" height="16"></span>
      <span class="contact-text">${escape(t.contact)}</span>
    </a>`);

  // Updating copy never rebuilds the page, media elements or their listeners.
  window.applyPageLocale = function (locale) {
    const copy = window.PORTFOLIO_TRANSLATIONS[locale];
    const text = (selector, value) => { document.querySelector(selector).textContent = value; };
    const attr = (selector, name, value) => { document.querySelector(selector).setAttribute(name, value); };
    document.documentElement.lang = locale;
    document.title = copy.title;
    attr('meta[name="description"]', 'content', copy.description);
    text('.skip-link', copy.skip);
    attr('.hero-social', 'aria-label', copy.profiles);
    attr('.hero-social [data-link="cv"]', 'aria-label', copy.cv);
    attr('.hero-poster', 'alt', copy.heroAlt);
    document.querySelector('.hero-facts').innerHTML = lines(copy.facts);
    document.querySelector('.hero-name').innerHTML = lines(copy.name);
    text('#cases-heading', copy.casesHeading);
    text('#projects-heading', copy.projectsHeading);
    copy.cases.forEach((item, index) => {
      const card = document.querySelector(`[data-case="${index}"]`);
      card.querySelector('h3').textContent = item.title.join(' ');
      card.querySelector('img').alt = item.alt;
    });
    attr('.bottom-nav', 'aria-label', copy.navLabel);
    document.querySelectorAll('.bottom-nav a').forEach((link, index) => { link.textContent = copy.nav[index]; });
    text('.contact-text', copy.contact);
    attr('.contact-link', 'aria-label', copy.contactAria);
    attr('#about', 'aria-label', copy.aboutLabel);
    attr('#contact', 'aria-label', copy.contactLabel);
    const switcher = document.querySelector('.language-switch');
    switcher.textContent = copy.switchLabel;
    switcher.lang = copy.otherLanguage;
    switcher.hreflang = copy.otherLanguage;
    switcher.setAttribute('aria-label', copy.switchAria);
    switcher.setAttribute('href', copy.otherPage + location.hash);
    document.querySelectorAll('[data-link][aria-disabled="true"]').forEach(control => { control.title = copy.linkSoon; });
  };
})();
;

/* project-copy.js */
(function () {
  'use strict';

  // Text only: image sources, gallery positions and interactions live in projects.js.
  window.PORTFOLIO_PROJECT_COPY = {
    ru: {
      '372:36173': { title: "Сбербанк, концепция раздела накоплений", text: '', alt: 'Экран финансового приложения на зелёном iPhone' },
      '372:36335': { title: "ВТБ, анимации статусов", text: '', alt: 'Объёмная голубая папка' },
      '372:36383': { title: "Сбербанк, накопления", text: '', alt: 'Мобильное приложение с балансом и целью накоплений' },
      '372:36175': { title: "Яндекс, концепция главной Телемоста", text: '', alt: 'Концепция интерфейса сервиса видеовстреч Телемост' },
      '372:36339': { title: "ВТБ, концепция оплаты", text: '', alt: 'Синий платёжный терминал ВТБ и объёмные символы' },
      '372:36343': { title: "Яндекс, виджет доставки", text: '', alt: 'Виджет статуса восьми заказов на фиолетовом фоне' },
      '372:36514': { title: "Praxium, сеть клиник нового поколения с нуля", text: '', alt: 'Мобильный сайт клиники Praxium с фотографией врача' },
      '372:36861': { title: "Яндекс, концепция главной приложения доставки", text: '', alt: 'Жёлтый экран сервиса доставки с курьером и посылками' },
      '372:36729': { title: "ВТБ, детский банк на хакатоне", text: '', alt: 'Трёхмерный персонаж в шляпе и очках на шезлонге' },
      '372:36855': { title: "Альфа, эмоциональные проекты", text: '', alt: 'Белый логотип Альфа-Банка на красном фоне' },
      '372:36177': { title: "SMS Man, редизайн глобального сервиса", text: '', alt: 'Интерфейс веб-сервиса SMS Man с выбором стран и сервисов' },
      '372:36857': { title: "Визуальный стиль фабрики", text: '', alt: 'Три рисованных персонажа на жёлтом фоне' },
      '372:36741': { title: "Marvel, лендинг фильма «Мстители»", text: '', alt: 'Зелёная иллюстрация Халка с графическими значками' },
      '372:36727': { title: "Яндекс, NDA-проект", text: '', alt: 'Жёлтая надпись Сильный игрок на фиолетовой ткани' },
      '372:36713': { title: "ВТБ, редизайн «Вертикали карты»", text: '', alt: 'Экран управления банковской картой ВТБ' },
      '372:36725': { title: "ВТБ, победа моей команды на хакатоне", text: '', alt: 'Прозрачная награда победителя Digital Experience Day' },
      '372:36723': { title: "Дизайн-выходные, выступление", text: '', alt: 'Иван выступает с микрофоном у красного экрана Ломать шаблоны' },
      '372:36862': { title: "inDrive, концепция открытия карты", text: '', alt: 'Два мобильных экрана открытия виртуальной карты' },
      '372:36179': { title: "Сбер, лендинг для GIGA", text: '', alt: 'Зелёная главная страница проекта Гигачат в деле' },
      '372:36715': { title: "SMS Man, стиль иллюстраций", text: '', alt: 'Объёмные иконки мессенджеров вокруг кода подтверждения' },
      '372:36381': { title: "ВТБ, анимация навбара", text: '', alt: 'Синяя нижняя навигация банковского приложения' },
      'video:4': { title: "ВТБ, дизайн-стратегия", text: '', alt: 'Синий брелок ВТБ с карабином и зелёные карты' }
    },
    en: {
      '372:36173': { title: "Sberbank, savings section concept", text: '', alt: 'Financial app screen on a green iPhone' },
      '372:36335': { title: "VTB, status animations", text: '', alt: 'A 3D blue folder' },
      '372:36383': { title: "Sberbank, savings", text: '', alt: 'Mobile app with a balance and savings goal' },
      '372:36175': { title: "Yandex, Telemost homepage concept", text: '', alt: 'Video meeting interface concept for Telemost' },
      '372:36339': { title: "VTB, payment concept", text: '', alt: 'Blue VTB payment terminal and 3D symbols' },
      '372:36343': { title: "Yandex, delivery widget", text: '', alt: 'Eight-order status widget on a purple background' },
      '372:36514': { title: "Praxium, next-gen clinic network from scratch", text: '', alt: 'Praxium mobile website with a doctor’s portrait' },
      '372:36861': { title: "Yandex, delivery app homepage concept", text: '', alt: 'Yellow delivery screen with couriers and parcels' },
      '372:36729': { title: "VTB, kids’ banking hackathon concept", text: '', alt: 'A 3D character in a hat and sunglasses relaxing on a sun lounger' },
      '372:36855': { title: "Alfa, expressive design projects", text: '', alt: 'White Alfa-Bank logo on a red background' },
      '372:36177': { title: "SMS Man, global service redesign", text: '', alt: 'SMS Man web interface with country and service selectors' },
      '372:36857': { title: "Factory visual identity", text: '', alt: 'Three illustrated characters on a yellow background' },
      '372:36741': { title: "Marvel, Avengers landing page", text: '', alt: 'Green Hulk illustration with graphic symbols' },
      '372:36727': { title: "Yandex, NDA project", text: '', alt: 'Yellow Strong Player lettering on purple fabric' },
      '372:36713': { title: "VTB, card section redesign", text: '', alt: 'VTB bank card management screen' },
      '372:36725': { title: "VTB, hackathon win with my team", text: '', alt: 'Clear winner’s trophy from Digital Experience Day' },
      '372:36723': { title: "Design Weekend, a talk", text: '', alt: 'Ivan speaking beside a red Breaking the Mold presentation screen' },
      '372:36862': { title: "inDrive, card onboarding concept", text: '', alt: 'Two mobile screens for opening a virtual card' },
      '372:36179': { title: "Sber, GIGA landing page", text: '', alt: 'Green homepage for the GigaChat in Action project' },
      '372:36715': { title: "SMS Man, illustration style", text: '', alt: '3D messenger icons surrounding a verification code' },
      '372:36381': { title: "VTB, navbar animation", text: '', alt: 'Blue bottom navigation bar for a banking app' },
      'video:4': { title: "VTB, design strategy", text: '', alt: 'Blue VTB keychain with a carabiner and green cards' }
    }
  };
}());
;

/* project-video.js */
(function () {
  'use strict';

  // Posters remain mounted beneath the clips throughout loading and playback.
  window.createProjectVideos = function createProjectVideos(items) {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const removers = [];
    let destroyed = false;
    const listen = (element, name, handler) => {
      element.addEventListener(name, handler);
      removers.push(() => element.removeEventListener(name, handler));
    };
    const records = items.map(({ card, image, src }) => {
      const video = document.createElement('video');
      video.className = 'project-video';
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = 'none';
      video.disablePictureInPicture = true;
      video.tabIndex = -1;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('aria-hidden', 'true');
      card.insertBefore(video, card.querySelector('.project-caption'));
      card.dataset.videoState = 'poster';
      return { card, image, src, video, near: false, visible: false, loading: false,
        failed: false, pending: false, frame: null, paint: 0, loadPaint: 0 };
    });
    const byCard = new Map(records.map(record => [record.card, record]));
    const saveData = () => Boolean(navigator.connection?.saveData);
    const eligible = record => !destroyed && record.visible && !document.hidden && !motion.matches && !saveData() && !record.failed;

    function cancelFrame(record) {
      if (record.frame !== null) record.video.cancelVideoFrameCallback(record.frame);
      if (record.paint) cancelAnimationFrame(record.paint);
      record.frame = null;
      record.paint = 0;
    }

    function hide(record) {
      cancelFrame(record);
      record.card.classList.remove('is-video-playing');
    }

    function show(record) {
      record.frame = null;
      record.paint = 0;
      if (!eligible(record) || record.video.paused || record.video.readyState < 2) return;
      record.card.classList.add('is-video-playing');
      record.card.dataset.videoState = 'playing';
    }

    function firstFrame(record) {
      cancelFrame(record);
      if (!eligible(record)) return;
      // Fade only after a decoded frame reaches the renderer, never on canplay.
      if (typeof record.video.requestVideoFrameCallback === 'function') {
        record.frame = record.video.requestVideoFrameCallback(() => show(record));
      } else {
        record.paint = requestAnimationFrame(() => {
          record.paint = requestAnimationFrame(() => show(record));
        });
      }
    }

    function reconcile(record) {
      if (!eligible(record)) {
        record.video.pause();
        hide(record);
        return;
      }
      if (!record.video.getAttribute('src') || record.video.readyState < 2 || record.pending || !record.video.paused) return;
      record.pending = true;
      const attempt = record.video.play();
      let interrupted = false;
      Promise.resolve(attempt).catch(error => {
        interrupted = error?.name === 'AbortError';
        hide(record);
        record.card.dataset.videoState = 'poster';
      }).finally(() => {
        record.pending = false;
        // A fast exit/re-entry may happen before pause rejects the old play.
        if (interrupted && eligible(record)) reconcile(record);
      });
    }

    function prepare(record) {
      if (destroyed || !record.near || record.loading || record.failed || motion.matches || saveData() || document.hidden) return;
      if (record.image.dataset.src || record.image.dataset.mediaState === 'error') return;
      if (!record.image.complete || !record.image.naturalWidth) return;
      record.loading = true;
      record.card.dataset.videoState = 'loading';
      // Give the JPEG its first paint before assigning the optional video source.
      record.loadPaint = requestAnimationFrame(() => {
        record.loadPaint = 0;
        if (destroyed) return;
        if (!record.near || motion.matches || saveData() || document.hidden) {
          record.loading = false;
          record.card.dataset.videoState = 'poster';
          return;
        }
        record.video.preload = 'auto';
        record.video.src = record.src;
        record.video.load();
      });
    }

    records.forEach(record => {
      listen(record.image, 'load', () => prepare(record));
      listen(record.image, 'portfolio:imageready', () => prepare(record));
      listen(record.video, 'canplay', () => reconcile(record));
      listen(record.video, 'playing', () => firstFrame(record));
      listen(record.video, 'waiting', () => { hide(record); record.card.dataset.videoState = 'buffering'; });
      listen(record.video, 'error', () => {
        record.failed = true;
        record.video.pause();
        hide(record);
        record.card.dataset.videoState = 'error';
      });
    });

    const preload = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const record = byCard.get(entry.target);
        record.near = entry.isIntersecting;
        if (record.near) prepare(record);
      });
    }, { rootMargin: '600px 0px', threshold: 0 });
    const visibility = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const record = byCard.get(entry.target);
        record.visible = entry.isIntersecting;
        reconcile(record);
      });
    }, { threshold: 0 });
    records.forEach(record => { preload.observe(record.card); visibility.observe(record.card); });

    const refresh = () => records.forEach(record => { prepare(record); reconcile(record); });
    listen(document, 'visibilitychange', refresh);
    listen(motion, 'change', refresh);

    return () => {
      destroyed = true;
      preload.disconnect();
      visibility.disconnect();
      removers.forEach(remove => remove());
      records.forEach(record => {
        hide(record);
        if (record.loadPaint) cancelAnimationFrame(record.loadPaint);
        record.video.pause();
        record.video.removeAttribute('src');
        record.video.load();
        record.video.remove();
      });
    };
  };
}());
;

/* projects.js */
(function () {
  'use strict';

  // The desktop slot positions follow the eight-column Figma gallery.
  // Layout measurements are rounded to the site's 4 px baseline.
  const projects = [
    { node: '372:36173', title: "Сбербанк, концепция раздела накоплений", text: '', alt: 'Экран финансового приложения на зелёном iPhone', x: 64, y: 239, width: 646, height: 500, column: 1, span: 4 },
    { node: '372:36335', title: "ВТБ, анимации статусов", text: '', alt: 'Объёмная голубая папка', x: 730, y: 239, width: 313, height: 248, column: 5, span: 2 },
    { node: '372:36383', title: "Сбербанк, накопления", text: '', alt: 'Мобильное приложение с балансом и целью накоплений', x: 1063, y: 505, width: 313, height: 500, column: 7, span: 2 },
    { node: '372:36175', title: "Яндекс, концепция главной Телемоста", text: '', alt: 'Концепция интерфейса сервиса видеовстреч Телемост', x: 231, y: 759, width: 646, height: 500, column: 2, span: 4 },
    { node: '372:36339', title: "ВТБ, концепция оплаты", text: '', alt: 'Синий платёжный терминал ВТБ и объёмные символы', x: 897, y: 1027, width: 313, height: 232, column: 6, span: 2 },
    { node: '372:36343', title: "Яндекс, виджет доставки", text: '', alt: 'Виджет статуса восьми заказов на фиолетовом фоне', x: 64, y: 1279, width: 313, height: 248, column: 1, span: 2 },
    { node: '372:36514', title: "Praxium, сеть клиник нового поколения с нуля", text: '', alt: 'Мобильный сайт клиники Praxium с фотографией врача', x: 398, y: 1279, width: 313, height: 540, column: 3, span: 2 },
    { node: '372:36861', title: "Яндекс, концепция главной приложения доставки", text: '', alt: 'Жёлтый экран сервиса доставки с курьером и посылками', x: 1063, y: 1279, width: 313, height: 391.25, column: 7, span: 2 },
    { node: '372:36729', title: "ВТБ, детский банк на хакатоне", text: '', alt: 'Трёхмерный персонаж в шляпе и очках на шезлонге', x: 731, y: 1425, width: 313, height: 394, column: 5, span: 2 },
    { node: '372:36855', title: "Альфа, эмоциональные проекты", text: '', alt: 'Белый логотип Альфа-Банка на красном фоне', x: 65, y: 1548, width: 312, height: 271, column: 1, span: 2 },
    { node: '372:36177', title: "SMS Man, редизайн глобального сервиса", text: '', alt: 'Интерфейс веб-сервиса SMS Man с выбором стран и сервисов', x: 65, y: 1839, width: 646, height: 414, column: 1, span: 4 },
    { node: '372:36857', title: "Визуальный стиль фабрики", text: '', alt: 'Три рисованных персонажа на жёлтом фоне', x: 897, y: 1839, width: 479, height: 128, column: 6, span: 3 },
    { node: '372:36741', title: "Marvel, лендинг фильма «Мстители»", text: '', alt: 'Зелёная иллюстрация Халка с графическими значками', x: 731, y: 1987, width: 313, height: 394, column: 5, span: 2 },
    { node: '372:36727', title: "Яндекс, NDA-проект", text: '', alt: 'Жёлтая надпись Сильный игрок на фиолетовой ткани', x: 1063, y: 1987, width: 313, height: 256, column: 7, span: 2 },
    { node: '372:36713', title: "ВТБ, редизайн «Вертикали карты»", text: '', alt: 'Экран управления банковской картой ВТБ', x: 1063, y: 2263, width: 313, height: 522, column: 7, span: 2 },
    { node: '372:36725', title: "ВТБ, победа моей команды на хакатоне", text: '', alt: 'Прозрачная награда победителя Digital Experience Day', x: 65, y: 2273, width: 313, height: 376, column: 1, span: 2 },
    { node: '372:36723', title: "Дизайн-выходные, выступление", text: '', alt: 'Иван выступает с микрофоном у красного экрана Ломать шаблоны', x: 398, y: 2530, width: 646, height: 255, column: 3, span: 4 },
    { node: '372:36862', title: "inDrive, концепция открытия карты", text: '', alt: 'Два мобильных экрана открытия виртуальной карты', x: 65, y: 2805, width: 480, height: 480, column: 1, span: 3, format: 'jpeg' },
    { node: '372:36179', title: "Сбер, лендинг для GIGA", text: '', alt: 'Зелёная главная страница проекта Гигачат в деле', x: 730, y: 2805, width: 646, height: 376, column: 5, span: 4 },
    { node: '372:36715', title: "SMS Man, стиль иллюстраций", text: '', alt: 'Объёмные иконки мессенджеров вокруг кода подтверждения', x: 65, y: 3305, width: 646, height: 255, column: 1, span: 4 },
    { node: '372:36381', title: "ВТБ, анимация навбара", text: '', alt: 'Синяя нижняя навигация банковского приложения', x: 896, y: 3305, width: 480, height: 162, column: 6, span: 3 },
    { node: 'video:4', title: "ВТБ, дизайн-стратегия", text: '', alt: 'Синий брелок ВТБ с карабином и зелёные карты', x: 732, y: 3488, width: 480, height: 480, column: 5, span: 4 }
  ];

  const clips = {
    '372:36335': { poster: 'assets/optimized/project-video-folder.webp', src: 'assets/videos/project-folder.mp4?v=3addb4069e31', width: 1080, height: 1080 },
    '372:36339': { poster: 'assets/optimized/project-video-acquiring.webp', src: 'assets/videos/project-payment.mp4?v=0602afd233f4', width: 1440, height: 1440 },
    '372:36381': { poster: 'assets/optimized/project-video-navigation.webp', src: 'assets/videos/project-navigation.mp4?v=bc3f8d2097e7', width: 1080, height: 400 },
    'video:4': { poster: 'assets/optimized/project-video-keychain.webp', src: 'assets/videos/project-keychain.mp4?v=ed2804269748', width: 1456, height: 1424 }
  };

  const round4 = (value) => Math.round(value / 4) * 4;
  const delayPattern = [0, 100, 40, 140, 60, 20, 120, 80];
  const projectsByNode = new Map(projects.map(project => [project.node, project]));
  const projectElements = new Map();
  let disconnect;

  function projectLocale(locale) {
    return String(locale || window.PORTFOLIO_LOCALE || document.documentElement.lang || 'ru')
      .toLowerCase().split('-')[0] === 'en' ? 'en' : 'ru';
  }

  function projectText(project, locale) {
    const copy = window.PORTFOLIO_PROJECT_COPY?.[locale]?.[project.node]
      || window.PORTFOLIO_COPY?.projects?.[project.node] || {};
    return {
      title: typeof copy.title === 'string' ? copy.title : project.title,
      text: typeof copy.text === 'string' ? copy.text : project.text,
      alt: typeof copy.alt === 'string' ? copy.alt : project.alt
    };
  }

  // Language changes update the existing elements and data objects only.
  // Images, reveal states, layout observers and card click handlers stay intact.
  window.applyProjectLocale = function applyProjectLocale(locale) {
    const selectedLocale = projectLocale(locale);
    window.portfolioProjects.forEach(project => {
      const copy = projectText(projectsByNode.get(project.node) || project, selectedLocale);
      project.title = copy.title;
      project.text = copy.text;
      project.alt = copy.alt;
      const elements = projectElements.get(project.node);
      if (!elements) return;
      elements.card.setAttribute('aria-label', copy.title);
      elements.image.alt = copy.alt;
      elements.title.textContent = copy.title;
    });
    return window.portfolioProjects;
  };

  window.renderProjects = function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    if (disconnect) disconnect();
    const locale = projectLocale();
    const localizedProjects = projects.map(project => ({ ...project, ...projectText(project, locale) }));
    window.portfolioProjects = localizedProjects;
    projectElements.clear();
    grid.classList.add('project-gallery');
    grid.innerHTML = '';
    const videoItems = [];

    const cards = localizedProjects.map((project, index) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'project-card reveal';
      card.dataset.nodeId = project.node;
      card.setAttribute('aria-expanded', 'false');
      card.setAttribute('aria-label', project.title);
      card.style.setProperty('--reveal-delay', delayPattern[index % delayPattern.length] + 'ms');
      const image = document.createElement('img');
      const source = 'assets/optimized/project-' + project.node.replace(':', '-');
      const format = 'webp';
      const clip = clips[project.node];
      // Each base is a fresh Figma 2× export. Narrow visuals also have a 4×
      // source so the wider two-column tablet layout remains sharp on Retina.
      if (!clip && project.width < 646) {
        image.dataset.srcset = source + '.' + format + ' ' + Math.ceil(project.width * 2) + 'w, '
          + source + '@4x.' + format + ' ' + Math.ceil(project.width * 4) + 'w';
        image.sizes = Math.ceil(project.width) + 'px';
      }
      const mediaSource = clip ? clip.poster : source + '.' + format;
      if (window.portfolioMedia) {
        const candidates = image.dataset.srcset;
        delete image.dataset.srcset;
        window.portfolioMedia.deferImage(image, mediaSource, candidates);
      } else {
        image.src = mediaSource;
        if (image.dataset.srcset) image.srcset = image.dataset.srcset;
      }
      image.alt = project.alt;
      image.width = clip ? clip.width : Math.ceil(project.width);
      image.height = clip ? clip.height : Math.ceil(project.height);
      image.loading = 'lazy';
      image.decoding = 'async';

      const caption = document.createElement('span');
      caption.className = 'project-caption';
      const title = document.createElement('strong');
      title.textContent = project.title;
      caption.append(title);
      card.append(image, caption);
      if (clip) videoItems.push({ card, image, src: clip.src });
      projectElements.set(project.node, { card, image, title });
      card.addEventListener('click', () => {
        const willOpen = !card.classList.contains('is-open');
        closeCards();
        card.classList.toggle('is-open', willOpen);
        card.setAttribute('aria-expanded', String(willOpen));
      });
      grid.append(card);
      return card;
    });

    function closeCards() {
      cards.forEach((card) => {
        card.classList.remove('is-open');
        card.setAttribute('aria-expanded', 'false');
      });
    }

    function layout() {
      const available = grid.clientWidth;
      if (!available) return;
      const mobile = window.matchMedia('(max-width: 1023px)').matches;
      const gap = mobile ? 16 : 20;
      const columns = mobile ? 2 : 8;
      const galleryWidth = Math.floor(available / 4) * 4;
      const columnUnits = Math.max(columns, (galleryWidth - gap * (columns - 1)) / 4);
      const columnWidths = Array.from({ length: columns }, (_, index) => (
        Math.round(columnUnits * (index + 1) / columns) - Math.round(columnUnits * index / columns)
      ) * 4);
      grid.style.setProperty('--project-tracks', columnWidths.map((width) => width + 'px').join(' '));
      grid.style.setProperty('--project-columns', columns);
      grid.style.setProperty('--project-gap', gap + 'px');
      const scale = galleryWidth / 1312;
      const bottoms = [0, 0];
      const verificationProject = projectsByNode.get('372:36715');
      const navigationProject = projectsByNode.get('372:36381');
      const newCardProject = projectsByNode.get('372:36862');
      const gigaProject = projectsByNode.get('372:36179');
      const widthOf = project => columnWidths.slice(project.column - 1, project.column - 1 + project.span)
        .reduce((sum, width) => sum + width, 0) + gap * (project.span - 1);
      const desktopTail = mobile ? null : {
        top: round4((verificationProject.y - 239) * scale),
        size: widthOf(newCardProject),
        navWidth: widthOf(navigationProject),
        navHeight: Math.max(4, round4(navigationProject.height * scale))
      };
      let mobileTail = null;

      cards.forEach((card, index) => {
        const project = localizedProjects[index];
        const verification = project.node === '372:36715';
        const navigation = project.node === '372:36381';
        const newClip = project.node === 'video:4';
        card.style.removeProperty('width');
        card.style.removeProperty('justify-self');
        if (mobile) {
          if ((verification || navigation || newClip) && !mobileTail) {
            const top = Math.max(...bottoms);
            const verificationHeight = Math.max(64, round4(columnWidths[0] * verificationProject.height / verificationProject.width));
            const navHeight = Math.max(64, round4(columnWidths[0] * navigationProject.height / navigationProject.width));
            mobileTail = {
              top, verificationHeight, navHeight, size: columnWidths[1],
              navTop: Math.max(top + verificationHeight + gap, top + columnWidths[1] - navHeight)
            };
          }
          const tail = verification || navigation || newClip;
          const column = tail ? newClip ? 1 : 0 : bottoms[0] <= bottoms[1] ? 0 : 1;
          const height = tail ? newClip ? mobileTail.size : navigation ? mobileTail.navHeight : mobileTail.verificationHeight
            : Math.max(64, round4(columnWidths[column] * project.height / project.width));
          const top = tail ? navigation ? mobileTail.navTop : mobileTail.top : bottoms[column];
          card.style.gridColumn = String(column + 1);
          card.style.gridRow = String(top / 4 + 1) + ' / span ' + String(height / 4);
          bottoms[column] = top + height + gap;
          card.querySelector('img').sizes = columnWidths[column] + 'px';
        } else {
          const cardWidth = widthOf(project);
          if (navigation || newClip) {
            const alignment = newClip ? gigaProject : verificationProject;
            const size = newClip ? desktopTail.size : desktopTail.navWidth;
            const height = newClip ? desktopTail.size : desktopTail.navHeight;
            const top = newClip ? desktopTail.top : desktopTail.top + desktopTail.size - desktopTail.navHeight;
            card.style.gridColumn = alignment.column + ' / span ' + alignment.span;
            card.style.gridRow = String(top / 4 + 1) + ' / span ' + String(height / 4);
            card.style.width = size + 'px';
            card.style.justifySelf = newClip ? 'end' : 'start';
            card.querySelector('img').sizes = size + 'px';
          } else {
            const top = round4((project.y - 239) * scale);
            const height = Math.max(4, round4(project.height * scale));
            card.style.gridColumn = project.column + ' / span ' + project.span;
            card.style.gridRow = String(top / 4 + 1) + ' / span ' + String(height / 4);
            card.querySelector('img').sizes = cardWidth + 'px';
          }
        }
      });
    }

    const onOutsideClick = (event) => { if (!grid.contains(event.target)) closeCards(); };
    const onEscape = (event) => { if (event.key === 'Escape') closeCards(); };
    document.addEventListener('click', onOutsideClick);
    document.addEventListener('keydown', onEscape);
    const resize = new ResizeObserver(layout);
    resize.observe(grid);
    window.addEventListener('resize', layout, { passive: true });
    window.portfolioMedia?.observe(grid);
    const stopVideos = window.createProjectVideos?.(videoItems);
    disconnect = () => {
      stopVideos?.();
      resize.disconnect();
      window.removeEventListener('resize', layout);
      document.removeEventListener('click', onOutsideClick);
      document.removeEventListener('keydown', onEscape);
    };
    layout();
  };

  window.portfolioProjects = projects.map(project => ({ ...project }));
}());
;

/* about-copy.js */
/* Localized About copy. Shared layout and imagery remain in about.js. */
window.PORTFOLIO_ABOUT_COPY = {
  ru: {
    sceneLabel: 'Иван стоит на жёлтой надписи «Hi, my name is Ivan»',
    playlistLabel: 'Мой плейлист',
    playlistTitle: 'Открыть в Яндекс Музыке',
    playlistAria: 'Открыть мой плейлист в Яндекс Музыке',
    socialsAria: 'Социальные сети и резюме',
    cvLabel: 'CV',
    cvAria: 'Резюме',
    clientsHeading: 'Работал с',
    experienceHeading: 'Опыт работы',
    moreThan: 'Более',
    companyNames: {
      vtb: 'VTB', sber: 'Сбер', alfa: 'Альфа-Банк', yandex: 'Яндекс',
      praxium: 'Praxium', marvel: 'Marvel', delivery: 'Яндекс Доставка',
      pyaterochka: 'Пятёрочка', psb: 'ПСБ', disney: 'Disney', positive: 'Positive Technology'
    },
    intro: [
      'Проектирую сложные B2C, B2B и B2E-продукты для веба, iOS и Android и руковожу их дизайном. Соединяю продуктовый подход, понятный UX, сильный UI, цели бизнеса и масштабируемые дизайн-системы.',
      'Руковожу дизайнерами, работаю с продакт-менеджерами и разработчиками, представляю решения командам и бизнесу. Веду продукты от исследования до запуска.'
    ],
    jobs: [
      ['VTB', 'Ведущий дизайнер', '2021 — Сейчас'],
      ['Mish', 'Арт-директор', '2026 — Сейчас'],
      ['PSB', 'Старший дизайнер', '2021 — 2021'],
      ['Red October', 'Старший дизайнер', '2020 — 2021'],
      ['Ark Connect', 'Дизайнер', '2018 — 2020']
    ],
    photoAlt: {
      judy: 'Иван у панно Judy Hopps',
      street: 'Иван в чёрной футболке на улице',
      talk: 'Иван выступает с микрофоном',
      sea: 'Иван на берегу моря'
    },
    designersLines: ['Дизайнеров', 'в\u00a0команде'],
    experienceLines: ['Лет', 'опыта']
  },
  en: {
    sceneLabel: 'Hi, my name is Ivan — Ivan standing on yellow lettering',
    playlistLabel: 'My playlist',
    playlistTitle: 'Open in Yandex Music',
    playlistAria: 'Open my playlist in Yandex Music',
    socialsAria: 'Social profiles and CV',
    cvLabel: 'CV',
    cvAria: 'View CV',
    clientsHeading: 'Work with',
    experienceHeading: 'Work at',
    moreThan: 'More than',
    companyNames: {
      vtb: 'VTB', sber: 'Sber', alfa: 'Alfa-Bank', yandex: 'Yandex',
      praxium: 'Praxium', marvel: 'Marvel', delivery: 'Yandex Delivery',
      pyaterochka: 'Pyaterochka', psb: 'PSB', disney: 'Disney', positive: 'Positive Technology'
    },
    intro: [
      'I design and lead complex B2C, B2B, and B2E products across web, iOS, and Android. My work combines product thinking, clear UX, strong UI, business goals, and scalable design systems.',
      'I have experience leading designers, working with product managers and engineers, presenting ideas to stakeholders, and taking products from discovery to launch.'
    ],
    jobs: [
      ['VTB', 'Lead Designer', '2021 — Now'],
      ['Mish', 'Art Director', '2026 — Now'],
      ['PSB', 'Senior Designer', '2021 — 2021'],
      ['Red October', 'Senior Designer', '2020 — 2021'],
      ['Ark Connect', 'Middle Designer', '2018 — 2020']
    ],
    photoAlt: {
      judy: 'Ivan beside a Judy Hopps mural',
      street: 'Ivan wearing a black T-shirt on a city street',
      talk: 'Ivan speaking into a microphone',
      sea: 'Ivan by the sea'
    },
    designersLines: ['Designers', 'in\u00a0team'],
    experienceLines: ['Years', 'of experience']
  }
};
;

/* about.js */
/* About content and original Figma assets. All motion is restricted to photos and the equalizer. */
(function () {
  const logos = [
    ['vtb', '3b02d', '372:36934'],
    ['sber', '0d1ef', '372:36938'],
    ['alfa', '49825', '372:36943'],
    ['yandex', '33f98', '372:36947', 'yandex'],
    ['praxium', '46371', '372:36952'],
    ['marvel', 'a5577', '372:36955', 'wide'],
    ['delivery', '499e4', '372:36961'],
    ['pyaterochka', '97966', '372:36969'],
    ['psb', '0d489', '372:36975'],
    ['disney', 'caf58', '372:36980', 'wide'],
    ['positive', 'c3810', '372:36992']
  ];
  const heights = [32,20,24,12,20,20,32,4,20,4,24,8,12,20,32,20,20,4,24,12,20,8,32,16];
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));

  window.renderAbout = function () {
    const target = document.getElementById('about-content');
    if (!target) return;
    const locale = window.PORTFOLIO_LOCALE === 'en' ? 'en' : 'ru';
    const copy = window.PORTFOLIO_ABOUT_COPY[locale];
    const letteringSrc = 'assets/about-96982.svg';
    const designersLabel = copy.designersLines.map(escapeHTML).join('<br>');
    const experienceLabel = copy.experienceLines.map(escapeHTML).join('<br>');
    const markup = `
      <svg class="about-color-filters" width="0" height="0" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="about-logo-yellow" color-interpolation-filters="sRGB">
            <feColorMatrix type="matrix" values="0.995098039216 0 0 0 0.000980392157 0 0.965686274510 0 0 0.006862745098 0 0 -0.044117647059 0 0.208823529412 0 0 0 1 0"/>
          </filter>
        </defs>
      </svg>
      <div class="about-layout">
        <div class="about-scene" role="img" aria-label="${escapeHTML(copy.sceneLabel)}" data-node-id="372:36920">
          <div class="about-scene-canvas" aria-hidden="true">
            <div class="about-glow about-glow-main"><img src="assets/about-d3af1.svg" alt=""></div>
            <div class="about-lettering" data-lettering-locale="en"><img src="${letteringSrc}" alt=""></div>
            <div class="about-glow about-glow-foot"><img src="assets/about-7983c.svg" alt=""></div>
            <div class="about-glow about-glow-leg"><img src="assets/about-5e9f5.svg" alt=""></div>
            <img class="about-person" src="assets/optimized/about-bae5e@896.webp?v=20261108-transparent" width="400" height="536" alt="" loading="lazy" decoding="async">
          </div>
        </div>

        <a class="about-playlist" data-link="playlist" href="${escapeHTML(window.PORTFOLIO?.links?.playlist || '#')}" target="_blank" rel="noopener noreferrer" title="${escapeHTML(copy.playlistTitle)}" aria-label="${escapeHTML(copy.playlistAria)}" data-node-id="372:37025">
          <img class="about-playlist-art" src="assets/optimized/about-60ce3.webp?v=20261108-2x" alt="" width="104" height="104" loading="lazy">
          <span class="about-playlist-label">${escapeHTML(copy.playlistLabel)}</span>
          <span class="about-equalizer" aria-hidden="true">${heights.map((height, i) => `<i style="--bar-height:${height}px;--bar-time:${720+(i%5)*120}ms;--bar-delay:-${i*96}ms"></i>`).join('')}</span>
        </a>

        <div class="about-socials" aria-label="${escapeHTML(copy.socialsAria)}">
          <a class="about-social about-social-behance" href="#" data-link="behance" aria-label="Behance"><img src="assets/about-32b3d.svg" alt=""></a>
          <a class="about-social about-social-linkedin" href="#" data-link="linkedin" aria-label="LinkedIn"><img src="assets/about-78359.svg" alt=""></a>
          <a class="about-social about-social-cv" href="#" data-link="cv" aria-label="${escapeHTML(copy.cvAria)}">${escapeHTML(copy.cvLabel)}</a>
        </div>

        <div class="about-intro" data-node-id="372:37072">
          ${copy.intro.map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join('')}
        </div>

        <div class="about-clients" data-node-id="372:36930">
          <h3>${escapeHTML(copy.clientsHeading)}</h3>
          <div class="about-logo-grid">${logos.map(([key, asset, node, modifier='']) => `<button type="button" class="about-company ${modifier==='wide'?'about-company-wide':''} ${modifier==='yandex'?'about-company-yandex':''}" aria-label="${escapeHTML(copy.companyNames[key])}" data-node-id="${node}"><img src="assets/about-${asset}.svg" alt=""><span class="about-company-hint" role="tooltip">${escapeHTML(copy.companyNames[key])}</span></button>`).join('')}</div>
        </div>

        <figure class="about-photo about-photo-judy reveal" style="--reveal-delay:0ms" data-node-id="372:37023"><img src="assets/optimized/about-photo-judy@2x.webp?v=20261108-2x" srcset="assets/optimized/about-photo-judy@2x.webp?v=20261108-2x 626w, assets/optimized/about-photo-judy@4x.webp?v=20261108-2x 1252w" sizes="(max-width:1023px) 50vw, 320px" width="312" height="312" loading="lazy" decoding="async" alt="${escapeHTML(copy.photoAlt.judy)}"></figure>
        <figure class="about-photo about-photo-street reveal" style="--reveal-delay:80ms" data-node-id="372:37068"><img src="assets/optimized/about-photo-street@2x.webp?v=20261108-2x" srcset="assets/optimized/about-photo-street@2x.webp?v=20261108-2x 624w, assets/optimized/about-photo-street@4x.webp?v=20261108-2x 1248w" sizes="(max-width:1023px) 50vw, 320px" width="312" height="312" loading="lazy" decoding="async" alt="${escapeHTML(copy.photoAlt.street)}"></figure>

        <div class="about-experience" data-node-id="372:36996">
          <h3>${escapeHTML(copy.experienceHeading)}</h3>
          <dl class="about-job-list">${copy.jobs.map(([company,role,date],i)=>`<div class="about-job"><dt>${escapeHTML(company)}</dt><dd>${escapeHTML(role)}</dd><dd>${escapeHTML(date)}</dd>${i<copy.jobs.length-1?'<span class="about-job-rule" aria-hidden="true"></span>':''}</div>`).join('')}</dl>
        </div>

        <figure class="about-photo about-photo-talk reveal" style="--reveal-delay:120ms" data-node-id="372:37107"><img src="assets/optimized/about-photo-talk@2x.webp?v=20261108-2x" srcset="assets/optimized/about-photo-talk@2x.webp?v=20261108-2x 630w, assets/optimized/about-photo-talk@4x.webp?v=20261108-2x 1260w" sizes="(max-width:1023px) 50vw, 320px" width="316" height="420" loading="lazy" decoding="async" alt="${escapeHTML(copy.photoAlt.talk)}"></figure>
        <figure class="about-photo about-photo-sea reveal" style="--reveal-delay:40ms" data-node-id="372:37065"><img src="assets/optimized/about-b354a@960.webp?v=20261108-2x" width="177" height="236" loading="lazy" decoding="async" alt="${escapeHTML(copy.photoAlt.sea)}"></figure>

        <dl class="about-stats" data-node-id="372:37093">
          <div><dt>7</dt><dd>${designersLabel}</dd></div>
          <div><dt><span aria-label="${escapeHTML(copy.moreThan)}">&gt;</span>53</dt><dd>${designersLabel}</dd></div>
          <div><dt><span aria-label="${escapeHTML(copy.moreThan)}">&gt;</span>10</dt><dd>${experienceLabel}</dd></div>
        </dl>
      </div>`;
    target.innerHTML = window.portfolioMedia?.markup(markup) || markup;
    window.portfolioMedia?.observe(target);
    target.querySelectorAll('.about-company').forEach((company) => {
      const hint = company.querySelector('.about-company-hint');
      const positionHint = () => {
        hint.style.setProperty('--hint-offset', '0px');
        const rect = hint.getBoundingClientRect();
        const safeInset = 16;
        const leftCorrection = Math.max(0, safeInset - rect.left);
        const rightCorrection = Math.min(0, document.documentElement.clientWidth - safeInset - rect.right);
        const correction = leftCorrection || rightCorrection;
        hint.style.setProperty('--hint-offset', `${Math.round(correction / 4) * 4}px`);
      };
      company.addEventListener('pointerenter', positionHint);
      company.addEventListener('focus', positionHint);
    });
  };

  // Update copy in place so scroll, image loading, reveal states and listeners survive.
  window.applyAboutLocale = function (nextLocale) {
    const target = document.getElementById('about-content');
    const locale = nextLocale === 'en' ? 'en' : 'ru';
    const copy = window.PORTFOLIO_ABOUT_COPY?.[locale];
    if (!target || !copy) return false;

    const setText = (node, value) => {
      if (!node) return;
      const text = String(value);
      if (node.childNodes.length === 1 && node.firstChild.nodeType === 3) {
        node.firstChild.nodeValue = text;
      } else {
        node.textContent = text;
      }
    };
    const setAttribute = (node, name, value) => {
      if (node) node.setAttribute(name, value);
    };
    const setLines = (node, lines) => {
      if (!node) return;
      const textNodes = Array.from(node.childNodes).filter((child) => child.nodeType === 3);
      const breaks = Array.from(node.children).filter((child) => child.tagName === 'BR');
      if (textNodes.length === lines.length && breaks.length === lines.length - 1) {
        textNodes.forEach((child, index) => { child.nodeValue = lines[index]; });
      } else {
        const content = [];
        lines.forEach((line, index) => {
          if (index) content.push(document.createElement('br'));
          content.push(document.createTextNode(line));
        });
        node.replaceChildren(...content);
      }
    };

    setAttribute(target.querySelector('.about-scene'), 'aria-label', copy.sceneLabel);
    const lettering = target.querySelector('.about-lettering');
    const letteringImage = lettering?.querySelector('img');
    const letteringSrc = 'assets/about-96982.svg';
    setAttribute(lettering, 'data-lettering-locale', 'en');
    letteringImage?.removeAttribute('data-language-art');
    const artChanged = Boolean(letteringImage && letteringImage.getAttribute('src') !== letteringSrc);
    if (artChanged) letteringImage.setAttribute('src', letteringSrc);

    const playlist = target.querySelector('.about-playlist');
    setAttribute(playlist, 'title', copy.playlistTitle);
    setAttribute(playlist, 'aria-label', copy.playlistAria);
    setText(target.querySelector('.about-playlist-label'), copy.playlistLabel);
    setAttribute(target.querySelector('.about-socials'), 'aria-label', copy.socialsAria);
    const cv = target.querySelector('.about-social-cv');
    setAttribute(cv, 'aria-label', copy.cvAria);
    setText(cv, copy.cvLabel);

    target.querySelectorAll('.about-intro p').forEach((paragraph, index) => {
      if (copy.intro[index] !== undefined) setText(paragraph, copy.intro[index]);
    });
    setText(target.querySelector('.about-clients h3'), copy.clientsHeading);
    target.querySelectorAll('.about-company').forEach((company, index) => {
      const logo = logos[index];
      if (!logo) return;
      const name = copy.companyNames[logo[0]];
      setAttribute(company, 'aria-label', name);
      setText(company.querySelector('.about-company-hint'), name);
    });

    setText(target.querySelector('.about-experience h3'), copy.experienceHeading);
    target.querySelectorAll('.about-job').forEach((job, index) => {
      const entry = copy.jobs[index];
      if (!entry) return;
      const values = job.querySelectorAll('dt, dd');
      entry.forEach((value, column) => setText(values[column], value));
    });
    Object.entries(copy.photoAlt).forEach(([key, alt]) => {
      setAttribute(target.querySelector(`.about-photo-${key} img`), 'alt', alt);
    });
    const stats = target.querySelectorAll('.about-stats dd');
    setLines(stats[0], copy.designersLines);
    setLines(stats[1], copy.designersLines);
    setLines(stats[2], copy.experienceLines);
    target.querySelectorAll('.about-stats dt span').forEach((symbol) => {
      setAttribute(symbol, 'aria-label', copy.moreThan);
    });

    return { locale, letteringImage, artChanged };
  };
})();
;

/* menu-motion.js */
(function () {
  'use strict';

  // Click motion adapts the supplied React Bits RubberSegment; scroll glides
  // retain the portfolio's previous direct indicator movement.
  // The existing anchors keep navigation, focus and aria-current ownership.
  const INSET = 4;
  const DILATE = 190;
  const HANDOFF = 150;
  const LAND = 300;
  const RELAX = 160;
  const SQUASH = 4;
  const GLIDE = 500;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const mix = (from, to, progress) => from + (to - from) * progress;

  // cubic-bezier(.23, 1, .32, 1), evaluated by its time (x) coordinate.
  function dilateEase(progress) {
    const x = clamp(progress, 0, 1);
    let t = x;
    for (let i = 0; i < 6; i += 1) {
      const error = ((.73 * t - .42) * t + .69) * t - x;
      const slope = (2.19 * t - .84) * t + .69;
      t = clamp(t - error / slope, 0, 1);
    }
    return 1 - Math.pow(1 - t, 3);
  }

  // cubic-bezier(.22, 1, .36, 1), matching the previous scroll indicator.
  function glideEase(progress) {
    const x = clamp(progress, 0, 1);
    let t = x;
    for (let i = 0; i < 6; i += 1) {
      const error = ((.58 * t - .24) * t + .66) * t - x;
      const slope = (1.74 * t - .48) * t + .66;
      t = clamp(t - error / slope, 0, 1);
    }
    return 1 - Math.pow(1 - t, 3);
  }

  // A critically damped, zero-bounce landing, normalized to finish on time.
  function springEase(progress) {
    const p = clamp(progress, 0, 1);
    if (p === 0 || p === 1) return p;
    return (1 - (1 + 8 * p) * Math.exp(-8 * p)) / (1 - 9 * Math.exp(-8));
  }

  window.createRubberMenu = function createRubberMenu(nav, links, indicator, reduceMotion) {
    const items = Array.from(links || []);
    if (!nav || !indicator || !items.length) {
      return { select() {}, settle() {}, destroy() {}, get isAnimating() { return false; } };
    }

    const doc = nav.ownerDocument || document;
    const ink = doc.createElement('span');
    ink.className = 'nav-ink';
    ink.setAttribute('aria-hidden', 'true');
    const copies = items.map(() => {
      const copy = doc.createElement('span');
      copy.className = 'nav-ink-copy';
      ink.append(copy);
      return copy;
    });
    nav.classList.add('rubber-menu');
    indicator.setAttribute('aria-hidden', 'true');
    nav.append(ink);

    let selected = items.find(link => link.hasAttribute('aria-current')) || items[0];
    let slots = new Map();
    let innerWidth = 0;
    let edgeLeft = 0;
    let edgeRight = 0;
    let animation = null;
    let frame = 0;
    let destroyed = false;

    function motionSuppressed() {
      const reduce = typeof reduceMotion === 'function' ? reduceMotion()
        : typeof reduceMotion === 'boolean' ? reduceMotion : reduceMotion?.matches;
      return Boolean(reduce) || doc.documentElement.classList.contains('language-changing');
    }

    function measure() {
      innerWidth = Math.max(0, nav.clientWidth - INSET * 2);
      slots = new Map(items.map((link, index) => {
        const left = clamp(link.offsetLeft - INSET, 0, innerWidth);
        const right = clamp(link.offsetLeft + link.offsetWidth - INSET, left, innerWidth);
        const copy = copies[index];
        copy.textContent = link.textContent;
        copy.style.left = (link.offsetLeft - INSET) + 'px';
        copy.style.top = (link.offsetTop - INSET) + 'px';
        copy.style.width = link.offsetWidth + 'px';
        copy.style.height = link.offsetHeight + 'px';
        return [link, { left, right }];
      }));
    }

    function paint(left, right) {
      edgeLeft = clamp(left, 0, innerWidth);
      edgeRight = clamp(right, edgeLeft, innerWidth);
      indicator.style.transform = 'translateX(' + edgeLeft + 'px)';
      indicator.style.width = (edgeRight - edgeLeft) + 'px';
      const clip = 'inset(0 ' + Math.max(0, innerWidth - edgeRight) + 'px 0 ' + edgeLeft + 'px round 32px)';
      ink.style.clipPath = clip;
      ink.style.webkitClipPath = clip;
    }

    function stop() {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      animation = null;
      nav.removeAttribute('data-rubber-animating');
      nav.removeAttribute('data-rubber-mode');
    }

    function sample(now) {
      if (!animation) return;
      const motion = animation;
      const elapsed = Math.max(0, now - motion.started);
      if (motion.mode === 'glide') {
        const p = glideEase(elapsed / GLIDE);
        paint(mix(motion.fromLeft, motion.targetLeft, p), mix(motion.fromRight, motion.targetRight, p));
        if (elapsed >= GLIDE) stop();
        return;
      }
      if (elapsed < HANDOFF) {
        const p = dilateEase(elapsed / DILATE);
        paint(mix(motion.fromLeft, motion.unionLeft, p), mix(motion.fromRight, motion.unionRight, p));
      } else if (elapsed < HANDOFF + LAND) {
        const p = springEase((elapsed - HANDOFF) / LAND);
        paint(mix(motion.landLeft, motion.squashLeft, p), mix(motion.landRight, motion.squashRight, p));
      } else if (elapsed < HANDOFF + LAND + RELAX) {
        const p = springEase((elapsed - HANDOFF - LAND) / RELAX);
        paint(mix(motion.squashLeft, motion.targetLeft, p), mix(motion.squashRight, motion.targetRight, p));
      } else {
        paint(motion.targetLeft, motion.targetRight);
        stop();
      }
    }

    function tick(now) {
      frame = 0;
      if (destroyed) return;
      if (motionSuppressed()) {
        settle();
        return;
      }
      sample(now);
      if (animation) frame = requestAnimationFrame(tick);
    }

    function settle() {
      if (destroyed) return;
      stop();
      measure();
      const target = slots.get(selected);
      if (target) paint(target.left, target.right);
    }

    function select(link, animate = false) {
      if (destroyed || !items.includes(link)) return;
      const now = performance.now();
      // Sample the old trajectory before replacing it: repeated taps start at
      // the current two edges, even between animation frames.
      sample(now);
      stop();
      measure();
      selected = link;
      const target = slots.get(link);
      if (!target) return;
      if (!animate || motionSuppressed() || !innerWidth) {
        paint(target.left, target.right);
        return;
      }

      const fromLeft = clamp(edgeLeft, 0, innerWidth);
      const fromRight = clamp(edgeRight, fromLeft, innerWidth);
      if (Math.abs(fromLeft - target.left) < .01 && Math.abs(fromRight - target.right) < .01) {
        paint(target.left, target.right);
        return;
      }
      animation = {
        mode: animate === 'glide' ? 'glide' : 'rubber',
        started: now, fromLeft, fromRight,
        targetLeft: target.left, targetRight: target.right
      };
      if (animation.mode === 'rubber') {
        const direction = Math.sign(target.left + target.right - fromLeft - fromRight) || 1;
        const unionLeft = Math.min(fromLeft, target.left);
        const unionRight = Math.max(fromRight, target.right);
        const handoffProgress = dilateEase(HANDOFF / DILATE);
        // The leading edge lands exactly; the trailing edge compresses the
        // thumb by 4 px before relaxing. Glides skip these phases entirely.
        Object.assign(animation, {
          unionLeft, unionRight,
          landLeft: mix(fromLeft, unionLeft, handoffProgress),
          landRight: mix(fromRight, unionRight, handoffProgress),
          squashLeft: direction > 0 ? Math.min(target.right, target.left + SQUASH) : target.left,
          squashRight: direction < 0 ? Math.max(target.left, target.right - SQUASH) : target.right
        });
      }
      nav.setAttribute('data-rubber-animating', '');
      nav.setAttribute('data-rubber-mode', animation.mode);
      // Retain the currently painted edges until the next frame.
      paint(fromLeft, fromRight);
      frame = requestAnimationFrame(tick);
    }

    function destroy() {
      if (destroyed) return;
      settle();
      destroyed = true;
      ink.remove();
      nav.classList.remove('rubber-menu');
    }

    settle();
    return { select, settle, destroy, get isAnimating() { return animation !== null; } };
  };
}());
;

/* case-stack.js */
(function () {
  'use strict';

  // Finite, scroll-controlled adaptation of the supplied React Bits CardSwap.
  const STEP = 1 / 240;
  const TAU = Math.PI * 2;
  const AXES = ['x', 'y', 'z', 'r', 'p', 'e'];
  const PAD = 16;
  const SPREAD = .16;
  const BOUNCE = .45;
  const ENTER_DURATION = 700;
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const floor4 = value => Math.max(4, Math.floor(value / 4) * 4);

  function boundsOf(width, height, dx, dy, depth, perspective, count) {
    const bounds = { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity };
    for (let layer = 0; layer < count; layer += 1) {
      const projection = perspective / (perspective + layer * depth);
      for (const u of [-width / 2, width / 2]) for (const v of [-height / 2, height / 2]) {
        const x = (layer * dx * (1 + SPREAD) + u) * projection;
        const y = (-layer * dy * (1 + SPREAD) + v) * projection;
        bounds.minX = Math.min(bounds.minX, x); bounds.maxX = Math.max(bounds.maxX, x);
        bounds.minY = Math.min(bounds.minY, y); bounds.maxY = Math.max(bounds.maxY, y);
      }
    }
    return bounds;
  }

  function scalar(value, velocity, target, omega, damping, dt) {
    const steps = Math.max(1, Math.ceil(dt / STEP));
    const h = dt / steps;
    for (let step = 0; step < steps; step += 1) {
      velocity += (omega * omega * (target - value) - 2 * damping * omega * velocity) * h;
      value += velocity * h;
    }
    return [value, velocity];
  }

  window.createCaseStack = function createCaseStack({ section, stage, deck, cards, reduceMotion, onAdvance } = {}) {
    const elements = Array.from(cards || []);
    if (!section || !stage || !deck || !elements.length) {
      return { measure() {}, update() {}, skipToEnd() {}, scrollLimit: () => Infinity, exitComplete: () => true, cancelInteraction() {}, destroy() {} };
    }
    const doc = section.ownerDocument || document;
    const records = elements.map((el, index) => ({
      el, shade: el.querySelector('.case-shade'), index, direction: index % 2 ? 1 : -1,
      phase: 'rest', nudge: 0, x: 0, y: 0, z: 0, r: 0, p: index, e: 0,
      v: { x: 0, y: 0, z: 0, r: 0, p: 0, e: 0 }
    }));
    const state = {
      progress: 0, requestedProgress: 0, inView: true, initialized: false, settings: null,
      frame: 0, last: 0, destroyed: false, hovered: false, drag: null,
      spread: 0, spreadV: 0, px: 0, py: 0, pvx: 0, pvy: 0, tx: 0, ty: 0,
      introStarted: false, introComplete: false, introElapsed: 0, introLast: 0,
      suppressClickUntil: 0
    };
    const removers = [];
    const listen = (el, name, callback, options) => {
      el.addEventListener(name, callback, options);
      removers.push(() => el.removeEventListener(name, callback, options));
    };
    const reduced = () => Boolean(typeof reduceMotion === 'function' ? reduceMotion()
      : typeof reduceMotion === 'boolean' ? reduceMotion : reduceMotion?.matches);
    const frontIndex = () => state.progress >= records.length - .001
      ? records.length : Math.min(records.length - 1, Math.floor(Math.min(state.progress, records.length - 1) + .5));
    const reach = () => Math.max(state.settings.width * 1.3, (state.settings.viewportWidth + state.settings.width) / 2 + 48);

    function writeIntro() {
      const progress = clamp(state.introElapsed / ENTER_DURATION);
      const eased = 1 - Math.pow(1 - progress, 3);
      deck.style.setProperty('--case-enter-scale', (.8 + .2 * eased).toFixed(5));
      deck.style.setProperty('--case-enter-opacity', eased.toFixed(5));
      deck.setAttribute('data-case-enter-progress', progress.toFixed(5));
      if (state.introComplete) deck.setAttribute('data-case-ready', ''); else deck.removeAttribute('data-case-ready');
      if (state.introStarted && !state.introComplete) deck.setAttribute('data-case-entering', ''); else deck.removeAttribute('data-case-entering');
    }

    function finishIntro() {
      state.introStarted = true; state.introComplete = true;
      state.introElapsed = ENTER_DURATION; state.introLast = 0;
      state.progress = state.requestedProgress;
    }

    function syncIntro() {
      if (reduced()) { finishIntro(); return ''; }
      if (!state.settings) return '';
      const top = section.getBoundingClientRect().top;
      // Reset only once the whole stack is below the viewport on the way back
      // to the hero. A locale/size measurement never restarts the entrance.
      if (top >= state.settings.vh && state.requestedProgress <= .001) {
        state.introStarted = false; state.introComplete = false;
        state.introElapsed = 0; state.introLast = 0;
        state.progress = 0;
        return 'reset';
      }
      if (state.inView && !state.introStarted) {
        if (state.requestedProgress > .001) {
          // Deep links and a first return from below show the matching cards,
          // rather than replaying the first-card entrance over a later state.
          finishIntro();
          return 'skip';
        }
        if (top <= state.settings.vh * .35) {
          state.introStarted = true;
          state.introLast = performance.now();
        }
      }
      state.progress = state.introComplete ? state.requestedProgress : 0;
      return '';
    }

    function targetOf(card) {
      const s = state.settings;
      const position = Math.max(0, card.index - Math.min(state.progress, records.length - 1) + card.nudge);
      const exit = clamp(state.progress - card.index);
      const x = position * s.dx * (1 + state.spread);
      const y = -position * s.dy * (1 + state.spread);
      return {
        x: x * (1 - exit) + card.direction * reach() * exit,
        y: y * (1 - exit) + s.height * .08 * exit,
        z: -position * s.depth * (1 - exit), r: card.direction * 9 * exit,
        p: position, e: exit
      };
    }

    function write() {
      writeIntro();
      if (!state.settings) return;
      const s = state.settings;
      const front = frontIndex();
      deck.style.perspectiveOrigin = (s.width / 2 + state.px).toFixed(2) + 'px '
        + (s.height / 2 + state.py).toFixed(2) + 'px';
      deck.setAttribute('data-case-front', String(front));
      window.portfolioMedia?.prepareCases(front);
      records.forEach(card => {
        const fade = clamp((card.e - .4) / .6);
        const opacity = 1 - fade * fade * (3 - 2 * fade);
        const active = card.index === front;
        const interactive = active && state.introComplete;
        const exiting = targetOf(card).e > .001 || card.e > .001;
        card.el.style.transform = 'translate3d(' + card.x.toFixed(2) + 'px,' + card.y.toFixed(2)
          + 'px,' + card.z.toFixed(2) + 'px) rotate(' + card.r.toFixed(3) + 'deg)';
        card.el.style.opacity = opacity.toFixed(4);
        card.el.style.visibility = opacity < .001 ? 'hidden' : 'visible';
        card.el.style.zIndex = String(exiting && opacity > .001 ? 100 + card.index : 30 - card.index);
        card.el.style.cursor = card.phase === 'drag' ? 'grabbing' : 'pointer';
        card.el.style.pointerEvents = interactive && opacity > .01 ? 'auto' : 'none';
        card.el.inert = !interactive;
        card.el.tabIndex = interactive ? 0 : -1;
        card.el.setAttribute('aria-hidden', String(!interactive));
        if (active) card.el.setAttribute('data-front', ''); else card.el.removeAttribute('data-front');
        if (card.shade) card.shade.style.opacity = (.6 * .62 * clamp(card.p / Math.max(1, records.length - 1))).toFixed(4);
      });
    }

    function stop() {
      if (state.frame) cancelAnimationFrame(state.frame);
      state.frame = 0; state.last = 0; state.introLast = 0;
    }

    function snap() {
      if (!state.settings) return;
      if (reduced()) finishIntro();
      state.spread = 0; state.spreadV = 0;
      state.px = 0; state.py = 0; state.pvx = 0; state.pvy = 0;
      records.forEach(card => {
        const target = targetOf(card);
        AXES.forEach(axis => { card[axis] = target[axis]; card.v[axis] = 0; });
      });
      write();
    }

    function wake() {
      if (state.destroyed || !state.initialized || !state.inView || doc.hidden || reduced()) return;
      if (!state.frame) state.frame = requestAnimationFrame(frame);
    }

    function frame(time) {
      state.frame = 0;
      if (state.destroyed || !state.inView || doc.hidden || reduced()) { stop(); if (reduced()) snap(); return; }
      // The locale scramble takes a fixed snapshot of the text rectangles.
      // Keep their underlying card poses still, then resume the same springs.
      if (doc.documentElement.classList.contains('language-changing')) {
        state.last = 0; state.introLast = 0;
        state.frame = requestAnimationFrame(frame);
        return;
      }
      if (!state.introComplete) {
        state.last = 0;
        if (!state.introStarted) { write(); return; }
        if (state.introLast) state.introElapsed = Math.min(ENTER_DURATION,
          state.introElapsed + Math.max(0, time - state.introLast));
        state.introLast = time;
        if (state.introElapsed >= ENTER_DURATION) finishIntro();
        write();
        // Paint opacity 1 and scale 1 before starting any requested card exit.
        state.frame = requestAnimationFrame(frame);
        return;
      }
      const dt = state.last ? Math.min(.05, Math.max(0, (time - state.last) / 1000)) : 1 / 60;
      state.last = time;
      let busy = false;
      const spreadTarget = state.hovered ? SPREAD : 0;
      [state.spread, state.spreadV] = scalar(state.spread, state.spreadV, spreadTarget, TAU * 1.4, .9, dt);
      [state.px, state.pvx] = scalar(state.px, state.pvx, state.tx, TAU * 1.1, 1, dt);
      [state.py, state.pvy] = scalar(state.py, state.pvy, state.ty, TAU * 1.1, 1, dt);
      if (Math.abs(state.spread - spreadTarget) + Math.abs(state.spreadV) > .0005
        || Math.abs(state.px - state.tx) + Math.abs(state.py - state.ty) + Math.abs(state.pvx) + Math.abs(state.pvy) > .05) busy = true;
      records.forEach(card => {
        if (card.phase === 'drag') return;
        const target = targetOf(card);
        const exiting = target.e > .001;
        const omega = TAU * (exiting ? 1.9 : 1.7);
        const damping = exiting ? 1 : 1 - .72 * BOUNCE;
        AXES.forEach(axis => {
          [card[axis], card.v[axis]] = scalar(card[axis], card.v[axis], target[axis], omega, damping, dt);
          const limit = axis === 'p' || axis === 'e' ? .001 : .02;
          if (Math.abs(target[axis] - card[axis]) > limit || Math.abs(card.v[axis]) > limit) busy = true;
          else { card[axis] = target[axis]; card.v[axis] = 0; }
        });
      });
      write();
      if (busy) state.frame = requestAnimationFrame(frame); else state.last = 0;
    }

    function cancelInteraction() {
      const drag = state.drag;
      state.drag = null;
      records.forEach(card => { card.nudge = 0; });
      if (drag) {
        const card = records[drag.index];
        card.phase = 'rest';
        if (drag.active) state.suppressClickUntil = performance.now() + 450;
        try { if (card.el.hasPointerCapture?.(drag.id)) card.el.releasePointerCapture(drag.id); } catch (_) {}
      }
      state.hovered = false; state.tx = 0; state.ty = 0;
      write();
      if (reduced()) { stop(); snap(); } else wake();
    }

    function measure({ width, vh, mobile } = {}) {
      if (state.destroyed) return;
      width = Math.max(80, Number(width) || window.innerWidth);
      vh = Math.max(160, Number(vh) || window.innerHeight);
      mobile = mobile === undefined ? width < 1024 : Boolean(mobile);
      const baseWidth = mobile ? width - 40 : 1040;
      const baseHeight = mobile ? baseWidth * 16 / 9 : 568;
      const dy = mobile ? 48 : 64;
      const gutter = mobile ? 20 : width < 1200 ? 40 : 64;
      const availableTop = mobile ? 100 : vh < 740 ? 108 : 128;
      const availableBottom = vh - (mobile ? 100 : vh < 740 ? 104 : 120);
      const base = boundsOf(baseWidth, baseHeight, 8, dy, 96, 900, records.length);
      const scale = Math.max(.01, Math.min(1,
        Math.max(4, width - gutter * 2 - PAD * 2) / (base.maxX - base.minX),
        // Reserve one grid step for rounding the front's top upward.
        Math.max(4, availableBottom - availableTop - PAD * 2 - 4) / (base.maxY - base.minY)));
      const settings = {
        width: floor4(baseWidth * scale), height: floor4(baseHeight * scale),
        dx: 8 * scale, dy: dy * scale, depth: 96 * scale, perspective: 900 * scale,
        scale, viewportWidth: width, vh, mobile
      };
      const bounds = boundsOf(settings.width, settings.height, settings.dx, settings.dy, settings.depth, settings.perspective, records.length);
      const top = Math.ceil((availableTop + PAD - bounds.minY - settings.height / 2) / 4) * 4;
      const previous = state.settings;
      const changed = previous && (previous.width !== settings.width || previous.height !== settings.height || previous.perspective !== settings.perspective);
      if (changed && state.drag) cancelInteraction();
      state.settings = settings;
      if (previous && changed) {
        const sx = settings.width / previous.width, sy = settings.height / previous.height, sz = settings.perspective / previous.perspective;
        records.forEach(card => {
          card.x *= sx; card.v.x *= sx; card.y *= sy; card.v.y *= sy; card.z *= sz; card.v.z *= sz;
        });
        state.px *= sx; state.pvx *= sx; state.py *= sy; state.pvy *= sy;
        state.tx *= sx; state.ty *= sy;
      }
      section.style.setProperty('--case-width', settings.width + 'px');
      section.style.setProperty('--case-height', settings.height + 'px');
      section.style.setProperty('--case-perspective', settings.perspective + 'px');
      section.style.setProperty('--case-stack-top', top + 'px');
      section.style.setProperty('--case-stack-scale', String(scale));
      if (!state.initialized || reduced() || !state.inView) snap(); else write();
      state.initialized = true;
      wake();
      return { ...settings, top, availableTop, availableBottom, gutter, bounds };
    }

    function update(progress, inView = true) {
      if (state.destroyed) return;
      state.requestedProgress = clamp(Number(progress) || 0, 0, records.length);
      state.inView = Boolean(inView);
      const entrance = syncIntro();
      if (state.drag && (frontIndex() !== state.drag.index || !state.inView)) cancelInteraction();
      write();
      if (reduced() || !state.inView || entrance === 'skip') {
        stop(); snap();
        if (!reduced() && state.inView) wake();
      } else wake();
    }

    function cardFrom(event) {
      const el = event.target?.closest?.('.case-card');
      return records.find(card => card.el === el);
    }

    function moveDrag(event) {
      const drag = state.drag;
      if (!drag || drag.id !== event.pointerId) return;
      const dx = event.clientX - drag.startX, dy = event.clientY - drag.startY;
      if (!drag.active) {
        if (Math.abs(dy) > 8 && Math.abs(dy) > Math.abs(dx) * 1.15) { state.drag = null; return; }
        if (Math.abs(dx) <= 8 || Math.abs(dx) <= Math.abs(dy) * 1.15) return;
        drag.active = true;
        const card = records[drag.index];
        drag.base = { x: card.x, y: card.y, z: card.z, r: card.r };
        card.phase = 'drag';
        AXES.forEach(axis => { card.v[axis] = 0; });
        try { card.el.setPointerCapture(event.pointerId); } catch (_) {}
        drag.samples = [{ x: card.x, y: card.y, t: drag.started }];
      }
      if (event.cancelable) event.preventDefault();
      const card = records[drag.index];
      card.x = drag.base.x + dx;
      card.y = drag.base.y + dy * .25;
      card.z = drag.base.z;
      card.r = drag.base.r + clamp(dx * .035, -9, 9);
      const now = performance.now();
      drag.samples.push({ x: card.x, y: card.y, t: now });
      while (drag.samples.length > 2 && now - drag.samples[0].t > 90) drag.samples.shift();
      const next = records[drag.index + 1];
      if (next) next.nudge = -.22 * clamp(Math.abs(dx) / (Math.min(state.settings.width, state.settings.height) * .3));
      write(); wake();
    }

    function advance(card, direction, velocity = { x: 0, y: 0 }, keyboard = false) {
      const next = Math.min(records.length, card.index + 1);
      card.direction = direction;
      card.phase = 'rest'; card.v.x = velocity.x; card.v.y = velocity.y;
      card.v.e = Math.max(0, direction * velocity.x / reach());
      state.progress = next; state.requestedProgress = next;
      records.forEach(item => { item.nudge = 0; });
      write();
      if (reduced()) { stop(); snap(); } else wake();
      if (records[next] && (keyboard || doc.activeElement === card.el)) records[next].el.focus?.({ preventScroll: true });
      if (typeof onAdvance === 'function') onAdvance(next, direction);
    }

    function onDown(event) {
      if (state.destroyed || !state.introComplete || state.drag || !state.settings || !state.inView || event.button > 0
        || doc.documentElement.classList.contains('language-changing')) return;
      const card = cardFrom(event);
      if (!card || card.index !== frontIndex()) return;
      state.drag = { id: event.pointerId, index: card.index, startX: event.clientX, startY: event.clientY,
        started: performance.now(), active: false, samples: [] };
    }

    function onMove(event) {
      if (!state.settings || !state.introComplete || state.destroyed || doc.documentElement.classList.contains('language-changing')) return;
      if (event.pointerType !== 'touch' && !reduced()) {
        const box = stage.getBoundingClientRect();
        const nx = clamp((event.clientX - box.left) / Math.max(1, box.width) * 2 - 1, -1, 1);
        const ny = clamp((event.clientY - box.top) / Math.max(1, box.height) * 2 - 1, -1, 1);
        const s = state.settings;
        const bounds = boundsOf(s.width, s.height, s.dx, s.dy, s.depth, s.perspective, records.length);
        const farProjection = s.perspective / (s.perspective + (records.length - 1) * s.depth);
        state.tx = nx * .55 * .35 * (bounds.maxX - bounds.minX);
        // Keep even the farthest projected layer within the reserved 16 px.
        const maxY = PAD / Math.max(.001, 1 - farProjection);
        state.ty = clamp(ny * .55 * .35 * (bounds.maxY - bounds.minY), -maxY, maxY);
        state.hovered = true;
        wake();
      }
      moveDrag(event);
    }

    function onUp(event) {
      const drag = state.drag;
      if (!drag || drag.id !== event.pointerId) return;
      state.drag = null;
      const card = records[drag.index];
      if (!drag.active) return;
      state.suppressClickUntil = performance.now() + 450;
      try { if (card.el.hasPointerCapture?.(drag.id)) card.el.releasePointerCapture(drag.id); } catch (_) {}
      card.phase = 'rest';
      const first = drag.samples[0], last = drag.samples[drag.samples.length - 1];
      const seconds = first && last ? Math.max(.016, (last.t - first.t) / 1000) : 1;
      const recent = last && performance.now() - last.t <= 90;
      const velocity = {
        x: recent && first ? clamp((last.x - first.x) / seconds, -2400, 2400) : 0,
        y: recent && first ? clamp((last.y - first.y) / seconds, -1200, 1200) : 0
      };
      const offset = card.x - drag.base.x;
      const accepted = event.type !== 'pointercancel' && (Math.abs(offset) > Math.min(state.settings.width, state.settings.height) * .3 || Math.abs(velocity.x) > 700);
      if (accepted) advance(card, Math.sign(offset + velocity.x * .12) || Math.sign(offset) || card.direction, velocity);
      else { records.forEach(item => { item.nudge = 0; }); write(); if (reduced()) snap(); else wake(); }
    }

    function onClick(event) {
      const card = cardFrom(event);
      if (state.introComplete && card && card.index === frontIndex()) {
        card.el.dispatchEvent(new CustomEvent('portfolio:caseactivate', { bubbles: true, detail: { index: card.index } }));
      }
    }

    function onKey(event) {
      const card = cardFrom(event);
      if (!state.introComplete || !card || card.index !== frontIndex() || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault(); event.stopPropagation();
      cancelInteraction();
      advance(card, event.key === 'ArrowLeft' ? -1 : 1, { x: 0, y: 0 }, true);
    }

    // These capture listeners are registered before the app's outside-click
    // handler. A drag's synthetic click must not cancel its queued advance.
    listen(window, 'pointerdown', () => { state.suppressClickUntil = 0; }, { capture: true, passive: true });
    listen(window, 'click', event => {
      const suppress = state.suppressClickUntil > performance.now();
      state.suppressClickUntil = 0;
      if (suppress) { event.preventDefault(); event.stopImmediatePropagation(); }
    }, { capture: true });
    listen(deck, 'pointerdown', onDown);
    listen(stage, 'pointermove', onMove, { passive: false });
    listen(stage, 'pointerleave', () => { if (!state.drag?.active) { state.hovered = false; state.tx = 0; state.ty = 0; wake(); } });
    listen(deck, 'pointerup', onUp);
    listen(deck, 'pointercancel', onUp);
    listen(deck, 'lostpointercapture', () => { if (state.drag?.active) cancelInteraction(); });
    listen(deck, 'click', onClick);
    listen(deck, 'keydown', onKey);
    listen(doc, 'visibilitychange', () => { if (doc.hidden) { cancelInteraction(); stop(); } else wake(); });
    if (reduceMotion?.addEventListener) listen(reduceMotion, 'change', () => { cancelInteraction(); if (reduced()) { stop(); snap(); } else wake(); });

    function destroy() {
      if (state.destroyed) return;
      cancelInteraction(); stop(); state.destroyed = true;
      removers.forEach(remove => remove());
    }

    // Native scrolling may request a whole scene in a single wheel/touch fling.
    // Admit one departure at a time, dropping excess momentum instead of
    // queuing it. Normal scrolling remains tied to the document position.
    function scrollLimit() {
      if (reduced()) return Infinity;
      if (!state.introComplete) return 0;
      const pending = records.find(card => card.e < .985);
      return pending ? pending.index + 1 : Infinity;
    }

    function exitComplete() { return reduced() || records[records.length - 1].e >= .985; }

    function skipToEnd() {
      if (state.destroyed) return;
      cancelInteraction();
      stop();
      state.requestedProgress = records.length;
      finishIntro();
      state.inView = false;
      snap();
    }

    writeIntro();
    return { measure, update, skipToEnd, scrollLimit, exitComplete, cancelInteraction, destroy };
  };
}());
;

/* app.js */
(function () {
  'use strict';
  const config = window.PORTFOLIO || { links: {} };
  let copy = window.PORTFOLIO_COPY;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const round4 = value => Math.round(value / 4) * 4;
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const mix = (a, b, p) => a + (b - a) * p;
  window.renderProjects?.();
  window.renderAbout?.();
  window.portfolioMedia?.observe();

  document.querySelectorAll('[data-link]').forEach(control => {
    const url = config.links[control.dataset.link];
    if (url) {
      if (control.tagName === 'A') {
        control.href = url;
        control.target = '_blank';
        control.rel = 'noopener noreferrer';
      } else {
        control.addEventListener('click', () => window.open(url, '_blank', 'noopener,noreferrer'));
      }
      control.removeAttribute('aria-disabled');
    } else {
      control.setAttribute('aria-disabled', 'true');
      control.title = copy.linkSoon;
      control.addEventListener('click', event => event.preventDefault());
    }
  });

  const poster = document.querySelector('.hero-poster');
  let introStarted = false;
  function introduce() {
    if (introStarted) return;
    introStarted = true;
    if (window.PORTFOLIO_INTRO_READY) return;
    window.setTimeout(() => document.documentElement.classList.add('is-introduced'), reduceMotion.matches ? 0 : 1000);
  }
  if (poster.complete) introduce(); else {
    poster.addEventListener('load', introduce, { once: true });
    poster.addEventListener('error', introduce, { once: true });
  }
  const posterReady = window.PORTFOLIO_HERO_READY || (poster.complete ? Promise.resolve() : new Promise(resolve => {
    poster.addEventListener('load', resolve, { once: true });
    poster.addEventListener('error', resolve, { once: true });
  }));

  // A static image is always present. Video is optional and never blocks the page.
  const video = document.querySelector('.hero-video');
  let posterUntil = 0;
  let resetAfterFadeAt = 0;
  let replayTimer = 0;
  let videoInView = true;
  let heroStartAllowed = !/^#(?:cases|projects|about|contact)$/.test(location.hash);
  let wasBelowHero = window.scrollY >= document.querySelector('.hero').offsetHeight;
  let videoLoaded = false;
  let videoSourceSet = false;
  let videoPreparing = false;
  let videoFrameId = null;
  const videoFadeMs = (config.videoFade ?? .5) * 1000;
  video.style.setProperty('--hero-video-fade', (config.videoFade ?? .5) + 's');
  function videoVisible() {
    return heroStartAllowed && window.scrollY < document.querySelector('.hero').offsetHeight && videoInView
      && !document.hidden && !reduceMotion.matches && !navigator.connection?.saveData;
  }
  function playVideo() {
    if (!videoLoaded || !videoVisible()) return;
    video.play().catch(() => {});
  }
  function reconcileVideo() {
    clearTimeout(replayTimer);
    if (!config.heroVideo || !videoVisible()) { video.pause(); return; }
    if (!videoSourceSet) { prepareVideo(); return; }
    const now = performance.now();
    if (resetAfterFadeAt) {
      if (now < resetAfterFadeAt) {
        replayTimer = window.setTimeout(reconcileVideo, resetAfterFadeAt - now);
        return;
      }
      resetAfterFadeAt = 0;
      video.currentTime = 0;
      video.dataset.playbackState = 'poster';
    }
    if (posterUntil > now) {
      replayTimer = window.setTimeout(reconcileVideo, posterUntil - now);
      return;
    }
    posterUntil = 0;
    playVideo();
  }
  function returnToPoster() {
    if (posterUntil) return;
    video.pause();
    if (videoFrameId !== null) {
      video.cancelVideoFrameCallback(videoFrameId);
      videoFrameId = null;
    }
    video.classList.remove('is-ready');
    video.dataset.playbackState = 'poster-transition';
    video.dataset.completedPlays = String(Number(video.dataset.completedPlays || 0) + 1);
    // Rewind only after the video has faded away, then hold the unobscured poster.
    resetAfterFadeAt = performance.now() + videoFadeMs;
    posterUntil = resetAfterFadeAt + (config.videoPause ?? 2) * 1000;
    reconcileVideo();
  }
  function showVideoFrame() {
    video.classList.add('is-ready');
    video.dataset.playbackState = 'playing';
  }
  function watchVideoFrame(now, frame) {
    videoFrameId = null;
    if (!posterUntil && !video.ended && !video.classList.contains('is-ready')) showVideoFrame();
    if (!video.paused && !video.ended) videoFrameId = video.requestVideoFrameCallback(watchVideoFrame);
  }
  function prepareVideo() {
    if (!config.heroVideo || videoSourceSet || videoPreparing || !videoVisible()) return;
    videoPreparing = true;
    // Finish the first screen before spending bandwidth on the optional clip.
    Promise.all([posterReady, window.PORTFOLIO_INTRO_READY || Promise.resolve()]).then(() => requestAnimationFrame(() => {
      videoPreparing = false;
      if (videoSourceSet || !videoVisible()) return;
      videoSourceSet = true;
      video.dataset.playbackState = 'loading';
      video.preload = 'auto';
      const source = window.matchMedia('(max-width:1023px)').matches
        ? config.heroVideoMobile || config.heroVideo : config.heroVideo;
      video.src = window.portfolioMedia?.asset(source) || source;
      video.load();
    }));
  }
  video.addEventListener('canplaythrough', () => { videoLoaded = true; reconcileVideo(); });
  video.addEventListener('progress', () => {
    if (video.duration && video.buffered.length && video.buffered.end(video.buffered.length - 1) >= video.duration - .1) {
      videoLoaded = true;
      reconcileVideo();
    }
  });
  video.addEventListener('playing', () => {
    video.dataset.playbackState = 'playing';
    if (typeof video.requestVideoFrameCallback === 'function') {
      if (videoFrameId !== null) video.cancelVideoFrameCallback(videoFrameId);
      videoFrameId = video.requestVideoFrameCallback(watchVideoFrame);
    } else requestAnimationFrame(() => requestAnimationFrame(showVideoFrame));
  });
  video.addEventListener('ended', returnToPoster);
  video.addEventListener('error', () => {
    video.classList.remove('is-ready');
    video.dataset.playbackState = 'error';
  });
  prepareVideo();
  document.addEventListener('visibilitychange', reconcileVideo);

  // Reveals change opacity only; each item has a small independent delay.
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const crossedTop = entry.boundingClientRect.top < (entry.rootBounds?.top ?? 0);
      const inView = entry.isIntersecting && entry.intersectionRatio >= .08;
      entry.target.classList.toggle('is-visible', crossedTop || inView);
    }
  }, { rootMargin: '0px 0px -48px 0px', threshold: [0, .08] });
  reveals.forEach(element => revealObserver.observe(element));

  const nav = document.querySelector('.bottom-nav');
  const navLinks = [...nav.querySelectorAll('a')];
  const indicator = document.querySelector('.nav-indicator');
  const menuMotion = window.createRubberMenu?.(nav, navLinks, indicator, reduceMotion);
  const sections = [...document.querySelectorAll('[data-section]')];
  const casesSection = document.querySelector('.cases');
  const caseCards = [...document.querySelectorAll('.case-card')];
  const caseStack = window.createCaseStack?.({
    section: casesSection,
    stage: casesSection.querySelector('.cases-stage'),
    deck: casesSection.querySelector('.cases-cards'),
    cards: caseCards,
    reduceMotion,
    onAdvance: nextIndex => advanceCaseStack(nextIndex)
  });
  const contact = document.querySelector('.contact-link');
  const origin = document.querySelector('.contact-origin');
  const target = document.querySelector('.contact-target');
  const contactText = document.querySelector('.contact-text');
  const contactIcon = document.querySelector('.contact-icon');
  const languageSwitch = document.querySelector('.language-switch');
  let menuScrollFrame = null;
  let menuNavigationTarget = null;
  let caseAdvanceFrame = 0;
  // Intercept a case boundary before native forward input. Never correct an
  // already-scrolled document: menu jumps, touch inertia and history stay native.
  function guardCaseInput(event, delta) {
    if (!metrics.vh || menuScrollFrame !== null || caseAdvanceFrame || !event.cancelable || event.defaultPrevented) return;
    const y = window.scrollY;
    const top = casesSection.getBoundingClientRect().top + y;
    const end = top + metrics.caseHold + metrics.caseStep * caseCards.length;
    if (y > end + 1) return;
    const limit = caseStack?.scrollLimit() ?? Infinity;
    if (!Number.isFinite(limit)) return;
    const maximum = top + metrics.caseHold + limit * metrics.caseStep;
    if (y >= maximum) { event.preventDefault(); return; }
    if (y + delta > maximum) {
      event.preventDefault();
      window.scrollTo({ top: maximum, behavior: 'instant' });
      scheduleFrame();
    }
  }
  window.addEventListener('wheel', event => {
    if (event.ctrlKey || event.metaKey || event.deltaY <= Math.abs(event.deltaX)) return;
    const delta = event.deltaY * (event.deltaMode === 1 ? 32 : event.deltaMode === 2 ? metrics.vh : 1);
    guardCaseInput(event, delta);
  }, { passive: false });
  window.addEventListener('keydown', event => {
    if (['ArrowDown', 'PageDown', ' '].includes(event.key) && !event.shiftKey
      && !event.ctrlKey && !event.metaKey && !event.altKey
      && !event.target.closest?.('input,textarea,select,button,a,[contenteditable="true"]')) {
      guardCaseInput(event, event.key === 'ArrowDown' ? 40 : metrics.vh);
    }
  }, { passive: false });
  function cancelMenuScroll() {
    if (caseAdvanceFrame) cancelAnimationFrame(caseAdvanceFrame);
    caseAdvanceFrame = 0;
    if (menuScrollFrame !== null) cancelAnimationFrame(menuScrollFrame);
    menuScrollFrame = null;
    const hadTarget = menuNavigationTarget !== null;
    menuNavigationTarget = null;
    if (hadTarget) scheduleFrame();
  }
  function completeMenuScroll() {
    menuScrollFrame = null;
    menuNavigationTarget = null;
    scheduleFrame();
  }
  function advanceCaseStack(nextIndex) {
    cancelMenuScroll();
    const vh = metrics.vh || round4(window.innerHeight);
    const hold = metrics.caseHold ?? round4(vh * .6);
    const step = metrics.caseStep ?? round4(vh * 1.4);
    const top = casesSection.getBoundingClientRect().top + window.scrollY;
    const index = clamp(nextIndex, 0, caseCards.length);
    // Align the scroll scene while the heading is pinned. The existing card
    // elements retain their spring state, so the released card keeps flying.
    window.scrollTo({ top: top + hold + index * step, behavior: 'instant' });
    caseStack?.update(index, true);
    scheduleFrame();
    if (index === caseCards.length) {
      function leaveAfterFlight() {
        caseAdvanceFrame = 0;
        if (caseStack && !caseStack.exitComplete()) { caseAdvanceFrame = requestAnimationFrame(leaveAfterFlight); return; }
        scrollToMenuSection('#projects');
      }
      caseAdvanceFrame = requestAnimationFrame(leaveAfterFlight);
    }
  }
  function scrollToMenuSection(hash, animate = true, fromMenu = false) {
    const section = hash === '#me' ? null : document.getElementById(hash.slice(1));
    if (hash !== '#me' && !section) return;
    cancelMenuScroll();
    if (fromMenu) {
      menuNavigationTarget = hash.slice(1);
      selectSection(menuNavigationTarget, animate && !reduceMotion.matches);
    }
    const start = Math.max(0, window.scrollY);
    const maximum = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const destination = clamp(section ? section.getBoundingClientRect().top + window.scrollY : 0, 0, maximum);
    const distance = Math.abs(destination - start);
    const casesTop = casesSection.getBoundingClientRect().top + window.scrollY;
    const pinnedDistance = Math.max(0, casesSection.offsetHeight - casesSection.querySelector('.cases-stage').offsetHeight);
    const skipsCases = destination >= casesTop + pinnedDistance;
    if (!animate || reduceMotion.matches || distance < 1) {
      if (skipsCases) caseStack?.skipToEnd();
      window.scrollTo({ top: destination, behavior: 'instant' });
      completeMenuScroll();
      return;
    }

    const direction = destination > start ? 1 : -1;
    const skipLow = Math.max(Math.min(start, destination), casesTop);
    const skipHigh = Math.min(Math.max(start, destination), casesTop + pinnedDistance);
    const skipDistance = Math.max(0, skipHigh - skipLow);
    const beforeSkip = direction > 0 ? skipLow - start : start - skipHigh;
    const travelDistance = distance - skipDistance;
    if (travelDistance < 1) {
      if (skipsCases) caseStack?.skipToEnd();
      window.scrollTo({ top: destination, behavior: 'instant' });
      completeMenuScroll();
      return;
    }

    // Section links take the same short time at every distance. The pinned
    // card sequence is crossed in one frame, keeping its entrance and exit.
    const duration = 560;
    let startedAt = null;
    let crossedCases = false;
    function step(now) {
      if (startedAt === null) startedAt = now;
      const progress = clamp((now - startedAt) / duration);
      const eased = progress < .5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
      const travelled = travelDistance * eased;
      const skipped = skipDistance && travelled > beforeSkip ? skipDistance : 0;
      if (!crossedCases && direction > 0 && skipped && skipsCases) {
        caseStack?.skipToEnd();
        crossedCases = true;
      }
      window.scrollTo({ top: progress === 1 ? destination : start + direction * (travelled + skipped), behavior: 'instant' });
      if (progress < 1) menuScrollFrame = requestAnimationFrame(step);
      else completeMenuScroll();
    }
    menuScrollFrame = requestAnimationFrame(step);
  }
  function returnToTop(behavior) { scrollToMenuSection('#me', behavior === 'smooth'); }
  navLinks.forEach(link => link.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    scrollToMenuSection(link.hash, true, true);
  }));
  ['wheel', 'touchstart', 'touchmove', 'pointerdown', 'keydown', 'resize'].forEach(type => {
    window.addEventListener(type, event => {
      const insideMenu = event.target instanceof Node && nav.contains(event.target);
      // Retarget atomically on click, keeping the current stretched shape
      // between a menu pointer-down and its corresponding click.
      if (insideMenu && (type === 'pointerdown' || type === 'touchstart' || (type === 'keydown' && event.key === 'Enter'))) return;
      cancelMenuScroll();
      const continuingScrollGlide = (type === 'wheel' || type === 'touchmove') && nav.getAttribute('data-rubber-mode') === 'glide';
      if (!continuingScrollGlide) menuMotion?.settle();
    }, { passive: true });
  });
  window.addEventListener('click', event => {
    if (event.target instanceof Node && !nav.contains(event.target)) {
      cancelMenuScroll();
      menuMotion?.settle();
    }
  }, { capture: true });
  reduceMotion.addEventListener('change', () => { cancelMenuScroll(); menuMotion?.settle(); });
  window.addEventListener('hashchange', () => {
    cancelMenuScroll();
    if (location.hash === '#me') returnToTop(reduceMotion.matches ? 'instant' : 'smooth');
  });
  window.addEventListener('popstate', () => { cancelMenuScroll(); menuMotion?.settle(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { cancelMenuScroll(); menuMotion?.settle(); } });
  window.addEventListener('pageshow', () => { if (location.hash === '#me') returnToTop('instant'); });
  let currentSection = '';
  let pendingFrame = false;
  let metrics = {};
  let contactProgress = 0;
  let previousFrame = 0;

  function updateIndicator(animate = false) {
    const link = navLinks.find(item => item.hasAttribute('aria-current')) || navLinks[0];
    if (menuMotion) { menuMotion.select(link, animate); return; }
    indicator.style.width = link.offsetWidth + 'px';
    indicator.style.transform = 'translateX(' + (link.offsetLeft - 4) + 'px)';
  }
  function selectSection(id, animate = false) {
    currentSection = id;
    navLinks.forEach(link => {
      if (link.hash === '#' + id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    updateIndicator(animate);
  }
  function measure() {
    const width = window.innerWidth;
    const vh = round4(window.innerHeight);
    const mobile = width < 1024;
    document.documentElement.style.setProperty('--viewport-height', vh + 'px');
    document.documentElement.style.setProperty('--layout-width', Math.min(1440, round4(width)) + 'px');
    const heroSize = mobile ? clamp(round4(width * 64 / 440), 44, vh <= 640 ? 56 : 64) : clamp(round4(Math.min(width, 1440) * 124 / 1440), 80, 124);
    document.documentElement.style.setProperty('--hero-short-image-height', round4(clamp(720 - (width - 320) * .5, 640, 720)) + 'px');
    document.documentElement.style.setProperty('--hero-name-size', heroSize + 'px');
    document.documentElement.style.setProperty('--hero-name-line', round4(heroSize * .942) + 'px');
    const caseHold = round4(vh * .6);
    const caseStep = round4(vh * 1.4);
    // Equal flights; the sticky stage releases exactly at the last one.
    casesSection.style.setProperty('--case-scroll-height', (vh + caseHold + caseStep * caseCards.length) + 'px');
    caseStack?.measure({ width, vh, mobile });
    // Fit the perspective lettering inside the actual mobile column.
    const scene = document.querySelector('.about-scene');
    const sceneCanvas = document.querySelector('.about-scene-canvas');
    if (mobile && scene && sceneCanvas) {
      const scale = Math.min(.6, (scene.clientWidth - 8) / 656);
      sceneCanvas.style.transform = 'translateX(-50%) scale(' + scale + ')';
      scene.style.height = round4(672 * scale + 32) + 'px';
    } else if (scene && sceneCanvas) {
      sceneCanvas.style.removeProperty('transform');
      scene.style.removeProperty('height');
    }
    metrics = { vh, mobile, caseHold, caseStep };
    updateIndicator();
    scheduleFrame();
  }
  function update(frameTime) {
    pendingFrame = false;
    const scrollY = window.scrollY;
    const { vh, mobile, caseHold, caseStep } = metrics;
    if (!vh) return;
    const caseRect = casesSection.getBoundingClientRect();
    const sectionPositions = sections.map(section => ({ id: section.dataset.section || section.id, top: section.dataset.section === 'me' ? 0 : section.getBoundingClientRect().top }));
    let active = 'me';
    for (const section of sectionPositions) if (section.top <= vh * .48) active = section.id;
    const selectedSection = menuNavigationTarget || active;
    if (selectedSection !== currentSection) selectSection(selectedSection, 'glide');

    caseStack?.update(clamp((-caseRect.top - caseHold) / caseStep, 0, caseCards.length), caseRect.top < vh && caseRect.bottom > 0);

    // The same link moves from its dock slot into the footer slot, in both directions.
    const from = origin.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    // Twice the original scroll distance, plus gentle settling on fast scrolls.
    const morphDistance = to.height * 2;
    const targetProgress = clamp((navRect.top - 64 + to.height - to.top) / morphDistance);
    const frameSeconds = previousFrame ? Math.min((frameTime - previousFrame) / 1000, .064) : 1 / 60;
    previousFrame = frameTime;
    contactProgress = reduceMotion.matches ? targetProgress : mix(contactProgress, targetProgress, 1 - Math.exp(-frameSeconds / .18));
    if (Math.abs(targetProgress - contactProgress) < .0001) contactProgress = targetProgress;
    else scheduleFrame();
    const p = contactProgress;
    const languageHash = targetProgress >= 1 ? '#contact' : '#' + active;
    const languageHref = copy.otherPage + languageHash;
    if (languageSwitch.getAttribute('href') !== languageHref) languageSwitch.setAttribute('href', languageHref);
    const curve = p * p * (3 - 2 * p);
    const finalFont = clamp(round4(100 * to.width / 980), 28, 100);
    const finalIcon = round4(120 * to.width / 980);
    const iconSize = mix(20, finalIcon, curve);
    contact.style.left = mix(from.left, to.left, curve) + 'px';
    contact.style.top = Math.min(mix(from.top, to.top, curve), from.bottom - mix(from.height, to.height, curve)) + 'px';
    contact.style.right = 'auto';
    contact.style.bottom = 'auto';
    contact.style.width = mix(from.width, to.width, curve) + 'px';
    contact.style.height = mix(from.height, to.height, curve) + 'px';
    contact.style.borderRadius = mix(32, to.height / 2, curve) + 'px';
    contact.style.fontSize = mix(16, finalFont, curve) + 'px';
    contact.style.gap = mix(mobile ? 0 : 8, mobile ? 12 : 48, curve) + 'px';
    contactIcon.style.width = iconSize + 'px';
    contactIcon.style.height = iconSize + 'px';
    contact.style.setProperty('--contact-icon-scale', mix(1, finalIcon / 16, curve));
    contactText.style.opacity = String(mobile ? clamp(curve * 4) : 1);
    contactText.style.maxWidth = mobile ? mix(0, to.width * .72, curve) + 'px' : '';
    nav.style.transform = 'translateX(' + ((from.width + 8) / 2 * curve) + 'px)';
    const nextVideoInView = scrollY < document.querySelector('.hero').offsetHeight;
    if (!nextVideoInView) wasBelowHero = true;
    else if (wasBelowHero) heroStartAllowed = true;
    if (nextVideoInView !== videoInView) { videoInView = nextVideoInView; reconcileVideo(); }
  }
  function scheduleFrame() { if (!pendingFrame) { pendingFrame = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', scheduleFrame, { passive: true });
  navLinks.find(link => link.hash === '#me')?.addEventListener('click', () => {
    heroStartAllowed = true;
    scheduleFrame();
    reconcileVideo();
  });
  window.addEventListener('resize', measure, { passive: true });
  window.addEventListener('portfolio:localechange', () => {
    cancelMenuScroll();
    copy = window.PORTFOLIO_COPY;
    measure();
  });
  reduceMotion.addEventListener('change', () => { prepareVideo(); reconcileVideo(); measure(); });
  document.fonts.ready.then(measure);
  window.PORTFOLIO_STYLES_READY?.then(() => document.fonts.ready).then(measure);
  document.querySelectorAll('img').forEach(image => { if (!image.complete) image.addEventListener('load', scheduleFrame, { once: true }); });
  measure();
})();
;

/* language-switch.js */
/* Click-driven adaptation of the supplied React Bits ScrambledText reference.
   Like the reference, .: glyphs retain each letter's width. No hover triggers,
   framework migration or rebuilding of the document/media is needed. */
(function () {
  'use strict';
  const switcher = document.querySelector('.language-switch');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const selectors = '.hero-facts,.hero-name,.section-heading,.bottom-nav a,.contact-text,.language-switch,.case-meta,.case-brand,.case-copy h3,.project-caption strong,.project-caption > span,.about-playlist-label,.about-intro p,.about-layout h3,.about-job dt,.about-job dd,.about-stats dd';
  const status = document.createElement('span');
  status.className = 'language-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  document.body.append(status);
  let transition = null;
  let requestedLocale = window.PORTFOLIO_LOCALE;
  let preparation = 0;
  let measuredWidth = 0;

  const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
  const lines = values => values.map(escape).join('<br>');
  const round4 = value => Math.ceil(value / 4) * 4;

  // Reserve both translations' line counts before a switch. Text above the
  // viewport therefore cannot move the photographs or clamp a footer scroll.
  function reserveBilingualSpace() {
    const container = document.createElement('div');
    container.className = 'language-measure';
    container.setAttribute('aria-hidden', 'true');
    document.body.append(container);
    const reserve = (element, variants) => {
      if (!element) return;
      const style = getComputedStyle(element);
      const clone = element.cloneNode(false);
      clone.removeAttribute('id');
      Object.assign(clone.style, {
        position: 'relative', display: 'block', width: element.getBoundingClientRect().width + 'px',
        height: 'auto', minHeight: '0', maxHeight: 'none', margin: '0',
        font: style.font, letterSpacing: style.letterSpacing, wordSpacing: style.wordSpacing,
        textTransform: style.textTransform, whiteSpace: style.whiteSpace,
        overflowWrap: style.overflowWrap, wordBreak: style.wordBreak
      });
      container.append(clone);
      let height = 0;
      variants.forEach(html => {
        clone.innerHTML = html;
        height = Math.max(height, clone.getBoundingClientRect().height);
      });
      element.style.minHeight = round4(height) + 'px';
      clone.remove();
    };
    const copy = window.PORTFOLIO_ABOUT_COPY;
    document.querySelectorAll('.about-intro p').forEach((el, index) => reserve(el, ['ru','en'].map(locale => escape(copy[locale].intro[index]))));
    document.querySelectorAll('.about-job').forEach((job, index) => {
      reserve(job.querySelector('dd'), ['ru','en'].map(locale => escape(copy[locale].jobs[index][1])));
    });
    document.querySelectorAll('.about-stats dd').forEach((el, index) => reserve(el, ['ru','en'].map(locale => lines(index < 2 ? copy[locale].designersLines : copy[locale].experienceLines))));
    container.remove();
    measuredWidth = window.innerWidth;
  }

  function updateLocale(locale, updateURL = true) {
    window.PORTFOLIO_LOCALE = locale;
    window.PORTFOLIO_COPY = window.PORTFOLIO_TRANSLATIONS[locale];
    window.applyPageLocale(locale);
    window.applyProjectLocale(locale);
    window.applyAboutLocale(locale);
    if (updateURL) {
      const page = locale === 'en' ? 'en.html' : 'index.html';
      const url = new URL(page, location.href);
      url.search = location.search;
      url.hash = location.hash;
      // replaceState changes the address without navigation, hashchange or scroll.
      try { history.replaceState(history.state, '', url); } catch (_) { /* file:// may restrict URL changes */ }
    }
    window.dispatchEvent(new CustomEvent('portfolio:localechange', { detail: { locale } }));
  }

  function visible(element) {
    const rect = element.getBoundingClientRect();
    if (!rect.width || !rect.height || rect.bottom <= 0 || rect.top >= innerHeight || rect.right <= 0 || rect.left >= innerWidth) return false;
    for (let node = element; node && node !== document.body; node = node.parentElement) {
      const style = getComputedStyle(node);
      if (style.visibility === 'hidden' || style.display === 'none' || Number(style.opacity) < .02 || node.inert) return false;
    }
    const x = Math.min(innerWidth - 1, Math.max(1, (Math.max(0, rect.left) + Math.min(innerWidth, rect.right)) / 2));
    const y = Math.min(innerHeight - 1, Math.max(1, (Math.max(0, rect.top) + Math.min(innerHeight, rect.bottom)) / 2));
    const top = document.elementFromPoint(x, y);
    const control = element.closest('a,button');
    return !!top && (element === top || element.contains(top) || (control && control === top.closest('a,button')));
  }

  function snapshot(layer) {
    const elements = [...document.querySelectorAll(selectors)].filter(visible);
    const glyphs = [];
    const fragment = document.createDocumentFragment();
    for (const element of elements) {
      const style = getComputedStyle(element);
      const fontSize = Number.parseFloat(style.fontSize);
      const dense = fontSize > 20;
      let opacity = 1;
      for (let node = element; node && node !== document.body; node = node.parentElement) opacity *= Number(getComputedStyle(node).opacity);
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        let offset = 0;
        for (const char of node.data) {
          const length = char.length;
          if (!/\s/.test(char)) {
            const range = document.createRange();
            range.setStart(node, offset);
            range.setEnd(node, offset + length);
            const rect = range.getBoundingClientRect();
            if (rect.width && rect.bottom > 0 && rect.top < innerHeight && rect.right > 0 && rect.left < innerWidth) {
              const glyph = document.createElement('span');
              glyph.className = 'language-scramble-glyph';
              Object.assign(glyph.style, {
                left: rect.left + 'px', top: rect.top + 'px', width: rect.width + 'px', height: rect.height + 'px',
                font: style.font, lineHeight: rect.height + 'px', letterSpacing: '0', color: style.color,
                fontKerning: style.fontKerning, fontFeatureSettings: style.fontFeatureSettings,
                textTransform: style.textTransform, opacity: String(opacity)
              });
              let letter = null;
              let dots = null;
              if (dense) {
                glyph.classList.add('language-scramble-dense');
                const dotSize = Math.max(4, Math.round(fontSize / 12) * 4);
                glyph.style.setProperty('--scramble-dot-size', dotSize + 'px');
                letter = document.createElement('span');
                letter.className = 'language-scramble-letter';
                letter.textContent = char;
                dots = document.createElement('span');
                dots.className = 'language-scramble-points';
                // Fill the letter's area in two dimensions, keeping the
                // accepted dot size. Narrow letters need fewer columns.
                const columns = Math.max(1, Math.min(4, Math.floor(rect.width / (dotSize * .4))));
                const rows = 2;
                dots.style.setProperty('--scramble-columns', columns);
                dots.style.setProperty('--scramble-rows', rows);
                const lineHeight = Number.parseFloat(style.lineHeight) || fontSize;
                // Font bounds can exceed line spacing; keep neighbouring
                // lines' particles apart without shrinking the particles.
                dots.style.setProperty('--scramble-inset-y', Math.max(0, (rect.height - lineHeight) / 2) + 'px');
                for (let point = 0; point < columns * rows; point++) dots.append(document.createElement('span'));
                glyph.append(letter, dots);
              } else glyph.textContent = char;
              fragment.append(glyph);
              glyphs.push({ node: glyph, letter, dots, char, seed: Math.random(), shown: char, resolved: true });
            }
          }
          offset += length;
        }
      }
    }
    layer.append(fragment);
    elements.forEach(element => element.classList.add('language-text-hidden'));
    return { elements, glyphs };
  }

  function revealSource(shot) {
    shot.elements.forEach(element => element.classList.remove('language-text-hidden'));
  }

  function finish({ commit = true, updateURL = true } = {}) {
    ++preparation;
    const active = transition;
    if (!active) { requestedLocale = window.PORTFOLIO_LOCALE; return; }
    cancelAnimationFrame(active.frame);
    revealSource(active.shot);
    if (commit && !active.applied) updateLocale(active.locale, updateURL);
    active.layer.remove();
    document.documentElement.classList.remove('language-changing');
    document.body.dataset.languageState = 'idle';
    switcher.removeAttribute('aria-busy');
    transition = null;
    requestedLocale = window.PORTFOLIO_LOCALE;
    status.textContent = requestedLocale === 'en' ? 'English version' : 'Русская версия';
  }

  function paint(shot, progress, incoming, elapsed) {
    const count = Math.max(1, shot.glyphs.length - 1);
    shot.glyphs.forEach((glyph, index) => {
      const at = .08 + .55 * index / count + .22 * glyph.seed;
      const resolved = incoming ? progress >= at : progress < at;
      const value = resolved ? glyph.char : ((Math.floor(elapsed / 56 + glyph.seed * 8) % 2) ? ':' : '.');
      if (glyph.shown !== value || glyph.resolved !== resolved) {
        if (glyph.dots) {
          glyph.letter.style.visibility = resolved ? '' : 'hidden';
          glyph.dots.style.visibility = resolved ? 'hidden' : 'visible';
          // A dense .: grid fills the original letter's measured bounds.
          if (!resolved) for (const point of glyph.dots.children) point.textContent = value;
        } else glyph.node.textContent = value;
        glyph.shown = value;
        glyph.resolved = resolved;
      }
    });
  }

  async function switchLanguage(locale, animate = true, updateURL = true) {
    if (transition) finish({ commit: updateURL, updateURL });
    requestedLocale = locale;
    const ticket = ++preparation;
    if (locale === window.PORTFOLIO_LOCALE) return;
    if (!animate || reduceMotion.matches) { updateLocale(locale, updateURL); return; }
    await document.fonts.ready;
    if (ticket !== preparation || requestedLocale !== locale) return;
    reserveBilingualSpace();
    const layer = document.createElement('div');
    layer.className = 'language-scramble-layer';
    layer.setAttribute('aria-hidden', 'true');
    document.body.append(layer);
    document.documentElement.classList.add('language-changing');
    switcher.setAttribute('aria-busy', 'true');
    document.body.dataset.languageState = 'scrambling-out';
    const active = transition = { layer, locale, shot: snapshot(layer), applied: false, frame: 0, started: performance.now() };
    paint(active.shot, 0, false, 0);
    const tick = now => {
      const elapsed = now - active.started;
      if (elapsed >= 1200) { finish(); return; }
      if (elapsed < 520) paint(active.shot, Math.min(1, elapsed / 440), false, elapsed);
      else {
        if (!active.applied) {
          revealSource(active.shot);
          layer.replaceChildren();
          updateLocale(locale, updateURL);
          active.applied = true;
          active.shot = snapshot(layer);
          document.body.dataset.languageState = 'scrambling-in';
        }
        paint(active.shot, (elapsed - 520) / 680, true, elapsed);
      }
      active.frame = requestAnimationFrame(tick);
    };
    active.frame = requestAnimationFrame(tick);
  }

  switcher.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    switchLanguage(requestedLocale === 'ru' ? 'en' : 'ru');
  });
  for (const event of ['wheel','touchstart','keydown']) window.addEventListener(event, finish, { passive:true, capture:true });
  window.addEventListener('pointerdown', event => { if (!event.target.closest('.language-switch')) finish(); }, { passive:true, capture:true });
  window.addEventListener('resize', () => {
    finish();
    if (innerWidth !== measuredWidth) reserveBilingualSpace();
  }, { passive:true });
  document.addEventListener('visibilitychange', () => { if (document.hidden) finish(); });
  reduceMotion.addEventListener('change', finish);
  window.addEventListener('popstate', () => {
    const locale = /(?:^|\/)en\.html$/.test(location.pathname) ? 'en' : 'ru';
    switchLanguage(locale, false, false);
  });
  document.fonts.ready.then(reserveBilingualSpace);
})();
;
