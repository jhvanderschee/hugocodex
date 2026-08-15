---
title: Waarom je zou moeten upgraden naar Hugo v0.120
translationKey: why-you-should-upgrade-hugo-to-0-120
date: "2023-11-02"
---
Bouw je meertalige websites en gebruik je een CMS, dan wil je upgraden naar de nieuwste Hugo-versie. Ik zal je vertellen waarom. Indexpagina's met een underscore in je contentmap (de lijstpagina's van secties) hadden een regel in de front matter nodig om de URL de permalink-structuur te laten volgen. In een van de recentere Hugo-versies is dat opgelost. Je kunt de permalink van de lijstpagina nu in het configuratiebestand definiëren! De losse pagina's heten 'page' en de lijstpagina heet 'section'. Met yaml ziet dat er zo uit:

```
permalinks:
  page:
    yoursection: /xyz/:filename
  section:
    yoursection: /xyz/
```

Geweldig toch? Nu hoef je je klanten niet meer lastig te vallen met de URL van de lijstpagina (als je een `_index.md`-bestand hebt en de front matter daarvan in je CMS bewerkbaar maakt). Die upgrade is het dubbel en dwars waard, wat mij betreft.
