---
title: Hugo debuggen
translationKey: debugging-hugo
date: 2022-10-05
draft: true
---

Ik bouw nu een half jaar websites met Hugo. In die zes maanden heb ik veel geworsteld en veel geleerd. Ik heb geleerd dat mijn leerstrategie "leren met vallen en opstaan" is.
Dus toen ik terugkeek, zei ik tegen mezelf: wordt het niet eens tijd om te leren hoe je Hugo fatsoenlijk debugt?

Ik loop tegen een probleem aan waarbij een layout gestyled moet worden door onder een bepaalde voorwaarde een CSS-class toe te voegen, met

```
  <body class="{{ .Type }} {{ .Layout }}">
```

  Door [de vraag van An op het forum](https://discourse.gohugo.io/t/add-css-class-depending-on-layout-type/1989) te lezen heb ik een startpunt om te debuggen.
Nu weet ik dat ik door dit toe te voegen:

```
{{ printf "%#v" . }}
```
makkelijk de lijst kan lezen met alle variabelen binnen de huidige context (., ook wel “de dot” genoemd).
In mijn geval vertelt

```
{{ printf "%#v" .Layout }}
```

me welke layout er op een pagina gebruikt wordt!

Zeker, [de Hugo-documentatie](https://gohugo.io/templates/template-debugging/#readout) is soms wat vreemd of onvolledig. Aan de andere kant is het [Discourse-kanaal](https://discourse.gohugo.io/) een geweldige plek om Hugo te leren. De tijd die mensen erin steken om iedereen te helpen. Tot daar!



Veel programmeerplezier!
