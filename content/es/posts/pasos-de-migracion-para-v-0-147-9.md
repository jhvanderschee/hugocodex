---
title: Pasos de migración para Hugo v0.147.9
translationKey: migration-steps-for-v-0-147-9
date: 2025-07-01
---

Para migrar del todo a la v0.147.9 deberías seguir estos pasos (si no lo has hecho ya):

- mueve todo lo que hay en el directorio `_default` a la raíz de la carpeta `layouts`
- elimina la carpeta `_default`
- renombra todos los archivos `single.html` a `page.html`
- renombra todos los archivos `list.html` a `section.html`
- mueve todo lo que hay en la carpeta `layouts/page` a la raíz de la carpeta `layouts`
- elimina la carpeta `page`
- renombra el archivo config.yaml (o toml/json) a hugo.yaml (o toml/json)
- sustituye `:filename` por `:contentbasename`

Si tenías un `single.html` en tu directorio `layouts` y otro en tu directorio `layouts/page`, deberías seguir [estas instrucciones](https://discourse.gohugo.io/t/possible-bug-single-layout-for-pages-in-v0-147-9/55179/8).
