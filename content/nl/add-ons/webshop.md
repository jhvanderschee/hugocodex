---
title: Webshop
---

### Introductie

Dit is een webshop met verschillende betaalmethodes waarvoor je geen maandbedrag hoeft te betalen. De webshop kan op dit moment geen variabele btw-berekeningen aan. Hij biedt ook geen afwijkend afleveradres, al is dat makkelijk toe te voegen. Met een e-mailparser zou je het bestelproces nog verder kunnen automatiseren. Zoek je iets minder ingewikkelds, probeer dan de [simpelere variant](/nl/uitbreidingen/webshop-simple) met Stripe. De Nederlandse versie van deze shop rekent af via de [betaalpagina van Usecue](https://pos.usecue.com/p/docs/payment-page/), waar je bezoeker met een QR-code, iDEAL of creditcard betaalt. Wil je het zien, [probeer de demo](/nl/doneren/).

### Hoe het werkt

We hebben geen database, dus we maken onze winkelwagen in localStorage. In die winkelwagen bewaren we alles: alle productinformatie en de voorkeuren van de gebruiker, zoals het aantal en de variant. Op de productpagina's worden de producten aan je winkelwagen-array in localStorage toegevoegd. Op de winkelwagenpagina lezen we die array simpelweg uit en tonen we hem op het scherm (met javascript). Daarna ga je met de knop 'verder naar afrekenen' naar de afrekenpagina. Op die afrekenpagina vul je een formulier met je persoonlijke gegevens in. Zodra je dat verstuurt, gaan die gegevens per e-mail naar de winkelier. Ten slotte kom je op een betaalpagina. Om de uiteindelijke betaling aan het ingevulde formulier te koppelen, wordt er tijdens het afrekenen een uniek bestelnummer gegenereerd. Dat nummer (dat ook in localStorage staat) gaat mee naar de betaalpagina.

### Installatie

#### Stap 1. Maak een account bij Usecue, Mollie of Paypal

Voordat je de webshop kunt toevoegen heb je, om de betalingen af te handelen, een account nodig. Voor de Nederlandse variant maak je een account op [pos.usecue.com](https://pos.usecue.com). Daar vind je onder Instellingen > Betaalpagina je eigen bedrijfsnummer. Dat nummer is het enige dat je nodig hebt: je geeft het in stap 3 als 'id' mee.  
Wil je liever [Mollie](https://www.mollie.com) of [Paypal](https://paypal.com) gebruiken? Mollie werkt alleen voor bedrijven binnen de EU en Paypal werkt wereldwijd. Mollie vraagt je je website te registreren. Ze controleren of je een fatsoenlijk retourbeleid hebt, of je bedrijfsgegevens duidelijk vermeld staan en of je algemene voorwaarden helder zijn. Zodra je website door Mollie is goedgekeurd, kun je betaalmethodes toevoegen. Ga naar [https://useplink.com](https://useplink.com) en registreer je. In je Mollie-dashboard klik je op je profiel en kies je 'Betaallinks' om naar je Plink-account te gaan. Maak daar een herbruikbare link met een variabel bedrag en een variabele omschrijving. Kies je voor Paypal, dan ga je naar het developer dashboard. Daar vind je 'My apps & Credentials'. Op die pagina klik je op de knop 'Create App', die je een 'client_id' geeft.

#### Stap 2. Voeg scripts toe aan de footer

Download de bestanden en zet ze in je mappen. Zorg dat de onderkant van je layoutbestand er zo uitziet als hieronder.

```
<link rel="stylesheet" href="/css/webshop.css">
<script type="text/javascript" src="/js/webshop.js"></script>
```

#### Stap 3. Maak de shortcodes 'cart', 'checkout' en 'paylink'
	
Je hebt de shortcodes [cart.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_shortcodes/cart.html), [checkout.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_shortcodes/checkout.html) en een betaalshortcode nodig. Voor de betaalpagina van Usecue is dat [usecue-payment.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_shortcodes/usecue-payment.html), voor Paypal [paypal-buttons.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_shortcodes/paypal-buttons.html) en voor Mollie [redirect-to-mollie.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_shortcodes/redirect-to-mollie.html). Download deze 3 bestanden en sla ze op in de map [layouts/_shortcodes](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_shortcodes/) van je project.

#### Stap 4. Maak de contentpagina's 'cart', 'checkout' en 'paylink'

Maak de bijbehorende contentpagina's in markdown met daarin de shortcodes. Dus de 'cart.md', 'checkout.md' en 'paylink.md'. Dat kan in de root van de map 'content/', waarna je de urls naar wens herschrijft. De 'paylink.md' voor de betaalpagina van Usecue ziet er zo uit (vervang '18' door je eigen bedrijfsnummer):

```
---
title: Betalen
url: doneren/betalen
---

Een moment geduld, we laden de betaalpagina.

{{</* usecue-payment id="18" lang="nl" */>}}
```

De shortcode roept `payWithUsecue()` uit 'webshop.js' aan. Die functie zet het bedrag uit je winkelwagen, het bestelnummer en de taal in de url en laadt daarna het script 'pay.js' van pos.usecue.com. Dat script zet je eigen pagina om in een betaalpagina, waarop je bezoeker met een QR-code, iDEAL of creditcard kan betalen. Let op: je eigen site moet https gebruiken, anders blokkeren browsers het frame.

#### Stap 5. Maak wat producten

Maak een nieuwe Hugo-sectie (een map in de root) en noem die 'products'. In die map maak je je producten en in het bestand '_index.md' je productoverzicht. Elk bestand 'mijn-productnaam.md' (vervang 'mijn-productnaam' door een mooie productslug) ziet er zo uit:

```
---
title: Trakteer me op een biertje
image: "/uploads/beer/5.jpg"
images:
- image: "/uploads/beer/2.jpg"
- image: "/uploads/beer/3.jpg"
- image: "/uploads/beer/4.jpg"
- image: "/uploads/beer/1.jpg"
variant_type: formaat
variants:
- name: fluitje
  price: 2.75
  sku: beerhalfapint
- name: vaasje
  price: 4.25
  sku: beerpint
order_number: 2
---

Ik hou erg van bier! IPA, Guinness, stout, speciaalbier... en ik vind het heerlijk om nieuwe te proberen. Trakteer me op een fluitje om op gang te komen of op een vaasje voor een lekker begin van de avond.
```
