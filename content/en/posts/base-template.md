---
title: A more elaborated Templating / Layouts strategy ?
date: 2024-02-26
draft: true
---

##  Context : templating / layouts approach

We are (always) improving the process/workflow. Is it time for a more elaborated Templating / Layouts strategy ?


### Draft :

[Mike 's video tutorial](https://gohugo.io/templates/base/) on official Hugo Doc.

Layouts : you tipically simply define

```
my-hugo
|._ layouts/ Home (or index) html template
           |._ _default/single.html
           |. _/default/list.html
```

Fine. As a starter...
To point here is that you tipically would end up re-using code from those... having to copy some snippets around this 3 'starter' layouts for a basic website.
But wait... if the website requires more templating flexibility ? Or ... the overall (CSS) design requires some more complexity ?

## We can do better : hello baseof.html layout and 'blocks' to the rescu

Let's improve our workflow :


* < header />             'header' section
* baseof.html   ->  main "content' section 
* < footer />   ->       "footer' section
