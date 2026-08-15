---
title: Crear una redirección de URL
translationKey: hugo-url-redirect
date: 2025-11-14
---

A veces tienes una página que se ha movido a una URL nueva. Para evitar perder el link juice de cara al SEO, quieres que la URL antigua redirija a la nueva. Por suerte Hugo tiene soporte integrado para esto. Solo tienes que poner la url relativa antigua en el front matter, en la clave 'aliases', así:

```
---
title: Some post
aliases
- /my-old-url
- /even-older-url
---
```

Hugo crea ahora páginas basadas en la [plantilla alias.html](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/alias.html) integrada. Que se ve así:

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

No tienes que hacer nada con el código de arriba, solo está para mostrar la lógica de la redirección generada. ¡Feliz programación!
