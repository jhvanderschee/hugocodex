---
title: Migas de pan
---
### Introducción

Las migas de pan (breadcrumbs) son una única línea de enlaces (a menudo colocada encima del título) que muestra dónde se encuentra una página dentro de la jerarquía del sitio. Todo sitio web debería tener migas de pan, ya que benefician al SEO y además ayudan a los usuarios a entender la estructura del sitio.

### Cómo funciona

Este código usa la variable Ancestors para construir la ruta de migas de pan. Este enfoque deja una huella muy pequeña. Además, este código no requiere que las migas de pan se definan explícitamente en el front matter / YAML.

```
<ul id="breadcrumbs">
    {{- range .Ancestors.Reverse }}
        <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
    {{- end }}
    <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
</ul>
```

### Instalación

Paso 1. Descarga el archivo [breadcrumbs.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/breadcrumbs.html)
<br />Paso 2. Guarda el archivo en el directorio ‘layouts/_partials’ de tu proyecto
<br />Paso 3. Añade la siguiente línea a tu plantilla, en el lugar donde quieras que aparezcan las migas de pan:

```
{{ partial "breadcrumbs.html" . }}
```
