---
title: Digitale downloads in de webshop
translationKey: digital-downloads-in-the-webshop
date: 2022-12-12
---

Zo nu en dan krijgen we berichten via onze chatknop onderaan deze website. Sommige mensen stellen vragen, sommige willen bedanken en sommige komen met geweldige ideeën. Dat laatste was gisteren het geval. Andrei (zijn achternaam laat ik om privacyredenen weg) stelde zich voor en vroeg of het mogelijk zou zijn om de webshop in Jekyll Codex te gebruiken voor digitale downloads.

In eerste instantie dacht ik dat zijn verzoek een hoop aanpassingen zou vergen en was ik wat terughoudend. Maar hoe langer we praatten, hoe duidelijker het werd dat die aanpassingen eigenlijk vrij subtiel waren. We waren het er allebei over eens dat als we Mollie's Plink-dienst wilden gebruiken, we van de winkelwagen af moesten, omdat meerdere downloads de zaak onnodig ingewikkeld zouden maken. Uiteindelijk kwamen we uit op een extra variabele bij de producten, genaamd 'payment_link'. Laat je die leeg, dan gedraagt de webshop zich gewoon zoals altijd. Vul je een productspecifieke betaallink in, dan gaat de koper rechtstreeks naar de checkout, langs de winkelwagen heen, doordat de variabelen aan de URL worden toegevoegd in plaats van aan de winkelwagen-cookie. Mensen kunnen de winkelwagen nog steeds gebruiken, alleen niet voor producten met een productspecifieke betaallink. Je zou kunnen zeggen dat dit een beetje verwarrend is (de winkelwagen maar voor een deel van de producten gebruiken). In de praktijk is het echter waarschijnlijker dat je een webshop hebt met alleen digitale downloads, of juist helemaal zonder.

Ik ben erg blij met het eindresultaat. Bekijk de [webshop](/nl/doneren/) gerust. Ik vind het ook mooi dat mensen zich vrij voelen om op deze website functionaliteit aan te vragen en te bespreken. Daar is deze website voor. Bedankt voor je input en je inspiratie! Blijf ze sturen!
