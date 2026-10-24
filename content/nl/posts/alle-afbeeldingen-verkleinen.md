---
title: Alle afbeeldingen verkleinen
translationKey: resize-all-images
date: 2022-07-04
---

{{< vimeo 727145223 >}}

Bedankt dat je deze lightning talk over 'afbeeldingen verkleinen' bijwoont. Hugo staat bekend om zijn snelle paginaladingen. Maar als je webpagina's wilt die direct laden, moet je ook je afbeeldingen goed verkleinen. Gelukkig kan Hugo afbeeldingen zelf verkleinen. In deze talk vertel ik je hoe je Hugo zo instelt dat hij automatisch alle afbeeldingen in je project verkleint en comprimeert, ook die welke via een extern CMS door je klant worden geüpload.

## 1. Kies je methode

Eerst moet je je methode voor verkleinen en comprimeren kiezen. Ik hou de zaken graag simpel. Daarom gebruik ik altijd de [één-afbeelding-techniek](/nl/blog/beeldcompressie-voor-luie-mensen), waarbij je één te grote, sterk gecomprimeerde jpg-afbeelding gebruikt. Een typische afbeelding, zoals deze, is twee tot tien keer kleiner dan het origineel, terwijl de image-tag er zo simpel uitziet als dit:

```
<img src="large_heavily_compressed.jpg" />
```

Wil je meer over deze techniek weten, bezoek dan HugoCodex.org, een website vol Hugo-tips en -trucs.

## 2. Stel de asset-map in

Zoals gezegd kan Hugo afbeeldingen automatisch verkleinen. Dat doet hij tijdens het bouwproces. Hugo kan echter alleen afbeeldingen verkleinen die in een aangewezen 'asset directory' staan. Ik bewaar al mijn afbeeldingen in de map 'static', dus ik wijs mijn static-map altijd aan als asset directory. Dat doe je door de volgende regel aan je configuratiebestand toe te voegen:

```
assetDir: static
```

## 3. Maak een compressieregel

Nu kunnen we beginnen. Stel dat je front matter er zo uitziet:

```
---
title: My first post
image: /path/to/my/image.jpg
---
```

Je pad staat in je front matter-variabele, dus in '.Params.image'. Dit kan een uitgelichte afbeelding zijn die je in de header van je website/post wilt gebruiken. Uiteraard wil je die afbeelding verkleinen. Om de juiste afbeelding te vinden gebruiken we een Hugo-variabele die 'resources' heet (zonder hoofdletter). Omdat we de 'assetDir' op de static-map hebben gezet, bevat deze variabele alles wat in je static-map staat. Je kunt een losse asset/resource aanwijzen met een 'GetMatch'-statement in combinatie met het pad naar je afbeelding. Dat ziet er zo uit:

```
resources.GetMatch .Params.image
```

Deze code 'vindt' je asset/resource. Vervolgens moet je een strategie voor het verkleinen kiezen. Dat kan 'Resize', 'Fit', 'Fill' of 'Crop' zijn. In dit voorbeeld gebruik ik 'Fit' om ervoor te zorgen dat mijn afbeelding altijd kleiner is dan 600 pixels (aan elke zijde). Ik gebruik een 'Smart' crop en 50% beeldkwaliteit, zoals eerder uitgelegd bij de [één-afbeelding-techniek](/nl/blog/beeldcompressie-voor-luie-mensen). Dat levert dit op:

```
(resources.GetMatch .Params.image).Fit "600x600 jpg Smart q50"
```

Tot slot wil je waarschijnlijk de relatieve URL naar deze afbeelding hebben. Die krijg je door '.RelPermalink' toe te voegen en het geheel tussen haakjes te zetten, zo:

```
((resources.GetMatch .Params.image).Fit "600x600 jpg Smart q50").RelPermalink
```

De code hierboven levert een URL op die naar een verkleinde versie van mijn originele afbeelding wijst. Maar als je originele afbeelding niet (meer) bestaat, faalt je code en gooit Hugo een foutmelding. Daarom is het slim om te controleren of de gewenste resource bestaat (wikkel 'resources.GetMatch' in een if-statement), wat er zo uitziet:

```
{{ if (resources.GetMatch .Params.image) }}
<img src="{{ ((resources.GetMatch .Params.image).Fit `600x600 jpg Smart q50`).RelPermalink }}" />
{{ end }}
```

## 4. Maak een render hook

Nu hebben we verkleinde afbeeldingen in onze layout. Maar hoe zit het met de afbeeldingen in de content? Voor afbeeldingen in de markdown kun je een 'render hook' gebruiken. Dat is een bestand dat beschrijft/overschrijft hoe markdown-afbeeldingen worden afgehandeld. Om de bovenstaande aanpak in de render hook te gebruiken maak je het volgende bestand aan:

```
/layouts/_markup/render-image.html
```

... en zet je deze logica erin:

```
{{ with (resources.GetMatch .Destination) }}
    {{ if ne .MediaType.SubType "svg" }}
        <img src="{{ (.Resize `900x jpg Smart q50`).RelPermalink | safeURL }}" alt="{{ $.Text }}" />
    {{ else }}
        <img src="{{ .RelPermalink | safeURL }}" alt="{{ $.Text }}" />
    {{ end }}
{{ end }}
```

Let op: we gebruiken '.Destination' voor de bron van de originele afbeelding en '.Text' voor de alt-tekst die in de markdown is opgegeven. Zodra je de render hook hebt toegevoegd, kunnen en zullen alle afbeeldingen in je Hugo-project verkleind worden.

## Conclusie

In deze korte [lightning talk](https://hugoconf.io/) heb ik uitgelegd hoe je alle afbeeldingen in je Hugo-project verkleint met de [één-afbeelding-techniek](/nl/blog/beeldcompressie-voor-luie-mensen/). We hebben niet alleen de layout-afbeeldingen verkleind, maar via een render hook ook de afbeeldingen in de markdown aangepakt. Alle afbeeldingen verkleinen levert snellere paginaladingen en een betere gebruikerservaring op.

## Meer over het verkleinen van afbeeldingen

Naast mijn talk waren er op HugoConf (editie 2022) nog een paar interessante talks over afbeeldingen. Ze zijn allemaal het bekijken waard. Hier een overzicht:

- <a href="https://www.youtube.com/watch?v=JpxiKUHzoqM&t=21270s" target="_blank" class="no-lightbox">Making Image Uploads Faster with Figmage - Ravi Lingineni</a>
- <a href="https://www.youtube.com/watch?v=JpxiKUHzoqM&t=30304s" target="_blank" class="no-lightbox">Custom Shortcodes for the Win - Chris Griffing</a>
- <a href="https://youtu.be/ACRN43SbF2g?t=23494" target="_blank" class="no-lightbox">How to Achieve Perfect Google Lighthouse Scores Using Hugo - Scott Reilly</a>

Veel programmeerplezier!
