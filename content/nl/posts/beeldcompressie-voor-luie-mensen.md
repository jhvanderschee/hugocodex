---
title: Beeldcompressie voor luie mensen
translationKey: image-compression-for-the-lazy
date: 2022-06-19
---

Nee, dit gaat niet over lazy loading. We hebben het puur over beeldcompressie, want afbeeldingen zijn een belangrijk deel van je paginalading (gemiddeld 20%). Elke byte telt als je [een Google Lighthouse-score van 100% wilt halen](https://www.usecue.com/blog/how-to-get-a-100-google-lighthouse-score/). Ik was blij te ontdekken dat [Boris Smus](https://github.com/borismus/image-zoom) mooi [voorwerk](https://web.dev/easy-high-dpi-images/) heeft gedaan over [dit onderwerp](https://www.filamentgroup.com/lab/compressive-images.html), waarin hij stelt dat een 'sterk gecomprimeerde 2x-afbeelding kleiner is en er beter uitziet dan de ongecomprimeerde 1x-afbeelding'. Ik heb een van de voorbeelden van Boris gebruikt om dit artikel te illustreren, waarin we proberen zichtbare compressie-artefacten te vermijden en onze afbeelding(en) toch flink te comprimeren.

> We proberen zichtbare compressie-artefacten te vermijden en onze afbeelding(en) toch flink te comprimeren.

## Onze afbeelding

Bekijk de volgende 'retina-ready' afbeelding van 881,7kb (0,9Mb) van deze oranje Lamborghini-sportwagen. Deze afbeelding heeft vier keer zoveel pixels als je ziet wanneer je op een apparaat met een niet-retina-scherm zit. Hij ziet er op elk scherm perfect uit... maar het feit dat je zojuist bijna 1Mb hebt gedownload is verschrikkelijk.

<p><img src="/uploads/car/2x-100.jpg" width="568"/></p>

We zouden veel bandbreedte kunnen besparen door een 'source set' toe te voegen. Daarmee vertel je de browser om op niet-retina-schermen een versie met lage resolutie op te halen. Dat betekent dat we een 1x- en een 2x-afbeelding gebruiken. Beide afbeeldingen kunnen gecomprimeerd worden om nog meer bandbreedte te besparen. Maar wat is de juiste mate van compressie voor afbeeldingen op retina- en niet-retina-schermen?  
<br>

|Kwaliteit|Grootte|
|----|----|
|[1x 10% jpg](/uploads/car/1x-10.jpg)|12.6kb|
|[1x 20% jpg](/uploads/car/1x-20.jpg)|18.0kb|
|[1x 30% jpg](/uploads/car/1x-30.jpg)|22.7kb|
|[1x 40% jpg](/uploads/car/1x-40.jpg)|26.5kb|
|[1x 50% jpg](/uploads/car/1x-50.jpg)|30.2kb|
|[1x 60% jpg](/uploads/car/1x-60.jpg)|34.3kb|
|[1x 70% jpg](/uploads/car/1x-70.jpg)|40.3kb|
|[1x 80% jpg](/uploads/car/1x-80.jpg)|50.3kb|
|[1x 90% jpg](/uploads/car/1x-90.jpg)|73.6kb|
|[1x 100% jpg](/uploads/car/1x-100.jpg)|246.6kb|

|Kwaliteit|Grootte|
|----|----|
|[2x 10% jpg](/uploads/car/2x-10.jpg)|32.2kb|
|[2x 20% jpg](/uploads/car/2x-20.jpg)|50.1kb|
|[2x 30% jpg](/uploads/car/2x-30.jpg)|66.3kb|
|[2x 40% jpg](/uploads/car/2x-40.jpg)|79.8kb|
|[2x 50% jpg](/uploads/car/2x-50.jpg)|92.8kb|
|[2x 60% jpg](/uploads/car/2x-60.jpg)|107.1kb|
|[2x 70% jpg](/uploads/car/2x-70.jpg)|129.1kb|
|[2x 80% jpg](/uploads/car/2x-80.jpg)|164.6kb|
|[2x 90% jpg](/uploads/car/2x-90.jpg)|250.8kb|
|[2x 100% jpg](/uploads/car/2x-100.jpg)|881.7kb|

## Compressie op niet-retina

Ik zou zeggen dat niet-retina-schermen zulke grote pixels (kunnen) hebben dat elke vorm van compressie zichtbaar is. Toch levert een beeldkwaliteit van 90% nog steeds een goede afbeelding op. In sommige gevallen is zelfs 50% acceptabel. Maar als ik één instelling voor al mijn afbeeldingen moest kiezen (omdat ik het in Hugo moest vastleggen), zou ik voor 90% gaan. De besparing is enorm en de kwaliteit is altijd goed.

## Perfecte beeldkwaliteit

Maar wat als ik je vertel dat je een perfecte (100%) beeldkwaliteit op een niet-retina-apparaat kunt krijgen en TOCH meer dan de helft van de bytes bespaart? Onmogelijk, denk je misschien... maar dat is niet zo.

Wil je een perfecte niet-retina-afbeelding, dan kun je een retina-ready afbeelding (een afbeelding met 4 keer zoveel pixels) (flink) comprimeren en een resultaat krijgen dat heel dicht bij 100% beeldkwaliteit ligt. De compressie moet rond de 50% liggen om ongeveer 60% van alle bytes te besparen. Als je [heel goed kijkt](/uploads/car/quality.png), zie je wat vervorming (pixelig effect) in de oranje sideskirt van de afbeelding linksonder, terwijl daar in de afbeelding rechtsonder niets van te zien is. Met andere woorden: de 2x 50% jpg-afbeelding ziet er op een niet-retina-scherm perfect uit, terwijl dat voor de 1x 90% jpg-afbeelding niet geldt.

Maar er is nog een veel zichtbaarder verschil op retina-schermen. De grotere afbeelding (2x 50% jpg) ziet er een stuk beter uit op schermen met een hoge pixeldichtheid (retina). Let op: ik heb de resolutie verdubbeld voor een betere vergelijking, waardoor de niet-retina-afbeelding 2x groter en de retina-afbeelding 4x groter(!) is dan in het echt.

## Nul complexiteit

Willen we perfecte afbeeldingen op niet-retina-schermen, dan kunnen we het beste een sterk gecomprimeerde retina-afbeelding gebruiken. Met een source set zouden we wat kwaliteit kunnen winnen of wat bytes kunnen besparen, maar dat voegt ook complexiteit toe. Datzelfde geldt voor het gebruik van het 'webp'-formaat, want [webp wordt nog niet volledig ondersteund](https://caniuse.com/?search=%20webp). Code kost geld en extra complexiteit ook. Bovendien ben ik lui. Daarom kies ik voor de simpelst mogelijke oplossing: gewoon één jpg-afbeelding.

## Eén formaat om ze allemaal te regeren

Hieronder vind je een overzicht van de opties, gesorteerd op bestandsgrootte. De conclusie is dat je, als je 'perfecte' afbeeldingen op niet-retina-schermen belangrijk vindt, altijd de retina-versie moet comprimeren. Als ik één optie uit de lijst hieronder moest kiezen (omdat ik dat globaal in Hugo wilde vastleggen), zou ik de '2x 50% jpg'-versie kiezen. De 2x 50% jpg ziet er op niet-retina perfect uit, op retina goed, en heeft een acceptabele grootte.  

> De 2x 50% jpg ziet er op niet-retina perfect uit, op retina goed, en heeft een acceptabele grootte.

<br>

|Compressie|Grootte|1x|2x|
|----|----|--|--|
|[1x 100% jpg](/uploads/car/1x-100.jpg)|//////////////////// 246.6kb|<span class="emoticon">😀</span>|<span class="emoticon">😡</span>|
|[2x 90% jpg](/uploads/car/2x-90.jpg)|//////////////////// 250.8kb|<span class="emoticon">😀</span>|<span class="emoticon">😀</span>|
|[2x 80% jpg](/uploads/car/2x-80.jpg)|///////////// 164.3kb|<span class="emoticon">😀</span>|<span class="emoticon">😀</span>|
|[2x 50% jpg](/uploads/car/2x-50.jpg)|/////// 92.8kb|<span class="emoticon">😀</span>|<span class="emoticon">🙂</span>|
|[1x 90% jpg](/uploads/car/1x-90.jpg)|////// 75.3kb|<span class="emoticon">🙂</span>|<span class="emoticon">😡</span>|
|[1x 80% jpg](/uploads/car/1x-80.jpg)|//// 50.3kb|<span class="emoticon">🙂</span>|<span class="emoticon">😡</span>|
|[2x 20% jpg](/uploads/car/2x-20.jpg)|//// 50.1kb|<span class="emoticon">🙂</span>|<span class="emoticon">😐</span>|
|[1x 50% jpg](/uploads/car/1x-50.jpg)|// 30.2kb|<span class="emoticon">😐</span>|<span class="emoticon">😡</span>|
|[1x 20% jpg](/uploads/car/1x-20.jpg)|/ 18.0kb|<span class="emoticon">😡</span>|<span class="emoticon">😡</span>|

<span class="emoticon">😀</span> = perfect   
<span class="emoticon">🙂</span> = goed   
<span class="emoticon">😐</span> = redelijk   
<span class="emoticon">😡</span> = verschrikkelijk   
<br>

## Perfect en toch 50%

Ik zei dat een kwaliteit van 1x 50% jpg maar in sommige gevallen (bij bepaalde afbeeldingen) acceptabel was op een niet-retina-scherm. Waarom zou 2x 50% dan 'goed' zijn op retina-schermen? Een jpg-kwaliteit van 50% op retina heeft [duidelijke compressie-artefacten](/uploads/car/quality.png) (zie de afbeelding rechtsboven) en we zeiden dat we 'zichtbare compressie-artefacten wilden vermijden'... Het antwoord is simpel. De pixels op de meeste retina-schermen zijn zo klein dat je oog ze niet los van elkaar kan zien, waardoor de vervorming (bijna) onzichtbaar is. Je oog vervaagt de afbeelding voor je, wat een schijnbaar perfecte afbeelding oplevert. Daarom scoorde 50% 'goed' op retina, terwijl het op niet-retina 'redelijk' scoorde.

Wil je bewijs? Ik daag je uit om hieronder het verschil te zien tussen een perfecte retina-afbeelding en een tot 50% vervormde versie (uiteraard moet je ze op een retina-scherm bekijken, anders zien ze er altijd perfect uit)...

<p><img src="/uploads/car/2x-100.jpg" width="568"/>2x 100% jpg-kwaliteit (881.7kb)</p>

<p><img src="/uploads/car/2x-50.jpg" width="568"/>2x 50% jpg-kwaliteit (92.8kb)</p>

Of je de compressie in de onderste afbeelding kunt zien hangt grotendeels af van de pixelgrootte van je apparaat. Zit je op een gangbare mobiele telefoon (met retina-scherm), dan zie je twee perfecte afbeeldingen, terwijl de bovenste bijna 10 keer zo groot is als de onderste. Zit je op een apparaat met grotere pixels (en een retina-scherm), dan zie je het pixelige effect misschien als je heel goed kijkt. Let op: we zoeken het vervormingseffect dat te zien is in de afbeelding rechtsboven van deze [4x-close-up](/uploads/car/quality.png).

## HugoConf 2022

Dus... met 2x 50% jpg-compressie krijg je (bijna) perfecte afbeeldingen op retina- ÉN niet-retina-schermen, nul extra complexiteit en bespaar je bytes met een factor 10 (of 2 als je retina-schermen negeert). Ik wed dat je dat in je Hugo-website wilt hebben voor alle afbeeldingen, ook die in je markdown. Geen probleem! Ik heb een lightning talk ingediend voor [HugoConf 2022](https://hugoconf.io/), getiteld 'Resize all images', waarin ik je laat zien hoe je dit met een minimum aan code voor elkaar krijgt. Ik weet niet zeker of ik de definitieve line-up haal, dus ik heb ook [het volledige transcript gepubliceerd](/nl/blog/alle-afbeeldingen-verkleinen).
