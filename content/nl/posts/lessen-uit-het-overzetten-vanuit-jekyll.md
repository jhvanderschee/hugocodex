---
title: Lessen uit het overzetten vanuit Jekyll
translationKey: lessons-learned-porting-from-jekyll
date: "2021-09-19"
---
Ik heb de afgelopen 6 jaar zo'n 30 Jekyll-websites per jaar gebouwd. Onlangs ben ik volledig overgestapt op Hugo en heb ik meerdere websites van Jekyll naar Hugo overgezet. Onderweg heb ik een paar dingen geleerd die jij ook moet weten als je de stap van Jekyll naar Hugo zet. Ik heb het lastig gehad met het leren van Hugo, maar uiteindelijk was het het waard, vooral vanwege de korte bouwtijden en de ingebouwde beeldconversie die ik er nu bij heb.

Weet dat dit een levend document wordt, dus kom later gerust nog eens terug om het opnieuw te bekijken.

## Mappenstructuur

### Collections

In Hugo heten 'collections' 'sections' (secties). Persoonlijk vind ik die naam helemaal niets, maar we moeten ermee leven. Een sectie is een map op het eerste niveau in de contentmap OF een map met een '\_index.md'-bestand erin. Een map met een 'index.md'-bestand erin is GEEN sectie (maar een 'page bundle'). Bouw je een meertalige website, dan gebruik je de mappen op het eerste niveau voor de talen en die op het tweede niveau voor secties/collections.

### Layouts

Je kunt layouts hebben die je in je front matter benoemt, maar die layouts moeten in hun sectiemap binnen de map 'layouts' staan. Voor pagina's is dat de map 'page'.

### Contentbestanden

Waar Jekyll ervan uitgaat dat alle .md-bestanden content zijn, verlangt Hugo dat je een contentmap gebruikt (standaard 'content') en je .md-bestanden daarin zet.

### Statische bestanden

Jekyll gaat ervan uit dat alle bestanden statisch zijn. In Hugo is dat niet zo. Heb je statische bestanden, zoals stylesheets of afbeeldingen, dan moet je die in de map 'static' zetten.

### Data

'data' is de enige map die in Jekyll en Hugo hetzelfde is. Je kunt je '.yml' hernoemen naar '.yaml' om ze compatibel te maken met oudere Hugo-versies.

### Builds

Jekyll bouwt je website bij elke update in de map '\_site'. Hugo bouwt je website alleen als je het hugo-commando aanroept (in plaats van 'hugo server'). Hugo bouwt je website in een map die 'public' heet.

### Resources

Hugo kan afbeeldingen verkleinen. Die verkleinde afbeeldingen komen terecht in de map 'resources', in de map 'gen'. Jekyll heeft deze map of functie niet.

## Configuratie-instellingen

### Over het configuratiebestand

In Jekyll heet het configuratiebestand '\_config.yml'. In Hugo is dat 'hugo.yaml'. Let op: in moderne versies van Hugo kun je ook de extensie 'yml' gebruiken. Iets anders opvallends is dat Jekyll van je verlangt dat je je collections in het configuratiebestand opsomt. Hugo heeft die eis niet.

### Output voorkomen

