---
translationKey: create-html
title: 2. Wat HTML maken
---

Nu Hugo geïnstalleerd is, beginnen we met een hele simpele webpagina. Eerst moet je twee bestanden maken. Maak eerst een leeg bestand met de naam 'hugo.yaml'. Maak daarna een bestand met de naam 'home.html' met wat simpele HTML:

```
<html>
<head></head>
<body>
    Dit is een hele simpele webpagina
</body>
</html>
```

Het bestand 'hugo.yaml' zet je in de root van je project en het bestand 'home.html' in een map met de naam 'layouts'. Je project ziet er nu zo uit:

```
/layouts/home.html
/hugo.yaml
```

Nu kun je het commando 'hugo server' typen op de command line en op enter drukken. Hugo vertelt je dan dat je website op http://localhost:1313 staat. Als je in je browser naar dat adres gaat, vind je je website.
