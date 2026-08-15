---
title: Nieuw-venster-fix
---

### Introductie

Volgens veel site-eigenaren moeten externe links en pdf's in een nieuw venster openen. In Markdown is dat relatief lastig aan te geven. Dit script automatiseert dat voor je, zodat jij je er geen zorgen over hoeft te maken.

### Hoe het werkt

Dit script herkent externe links en pdf's. Het voegt automagisch 'target="_blank"' aan deze links toe. Dat gebeurt met de volgende code.

[expand]

```
{{ $link := .Destination }}
{{ $isRemote := (or (strings.HasPrefix $link "http") (in (lower $link) ".pdf")) }}
{{- if not $isRemote -}}
  {{ $url := urls.Parse .Destination }}
  {{- if $url.Path -}}
    {{ $fragment := "" }}
    {{- with $url.Fragment }}
      {{ $fragment = printf "#%s" . }}
    {{ end -}}
    {{- with .Page.GetPage $url.Path }}
      {{ $link = printf "%s%s" .RelPermalink $fragment }}
    {{ end }}
  {{ end -}}
{{- end -}}
<a href="{{ $link | safeURL }}"{{ with .Title}} title="{{ . }}"{{ end }}{{ if $isRemote }} target="_blank" rel="noopener"{{ end }}>{{ .Text | safeHTML }}</a>
```

[/expand]

### Installatie

Stap 1. Download het bestand [render-link.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_markup/render-link.html)
<br />Stap 2. Sla het bestand op in de map 'layouts/_markup/' van je project
