---
title: Een URL-redirect maken
translationKey: hugo-url-redirect
date: 2025-11-14
---

Soms heb je een pagina die naar een nieuwe URL is verhuisd. Om geen SEO-linkwaarde te verliezen wil je dat de oude URL doorstuurt naar de nieuwe. Gelukkig heeft Hugo daar ingebouwde ondersteuning voor. Zet gewoon de oude relatieve url in de front matter onder de sleutel 'aliases', zo:

```
---
title: Some post
aliases
- /my-old-url
- /even-older-url
---
```

Hugo maakt nu pagina's op basis van de ingebouwde [alias.html-template](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/alias.html). Die ziet er zo uit:

```
<!DOCTYPE html>
<html lang="{{ site.Language.LanguageCode }}">
  <head>
    <title>{{ .Permalink }}</title>
    <link rel="canonical" href="{{ .Permalink }}">
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url={{ .Permalink }}">
  </head>
</html>
```

Je hoeft niets met de code hierboven te doen, hij laat alleen de logica van de gegenereerde redirect zien. Veel programmeerplezier!
