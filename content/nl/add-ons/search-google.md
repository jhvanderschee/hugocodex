---
title: Zoeken met Google
---

### Introductie

Moderne websites hebben een zoekbalk waarmee je binnen de site naar specifieke content zoekt. Die zoekvelden doorzoeken vaak realtime de database. Dat kan niet binnen een statische website. Daarom moet er een andere oplossing komen.

### Hoe het werkt

Deze zoekfunctie leunt op de index van Google. Hij bevraagt de zoekmachine van Google rechtstreeks. De resultaten worden binnen de interface van Google getoond (op een nieuwe pagina), maar zijn beperkt tot de site die jij opgeeft.

[expand]

```
<form method="get" action="http://www.google.com/search" target="_blank"><input type="hidden" name="sitesearch" value="yourdomain.com" /><input type="text" name="q" maxlength="255" value="" placeholder="Search via Google" /></form>
```

[/expand]

### Installatie

Stap 1. Download het bestand [search-google.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_partials/search-google.html) en pas de domeinnaam aan
<br />Stap 2. Sla het bestand op in de map '/layouts/_partials/' van je project
<br />Stap 3. Voeg de volgende regel toe aan je layout op de plek waar je het zoekveld wilt laten zien:

```
{{ partial "search-google.html" . }}
```
