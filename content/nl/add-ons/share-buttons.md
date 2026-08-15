---
title: Deelknoppen

---
### Introductie

Het kan heel handig zijn om mensen de content die ze net gelezen hebben makkelijk te laten delen. Deelknoppen staan vaak onderaan een blogbericht. Dit script voegt ze automatisch toe aan de content die jij wilt.

### Hoe het werkt

Het script leest de `.Permalink` en maakt daar een deellink van. De partial heeft een paar instellingen waarmee je de kleuren en de getoonde iconen aanpast.

### Installatie

Stap 1. Download het bestand [share-buttons.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/share-buttons.html)
<br />Stap 2. Sla het bestand op in de map 'layouts/_partials' van je project
<br />Stap 3. Voeg de volgende regel toe aan je layout op de plek waar je de deelknoppen wilt laten zien:

```
{{ partial "share-buttons.html" . }}
```
