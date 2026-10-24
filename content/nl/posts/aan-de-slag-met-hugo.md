---
title: 'Aan de slag met Hugo'
translationKey: getting-started-with-hugo
date: 2018-01-02
---

## Stap 1. Maak een basiswebsite

Een website bestaat meestal uit een paar onderdelen. De header met een menu, een sidebar, de content en de footer. Vroeger gebruikten we frames om deze componenten samen te voegen. Tegenwoordig gebruiken we includes. Voor die includes heb je een programmeertaal nodig, zoals PHP. Maar het gebruik van PHP introduceert een hoop kwetsbaarheden. Wat als we dat door het ontwerp konden voorkomen? Nou... met Hugo kan dat...

Vroeger maakte je een 'index.php'-bestand en deed je zoiets:

```
<html>
<head></head>
<body>
<?php include('header.php'); ?>
content
<?php include('sidebar.php'); ?>
<?php include('footer.php'); ?>
</body>
</html>
```

Nu maak je een 'home.html'-bestand en vervang je je PHP-tags door Go templating tags, zo:

```
<html>
<head></head>
<body>
{{ partial "header.html" . }}
{{ .Content }}
{{ partial "sidebar.html" . }}
{{ partial "footer.html" . }}
</body>
</html>
```

Dit 'home.html'-bestand is je nieuwe template voor de homepage. Je moet het in je projectmap onder 'layouts' opslaan. Je wilt waarschijnlijk een kopie van dit bestand in 'layouts' maken en het 'page.html' noemen. De html-bestanden die je wilt includen zet je in je projectmap onder 'layouts/_partials'. Tot slot moet je in je project een map 'content' in de root maken en die vullen met een '_index.md'-bestand dat er zo uitziet:


```
---
title: Hello world
---
Your content here...
```

Wil je een overzichtspagina maken, kijk dan naar dit voorbeeld.

[expand]

```
<html>
<head></head>
<body>
{{ partial "header.html" . }}
{{ .Content }}
<ul>
  {{ range (where .Data.Pages "Section" .Section ).ByTitle }}
    <li><a href="{{ .Permalink }}">{{ .Title }}</a></li>
  {{ end }}
</ul>
{{ partial "sidebar.html" . }}
{{ partial "footer.html" . }}
</body>
</html>
```

Zet deze code in een bestand met de naam 'section.html' en sla het op in je map 'layouts', naast je 'page.html'. Je bestandsboom ziet er dan zo uit:

```
├── hugo.yaml
├── content
│   └── _index.md
└── layouts
    ├── home.html
    ├── section.html
    ├── page.html
    └── _partials
        ├── footer.html
        ├── header.html
        └── sidebar.html

4 directories, 8 files
```

[/expand]

## Stap 2. Bekijk je website

De map van je project in een browser openen werkt niet, dus je hebt een omgeving nodig die Hugo draait. Je kunt Hugo via de command line op je eigen machine installeren. Volg gewoon deze simpele instructies:

* installeer Hugo met [deze simpele instructies](https://gohugo.io/getting-started/installing/)
* open een terminal in je projectmap en typ: `hugo server`
* ga naar [http://127.0.0.1:1313/](http://127.0.0.1:1313/) en bekijk je website

## Stap 3. Host je website

Oh, wat had ik een hekel aan shared hosting-accounts… tot Hugo. Shared hosting-accounts zijn goedkoop maar onbetrouwbaar. Een op Git gebaseerde statische site geeft ons echter een back-up (eigenlijk de broncode), waardoor ik me een stuk veiliger voel. CloudCannon exporteert bij elke update de statische versie van je site naar een FTP-account, zodat je een hostingomgeving naar keuze kunt gebruiken. Koppel gewoon je FTP-account via de opties van CloudCannon. Gaat je goedkope hostingaccount plat, dan blijft de broncode dus gewoon bestaan in Git en in je CloudCannon-omgeving, zodat je de site naar een ander goedkoop hostingaccount kunt pushen. Geruststellend toch?

Hier is je stappenplan:

- Maak een gratis account aan op [cloudcannon.com](https://cloudcannon.com/)
- Maak een website aan en geef hem een naam
- Kies Hugo als site builder
- Maak een leeg ‘hugo.yaml’-bestand in de root
- Upload je ‘home.html’-bestand naar de map ‘layouts’
- Upload je ‘_index.md’-bestand naar de map ‘contents’
- Bezoek je website op de URL die CloudCannon voor je heeft aangemaakt
