---
title: 'Galería de Imágenes'
---

### Introducción

Éste script crea una galería de imágenes. El script lee todas las imágenes de un carpeta específica (definida por el usuario) en el directorio 'assets' de Hugo, automágicamente
las recorta en cuadradros 300px y los muestra en files de 5. 

{{< image-gallery gallery_dir="/uploads/album" >}}

### Funcionamiento

El script busca ficheros en la carpeta ‘album’  en el directorio 'assets' de Hugo.  Crea un marcado de imagen con las correspondientes miniaturas. Las miniaturas son la versión cuadrada con
300 pixeles de ancho de la imagen. El script envuelve las miniaturas en un enlace que enlaza a una versión en un formato mayor y disparará un 'lightbox' si estuviera éste
presente. El nombre del fichero, sin la extensión, es el pie de foto.

### Instalación de la plantilla

Paso 1. Descarga el fichero  [image-gallery.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/partials/image-gallery.html).
Paso 2. Guárdalo en el directorio 'layouts/partials'.  
Paso 3. Añade la siguiente línea a tu plantilla en el lugar donde quieres que aparezca tu galería de imágenes: 
```
{{ partial "image-gallery" (dict "context" . "gallery_dir" "/album") }}
```

### Instalación del shortcode 

Paso1. Descarga el fichero [image-gallery.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/shortcodes/image-gallery.html)  
Paso2. Guárdalo en el directorio 'layouts/shortcodes'.  
Paso3. Añade la siguiente línea  al fichero 'markdown' correspondiente a tu contenido, en el lugar donde quieres que aparezca tu galería de imágenes:  

```
{{</* image-gallery gallery_dir="/album" */>}}
```
