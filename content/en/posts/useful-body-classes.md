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

## Homepage

```
{{ if .IsHome}}home{{ end }}
```

The above code will add the class 'home' to your body for the homepage.

## Sections

```
{{ if eq .Kind `page` }}{{ .Section | singularize }}{{ else }}{{ .Section }}{{ end }}
```

The above code will add the section name (like 'products') to the class of the body for the list page. For the single page it will add 'product'.

## Other pages

```
{{ if eq .Type `page` }}page{{ end }}
```

The above code will add a 'page' class to the body if the content is not part of a section (typically these are markdown files in the root, including the homepage).

## Result

```
<body class="
{{ if .IsHome}}home{{ end }}
{{ if eq .Kind `page` }}{{ .Section | singularize }}{{ else }}{{ .Section }}{{ end }}
{{ if eq .Type `page` }}page{{ end }}
">
```

This will result in one of the situations below.

```
<body class="home">
<body class="products">
<body class="product">
<body class="page">
```

These pages are easy to style with CSS.