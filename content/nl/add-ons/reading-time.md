---
title: Leestijd
---

### Introductie

De leestijdindicator is een simpel script waarmee je de geschatte leestijd van de content toont. Het script maakt gebruik van de paginavariabele reading time, die al in Hugo zit.

### Hoe het werkt

Om de leestijd van een artikel te tonen, wordt de onderstaande code gebruikt.

```
Reading time: {{ .ReadingTime }} minute{{ if (ne .ReadingTime 1) }}s{{ end }}
```

### Installatie

Stap 1. Download het bestand [reading-time.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/reading-time.html)
<br />Stap 2. Sla het bestand op in de map 'layouts/_partials' van je project
<br />Stap 3. Voeg de volgende regel toe aan je layout op de plek waar je de leestijdindicator wilt laten zien:

```
{{ partial "reading-time.html" . }}
```
