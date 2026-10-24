---
title: Kruimelpad
---
### Introductie

Een kruimelpad (breadcrumbs) is een enkele regel met links (vaak boven de titel) die laat zien waar een pagina zich in de sitestructuur bevindt. Elke website zou een kruimelpad moeten hebben, want het is goed voor SEO én het helpt bezoekers de structuur van de site te begrijpen.

### Hoe het werkt

Deze code kijkt naar de variabele Ancestors om het kruimelpad op te bouwen. Deze aanpak heeft een kleine footprint. Bovendien hoef je het kruimelpad hiermee niet expliciet in de front matter / YAML vast te leggen.

```
<ul id="breadcrumbs">
    {{- range .Ancestors.Reverse }}
        <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
    {{- end }}
    <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
</ul>
```

### Installatie

Stap 1. Download het bestand [breadcrumbs.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/breadcrumbs.html)
<br />Stap 2. Sla het bestand op in de map 'layouts/_partials' van je project
<br />Stap 3. Voeg de volgende regel toe aan je layout op de plek waar je het kruimelpad wilt laten zien:

```
{{ partial "breadcrumbs.html" . }}
```
