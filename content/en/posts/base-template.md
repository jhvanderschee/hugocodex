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

Whe already spoke about [how to get started](/en/getting-started/)  and use partials for (e.g.) header and footer.

Fine. As a starter...
The point here is that you tipically would end up re-using code from those... having to copy some snippets around this 3 'starter' layouts for a basic website.
But wait... what if the website requires more templating flexibility ? Or ... the overall (User Interface / UI ~ CSS styling) design requires some more complexity ?

## We can do better : hello baseof.html layout and 'blocks' to the rescue

### Block definition

Let's create a content block  :

```
{{ block "content" . }}

{{ end }}
```

> NOTE: the context aka 'the dot'  '.' is required 

### Block definition 
Ahá. Now feel free to reuse it wherever you want in other templates (e.g. in the 'single.html' or 'list.html' ), by defining them following this syntax inside other layouts:

```
{{ define "content" }}

  {{ .Content }}

{{ end }}
```

Last but not least: did you knew that you can override a given block in a specific template ? 

[Mike 's video tutorial](https://gohugo.io/templates/base/) in official Hugo Doc shows us how to in a more detailed and visual way.

< have fun with Hugo :-) / >
