---
title: Slider/Carrousel (handmatig)
---

### Introductie

Veel websites hebben een slider (of carrousel). De meeste in de header. De grote vraag is: [zou ik een carrousel](https://shouldiuseacarousel.com/) aan mijn Hugo-website moeten toevoegen? Besluit je van wel... dan laat deze pagina je zien hoe je een fatsoenlijke gebruikt.

De carrousel is gebaseerd op een [carrousel met CSS scroll snap](https://codepen.io/joosts/pen/MWJBPgo). Deze carrousel weegt maar 3kb (ongecomprimeerd). Op desktop bedien je hem met de pijlen en de bolletjes, op mobiel kun je swipen. Hij werkt min of meer zonder Javascript. Deze carrousel ondersteunt native lazy loading (omdat hij gewone image-tags gebruikt in plaats van achtergrondafbeeldingen). Je kunt meerdere carrousels op één pagina zetten en de carrousel 'pauzeert' als je er met de muis overheen gaat. De content staat in een databestand en de ontwerpkeuzes staan in de include-variabelen.

### Hoe het werkt

Je bepaalt zelf hoe lang elke slide in beeld blijft (in milliseconden) en hoeveel slides (items) er tegelijk getoond worden. Je kunt ook de hoogte van de slider als getal opgeven, en de eenheid als '%' of 'px'. Daarmee wordt de slider responsive. Zet je de hoogte op '50' en de eenheid op '%', dan is de verhouding altijd 2:1, maar varieert de hoogte. Zet je de hoogte op '500' en de eenheid op 'px', dan is de hoogte altijd hetzelfde, maar varieert de verhouding.

{{< carousel items="1" height="500" unit="px" duration="7000" >}}

{{< carousel items="2" height="35" unit="%" duration="5000" >}}

### Installatie

Stap 1. Download de bestanden [carousel.js](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/js/carousel.js) en [carousel.css](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/css/carousel.css)
<br />Stap 2. Sla de bestanden op in de map '/js' en '/css' van je project
<br />Stap 3. Zorg dat de footer van je layoutbestand er zo uitziet:

```
<script type="text/javascript" src="/js/carousel.js"></script>
<link rel="stylesheet" href="/css/carousel.css">
</body>
</html>
```
Stap 4. Maak een bestand carousel.yaml in je data-map met deze inhoud:  
```
images: 
  - image: /uploads/slider/image1.jpg
    content_html: "1"
  - image: /uploads/slider/image2.jpg
    content_html: "2"
  - image: /uploads/slider/image3.jpg
    content_html: "3"
  - image: /uploads/slider/image4.jpg
    content_html: "4"
```

### Installatie als template

Stap 5. Download het bestand [carousel.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/carousel.html)  
Stap 6. Sla het bestand op in de map 'layouts/_partials' van je project  
Stap 7. Voeg dit toe aan je layout:  
```
{{ partial "carousel.html" (dict "context" . "items" "1" "height" "50" "unit" "%" "duration" "7000") }}
```

### Installatie als shortcode

Stap 5. Download het bestand [carousel.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_shortcodes/carousel.html)  
Stap 6. Sla het bestand op in de map 'layouts/_shortcodes' van je project  
Stap 7. Voeg dit toe aan je content (.md-bestand):  
```
{{</* carousel items="1" height="500" unit="px" duration="7000" */>}}
```
