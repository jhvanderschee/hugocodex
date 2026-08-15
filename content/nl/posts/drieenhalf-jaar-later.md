---
title: 'Drieënhalf jaar later'
translationKey: three-and-a-half-years-later
date: '2021-06-06'
---
Ik vertelde je al dat [migreren van Jekyll naar Hugo](/nl/blog/migreren-van-jekyll-naar-hugo) een stuk lastiger was dan ik dacht. Maar ik had niet verwacht dat ik daarna nog 3,5 jaar niet meer naar Hugo zou omkijken.

### Wat is er veranderd?

Om te beginnen ging [CloudCannon](https://www.cloudcannon.com) Hugo-websites bouwen, terwijl [Forestry](https://www.forestry.io) daarmee stopte. Ik ben een groot fan van CloudCannon, ze hebben me gevraagd blogposts voor ze te schrijven en ik sta op hun website, dus ik wilde Hugo absoluut een keer uitproberen op hun infrastructuur. Ten tweede had ik een paar websites die door hun groeiende omvang behoorlijk traag werden. Jekyll heeft zijn snelheid de laatste jaren flink verbeterd, maar bouwtijden van 20+ seconden waren nog steeds normaal voor mijn grotere websites (3.000+ pagina's). Ik begon te experimenteren met GoJekyll en werd enthousiast van de bouwtijden van 1,4 seconde. Maar ik stuitte meteen op een paar bugs in GoJekyll en op wat beperkingen in blackfriday (de Markdown-converter van GoJekyll). Ook viel me op dat zowel Netlify als CloudCannon overstapten op een prijsmodel waarbij je voor bouwminuten betaalt. Dat snap ik... maar het gaf Hugo wel een extra voorsprong op Jekyll, want Hugo bouwt 20 keer zo snel (en dus goedkoper). Daardoor ging ik met nieuwe ogen naar Hugo kijken. Een enorm populair en volwassen project met ruim 50k sterren op Github.

Terwijl ik alles verkende wat nieuw (en oud) was aan Hugo, ontdekte ik dat meertalige websites uitstekend ondersteund werden. Ik bouw veel meertalige websites, dus dat is best fijn. Bovendien was ik, na bijna 6 jaar Jekyll-websites bouwen, minder onzeker over het leren van een nieuwe templating taal en klaar voor een nieuwe uitdaging.

### En nu?

Ik ga meer van de oplossingen die ik op [Jekyll Codex](https://jekyllcodex.org) heb gebouwd naar deze website overzetten. Ik heb de codebase al zo aangepast dat hij geen Bootstrap of jQuery meer gebruikt. Binnenkort zie je een hoop 'Uitbreidingen' op deze site verschijnen, met partials of shortcodes. Ik pak de draad op waar ik gebleven was, door te onderzoeken of Hugo afbeeldingen kan verkleinen.
