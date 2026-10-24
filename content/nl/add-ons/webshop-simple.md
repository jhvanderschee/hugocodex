---
title: Webshop (simpel)
---

### Introductie

Dit is een simpele webshop met Stripe waarvoor je geen maandbedrag hoeft te betalen. Ideaal voor een eenvoudige webshop. Bekijk de [demo](/simple-donate)! Let op: deze webshop gebruikt geen winkelwagen en ook geen extra's zoals verzendkosten. Heb je die functionaliteit wel nodig, gebruik dan de [andere variant](/nl/uitbreidingen/webshop).

### Hoe het werkt

We laten [payment links](https://stripe.com/en-nl/payments/payment-links) van Stripe het meeste werk voor ons doen. We maken in Stripe een betaallink voor elke productvariant. Daarna maken we in Hugo de productpagina's en zetten we die betaallinks bij de bijbehorende producten.

### Installatie

#### Stap 1. Maak een Stripe-account

Voordat je de webshop kunt toevoegen heb je, om de betalingen af te handelen, een [Stripe-account](https://dashboard.stripe.com/register) nodig.


#### Stap 2. Maak je producten in Stripe
Zodra je een account hebt, ga je naar het [Stripe dashboard](https://dashboard.stripe.com) en navigeer je naar "Product catalog" in de linkerkolom. Druk op "N" op je toetsenbord of klik op "New Product" om een nieuw product te maken. Richt je product hier naar wens in: geef het een naam, een prijs en eventueel een afbeelding. Je kunt zoveel producten maken als je wilt.


#### Stap 3. Maak je afrekenpagina in Stripe
Zodra je een prijs voor je product hebt, klik je op de kebab (drie horizontale puntjes) helemaal rechts op de prijsregel. Daarmee open je een menu waarin je "Create payment link" ziet staan. Na het klikken zie je een scherm waarin je je afrekenpagina kunt aanpassen. Dat mag je naar eigen inzicht doen, maar het advies is om het vinkje "Let customers adjust quantity" aan te zetten. Ben je klaar, klik dan rechtsboven op "Create link ✓". Goed gedaan! Je kunt nu je betaallink kopiëren, die je in de volgende stap nodig hebt. Herhaal deze stap voor elk product dat je wilt aanbieden.


#### Stap 4. Maak wat producten
Maak een nieuwe Hugo-sectie (een map in de root) en noem die 'products'. In die map maak je je producten en in het bestand '_index.md' je productoverzicht. Elk bestand 'mijn-productnaam.md' (vervang 'mijn-productnaam' door een mooie productslug) kan er zo uitzien:

```
---
title: Trakteer me op een biertje
image: "/uploads/beer/5.jpg"
variant_type: formaat
variants:
- name: fluitje
  price: 2.75
  stripe_payment_link: https://buy.stripe.com/test_bIY28m9VB6VY1AA144
- name: vaasje
  price: 4.25
  stripe_payment_link: https://buy.stripe.com/test_7sI14i9VBcgia766op
---
Ik hou erg van bier! IPA, Guinness, stout, speciaalbier... en ik vind het heerlijk om nieuwe te proberen. Trakteer me op een fluitje om op gang te komen of op een vaasje voor een lekker begin van de avond.

```

#### Stap 5. Voeg scripts toe aan de footer
Download [webshop-simple.js](https://hugocodex.org/js/webshop-simple.js) en voeg het toe aan je project. Zorg dat de onderkant van je layoutbestand er zo uitziet als hieronder.

```
<script type="text/javascript" src="/js/webshop-simple.js"></script>
```


#### Stap 6. Alles afmaken
Zorg nu op je gloednieuwe Hugo-productpagina dat je template er ongeveer zo uitziet:

````
<section class="product">
    {{ $myProductHasMoreThanOneVariant := gt (len .Params.variants) 0 }}
    <h1>{{ .Title }}</h1>
    <img src="{{ .Params.image }}" alt="My awesome product">
    <span class="productprice">{{/* Dynamically filled by Javascript */}}</span>
    {{ if $myProductHasMoreThanOneVariant }}
        <label for="variant">Choose a {{ .Params.variant_type }}:</label>
        <select onchange="updateBuyButton()" id="variant" name="variant">
            {{ range $variant :=.Params.variants }}
                <option data-payment-url="{{ $variant.stripe_payment_link }}" data-price="{{ $variant.price }}">
                    {{ $variant.name }}
                </option>
            {{ end }}
        </select>
        <a href="{{/*  Dynamically filled by Javascript  */}}" class="pay btn">Buy now</a>
    {{ else }}
        <a href="{{ (index .Params.variants 0).stripe_payment_link }}" class="pay btn">Buy now</a>
    {{ end }}
</section>
````
