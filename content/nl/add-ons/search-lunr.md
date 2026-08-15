---
title: Zoeken met Lunr.js
---

### Introductie

Moderne websites hebben een zoekbalk waarmee je binnen de site naar specifieke content zoekt. Die zoekvelden doorzoeken vaak realtime de database. Dat kan niet binnen een statische website. Daarom moet er een andere oplossing komen. Een [demo](/nl/search) vind je op de zoekpagina.

### Hoe het werkt

Deze zoekfunctie leunt op een lokale index. Hij gebruikt het script Lunr.js om te zoeken. Dat script heeft geen jQuery nodig. Eerst wordt er een lokale index opgebouwd met de variabele documents. Daarna wordt de code van Lunr.js aangeroepen. Ten slotte zet een zelfgemaakte functie (genaamd 'lunr_search') de resultaten in een Google-achtige stijl op het scherm.

### Installatie

Stap 1. Download het bestand [lunr.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_partials/lunr.html)
<br />Stap 2. Sla het bestand op in de map '/layouts/_partials/' van je project
<br />Stap 3. Download het bestand [lunr.js](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_partials/lunr.html)
<br />Stap 4. Sla het bestand op in de map 'js' (in de root) van je project
<br />Stap 5. Voeg de volgende regel toe aan je layout op de plek waar je het zoekveld wilt laten zien:

```
{% raw %}{% include search-lunr.html %}{% endraw %}
```
