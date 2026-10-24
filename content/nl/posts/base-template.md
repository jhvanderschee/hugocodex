---
title: Een uitgebreidere templating-/layoutstrategie?
date: 2024-02-26
---

##  Context: aanpak van templating/layouts

We zijn (altijd) bezig het proces/de workflow te verbeteren. Nu we de basis onder de knie hebben: is het tijd voor een uitgebreidere templating-/layoutstrategie?

## Een eerste aanpak voor templating

Als we het over Hugo-layouts hebben, definieer je meestal simpelweg

```
my-hugo-project
|._ layouts/ Home (or index) html template
           |._ page.html
           |. _/default/list.html
```

We hadden het al eerder over [hoe je begint](/nl/aan-de-slag/) en over het gebruik van partials voor (bijvoorbeeld) de header en de footer.

Prima. Om mee te beginnen...
Het punt is dat je meestal code uit die bestanden gaat hergebruiken... waarbij je stukjes moet kopiëren tussen deze 3 'starter'-layouts voor een basiswebsite.
Maar wacht... wat als de website meer flexibiliteit in templating vraagt? Of... wat als het algehele ontwerp (User Interface / UI ~ CSS-styling) om wat meer complexiteit vraagt?

## Het kan beter: de baseof.html-layout en 'blocks' te hulp

### Een block definiëren

Laten we een content-block maken:

```
{{ block "content" . }}

{{ end }}
```

> LET OP: de context, ook wel 'de dot' '.', is verplicht

### Een block gebruiken

Aha. Hergebruik hem nu gerust waar je maar wilt in andere templates (bijvoorbeeld in 'page.html' of 'section.html'), door ze binnen andere layouts met deze syntax te definiëren:

```
{{ define "content" }}

  {{ .Content }}

{{ end }}
```

En als klap op de vuurpijl: wist je dat je een bepaald block in een specifieke template kunt overschrijven?

[De videotutorial van Mike](https://gohugo.io/templates/base/) in de officiële Hugo-documentatie laat gedetailleerder en visueler zien hoe dat werkt.

Veel plezier met Hugo!
