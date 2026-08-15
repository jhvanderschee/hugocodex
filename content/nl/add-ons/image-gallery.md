---
title: 'Fotogalerij'
---

### Introductie

Dit script maakt een fotogalerij. Het script leest alle afbeeldingen uit een specifieke (zelf te kiezen) map in de assets-map van Hugo, snijdt ze automagisch bij tot vierkanten van 300px en toont ze in rijen van vijf.

{{< image-gallery gallery_dir="/uploads/album" >}}

### Hoe het werkt

Het script zoekt naar alle bestanden in de map 'album' in de assets-map van Hugo. Voor deze afbeeldingen maakt het een image-tag met een thumbnail. De thumbnail is een 300 pixel brede, vierkant bijgesneden versie van de afbeelding. Het script zet om de thumbnail een link naar een grotere versie, die een lightbox opent als die aanwezig is. Het bijschrift is de bestandsnaam zonder extensie.

### Installatie als template

Stap 1. Download het bestand [image-gallery.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/image-gallery.html)  
Stap 2. Sla het bestand op in de map 'layouts/_partials' van je project  
Stap 3. Voeg de volgende regel toe aan je layout op de plek waar je de fotogalerij wilt laten zien:  

```
{{ partial "image-gallery" (dict "context" . "gallery_dir" "/album") }}
```

### Installatie als shortcode

Stap 1. Download het bestand [image-gallery.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_shortcodes/image-gallery.html)  
Stap 2. Sla het bestand op in de map 'layouts/_shortcodes' van je project  
Stap 3. Voeg de volgende regel toe aan je content op de plek waar je de fotogalerij wilt laten zien:  

```
{{</* image-gallery gallery_dir="/album" */>}}
```
