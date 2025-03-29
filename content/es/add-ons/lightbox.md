---
title: Mejorando la ventana Lightbox
date: '2024-11-29'
---

## Introducción

_Lightbox_ es una solución que carga automáticamente tus enlaces de imágenes, enlaces de Youtube y enlaces de Vimeo en una pseudo ventana/superposición minimalista y responsive. 
No se requiere ningún ajuste a tus enlaces, solo sigue las instrucciones de instalación a continuación.

## Cómo funciona

Los enlaces que apuntan a imágenes, videos de Youtube y Vimeo son reconocidos automáticamente y provistos con una clase adicional mediante _javascript_ . 
Los videos obtienen un data-id adicional en caso de ser un video. Un listener añade los lightboxes al body cuando se hace clic en el enlace. El lightbox se elimina cuando haces clic en el fondo/superposición. Puedes evitar que los enlaces se conviertan en lightboxes añadiendo la clase 'no-lightbox'.

Ten en cuenta que escribimos el código fuente para este lightbox nosotros y lo probamos en una cantidad mínima de dispositivos. 
Debería funcionar en móviles (probado en Android), IE9+ y todos los navegadores modernos de escritorio (probado en Firefox, Safari y Chrome).

## Instalación

- Paso 1. Descarga el archivo lightbox.js y lightbox.css
- Paso 2. Guarda el archivo en el directorio '/js' y '/css' de tu proyecto
- Paso 3. Asegúrate de que el footer de tu documento de diseño se vea así:


```
<script type="text/javascript" src="/js/lightbox.js"></script>
<link rel="stylesheet" href="/css/lightbox.css">
</body>
</html>
```
