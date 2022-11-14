---
title: Youtube shortcode
draft: true
---

### Introducción 

Paul Irish hizo algo lindo.Ha creado ["a lighter Youtube embed"](https://github.com/paulirish/lite-youtube-embed). Esta solución deja atrás la ralentización de tu sitio web, como
hace el método normal sugerido por Youtube para embeber sus videos. Hay tan sólo un inconveniente: carga el contenido de Youtube sin consentimiento, mientras que Youtube es el
servicio de una empresa conocida por sus prácticas de rastreo y pefilado. Todo ello no es sensible para con la privacidad. La solución es albergar el poster del video uno mismo y
enlazarlo a Youtube. Hagamoslo mediante la implementación de shortcode.

### Funcionamiento

El shortcode creates an image and a link to Youtube. The classes on this link tell the CSS to add the Youtube logo and add a play button. This makes it look like an embed. Note that when you load the [lightbox](/add-ons/lightbox/) from this website, your video will automatically open in a lightbox instead of in a new page. Below you find a demo (with the lightbox enabled).

{{< youtube id="qtIqKaDlqXo" image="/uploads/youtubeposter.jpg" >}}

### Installation

Step 1. Download the file [youtube.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/shortcodes/youtube.html)
<br />Step 2. Save the file in the 'layouts/partials/shortcodes' directory of your project
<br />Step 3. Add the following line to your content on the place where you want your Youtube video to appear:

```
{{</* youtube id="qtIqKaDlqXo" image="/uploads/youtubeposter.jpg" */>}}
```
