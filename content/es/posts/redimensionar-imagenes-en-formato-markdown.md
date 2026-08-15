---
translationKey: resize-markdown-images
title: Redimensionar imágenes en formato markdown
date: "2022-04-08"
---

Antes de 2015 construía sitios web con WordPress. Algunas cosas de WordPress me gustaban mucho. Una de ellas era el redimensionado de imágenes. Cuando me pasé a Jekyll en 2015 me encontré con que ya no podía redimensionar las imágenes automáticamente. Afortunadamente, encontré [images.weserv.nl](https://images.weserv.nl), un servicio holandés de redimensionado de imágenes. Ese servicio era más listo que WordPress: redimensionaba tus imágenes _al vuelo_ y las guardaba en su caché durante 30 días. Una estrategia excelente. Sin embargo, las imágenes de mi markdown seguían sin redimensionarse, lo que a menudo derivaba en páginas enormes.

Cuando me pasé a Hugo en junio de 2021 me alegró comprobar que Hugo podía redimensionar las imágenes en el momento de la construcción (_on build time_). El comando para hacerlo tenía que escribirse en un _shortcode_ o en un diseño (_layout_). Aunque los _shortcodes_ eran un paso en la dirección correcta, los editores markdown 'normales' (como el que usa mi CMS [cms.usecue.com](https://cms.usecue.com)) seguían creando imágenes sin redimensionar. Pero... cuando vi [esta respuesta](https://discourse.gohugo.io/t/is-this-possible-with-hugo/38089/6?u=jhvanderschee) de BEP a una pregunta relativamente poco relacionada, me di cuenta de que ¡Hugo puede redimensionar imágenes en markdown estándar gracias a los llamados _render hooks_! De inmediato revisé la documentación y creé un _hook_ para añadirlo a mi proyecto más reciente... ¡y funcionó!

El archivo se llama '/layouts/_markup/render-image.html' y contiene el siguiente código:

```
{{ if (resources.GetMatch .Destination) }}
  <img src="{{ ((resources.GetMatch .Destination).Resize `1400x jpg q50`).RelPermalink | safeURL }}" alt="{{ .Text }}" />
{{ end }}
```

Esto significa que una imagen estándar en markdown como esta:

```
![texto alternativo](/uploads/image.png)
```

... ahora la procesa Hugo. La convierte en un archivo JPG comprimido al 50% con una anchura máxima de 1400 píxeles, lo que suele dar como resultado una imagen de menos de 100kb, a menudo diez veces más pequeña que la original. Me considero un [experto en rendimiento web](https://www.usecue.com) y creo que esto es realmente importante, especialmente cuando quieres conseguir una [calificación perfecta en Google Lighthouse](https://www.usecue.com/blog/how-to-get-a-100-google-lighthouse-score/).
