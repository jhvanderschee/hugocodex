---
title: 6. Een blog toevoegen
---

Elke website heeft een nieuwssectie of een blog. Daarom gaan we een map 'posts' aan onze contentmap toevoegen. In deze nieuwe map maken we een markdown-bestand met de naam 'hello-world.md', ons eerste bericht. Dat bestand ziet er zo uit:

```
---
title: Hallo wereld
date: 2016-02-01 10:00:00
---
Dit is mijn eerste blogbericht
```

De datum moet de huidige datum zijn. De tijd is optioneel. Daarnaast gaan we een (nieuw) layoutbestand toevoegen voor ons blogoverzicht (een lijstweergave van onze berichten). Hugo eist dat je dit bestand 'section.html' noemt en in de map 'layouts' opslaat. Dit bestand ziet er zo uit:

```
{{ partial "header.html" . }}
    <h1>Berichten</h1>
    <ul>
    {{ range .RegularPages }}
        <li>
            {{ if .Date }}{{ .Date | time.Format ":date_long" }}{{ end }}
            <h2>{{ .Title }}</h2>
            <p>{{ .Summary | plainify }}... <a href="{{ .RelPermalink }}">Lees meer</a></p>
        </li>
    {{ end }}
    </ul>
{{ partial "footer.html" . }}
```

Daarnaast kun je je 'page.html' in de map 'layouts' bijwerken en de parameter '.Date' toevoegen. Het ziet er dan ongeveer zo uit:

```
{{ partial "header.html" . }}
    {{ if .Date }}{{ .Date | time.Format ":date_long" }}{{ end }}
    <h1>{{ .Title }}</h1>
    {{ .Content }}
{{ partial "footer.html" . }}
```

Zo laten je berichten (losse pagina's) ook de datum van het bericht zien. Je project ziet er nu zo uit:

```
/content/_index.md
/content/contact.md
/content/posts/hello-world.md
/layouts/home.html
/layouts/page.html
/layouts/section.html
/layouts/_partials/header.html
/layouts/_partials/footer.html
/hugo.yaml
```
