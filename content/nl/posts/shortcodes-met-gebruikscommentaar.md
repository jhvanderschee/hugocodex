---
title: 'Shortcodes met gebruikscommentaar'
translationKey: shortcodes-with-usage-comments
date: '2022-11-13'
---

Ik heb bovenaan mijn (relevante) shortcodes commentaar over het gebruik toegevoegd. Je ziet het commentaar hieronder in de shortcode youtube.html:

```
<!-- 
{{/* 
    
    Usage: 
    {{</* youtube id="qtIqKaDlqXo" image="/uploads/youtubeposter.jpg" */>}} 
    
*/}}
-->
```

Dat is niet alleen handig voor developers, maar vertelt ook ons eigen CMS ([Usecue CMS](https://cms.usecue.com)) hoe het deze shortcodes moet invoegen. Het CMS leest het gebruiksvoorbeeld uit het commentaar en voegt een invoegknop toe aan het editorveld. Daardoor kunnen jouw redacteuren/klanten deze shortcodes makkelijk (her)gebruiken. Lees voor meer informatie hierover [A CMS with Hugo shortcode support](https://www.usecue.com/blog/a-cms-with-hugo-shortcode-support/).

Let op: we zetten het commentaar in twee soorten commentaartags. Door de HTML-commentaartags weet je IDE dat dit commentaar is. De Go-commentaartags voorkomen dat de code gerenderd en uitgevoerd wordt, waarmee je build-fouten voorkomt.
