---
title: Carousel bijgewerkt
translationKey: carousel-updated
date: "2022-05-23 13:00:00"
---

Een half jaar geleden [maakte ik](/nl/blog/lichtgewicht-slider-carousel-toegevoegd/) een slider/carousel voor Hugo, gebaseerd op [deze codepen](https://codepen.io/joosts/pen/MWJBPgo). Vandaag heb ik de code bijgewerkt en een bug opgelost (de bolletjes gaven op mobiel tijdens het swipen niet de juiste positie aan). De code heeft nu een 'event listener' om scrollen te detecteren en ik heb een debounce-functie toegevoegd van [Chris Ferdinandi](https://gomakethings.com/debouncing-your-javascript-events/), die toevallig ook een fanatiek Hugo-gebruiker is. Hij zou nu responsive en boterzacht moeten zijn.

Er is nog iets veranderd: de responsiviteit. Voor een website die ik aan het bouwen was, moest de slider een variabel aantal slides kunnen tonen. Het is me gelukt om de slider volledig responsive te maken. Je hebt misschien een herlaadbeurt nodig (omdat ik dure resize-listeners wilde voorkomen), maar je kunt met CSS bepalen hoeveel slides je carousel toont. De carousel past zich daar dan op aan.
