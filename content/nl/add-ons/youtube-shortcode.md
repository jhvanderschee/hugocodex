---
title: Youtube shortcode
---

### Introductie

Paul Irish deed iets moois. Hij maakte [een lichtere Youtube-embed](https://github.com/paulirish/lite-youtube-embed). Zijn oplossing vertraagt je website niet meer, zoals normale Youtube-embeds dat wel doen. Er is maar één nadeel: hij laadt content van Youtube zonder toestemming, terwijl Youtube een dienst is van een bedrijf dat bekendstaat om tracking en profilering. Dat is niet erg privacyvriendelijk. De oplossing is om de poster zelf te hosten en die naar Youtube te linken. Dat kan met een shortcode.

### Hoe het werkt

De shortcode maakt een afbeelding en een link naar Youtube. De classes op die link vertellen de CSS om het Youtube-logo en een afspeelknop toe te voegen. Daardoor lijkt het op een embed. Let op: als je de [lightbox](/nl/uitbreidingen/lightbox/) van deze website laadt, opent je video automatisch in een lightbox in plaats van op een nieuwe pagina. Hieronder vind je een demo (met de lightbox aan).

{{< youtube qtIqKaDlqXo >}}

### Installatie

Stap 1. Download het bestand [youtube.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_shortcodes/youtube.html)
<br />Stap 2. Sla het bestand op in de map 'layouts/_shortcodes' van je project
<br />Stap 3. Voeg de volgende regel toe aan je content op de plek waar je je Youtube-video wilt laten zien:

```
{{</* youtube qtIqKaDlqXo */>}}
```
