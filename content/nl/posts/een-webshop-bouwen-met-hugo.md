---
title: Een webshop bouwen met Hugo
translationKey: building-a-webshop-with-hugo
date: 2022-09-30
---
Dit stond al lang op ons verlanglijstje: een simpele webshop in Hugo bouwen zonder maandelijks bedrag aan een derde partij te betalen. En eindelijk is het me gelukt! Wil je zien hoe het werkt, kijk dan op mijn [donatiepagina](/nl/doneren). De webshop heeft maar twee instellingen nodig: het e-mailadres voor de bevestiging en je Plink-betaallink. Het opzetten kost een paar minuten en vereist alleen een Mollie-account. Er zijn geen beperkingen aan de vormgeving van de productpagina's. Hij gebruikt het HTML API-principe, waar Lea Verou van MIT flink onderzoek naar heeft gedaan en dat eenvoudig te implementeren blijkt. Op de donatiepagina laten we zien hoe dit met productvarianten kan werken.

De webshop accepteert alle betaalmethodes van Mollie:

- Mastercard
- Visa
- American Express
- PayPal
- SEPA-overboeking
- SEPA-incasso
- Bitcoin
- SOFORT Banking
- iDEAL
- Bancontact
- KBC/CBC-betaalknop
- Belfius-betaalknop
- paysafecard
- CartaSi
- Cartes Bancaires
- Cadeaubonnen

Deze webshop is verre van perfect. Hij houdt geen voorraad bij, berekent geen btw en maakt geen automatische facturen. Maar deze webshop stelt je wel in staat om in bijna elk land producten te verkopen tegen een heel kleine vergoeding. Alle velden in het afrekenformulier worden automagisch aan je bevestigingsmail toegevoegd, en als je radiobuttons met een prijs en omschrijving toevoegt, worden die waarden aan de bestelling toegevoegd (denk aan cadeauverpakking of verzendmethode).

Laten we eens kijken hoe we een simpele webshop aan onze op Hugo gebaseerde website kunnen toevoegen!


### Introductie

Dit is een simpele webshop met verschillende betaalmethodes waarvoor je geen maandbedrag hoeft te betalen. Ideaal voor een eenvoudige webshop. De webshop kan op dit moment geen variabele btw-berekeningen aan. Hij biedt ook geen afwijkend afleveradres, al is dat makkelijk toe te voegen. Met een e-mailparser zou je het bestelproces nog verder kunnen automatiseren.

### Hoe het werkt

De webshop werkt in de basis zo: je maakt een link met een class 'addtocart' die naar de winkelwagen linkt. De productlayout gebruikt die via het formulier:

```
	    <form action="/donate/cart" onsubmit="return addToCart(this)">
```

Deze link zoekt naar de attributen 'image', 'price' en 'description' en voegt het product toe aan de winkelwagen-cookie. Klik je in de winkelwagen op 'checkout', dan ga je naar een afrekenformulier. Klik je op de volgende stap in het betaalproces, dan ga je naar een betaallink van Plink (Mollie). Voordat de gebruiker naar de betaallink wordt gestuurd, wordt de inhoud van de winkelwagen per e-mail verstuurd. Tegelijk wordt er een ordernummer gegenereerd op basis van een timestamp in milliseconden. Dat ordernummer wordt aan de e-mail en aan de betaling toegevoegd. Na een geslaagde betaling wordt de gebruiker (door Plink) teruggestuurd naar je website.


[expand]

Wil je de winkelwagen niet gebruiken, gebruik dan gewoon een link met een class 'buy' en link direct naar de checkout-pagina. Zo zit er altijd maar één item in de winkelwagen.

```
<a href="/checkout" class="buy" image="/path/to/productimage.jpg" price="1.00" description="test">Buy</a>
```

Zodra de webshop draait, kun je alles bijschaven door de template- en HTML-code aan te passen. Kom je er niet uit hoe je mooie productpagina's met productvarianten maakt? Kijk dan gewoon naar de broncode van deze website op Github. Nog steeds hulp nodig? Stel een vraag op Stack Overflow, of betaal me om je te helpen.

[/expand]

### Installatie

Voordat je de webshop kunt toevoegen moet je [een Mollie-account aanmaken](https://www.mollie.com). Mollie vraagt je om je website te registreren. Ze controleren of je een fatsoenlijk retourbeleid, duidelijk vermelde bedrijfsgegevens en duidelijke algemene voorwaarden hebt. Zodra je website door Mollie is goedgekeurd kun je betaalmethodes toevoegen. Ga naar [https://useplink.com](https://useplink.com) en registreer je. In je Mollie-dashboard kun je op je profiel klikken en 'Payment links' kiezen om naar je Plink-account te gaan. Maak een herbruikbare link met een variabel bedrag en een variabele omschrijving. Zodra je dat gedaan hebt, ben je klaar om de webshop aan je website toe te voegen.

#### Stap 1. Voeg de footerbestanden met de betaallink toe

Download de bestanden en zet ze in je mappen. Zorg dat de onderkant van je layout-document eruitziet als de code hieronder. De paymentlink moet de persoonlijke herbruikbare link zijn die je zojuist hebt gemaakt.

```
...

<!-- webshop -->
<script type="text/javascript" src="/js/webshop.js"></script>
<link rel="stylesheet" href="/css/webshop.css">
<script type="text/javascript">
    updateCartCount();
    {{ if eq .Layout "cart" }}populateCart();{{ end }}
    {{ if eq .Layout "checkout" }}initCheckoutForm(document.querySelector('#checkout form'));{{ end }}
    {{ if eq .Layout "paylink" }}redirectToPayment('https://useplink.com/payment/ssMgtkddEzgC4rKKJJ9T');{{ end }}
</script>

</body>
</html>
```

#### Stap 2. Voeg de cart-, checkout- en paylink-bestanden toe

Je moet de bestanden 'cart.html', 'checkout.html' en 'paylink.html' downloaden samen met hun '.md'-tegenhangers, en de html-bestanden in de layout-map zetten en de md-bestanden in de map 'donate'. Verander dat gerust in 'webshop' of hoe je het maar wilt noemen.

#### Stap 3. Maak een paar producten

Maak een paar producten. Ze moeten onderdeel zijn van de sectie 'products' en elk 'product.md'-bestand zou er zo uit moeten zien:

```
---
title: Buy me a beer
image: "/uploads/beer/5.jpg"
images:
- image: "/uploads/beer/2.jpg"
- image: "/uploads/beer/3.jpg"
- image: "/uploads/beer/4.jpg"
- image: "/uploads/beer/1.jpg"
variant_type: size
variants:
- name: half-a-pint
  price: 2.75
  sku: beerhalfapint
- name: pint
  price: 4.25
  sku: beerpint
order_number: 2
---

I like beer a lot! IPA, Guinness, Stout, craft beers... and I love to try new ones. Buy me half-a-pint to get going or a pint to get a good buzz.
```
