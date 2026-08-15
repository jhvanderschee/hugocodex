---
title: Lightbox
---

### Introducción

_Lightbox_ es una solución que carga automáticamente tus enlaces a [imágenes](/uploads/grumpycat2.jpg), tus [enlaces de Youtube](https://www.youtube.com/watch?v=dQw4w9WgXcQ&showinfo=0&rel=0) y tus [enlaces de Vimeo](https://vimeo.com/132888648) en una pseudoventana/superposición minimalista y responsive. No hace falta ajustar tus enlaces, solo sigue las instrucciones de instalación de más abajo.

### Cómo funciona

Los enlaces que apuntan a imágenes y a vídeos de Youtube y Vimeo se reconocen automáticamente y reciben una clase adicional mediante _javascript_. En el caso de los vídeos se añade además un data-id. Un listener añade los lightboxes al body cuando se hace clic en el enlace. El lightbox se elimina cuando haces clic en el fondo/superposición. Puedes evitar que los enlaces se conviertan en lightboxes añadiendo la clase 'no-lightbox'.

Ten en cuenta que el código de este lightbox lo escribimos nosotros mismos y lo probamos en una cantidad mínima de dispositivos. Debería funcionar en móviles (probado en Android), IE9+ y todos los navegadores modernos de escritorio (probado en Firefox, Safari y Chrome).

### Instalación

- Paso 1. Descarga los archivos [lightbox.js](https://raw.githubusercontent.com/jhvanderschee/jekyllcodex/gh-pages/js/lightbox.js) y [lightbox.css](https://raw.githubusercontent.com/jhvanderschee/jekyllcodex/gh-pages/css/lightbox.css)
- Paso 2. Guarda cada archivo en el directorio '/js' y '/css' de tu proyecto
- Paso 3. Asegúrate de que el pie de tu documento de plantilla se vea así:


```
<script type="text/javascript" src="/js/lightbox.js"></script>
<link rel="stylesheet" href="/css/lightbox.css">
</body>
</html>
```
