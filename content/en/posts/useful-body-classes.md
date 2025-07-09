---
title: Useful body classes
date: 2025-07-09
---

Styling becomes much easier when the body of your HTML document has the right classes. The following classes are very useful. Note that this assumes you give your sections (folders in the root of the content) english plural names, like 'products' or 'reviews'. It assumes this structure:

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

The code below will add the class 'home' to your body for the homepage.

```
{{ if .IsHome}}home{{ end }}
```

The code below will add the section name (like 'products') to the class of the body for the list page. For the single page it will add 'product'.

```
{{ if eq .Kind `page` }}{{ .Section | singularize }}{{ else }}{{ .Section }}{{ end }}
```

The code below will add a 'page' class to the body if the content is not part of a section (typically these are markdown files in the root, including the homepage). To exclude the homepage we can test against the `.IsHome` variable.

```
{{ if eq .Type `page` }}page{{ end }}
```

## Result

If you combine these statements you get something like this (notice the minus signs to prevent extra spaces):

```
<body class="
{{- if .IsHome}}home{{ end -}}
{{- if eq .Kind `page` }}{{ .Section | singularize }}{{ else }}{{ .Section }}{{ end -}}
{{- if and (eq .Type `page`) (ne .IsHome true) }}page{{ end -}}
">
```

This will result in one of the situations below, which will make styling them with CSS a breeze.

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