---
title: Migas de pan desde Hugo v0.109.0
translationKey: breadcrumbs-since-1-09
date: 2023-02-19
---

Esta es una [auténtica joya](https://discourse.gohugo.io/t/breadcrumb-gives-error-when-two-files-in-different-folders-have-the-same-name/42972/4) de Joe Mooring:

> Generar un rastro de migas de pan se volvió mucho más sencillo a partir de Hugo v0.109.0. Usa el método .Ancestors sobre .Page.

```
<ul id="breadcrumbs">
    {{- range .Ancestors.Reverse }}
        <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
    {{- end }}
    <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
</ul>
```

*ACTUALIZADO 2023-03-06: Ahora también puedes encontrar este código en el [complemento de migas de pan](/es/complementos/breadcrumbs/).*
