---
title: 'Shortcodes con comentarios de uso'
translationKey: shortcodes-with-usage-comments
date: '2022-11-13'
---

He añadido comentarios de uso en la cabecera de mis shortcodes (los relevantes). Puedes ver el comentario en el shortcode youtube.html de abajo:

```
<!-- 
{{/* 
    
    Usage: 
    {{</* youtube id="qtIqKaDlqXo" image="/uploads/youtubeposter.jpg" */>}} 
    
*/}}
-->
```

Esto no solo resulta útil para los desarrolladores, sino que además le indica a nuestro propio CMS ([Usecue CMS](https://cms.usecue.com)) cómo insertar estos shortcodes. El CMS lee el ejemplo de uso desde el comentario y añade un botón de inserción al campo del editor. Eso facilita que tus editores/clientes (re)utilicen estos shortcodes. Para más información sobre esto lee [A CMS with Hugo shortcode support](https://www.usecue.com/blog/a-cms-with-hugo-shortcode-support/).

Ten en cuenta que ponemos el comentario dentro de dos tipos de etiquetas de comentario. Las etiquetas de comentario HTML hacen que tu IDE sepa que esto es un comentario. Las etiquetas de comentario de Go evitan que el código se renderice y se ejecute, lo que previene errores de construcción.
