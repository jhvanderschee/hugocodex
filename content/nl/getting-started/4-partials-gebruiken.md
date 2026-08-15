---
translationKey: include-partials
title: 4. Je eerste partials gebruiken
---

Een website bestaat meestal uit een paar onderdelen die op elke pagina terugkomen, zoals een header met een menu en een footer. In plaats van die aan elke pagina toe te voegen, kun je een 'partial' gebruiken. Partials moeten opgeslagen worden in de map '/layouts/_partials'.

Maak een bestand 'header.html' dat er zo uitziet:

```
<html>
<head></head>
<body>
```

Maak een bestand 'footer.html' dat er zo uitziet:

```
</body>
</html>
```

Sla beide bestanden op in de map '/layouts/_partials'. Werk nu je '/layouts/home.html' bestand bij en zorg dat het er zo uitziet (vervang de code door links naar de partials):

```
{{ partial "header.html" . }}
    <h1>{{ .Title }}</h1>
    {{ .Content }}
{{ partial "footer.html" . }}
```

Je project ziet er nu zo uit:

```
/content/_index.md
/layouts/home.html
/layouts/_partials/header.html
/layouts/_partials/footer.html
/hugo.yaml
```
