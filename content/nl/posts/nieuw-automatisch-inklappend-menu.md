---
title: Nieuw automatisch inklappend menu
translationKey: new-auto-collapsing-menu
date: 2023-03-06
---

In mijn [vorige versie](/nl/blog/een-menu-maken-met-geneste-paginas/) van het automatisch inklappende (geneste) menu koos ik ervoor om de subsecties van Hugo te vermijden. Door een update van het [kruimelpad](/nl/uitbreidingen/breadcrumbs/) raakte ik echter gemotiveerd om te testen of ik een genest menu kon maken op basis van secties en subsecties. Dat lukte en de code werd een stuk schoner/korter en simpeler, vooral dankzij de variabele '.Ancestors'. Of een pagina 'actief' is bepaal je met de volgende code:

```
{{ if or (in $.ancestors .) (eq $.curRelPermalink .RelPermalink) }}active{{ end }}
```

Of hij kinderen heeft controleren we simpelweg met de lengte van de variabele .Pages:

```
{{ if len .Pages }}haschildren{{ end }}
```

Hopelijk bevalt deze nieuwe aanpak voor een [genest, automatisch inklappend menu](/nl/uitbreidingen/nested-menu/)!
