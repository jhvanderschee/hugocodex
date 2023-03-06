---
title: Breadcrumbs since Hugo v0.109.0
date: 2023-02-19
---

This is a [true gem](https://discourse.gohugo.io/t/breadcrumb-gives-error-when-two-files-in-different-folders-have-the-same-name/42972/4) by Joe Mooring:

> Generating a trail of breadcrumbs became much simpler with Hugo v0.109.0 and later. Use the .Ancestors method on .Page.

```
<ul id="breadcrumbs">
    {{- range .Ancestors.Reverse }}
        <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
    {{- end }}
    <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
</ul>
```