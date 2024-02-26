---
title: A more elaborated Templating / Layouts strategy ?
date: 2024-02-26
draft: true
---

##  Context : templating / layouts approach

We are (always) improving the process/workflow. Now that we have learned the basics of: is it time for a more elaborated Templating / Layouts strategy ?


## A first Templating approach 

When speaking about Hugo Layouts : you tipically simply define

```
my-hugo-project
|._ layouts/ Home (or index) html template
           |._ _default/single.html
           |. _/default/list.html
```

Bien. Para empezar...
El punto aqui es que tipicamente terminarias reutilizando codigo de esos... teniendo que copiar algunos snippets alrededor de estos 3 layouts 'starter' para un sitio web basico.
Pero espera ... ¿qué pasa si el sitio web requiere más flexibilidad de plantillas? O ... el diseño general (interfaz de usuario / UI ~ estilo CSS) requiere algo más de complejidad?

## We can do better : hello baseof.html layout and 'blocks' to the rescue

Let's improve our workflow by sketching some pseudocode :


* < header />             'header' section
* baseof.html   ->  main "content' section 
    [ block ]
* < footer />   ->       "footer' section

### Block definition

Let's create a content block  :

```
{{ block "content" . }}

{{ end }}
```

Ahá. Now feel free to reuse it wherever you want in other templates (e.g. in the 'single.html' or 'list.html' ), by defining them following this syntax inside other layouts:

```
{{ define "content" }}

{{ end }}
```

> NOTE: the context aka 'the dot'  '.' is required 




[Mike 's video tutorial](https://gohugo.io/templates/base/) on official Hugo Doc explains it in a dettailed way. You can enjoy the full explanation there.

< have fun with Hugo / >
