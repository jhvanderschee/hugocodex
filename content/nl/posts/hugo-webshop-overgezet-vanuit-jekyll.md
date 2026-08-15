---
title: Hugo-webshop overgezet vanuit Jekyll
translationKey: hugo-webshop-ported-from-jekyll
date: "2022-10-12"
---

Ik wilde de webshop van https://jekyllcodex.org al een tijd naar deze website overzetten, maar ik kon er de tijd niet voor vinden. Gelukkig wilde mijn Spaanse vriend Fenix me helpen. Hij heeft de Jekyll-webshop naar Hugo overgezet. Je vindt een [demo](/nl/doneren/) door bovenin op 'Doneren' te klikken.

Fenix verving de layouts door shortcodes, wat de bruikbaarheid verbeterde. Ook verving hij alle Liquid-code door de Go templating taal. De webshop gebruikt Mollie, wat prima werkt voor Europese betalingen. Wil je in de VS verkopen, dan kun je de dynamische betaallink van Mollie vervangen door een dynamische Paypal-link.

Let op: een volledig client-side webshop heeft altijd een paar nadelen. Toch kun je met een beetje PHP in de orderafhandeling al heel ver komen (wat dit voorbeeld dus NIET gebruikt). We denken dat we een perfect klein webshopje hebben gemaakt voor websites met een klein aantal verkopen.

Fenix en ik werken nog aan de handleiding van deze webshop, maar Hugo-liefhebbers zouden de code ook zonder die handleiding moeten kunnen lezen en begrijpen.
