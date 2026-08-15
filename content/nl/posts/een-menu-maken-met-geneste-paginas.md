---
title: Een menu maken met geneste pagina's
translationKey: creating-a-menu-with-nested-pages
date: 2021-12-23
---

Veel websites gebruiken een [automatisch inklappend menu](/nl/uitbreidingen/nested-menu/). Het is een mooie en compacte manier om veel content gestructureerd te tonen, maar het vraagt wel om een hiërarchisch overzicht van al je pagina's. Deze post legt uit hoe je dat doet.

## Verschillende aanpakken

Ik heb een paar verschillende aanpakken geprobeerd. Ik begon met de aanname dat ik geen mappen in secties mocht gebruiken. Ik dacht dat een map in een sectie een subsectie zou aanmaken. Daarom begon ik met een verwijzing naar de ouder in de front matter. Toen ik erachter kwam dat ik wel degelijk submappen MOCHT gebruiken, zolang ik maar geen 'index.md' of '_index.md' bestand gebruikte, heb ik het script herschreven. Ik ging ervan uit dat de mappenstructuur terug te zien zou zijn in mijn permalinks. Dat bleek echter ook een verkeerde aanname. Daarom heb ik het script een tweede keer herschreven. Deze keer laat ik het naar het bestandspad kijken. Het is volledig onafhankelijk van de gebruikte permalinks en werkt daardoor ook in een meertalige opzet met eigen permalinks die in het configuratiebestand en de front matter zijn gedefinieerd.
## De code

Eerst beginnen we met een lijst van de pagina's die kinderen hebben. Daarmee kunnen we de juiste classnaam zetten. Dat doen we door alle pagina's te doorlopen en hun pad te 'verzamelen' in een scratch-variabele. Daarna maken we onze ongeordende lijst, die met een recursieve partial over de items loopt.

```
{{ with .Site.GetPage (print "/" .Section "/_index.md") }}

    {{ $.Scratch.Set "haschildren" "" }}
    {{ range .RegularPages }}
        {{ $urlparts := split (print .File.Dir .File.BaseFileName) "/" }}
        {{ range $index, $value := (first (len $urlparts) $urlparts) }}
            {{ $.Scratch.Add "haschildren" (print " " (delimit (first $index $urlparts) "/") "/") }}
        {{ end }}
    {{ end }}
    {{ $.Scratch.Set "haschildren" (uniq (split ($.Scratch.Get "haschildren") " ")) }}

    <ul class="nestedmenu">
        {{ partial "nested-menu-partial.html" (dict "context" . "pagecontext" $.Page "regularpages" .RegularPages) }}
    </ul>

{{ end }}
```


## De recursieve partial

De recursieve partial loopt over de items in de lijst (alle items in de sectie, ook wel 'regular pages' genoemd).

```
{{ range .regularpages }}

    {{ $filepath := replace (print .File.Dir (replace .File.BaseFileName "_index" "") "/") "//" "/" }}
    {{ $contextfilepath := replace (print $.context.File.Dir (replace $.context.File.BaseFileName "_index" "") "/") "//" "/" }}
    {{ $pagecontextfilepath := replace (print $.pagecontext.File.Dir (replace $.pagecontext.File.BaseFileName "_index" "") "/") "//" "/" }}

    {{ if eq (len (split $filepath "/")) (add (len (split $contextfilepath "/")) 1) }}
      
        {{ if and (in $filepath $contextfilepath) (ne $contextfilepath $filepath) }}
            <li class="{{ if in $pagecontextfilepath $filepath }}active{{ end }} {{ if in ($.pagecontext.Scratch.Get `haschildren`) $filepath }}haschildren{{ end }}">
                <a href="{{ .RelPermalink }}">{{ .Title }}</a>
                <ul>
                    {{ partial "nested-menu-partial.html" (dict "context" . "pagecontext" $.pagecontext "regularpages" $.regularpages) }}
                </ul>
            </li>
        {{ end }}
    {{ end }}
{{ end }}
```

## Wat CSS toevoegen

Ik heb wat CSS toegevoegd om het er goed uit te laten zien (en om het automatisch inklappen te laten werken):

```
ul.nestedmenu {margin-left: 0;}
ul.nestedmenu li {list-style: none;}
ul.nestedmenu li > ul {display: none;}
ul.nestedmenu li > a::before {
    content: "•"; 
    display: inline-block; 
    margin-right: 0.25rem; 
    width: 0.5rem; 
    text-align: center;
}
ul.nestedmenu li.haschildren > a::before {content: "›";}
ul.nestedmenu li.haschildren.active > a::before {transform: rotate(90deg);}
ul.nestedmenu li.active > ul {display: block;}
ul.nestedmenu li > a {color: #444444!important;}
ul.nestedmenu li.active > a {color: rgb(247, 44, 114)!important;}
```

Wil je dit in actie zien, dan kun je [een demo bekijken](/nl/branches).
