---
title: Handige body-classes
translationKey: useful-body-classes
date: 2025-07-09
---

Stylen wordt een stuk makkelijker als de body van je HTML-document de juiste classes heeft. De volgende classes zijn erg handig. Let op: hierbij gaan we ervan uit dat je je secties (mappen in de root van de content) Engelse meervoudsnamen geeft, zoals 'products' of 'reviews'. We gaan uit van deze structuur:

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

De code hieronder voegt op de homepage de class 'home' toe aan je body.

```
{{ if .IsHome}}home{{ end }}
```

De code hieronder voegt op de lijstpagina de sectienaam (zoals 'products') toe aan de class van de body. Op de losse pagina voegt hij 'product' toe.

```
{{ if eq .Kind `page` }}{{ .Section | singularize }}{{ else }}{{ .Section }}{{ end }}
```

De code hieronder voegt een class 'page' toe aan de body als de content geen onderdeel van een sectie is (meestal zijn dat markdown-bestanden in de root, inclusief de homepage). Om de homepage uit te sluiten kunnen we testen op de variabele `.IsHome`.

```
{{ if eq .Type `page` }}page{{ end }}
```

## Resultaat

Als je deze statements combineert krijg je zoiets (let op de mintekens om extra spaties te voorkomen):

```
<body class="
{{- if .IsHome}}home{{ end -}}
{{- if eq .Kind `page` }}{{ .Section | singularize }}{{ else }}{{ .Section }}{{ end -}}
{{- if and (eq .Type `page`) (ne .IsHome true) }}page{{ end -}}
">
```

Dat levert een van de onderstaande situaties op, waardoor het stylen van deze pagina's met CSS een makkie wordt.

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
