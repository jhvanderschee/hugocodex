---
title: Youtube shortcode
---

### Introducción

Paul Irish hizo algo estupendo. Creó [un embed de Youtube más ligero](https://github.com/paulirish/lite-youtube-embed). Su solución ya no ralentiza tu sitio web, como sí hacen los embeds normales de Youtube. Solo tiene una pega: carga contenido de Youtube sin consentimiento, y Youtube es un servicio de una empresa conocida por rastrear y hacer perfiles. Eso no es muy respetuoso con la privacidad. La solución es alojar tú mismo la imagen de portada (poster) y enlazarla a Youtube. Esto se puede hacer con un shortcode.

### Cómo funciona

El shortcode crea una imagen y un enlace a Youtube. Las clases de este enlace le indican al CSS que añada el logo de Youtube y un botón de reproducción. Así parece un embed. Ten en cuenta que si cargas el [lightbox](/es/complementos/lightbox/) de este sitio web, tu vídeo se abrirá automáticamente en un lightbox en lugar de en una página nueva. Abajo encontrarás una demo (con el lightbox activado).

{{< youtube qtIqKaDlqXo >}}

### Instalación

Paso 1. Descarga el archivo [youtube.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_shortcodes/youtube.html)
<br />Paso 2. Guarda el archivo en el directorio 'layouts/_partials/_shortcodes' de tu proyecto
<br />Paso 3. Añade la siguiente línea a tu contenido en el lugar donde quieras que aparezca tu vídeo de Youtube:

```
{{</* youtube qtIqKaDlqXo */>}}
```
