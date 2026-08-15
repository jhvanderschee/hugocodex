---
title: "'page' gebruiken in shortcodes - let op de cache"
translationKey: using-page-in-shortcodes-cache-issue-be-aware-off
date: "2023-11-08"
---
Sinds recente Hugo-versies (we zitten inmiddels op v0.120) is de elegante 'page'-notatie geïntroduceerd. We hebben nu makkelijk toegang tot een 'globaal Page-object'!
Mooi.

Terwijl we hem vrolijk zo gebruikten in een Hugo-'shortcode':

```
{{ page.File.BaseFileName }}
```

viel ons (schijnbaar) vreemd gedrag op tijdens het bouwen van de site en het bekijken van wat de Firefox-browser renderde. Vreemd.

In de issue-lijst van de Github-repository hebben we het gemeld:

> 'page' gebruikt in een shortcode vertoont niet erg consistent gedrag: problemen treden alleen op bij de eerste 'hugo server'-run, [..]

> Missen we hier nog iets?

Opnieuw kwam Joe M. te hulp (een paar uur later al!) en wees hij ons op [het stuk documentatie waarin het 'ontbrekende' puzzelstukje te vinden was.](https://gohugo.io/functions/global/page/#be-aware-of-caching)

Nu weten we dat cache en concurrency hun rol spelen!

Even ter info.

Veel programmeerplezier!
