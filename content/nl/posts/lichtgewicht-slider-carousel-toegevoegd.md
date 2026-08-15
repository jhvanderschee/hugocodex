---
title: Lichtgewicht slider/carousel toegevoegd
translationKey: lightweight-slider-carousel-added
date: '2021-08-21'
image: /uploads/slider/image1.jpg
---

Veel websites hebben een slider (of carousel). De meeste in de header. De grote vraag is: [Moet ik wel een carousel](https://shouldiuseacarousel.com/) aan mijn Hugo-website toevoegen? Dat kan ik niet voor je beslissen. Besluit je dat je er een nodig hebt, dan heb ik een nette versie toegevoegd onder [Uitbreidingen > Slider/carousel](/nl/uitbreidingen/slider-carousel/) in het hoofdmenu. Hieronder zie je een demo:

{{< carousel items="1" height="500" unit="px" duration="7000" >}}

De carousel is gebaseerd op een [carousel met CSS scroll snap](https://codepen.io/joosts/pen/MWJBPgo) die ik eerder maakte. Op desktop kun je de pijlen en de bolletjes gebruiken, op mobiel kun je swipen. Deze carousel ondersteunt native lazy loading en 'pauzeert' als je er met de muis overheen gaat. Hij werkt zelfs een beetje zonder Javascript. Deze carousel weegt maar 3kb (ongecomprimeerd). Dat is 50 keer minder dan het JS-bestand van 150kb dat je moet laden voor zoiets als [SwiperJS](https://swiperjs.com/) (dat overigens fantastische functies heeft).
