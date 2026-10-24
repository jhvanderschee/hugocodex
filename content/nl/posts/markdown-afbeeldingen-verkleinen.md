---
title: 'Markdown-afbeeldingen verkleinen'
translationKey: resize-markdown-images
date: '2022-04-08'
---

Vóór 2015 bouwde ik WordPress-websites. Sommige dingen in WordPress vond ik echt goed. Een daarvan was het verkleinen van afbeeldingen. Toen ik in 2015 overstapte op Jekyll kwam ik erachter dat ik afbeeldingen niet meer automatisch kon verkleinen. Gelukkig vond ik [images.weserv.nl](https://images.weserv.nl), een Nederlandse dienst voor het verkleinen van afbeeldingen. Die dienst was slimmer dan WordPress. Hij verkleinde je afbeeldingen on the fly en hield ze 30 dagen in hun cache. Een uitstekende strategie. Maar de afbeeldingen in mijn markdown werden nog steeds niet verkleind, wat vaak leidde tot enorme paginaladingen.

Toen ik in juni 2021 overstapte op Hugo was ik blij te ontdekken dat Hugo afbeeldingen 'tijdens het bouwen' kon verkleinen. Het commando daarvoor moest je in een shortcode of een layout schrijven. Hoewel shortcodes een stap in de goede richting waren, maakten 'gewone' markdown-editors (zoals mijn CMS [cms.usecue.com](https://cms.usecue.com) gebruikt) nog steeds niet-verkleinde afbeeldingen. Maar... toen ik BEP [dit antwoord](https://discourse.gohugo.io/t/is-this-possible-with-hugo/38089/6?u=jhvanderschee) zag geven op een vrij ongerelateerde vraag, besefte ik dat Hugo standaard markdown-afbeeldingen kan verkleinen via render hooks! Ik dook meteen de documentatie in en maakte een hook voor mijn meest recente project... en het werkte!

Het bestand heet '/layouts/_markup/render-image.html' en bevat de volgende code:

```
{{ if (resources.GetMatch .Destination) }}
  <img src="{{ ((resources.GetMatch .Destination).Resize `1400x jpg q50`).RelPermalink | safeURL }}" alt="{{ .Text }}" />
{{ end }}
```
Dat betekent dat een standaardafbeelding in markdown, zoals deze:

```
![alt tekst](/uploads/image.png)
```

... nu door Hugo verwerkt wordt. Hij maakt er een JPG-bestand van met 50% compressie en een breedte van maximaal 1400 pixels, wat meestal een afbeelding van <100kb oplevert, vaak tien keer zo klein als het origineel. Ik noem mezelf een [expert in websiteprestaties](https://www.usecue.com) en ik vind dit echt een grote stap, zeker als je een [perfecte Google Lighthouse-score](https://www.usecue.com/blog/how-to-get-a-100-google-lighthouse-score/) wilt halen.
