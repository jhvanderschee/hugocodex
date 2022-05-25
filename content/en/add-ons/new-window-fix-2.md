---
title: New window fix (non JS)
---

### Introduction

According to many site owners, external links should open in a new window. Markdown makes it relatively hard to specify this. This script automates this for you, so you do not have to worry about this.

### How it works

This script detects external links. It automagically adds 'target="_blank"' to these links. This is done by the following code.

[expand]

```
{{ $link := .Destination }}
{{ $isRemote := strings.HasPrefix $link "http" }}
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
<a href="{{ $link | safeURL }}"{{ with .Title}} title="{{ . }}"{{ end }}{{ if $isRemote }} target="_blank"{{ end }}>{{ .Text | safeHTML }}</a>
```

[/expand]

### Installation

Step 1. Download the file [render-link.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_default/_markup/render-link.html)
<br />Step 2. Save the file in the 'layouts/_default/_markup/' directory of your project