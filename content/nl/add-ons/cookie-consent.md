---
title: Cookietoestemming
---

### Introductie

Om aan de AVG te voldoen heb je toestemming van de gebruiker nodig voor alle niet-functionele cookies en scripts en die van derden. Dat kun je regelen door deze 'cookie consent banner' aan de footer van de website toe te voegen. Deze banner geeft je een gedetailleerd overzicht en fijnmazige controle over de scripts die geladen worden.

### Hoe het werkt

De code plaatst een toestemmingsbanner onderaan het scherm. Als je op 'Weigeren', 'Toestaan', 'Alles toestaan' of 'Voorkeuren opslaan' klikt, wordt er een cookie aangemaakt die 31 dagen geldig is. Bij elke paginalading controleert de code of deze cookie bestaat. Bestaat hij, dan wordt gekeken welke scripts toegestaan zijn. Bestaat hij niet, dan laadt de pagina alleen de functionele scripts. Scripts beheer je in een bestand 'consent.yaml' in de map data. Bezoekers kunnen hun toestemming instellen of nakijken door op een link met de class 'manage-consent' te klikken, zoals deze: <a class="manage-consent" href="#manage-consent">toestemming beheren</a>. Tip: zet minstens één van deze links in de footer van je website. Wil je het gedrag van deze banner resetten? Verwijder de cookie 'consent-settings' in je browser of klik op deze <a href="#" onclick="eraseCookie('consent-settings'); location.reload();">resetlink</a>.

Zo ziet de 'consent.yaml' eruit:

```
items:
  - title: Google Anaytics (functional)
    description: This code gives us insight into the number of people that visit our website, where they are from and what they are clicking on.
    is_functional: true
    script_file: ga.js
  - title: Crisp chat
    description: This code gives users the option to chat directly with us through a chat box in the bottom right corner.
    is_functional: false
    script_file: crisp.js
```

### Installatie

Stap 1. Download het bestand [consent.yaml](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/data/consent.yaml) en pas het aan naar jouw wensen
<br />Stap 2. Sla het op in de map 'data' van je project
<br />Stap 3. Zorg dat de scriptbestanden in je map 'static/js' staan
<br />Stap 4. Download het bestand [consent.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/consent.html)
<br />Stap 5. Sla het bestand op in de map 'layouts/_partials' van je project
<br />Stap 6. Zorg dat de onderkant van je layoutbestand er zo uitziet:

```
...
{{ partial "consent.html" . }}
</body>
</html>
```
