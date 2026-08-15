---
title: Tiempo de lectura
---

### Introducción

El indicador de tiempo de lectura es un script sencillo que ayuda a crear un indicador que muestra el tiempo estimado de lectura del contenido. El script aprovecha la variable de página 'reading time', ya presente en Hugo.

### Cómo funciona

Para mostrar el tiempo de lectura de un artículo se usa el código de abajo.

```
Reading time: {{ .ReadingTime }} minute{{ if (ne .ReadingTime 1) }}s{{ end }}
```

### Instalación

Paso 1. Descarga el archivo [reading-time.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/reading-time.html)
<br />Paso 2. Guarda el archivo en el directorio 'layouts/_partials' de tu proyecto
<br />Paso 3. Añade la siguiente línea a tu plantilla, en el lugar donde quieras que aparezca el indicador de tiempo de lectura:

```
{{ partial "reading-time.html" . }}
```
