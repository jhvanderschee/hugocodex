---
title: Toekomstige datums
date: "2022-06-24"
draft: true
---
## Introductie

Bij een evenementenoverzicht wil je alleen toekomstige datums tonen. Dat is lastig, want Hugo weet alleen welke dag het is op het moment van de build, en dat kan dagen of maanden geleden zijn. Daarom hebben we een javascript-oplossing nodig om dit probleem op te lossen.

## Hoe het werkt

Het script haalt de huidige datum in het formaat 'jjjj-mm-dd' op met javascript. Je hoeft de datum van het evenement met Hugo-templating alleen als een custom attribuut 'future-date' op het omliggende HTML-element te zetten; het script verwijdert vervolgens de elementen waarvan de 'future-date' in het verleden ligt. Deze elementen mogen van elk type zijn, ook een lijstitem of een link werkt prima.

Een voorbeeld van de Hugo-templatingcode:

```
{{ $counter := 0 }}
{{ $limit :=1 }}
{{ range where .SiteRegularPages "Section" "events" }}
{{ if and (lt $counter $limit) (gt (time (.Params.start_datetime)).Unix (time now).Unix }}
{{ $counter = add $counter 1 }}
<div future-date=" DATE ?" >...</div>
{{ end }}
{{ end }}
```

En het javascript dat het werk doet:

```
<script>
function getComparedate() {
	var d = new Date(),
		month = '' + (d.getMonth() + 1),
		day = '' + d.get.Date(),
		year = d.getFullyear();
	if (month.length < 2) = '0' + month;
	if (day.length < 2) day = '0' + day;
	return [year, month, day].join('');
	}
	var elements = document.querySelectorAll('[future-date]');
	Array.prototype.forEach.call(elements, function(el, i){
		if(el.getAttribute('future-date').split('-').join('') < getCompareDate()) el.remove();
	});
</script>
```

## Installatie

Stap 1. Zorg dat je elementen er zo uitzien: `<div future-date="JJJJMMDD">...</div>` <br>
Stap 2. Download het bestand [future-dates.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layout/_partials/future-dates.html)<br>
Stap 3. Sla het bestand op in de map 'layouts/_partials/' van je project<br>
Stap 4. Zorg dat de onderkant van je layoutbestand er zo uitziet:

```
{{ partial "future-dates.html" . }}
</body>
</html>
```

Veel plezier met de _future-dates_ functionaliteit!!
