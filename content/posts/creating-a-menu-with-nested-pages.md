---
title: Creating a menu with nested pages
date: 2021-12-23
---

A lot of websites use an auto-collapsing [nested menu](/add-ons/nested-menu/). It is a great and compact way to show a lot of content in a structured way, but it requires a hierarchical view of all your pages. This post explains how to do that.

## The code

First we start with a list of the pages that have children. This allows us to set the correct classname. We do this by looping over all pages and 'collecting' their path in a scratch variable. Then we create our unordered list that uses a recursive partial to loop over the items.

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


## The recursive partial

The recursive partial loops over the items in the list (all items in the section, also called 'regular pages').

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

## Adding some CSS

I have added some CSS to make it look good (and for the auto-collapsing to work):

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

If you want to see this in action, you can [view a demo](/branches).
