---
title: Vimeo shortcode
---

### Introducción

Paul Irish hizo algo estupendo. Creó [un embed de Youtube más ligero](https://github.com/paulirish/lite-youtube-embed). Su solución ya no ralentiza tu sitio web, como sí hacen los embeds normales de Youtube. Solo tiene una pega: carga contenido de Youtube sin consentimiento, y Youtube es un servicio de una empresa conocida por rastrear y hacer perfiles. Eso no es muy respetuoso con la privacidad. La solución es alojar tú mismo la imagen de portada (poster) y enlazarla a Youtube. Esto se puede hacer con un shortcode. Y también se puede hacer con Vimeo.

### Cómo funciona

El shortcode obtiene la portada de tu vídeo desde la API oEmbed de Vimeo en el momento de la construcción y la almacena en tu propio servidor. Después crea una imagen y un enlace a Vimeo. Las clases de este enlace le indican al CSS que añada el logo de Vimeo y un botón de reproducción. Así parece un embed. Ten en cuenta que si cargas el [lightbox](/es/complementos/lightbox/) de este sitio web, tu vídeo se abrirá automáticamente en un lightbox en lugar de en una página nueva. Abajo encontrarás una demo (con el lightbox activado).

{{< vimeo 727145223 >}}

### Instalación

Paso 1. Descarga el archivo [vimeo.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_shortcodes/vimeo.html)
<br />Paso 2. Guarda el archivo en el directorio 'layouts/_partials/_shortcodes' de tu proyecto
<br />Paso 3. Añade la siguiente línea a tu contenido en el lugar donde quieras que aparezca tu vídeo de Vimeo:

```
{{</* vimeo 727145223 */>}}
```

Si prefieres usar tu propia portada en lugar de la de Vimeo, añade un parámetro 'image':

```
{{</* vimeo id="727145223" image="/uploads/resizeallimages.png" */>}}
```
