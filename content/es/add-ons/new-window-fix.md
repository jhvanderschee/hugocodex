---
title: Abrir en ventana nueva
---

### Introducción

Según muchos propietarios de sitios web, los enlaces externos y los PDF deberían abrirse en una ventana nueva. Markdown hace que sea relativamente difícil indicar esto. Este script lo automatiza por ti, para que no tengas que preocuparte.

### Cómo funciona

Este script detecta los enlaces externos y los PDF. Les añade automágicamente 'target="_blank"'. Esto se consigue con el siguiente código.

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

### Instalación

Paso 1. Descarga el archivo [render-link.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_markup/render-link.html)
<br />Paso 2. Guarda el archivo en el directorio 'layouts/_markup/' de tu proyecto
