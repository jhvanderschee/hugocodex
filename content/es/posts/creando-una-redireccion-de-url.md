---
title: Creando una redirección de URL
date: 2025-11-14
---

A veces tienes una página que se ha movido a una nueva URL. Para evitar la pérdida de autoridad SEO, quieres que la URL antigua redirija a la nueva. Afortunadamente, Hugo tiene soporte integrado para esto. Solo pon la URL relativa antigua en el front matter con la clave `aliases`, así:

```
---
title: Some post
aliases
- /my-old-url
- /even-older-url
---
```

Hugo ahora genera páginas basadas en la [plantilla alias.html integrada](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/alias.html). Que tiene este aspecto:

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

No necesitas hacer nada con el código anterior, solo muestra la lógica de la redirección generada. ¡Feliz programación!
