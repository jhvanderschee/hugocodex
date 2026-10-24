---
title: Automatisch inklappend menu
---

### Introductie

Veel websites gebruiken automatisch inklappende menu's met geneste pagina's. Dat is een prima manier om veel content gestructureerd te tonen, maar het vraagt wel om een hiërarchisch overzicht van al je pagina's. Dit is een genest menu dat je met een simpele include kunt toevoegen. Wil je het in actie zien, [bekijk dan de demo](/nl/branches).

### Hoe het werkt

Dit script leest de mappen in je sectie en maakt daar automatisch een inklappend, genest menu van. Let op: je mag GEEN 'index.md' bestand in je mappen gebruiken. Je hebt WEL een _index.md nodig in een map die andere pagina's bevat. Kijk voor de duidelijkheid naar de [mappenstructuur](https://github.com/jhvanderschee/hugocodex/tree/main/content/en/branches) van de demo.

### Installatie

Stap 1. Download het bestand [nested-menu.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/nested-menu.html) en het bestand [nested-menu-partial.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/nested-menu-partial.html)
<br />Stap 2. Sla de bestanden op in de map 'layouts/_partials' van je project
<br />Stap 3. Voeg de volgende regel toe aan je layout op de plek waar je het geneste menu wilt laten zien:

```
{{ partial "nested-menu.html" . }}
```
