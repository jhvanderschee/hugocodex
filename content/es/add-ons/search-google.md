---
title: Buscar con Google
---

### Introducción

Los sitios web modernos tienen una barra de búsqueda que busca contenido concreto dentro del sitio. Estas cajas de búsqueda suelen consultar la base de datos en tiempo real. Eso no es posible en un sitio web estático. Por tanto hay que buscar otra solución.

### Cómo funciona

Esta búsqueda se apoya en el índice de Google. Consulta directamente el motor de búsqueda de Google. Los resultados se mostrarán dentro de la interfaz de Google (en una página nueva), pero estarán limitados al sitio que hayas especificado.

[expand]

```
<form method="get" action="http://www.google.com/search" target="_blank"><input type="hidden" name="sitesearch" value="yourdomain.com" /><input type="text" name="q" maxlength="255" value="" placeholder="Search via Google" /></form>
```

[/expand]

### Instalación

Paso 1. Descarga el archivo [search-google.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_partials/search-google.html) y cambia el nombre de dominio
<br />Paso 2. Guarda el archivo en el directorio '/layouts/_partials/' de tu proyecto
<br />Paso 3. Añade la siguiente instrucción a tu plantilla donde quieras que aparezca la caja de búsqueda:

```
{{ partial "search-google.html" . }}
```
