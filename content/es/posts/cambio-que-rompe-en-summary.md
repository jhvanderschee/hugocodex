---
title: Cambio que rompe en .Summary
date: 2024-10-10
---

Descubrí que en la [versión 0.134 de Hugo](https://github.com/gohugoio/hugo/releases/tag/v0.134.0) se realizó un cambio importante. Un `{{ .Summary }}` generado automáticamente ya
no muestra contenido en texto plano. Esto podría hacerte pensarlo dos veces antes de actualizar Hugo a la última versión. Este problema solo puede solucionarse reemplazando `{{
.Summary }}` por `{{ .Summary | plainify }}` dondequiera que uses .Summary (resúmenes automáticos), lo cual implica bastante trabajo. ¡Estarás entretenido!
