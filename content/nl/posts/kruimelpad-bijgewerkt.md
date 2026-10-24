---
title: Kruimelpad bijgewerkt
translationKey: breadcrumbs-updated
date: 2021-12-09
---

Ik bouw nu een half jaar websites met Hugo en ik ben een GROTE fan. Zeker, de documentatie is soms wat vreemd of onvolledig. Waar vind je bijvoorbeeld de variabele 'resources' (helemaal in kleine letters)? Ik zou het niet weten. Aan de andere kant is het [Discourse-kanaal](https://discourse.gohugo.io/) absoluut fantastisch. De tijd die mensen erin steken om iedereen te helpen is gewoon verbluffend.

In de afgelopen zes maanden heb ik veel geworsteld en veel geleerd. Toen ik dus terugkeek naar de code die ik voor mijn [kruimelpad](/nl/uitbreidingen/breadcrumbs/) gebruikte (die ik ruim een half jaar geleden maakte), zag ik dat het beter kon... en dat heb ik gedaan.

De nieuwe code maakt onderscheid tussen lijstpagina's en gewone pagina's. Daarvoor gebruik ik de paginavariabele `.IsPage`. Daardoor kan het script een leesbaar gemaakt stukje URL tonen voor de lijstpagina's en de volledige titel voor de gewone pagina's. Dat is een mooie verbetering en lost een hoop problemen op met hoofdletters in namen en dergelijke. Ook heb ik de structuur van het kruimelpad verbeterd. Ik heb de enkele regel tekst (links) veranderd in een ongeordende lijst. Die ongeordende lijst wordt met CSS zo opgemaakt dat het weer één regel lijkt. Dat is semantisch beter en makkelijker te stylen. Tot slot zag ik dat ik de tekst 'posts' had vervangen door 'blog'. Inmiddels weet ik dat je daar beter een aangepaste permalink voor kunt gebruiken, die je globaal in het configuratiebestand instelt.

Ik hoop dat je de verbeteringen kunt waarderen. Je kunt ze op Github bekijken, want deze repository is openbaar. Veel programmeerplezier!
