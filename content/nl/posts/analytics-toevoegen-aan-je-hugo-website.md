---
title: Analytics toevoegen aan je Hugo-website
translationKey: adding-analytics-to-your-hugo-website
date: 2023-02-03
---

Om analytics in een Hugo Jamstack-website te krijgen, kun je een van de volgende aanpakken gebruiken:

- Analytics-tools van derden, zoals Google Analytics of Matomo. Deze tools leveren een trackingcode die je in je JAMstack-website kunt plaatsen om gegevens over gebruikersgedrag te verzamelen.
- Eigen tracking aan de serverkant: je kunt een serverless functie gebruiken om gegevens over gebruikersgedrag vast te leggen en in een database op te slaan.
- Een alles-in-één dienstverlener gebruiken.

Alle drie de opties hebben trouwens hun nadelen.

### Analytics van derden

De eerste oplossing lijkt misschien gratis, maar overtreedt hoogstwaarschijnlijk de AVG. Je kunt beter een betaalde, privacyvriendelijke oplossing gebruiken, zoals de [Cloud-versie van Matomo](https://matomo.org) (voorheen Piwik).

### Analytics aan de serverkant

De tweede oplossing, tracking aan de serverkant, vereist dat je een traditionele server (zoals een LAMP- of MEAN-stack) of serverless functies opzet om analysegegevens te verzamelen en te verwerken. Je zult de analytics zelf moeten programmeren of een open-source-oplossing moeten installeren. Een goede optie is het goede (maar oude) [AWstats](https://www.awstats.org/).

### Een alles-in-één dienstverlener

De derde optie is een alles-in-één dienstverlener met analytics inbegrepen. Deze optie kost je hoogstwaarschijnlijk geld. Er zijn verschillende alles-in-één dienstverleners, zoals [Netlify](https://www.netlify.com/) en [CloudCannon](https://cloudcannon.com/). Netlify kost 9 dollar per website per maand (alleen al voor de analytics). CloudCannon heeft (zeer beperkte) geïntegreerde cumulatieve gebruiksstatistieken en begint bij 45 dollar per maand.

Ik draai zelf trouwens HEEL VEEL Hugo-websites. Ik heb mijn eigen alles-in-één dienst opgezet, ALLEEN voor Hugo-websites. Het is een one-stop-shop met een vaste prijs, inclusief analytics. Je ziet er verkeer en hits per maand en per dag. Meer weten? Kijk op [cms.usecue.com](https://cms.usecue.com/)!
