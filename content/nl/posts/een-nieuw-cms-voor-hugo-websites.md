---
title: Een nieuw CMS voor Hugo-websites
translationKey: a-new-cms-for-hugo-websites
date: 2021-11-19
---

Netlify deed onderzoek naar [de prioriteiten van Jamstack-developers](https://www.usecue.com/blog/jamstack-is-eating-the-world/). Wat Jamstack-developers het belangrijkst vinden is 'performance', wat de populariteit van Hugo verklaart. Hugo is de absolute koning van de performance. Er is geen SSG zo snel als Hugo. Andere prioriteiten van Jamstack-developers zijn uptime, veiligheid en ontwikkelsnelheid, die over het algemeen goed zijn bij elk Jamstack-project. Toch weten we (en zien we in de data) dat mensen er steeds meer moeite mee hebben om hun Jamstack-website compliant te krijgen. Dat komt waarschijnlijk door het gedistribueerde karakter van Jamstack-projecten. Een Jamstack-project combineert meerdere diensten van meerdere leveranciers. Dat betekent dat je elke leverancier op compliance moet controleren. We zien ook dat mensen zich steeds meer zorgen maken over vendor lock-in. Elke leverancier vraagt van je dat je leert hoe hun software werkt. Daarom staan die Jamstack-kanalen vol met commerciële blogposts en advertenties. Zodra je tijd hebt geïnvesteerd in het leren werken met de oplossing van een bepaalde leverancier, heb je jezelf een lock-in bezorgd. Overstappen naar een andere aanbieder zou betekenen dat je weer een andere oplossing moet leren, en dus extra tijd moet investeren die je waarschijnlijk niet hebt.

Dit geldt ook voor hosting en CMS-systemen voor de Jamstack. Hostingoplossingen zijn vaak niet erg geoptimaliseerd en leveren middelmatige performance. Vooral CDN-systemen zijn 'verkeerd' geconfigureerd. Bijna alle CDN's cachen alleen verzoeken met veel verkeer. In het algemeen maken CDN's populaire websites sneller en impopulaire websites langzamer. Jouw website is waarschijnlijk niet erg populair, wat betekent dat [je geen profijt hebt van een CDN](https://www.usecue.com/blog/faster-websites-with-a-cdn/). Daarom gebruik ik mijn eigen servers met een goede configuratie. Op dit moment heb ik alleen nodes in Europa, maar dat ga ik in de toekomst uitbreiden.

Even belangrijk en even gebrekkig zijn CMS-systemen. Ze hebben vaak middelmatige performance en zijn lastig te leren. Bovendien vragen ze een hoop CMS-specifieke configuratie. Dat zorgt voor een enorme vendor lock-in. Overstappen van de ene CMS-aanbieder naar de andere kan weken of maanden kosten.

Toch verhuis ik mijn websites naar mijn eigen CMS op https://cms.usecue.com. Waarom? Omdat het een zero-config-oplossing is, topprestaties levert en me, in combinatie met mijn eigen hosting en failover, de perfecte uptime, veiligheid en compliance geeft. Binnenkort heb ik alles wat ik weet dat jij ook wilt (op basis van het onderzoek van Netlify)!

Jaloers? Je kunt me altijd even benaderen om te kijken of ik nog ruimte over heb op mijn server... ;-)
