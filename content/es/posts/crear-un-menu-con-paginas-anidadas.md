---
title: Crear un menú con páginas anidadas
translationKey: creating-a-menu-with-nested-pages
date: 2021-12-23
---

Muchos sitios web usan un [menú que se pliega automáticamente](/es/complementos/nested-menu/). Es una forma estupenda y compacta de mostrar mucho contenido de manera estructurada, pero requiere una visión jerárquica de todas tus páginas. Esta entrada explica cómo hacerlo.

## Distintos enfoques

Probé varios enfoques distintos. Empecé dando por hecho que no podía usar carpetas dentro de las secciones. Tenía la impresión de que una carpeta dentro de una sección crearía una subsección. Por eso empecé con una referencia al padre en el front matter. Cuando descubrí que en realidad SÍ podía usar subcarpetas, siempre que evitara usar un archivo 'index.md' o '_index.md', reescribí el script. Supuse que la estructura de carpetas se reflejaría en mis permalinks. Sin embargo, eso también resultó ser una suposición falsa. Así que reescribí el script una segunda vez. Esta vez hice que mirara la ruta del archivo. Es totalmente independiente de los permalinks utilizados y por tanto funciona en una configuración multilingüe con permalinks personalizados definidos en el archivo de configuración y en el front matter.
## El código

Primero empezamos con una lista de las páginas que tienen hijos. Eso nos permite asignar el nombre de clase correcto. Lo hacemos recorriendo todas las páginas y 'recogiendo' su ruta en una variable scratch. Después creamos nuestra lista no ordenada, que usa un partial recursivo para recorrer los elementos.

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


## El partial recursivo

El partial recursivo recorre los elementos de la lista (todos los elementos de la sección, también llamados 'regular pages').

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

## Añadir algo de CSS

He añadido algo de CSS para que se vea bien (y para que funcione el plegado automático):

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

Si quieres verlo en acción, puedes [ver una demo](/es/branches).
