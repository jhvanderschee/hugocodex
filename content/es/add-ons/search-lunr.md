---
title: Buscar con Lunr.js
---

### Introducción

Los sitios web modernos tienen una barra de búsqueda que busca contenido concreto dentro del sitio. Estas cajas de búsqueda suelen consultar la base de datos en tiempo real. Eso no es posible en un sitio web estático. Por tanto hay que buscar otra solución. Puedes encontrar una [demo](/es/search) en la página de búsqueda.

### Cómo funciona

Esta búsqueda se apoya en un índice local. Usa el script Lunr.js para buscar. Este script no necesita jQuery. Primero se construye un índice local usando la variable 'documents'. Después se llama al código de Lunr.js. Por último, una función hecha a medida (llamada 'lunr_search') coloca los resultados en pantalla con un estilo parecido al de Google.

### Instalación

Paso 1. Descarga el archivo [lunr.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_partials/lunr.html)
<br />Paso 2. Guarda el archivo en el directorio '/layouts/_partials/' de tu proyecto
<br />Paso 3. Descarga el archivo [lunr.js](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_partials/lunr.html)
<br />Paso 4. Guarda el archivo en el directorio 'js' (en la raíz) de tu proyecto
<br />Paso 5. Añade la siguiente instrucción a tu plantilla donde quieras que aparezca la caja de búsqueda:

```
{% raw %}{% include search-lunr.html %}{% endraw %}
```
