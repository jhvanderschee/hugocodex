---
translationKey: add-content
title: 3. Je eerste content toevoegen
---

Nu we een 'index.html' bestand hebben, gaan we de code van de content scheiden. Hugo gebruikt hiervoor [Markdown](https://www.markdownguide.org/cheat-sheet/). Alle content wordt opgeslagen in '.md' (Markdown) bestanden in een map 'content' in de root van je project. Maak een Markdown-bestand met de naam '_index.md' dat er zo uitziet:

```
---
title: Mijn eerste contentbestand
---
Mijn eerste alinea in Markdown
```

Sla het bestand op in de map 'content'. Pas nu je '/layouts/home.html' bestand aan, zodat het er zo uitziet:

```
<html>
<head></head>
<body>
    <h1>{{ .Title }}</h1>
    {{ .Content }}
</body>
</html>
```

Hiermee scheid je de code van de content. De content staat nu in het bestand '/content/_index.md' en de HTML/code in het bestand '/layouts/home.html'. Je project ziet er nu zo uit:

```
/content/_index.md
/layouts/home.html
/hugo.yaml
```
