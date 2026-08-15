---
title: Slider/Carrousel
---

### Introductie

Deze carrousel is gebaseerd op een [carrousel met CSS scroll snap](https://codepen.io/joosts/pen/MWJBPgo). Deze carrousel weegt maar 3kb (ongecomprimeerd). Op desktop bedien je hem met de pijlen en de bolletjes, op mobiel kun je swipen. Hij werkt min of meer zonder Javascript. Deze carrousel ondersteunt native lazy loading (omdat hij gewone image-tags gebruikt in plaats van achtergrondafbeeldingen). Je kunt meerdere carrousels op één pagina zetten en de carrousel 'pauzeert' als je er met de muis overheen gaat.

### Hoe het werkt

Zet gewoon een lijst met alleen afbeeldingen in je content, dan wordt die lijst automatisch omgezet in een carrousel, zo:

```
- ![](/uploads/slider/image1.jpg)
- ![](/uploads/slider/image2.jpg)
```

- ![](/uploads/slider/image1.jpg)
- ![](/uploads/slider/image2.jpg)

Let op: dit is een verbeterde versie van de [oude slider/carrousel](/nl/uitbreidingen/slider-carousel-manual), die je handmatig moest aanroepen, maar die geschikt was voor headers (omdat hij als partial beschikbaar was) en een stuk meer opties had.

### Installatie

Stap 1. Download de bestanden [auto-carousel.js](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/js/auto-carousel.js) en [auto-carousel.css](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/css/auto-carousel.css)
<br />Stap 2. Sla de bestanden op in de map '/js' en '/css' van je project
<br />Stap 3. Zorg dat de footer van je layoutbestand er zo uitziet:

```
<script type="text/javascript" src="/js/auto-carousel.js"></script>
<link rel="stylesheet" href="/css/auto-carousel.css">
</body>
</html>
```
Stap 4. Download het bestand [list-to-carousel.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/list-to-carousel.html)  
Stap 6. Sla het bestand op in de map 'layouts/_partials' van je project  
Stap 7. Voeg dit toe aan je layout op de plek waar je normaal `.Content` aanroept:  
```
{{ partial "list-to-carousel.html" .Content }}
```