Wil je de output voor een sectie/collection voorkomen, dan kun je in het configuratiebestand van Jekyll 'output: false' schrijven. Dat kan niet in Hugo. De omweg is om een lege 'page.html' aan te maken in de map 'layouts', in de map die hoort bij de sectie/collection waarop je dit wilt toepassen. Er is nog een truc die werkt, namelijk [deze](https://gohugo.io/content-management/build-options/#listing-pages-without-publishing-them).

### Permalinks instellen

In Jekyll gebruik ik graag 'permalinks: pretty' en daarna wat specifieke defaults per collection. In Hugo werkt dat net even anders. Hugo laat je simpelweg alle secties opsommen onder de sleutel 'permalinks' in het configuratiebestand. Een logisch sleutel-waardepaar (onder die sleutel) zou zijn: 'sectionname: /desiredpath/:filename'. Het laatste deel (:filename) staat voor de bestandsnaam zonder extensie. Een ander voorbeeld is 'posts: /:year/:month/:title/'. Dat maakt een slug van de titel en voegt het jaar en de maand toe om URL-botsingen te voorkomen.

### Eigen sitevariabelen

Eigen sitevariabelen schrijf je niet als kinderen van de root, maar als kinderen van de sleutel 'params' in het configuratiebestand. Je roept ze aan met '.Site.Params.customvariable', waarbij 'customvariable' de naam van je eigen variabele is.

## Tips en trucs

### Alle gebruikersafbeeldingen verkleinen

Om alle gebruikersafbeeldingen als resources te kunnen gebruiken, voeg je simpelweg 'assetDir: static' aan je configuratiebestand toe. Daarna kun je afbeeldingen verkleinen met:

```
((resources.GetMatch .Params.image).Fit "600x600 jpg Center q50").RelPermalink.
```

### De slug van de pagina ophalen

Zoiets als `page.slug` bestaat niet. Je moet in plaats daarvan `.File.BaseFileName` gebruiken.

### Cache busting van je style.css

Gebruik `<link href='/css/style.css?version={{ now }}' rel='stylesheet' type='text/css'>` om je CSS-bestand te cache busten.

### Een veel-op-veel-relatie

Wil je bijvoorbeeld dat een 'auto' een array van 'features' heeft die auto's onderling delen, dan heb je meestal te maken met een veel-op-veel-relatie. Eén auto heeft veel features en één feature hoort bij veel auto's. Je kunt dat modelleren door een pagina voor je auto te maken met in de front matter een array met features. In plaats van de volledige feature in je front matter uit te schrijven, zet je alleen de slug van de feature in de front matter. Vervolgens maak je een aparte sectie met features die bij die sleutels passen. Met die sleutels kun je het bijbehorende item/pagina in de features-sectie vinden. De code hiervoor is vrij compact en ziet er zo uit:

```
{{- range .Params.features -}}
    {{ with $.Site.GetPage (print "/features/" . ".md") }}
         {{ .Title }}          
    {{ end }}
{{ end }}
```

### Bestandsnaam van de homepage

De bestandsnaam van je homepage MOET '_index.md' zijn. Anders werken je secties niet goed. Let op de underscore.

### Datums opmaken

Om datums automatisch op te maken, moet je het volgende aan je configuratiebestand toevoegen:

```
defaultContentLanguage: nl
languageCode: nl_NL
```

Daarna kun je dit commando gebruiken om een taalspecifieke datum te tonen: `{{ .Date | time.Format ":date_long" }}`.

### Meertalige opzet

Wil je een meertalige opzet, dan moet je `defaultContentLanguage: nl` op het rootniveau van je hugo.yaml-bestand gebruiken. Daarnaast heb je een 'languages'-variabele nodig, die er ongeveer zo uitziet:

```
languages:
  en:
    languageName: English
    title: Website title
    description: Website description in English
    contentDir: content/english
    permalinks: 
      posts: /news/:filename/ 
    weight: 2
  nl:
    languageName: Nederlands
    title: Website titel
    description: Website beschrijving in het Nederlands
    contentDir: content/nederlands
    permalinks: 
      posts: /nieuws/:filename/
    weight: 1
```

Let op: het bovenstaande stelt voor elke taal een nieuwe contentmap in. Dat betekent dat je in je contentmap een map 'english' en een map 'nederlands' moet aanmaken waarin je secties staan.

Daarnaast heb je vertalingen van losse teksten nodig. Dat regel je eenvoudig door een map 'i18n' in de root van je project te maken. Die map bevat een 'en.yaml'- en een 'nl.yaml'-bestand die er allebei ongeveer zo uitzien (waarbij 'other' de vertaling bevat):

```
other_news:
  other: Overige nieuwsberichten
recent_news:
  other: Recent nieuws
```

Zo'n tekst aanroepen is net zo makkelijk als schrijven: `{{ i18n "other_news" }}`. In de layout heb je ook de variabele `.Language` tot je beschikking, die de taalsleutel teruggeeft ('en' of 'nl' in dit geval).

### Hoofdcontent opsplitsen

Wil je je hoofdcontent in meerdere delen opsplitsen, dan kun je die eenvoudig splitsen op bijvoorbeeld de 'h2'-tag. In de code hieronder zie je het commando 'print', dat meerdere strings tot één string samenvoegt, en het commando '| safeHTML', dat HTML-output toestaat.

```
{{ $content := split .Content "<h2" }}
<div class="part1">
    {{ print "<h2" (index $content 1) | safeHTML }}
</div>
<div class="part2">
    {{ print "<h2" (index $content 2) | safeHTML }}
</div>
```
