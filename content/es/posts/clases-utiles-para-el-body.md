---
title: Clases útiles para el body
translationKey: useful-body-classes
date: 2025-07-09
---

Dar estilo es mucho más fácil cuando el body de tu documento HTML tiene las clases adecuadas. Las siguientes clases resultan muy útiles. Ten en cuenta que esto da por hecho que das a tus secciones (las carpetas en la raíz del contenido) nombres en inglés y en plural, como 'products' o 'reviews'. Se asume esta estructura:

```
content/
├── products/ <-- section
│   ├── _index.md <-- list page
│   ├── product-1.md <-- single page
│   └── product-2.md
├── _index.md <-- homepage
├── about.md <-- other page
└── contact.md
```

El código de abajo añadirá la clase 'home' a tu body en la página de inicio.

```
{{ if .IsHome}}home{{ end }}
```

El código de abajo añadirá el nombre de la sección (como 'products') a la clase del body en la página de listado. En la página individual añadirá 'product'.

```
{{ if eq .Kind `page` }}{{ .Section | singularize }}{{ else }}{{ .Section }}{{ end }}
```

El código de abajo añadirá una clase 'page' al body si el contenido no forma parte de una sección (normalmente se trata de archivos markdown en la raíz, incluida la página de inicio). Para excluir la página de inicio podemos comprobar la variable `.IsHome`.

```
{{ if eq .Type `page` }}page{{ end }}
```

## Resultado

Si combinas estas instrucciones obtienes algo así (fíjate en los guiones para evitar espacios de más):

```
<body class="
{{- if .IsHome}}home{{ end -}}
{{- if eq .Kind `page` }}{{ .Section | singularize }}{{ else }}{{ .Section }}{{ end -}}
{{- if and (eq .Type `page`) (ne .IsHome true) }}page{{ end -}}
">
```

Esto dará como resultado una de las situaciones de abajo, lo que hará que dar estilo a estas páginas con CSS sea pan comido.

```
<body class="home">
```
```
<body class="products">
```
```
<body class="product">
```
```
<body class="page">
```
