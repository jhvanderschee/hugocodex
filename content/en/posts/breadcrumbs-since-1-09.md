---
title: Breadcrumbs since Hugo v0.109.0
date: 2023-02-19
---

This is a [true gem](https://discourse.gohugo.io/t/breadcrumb-gives-error-when-two-files-in-different-folders-have-the-same-name/42972/4) by Joe Mooring:

> Generating a trail of breadcrumbs became much simpler with Hugo v0.109.0 and later. Use the .Ancestors method on .Page.

```
{{- with .Ancestors.Reverse }}
  <nav>
    {{- $p := . | append $ }}
    {{- range $k, $_ := $p }}
      {{- if $k }}
        <span class="breadcrumb-separator">&raquo;</span>
      {{- end }}
      {{- $ariaCurrent := "true" }}
      {{- if eq $k (sub (len $p) 1) }}
        {{- $ariaCurrent = "page" }}
      {{- end }}
      <a aria-current="{{ $ariaCurrent }}" href="{{ .RelPermalink }}">{{ .LinkTitle }}</a>
    {{- end }}
  </nav>
{{- end }}
```