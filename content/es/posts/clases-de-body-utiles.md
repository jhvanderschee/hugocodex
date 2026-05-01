---
title: Clases de body útiles
date: 2025-07-09
---

El estilado se vuelve mucho más sencillo cuando el elemento `body` de tu documento HTML tiene las clases adecuadas. Las siguientes clases son muy útiles. Ten en cuenta que esto asume que das a tus secciones (carpetas en la raíz del contenido) nombres en inglés en plural, como 'products' o 'reviews'. Se asume esta estructura:

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

El siguiente código añadirá la clase 'home' al body para la página de inicio.

```
{{ if .IsHome}}home{{ end }}
```

El siguiente código añadirá el nombre de la sección (como 'products') a la clase del body en la página de lista. Para la página individual añadirá 'product'.

```
{{ if eq .Kind `page` }}{{ .Section | singularize }}{{ else }}{{ .Section }}{{ end }}
```

El siguiente código añadirá la clase 'page' al body si el contenido no forma parte de ninguna sección (típicamente son archivos markdown en la raíz, incluida la página de inicio). Para excluir la página de inicio podemos comprobar contra la variable `.IsHome`.

```
{{ if eq .Type `page` }}page{{ end }}
```

## Resultado

Si combinas estas sentencias obtendrás algo como esto (fíjate en los guiones para evitar espacios extra):

```
<body class="
{{- if .IsHome}}home{{ end -}}
{{- if eq .Kind `page` }}{{ .Section | singularize }}{{ else }}{{ .Section }}{{ end -}}
{{- if and (eq .Type `page`) (ne .IsHome true) }}page{{ end -}}
">
```

Esto producirá una de las situaciones siguientes, lo que facilitará mucho el estilado de estas páginas con CSS.

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
