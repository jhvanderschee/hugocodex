---
title: Mejorando la ventana Lightbox
date: '2024-11-29'
---

## Introducción

_Lightbox_ es una solución que carga automáticamente tus enlaces de imágenes, enlaces de Youtube y enlaces de Vimeo en una pseudo ventana/superposición minimalista y responsive. 
No se requiere ningún ajuste a tus enlaces, solo sigue las instrucciones de instalación a continuación.

## Cómo funciona

Los enlaces que apuntan a imágenes, videos de Youtube y Vimeo (también los no listados) son reconocidos automáticamente cuando haces clic en ellos. La imagen o el video se abre en el lightbox. 
Los enlaces en el mismo párrafo o lista forman una galería, que recorres con las flechas o las teclas de flecha. El lightbox se cierra cuando haces clic en el fondo/superposición o pulsas Escape. Puedes evitar que los enlaces se conviertan en lightboxes añadiendo la clase 'no-lightbox'.

Ten en cuenta que escribimos el código fuente para este lightbox nosotros. 
Funciona en móviles y en todos los navegadores modernos de escritorio.

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
