---
title: Menú plegable automático
---

### Introducción

Muchos sitios web usan menús que se pliegan automáticamente con páginas anidadas. Son una forma estupenda de mostrar mucho contenido de manera estructurada, pero requieren una visión jerárquica de todas tus páginas. Este es un menú anidado que se puede añadir mediante un simple include. Si quieres verlo en acción, puedes [ver una demo](/es/branches).

### Cómo funciona

Este script lee las carpetas de tu sección y crea automáticamente un menú anidado que se pliega solo. Ten en cuenta que NO puedes usar un archivo 'index.md' en tus carpetas. Sin embargo, SÍ necesitas un '_index.md' en una carpeta que contenga otras páginas. Echa un vistazo a la [estructura de directorios](https://github.com/jhvanderschee/hugocodex/tree/main/content/en/branches) de la demo para aclararlo.

### Instalación

Paso 1. Descarga el archivo [nested-menu.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/nested-menu.html) y el archivo [nested-menu-partial.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/nested-menu-partial.html)
<br />Paso 2. Guarda los archivos en el directorio ‘layouts/_partials’ de tu proyecto
<br />Paso 3. Añade la siguiente línea a tu plantilla, en el lugar donde quieras que aparezca el menú anidado:

```
{{ partial "nested-menu.html" . }}
```
