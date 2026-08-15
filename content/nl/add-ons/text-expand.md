---
title: Tekst uitklappen
---
### Introductie

Soms is het overdreven om voor een 'lees meer'-link een hele nieuwe pagina te maken. In dat geval is uitklapbare tekst met javascript heel handig. Op deze website wordt het gebruikt voor overzicht en beknoptheid.

### Hoe het werkt

Het script zoekt naar een `[expand]`-tag op een eigen regel en zoekt daarna naar de `[/expand]`-tag (opnieuw op een eigen regel, dus als enige inhoud van die alinea). Vindt het die, dan voegt het een paar classes toe en verbergt het alles wat ertussen staat. Er verschijnt een 'lees meer &rarr;'-link, die aangeeft dat de tekst uitgeklapt kan worden.

### Installatie

Stap 1. Download het bestand [text-expand.js](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/js/text-expand.js)
<br />Stap 2. Sla het bestand op in de map 'static/js' van je project
<br />Stap 3. Zorg dat de onderkant van je layoutbestand er zo uitziet:

```
...
<script type="text/javascript" src="/js/text-expand.js"></script>
</body>
</html>
```
