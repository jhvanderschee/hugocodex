---
title: Lightbox
---
### Introductie

Lightbox is een oplossing die je [afbeeldings](/uploads/grumpycat2.jpg)[links](/uploads/grumpycat.jpg), je [Youtube-links](https://www.youtube.com/watch?v=dQw4w9WgXcQ&showinfo=0&rel=0) en je [Vimeo-links](https://vimeo.com/132888648) automatisch in een minimalistisch en responsive pseudo-venster/overlay laadt. Je hoeft je links niet aan te passen, volg gewoon de installatie-instructies hieronder.

### Hoe het werkt

Links die naar afbeeldingen, Youtube- en Vimeo-video's wijzen worden automagisch herkend en met javascript van een extra class voorzien. Video's krijgen daarnaast een data-id. Een listener voegt de lightbox aan de body toe zodra er op de link geklikt wordt. De lightbox wordt verwijderd als je op de achtergrond/overlay klikt. Je kunt voorkomen dat links een lightbox openen door de class 'no-lightbox' toe te voegen.

Let op: ik heb de code voor deze lightbox zelf geschreven en op een beperkt aantal apparaten getest. Hij zou moeten werken op mobiel (getest op Android), IE9+ en alle moderne desktopbrowsers (getest op Firefox, Safari en Chrome).

### Installatie

Stap 1. Download de bestanden [lightbox.js](https://raw.githubusercontent.com/jhvanderschee/jekyllcodex/gh-pages/js/lightbox.js) en [lightbox.css](https://raw.githubusercontent.com/jhvanderschee/jekyllcodex/gh-pages/css/lightbox.css)
<br />Stap 2. Sla de bestanden op in de map '/js' en '/css' van je project
<br />Stap 3. Zorg dat de footer van je layoutbestand er zo uitziet:

```
<script type="text/javascript" src="/js/lightbox.js"></script>
<link rel="stylesheet" href="/css/lightbox.css">
</body>
</html>
```
