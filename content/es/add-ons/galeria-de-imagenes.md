---
translationKey: image-gallery
title: 'Galería de Imágenes'
---

### Introducción

Este script crea una galería de imágenes. Lee todas las imágenes de una carpeta concreta (definida por el usuario) dentro del directorio 'assets' de Hugo, las recorta automágicamente en cuadrados de 300px y las muestra en filas de 5.

{{< image-gallery gallery_dir="/uploads/album" >}}

### Cómo funciona

El script busca ficheros en la carpeta ‘album’ del directorio 'assets' de Hugo. Genera el marcado de las imágenes con sus miniaturas correspondientes. Las miniaturas son la versión cuadrada de 300 píxeles de ancho de la imagen. El script envuelve cada miniatura en un enlace que apunta a una versión de mayor tamaño y que activará un 'lightbox' si lo tienes instalado. El nombre del fichero, sin la extensión, se usa como pie de foto.

### Instalación de la plantilla

Paso 1. Descarga el fichero [image-gallery.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/image-gallery.html).
Paso 2. Guárdalo en el directorio 'layouts/_partials'.  
Paso 3. Añade la siguiente línea a tu plantilla, en el lugar donde quieres que aparezca tu galería de imágenes:
```
{{ partial "image-gallery" (dict "context" . "gallery_dir" "/album") }}
```

### Instalación del shortcode

Paso 1. Descarga el fichero [image-gallery.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_shortcodes/image-gallery.html)  
Paso 2. Guárdalo en el directorio 'layouts/_shortcodes'.  
Paso 3. Añade la siguiente línea al fichero markdown de tu contenido, en el lugar donde quieres que aparezca tu galería de imágenes:  

```
{{</* image-gallery gallery_dir="/album" */>}}
```
