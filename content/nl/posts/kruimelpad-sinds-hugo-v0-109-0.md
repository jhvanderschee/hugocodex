---
title: Kruimelpad sinds Hugo v0.109.0
translationKey: breadcrumbs-since-1-09
date: 2023-02-19
---

Dit is een [echte parel](https://discourse.gohugo.io/t/breadcrumb-gives-error-when-two-files-in-different-folders-have-the-same-name/42972/4) van Joe Mooring:

> Een kruimelpad genereren werd een stuk eenvoudiger met Hugo v0.109.0 en later. Gebruik de .Ancestors-methode op .Page.

```
<ul id="breadcrumbs">
    {{- range .Ancestors.Reverse }}
        <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
    {{- end }}
    <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
</ul>
```

*BIJGEWERKT 2023-03-06: Je vindt deze code nu ook in de [kruimelpad-uitbreiding](/nl/uitbreidingen/breadcrumbs/).*
