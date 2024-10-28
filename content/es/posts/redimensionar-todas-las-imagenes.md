---
title: Redimensionar todas las imágenes
date: 2022-07-04
---

{{< vimeo id="727145223" image="/uploads/resizeallimages.png" >}}

Gracias por unirte a esta charla relámpago sobre 'redimensionamiento de imágenes'. Hugo es conocido por sus rápidas cargas de página. Sin embargo, si deseas obtener páginas web que se carguen instantáneamente, también necesitas redimensionar tus imágenes adecuadamente. Afortunadamente, Hugo puede redimensionar las imágenes por sí mismo. En esta charla te contaré cómo puedes configurar Hugo para que automáticamente redimensione y comprima todas las imágenes de tu proyecto, incluso aquellas que son cargadas a través de un CMS externo por tu cliente.

## 1. Elige tu método

Primero necesitas elegir tu método de redimensionamiento y compresión. Me gusta mantener las cosas simples. Por eso siempre uso la [técnica de una sola imagen](/blog/image-compression-for-the-lazy), donde utilizas una imagen JPG de gran tamaño y altamente comprimida. Una imagen típica, como esta, es de dos a diez veces más pequeña que la original, mientras que la etiqueta de imagen se ve tan simple como esto:

```
<img src="large_heavily_compressed.jpg" />
```

Si deseas aprender más sobre esta técnica, visita HugoCodex.org, un sitio web lleno de consejos y trucos para Hugo.

## 2. Establece el directorio de activos

Como se mencionó, Hugo puede redimensionar imágenes automáticamente. Lo hace durante el proceso de construcción. Sin embargo, Hugo solo puede redimensionar imágenes que se encuentren en un 'directorio de activos' asignado. Yo almaceno todas mis imágenes en la carpeta 'static', por lo que siempre defino mi carpeta estática como el directorio de activos. Puedes hacer esto añadiendo la siguiente línea a tu archivo de configuración:

```
assetDir: static
```

## 3. Crea una regla de compresión

Ahora podemos comenzar. Supongamos que tu front matter se ve así:

```
---
title: Mi primer post
image: /path/to/my/image.jpg
---
```

Tu ruta está almacenada en la variable del front matter, es decir, en '.Params.image'. Esta podría ser una imagen destacada que deseas usar en el encabezado de nuestro sitio web/post. Naturalmente, querrás redimensionar esta imagen. Para encontrar la imagen adecuada, usamos una variable de Hugo llamada 'resources' (sin mayúscula). Como hemos definido el 'assetDir' en la carpeta estática, esta variable contiene todo lo que hay en tu directorio estático. Puedes dirigir un recurso/activo individual con una declaración 'GetMatch' en combinación con la ruta a tu imagen. Esto se ve así:

```
resources.GetMatch .Params.image
```

Este código 'encuentra' tu recurso/activo. A continuación, debes elegir una estrategia de redimensionamiento de imagen. Esto puede ser 'Resize', 'Fit', 'Fill', 'Crop'. En este ejemplo uso 'Fit' para asegurarme de que mi imagen siempre sea más pequeña que 600 píxeles (en cada lado). Uso un recorte 'Smart' y uso una calidad de imagen del 50%, como se explicó antes en la [técnica de una sola imagen](/blog/image-compression-for-the-lazy). Esto resulta en:

```
(resources.GetMatch .Params.image).Fit "600x600 jpg Smart q50"
```

Finalmente, probablemente quieras obtener la URL relativa a esta imagen. Puedes obtenerla añadiendo '.RelPermalink' y envolviendo todo en paréntesis, así:

```
((resources.GetMatch .Params.image).Fit "600x600 jpg Smart q50").RelPermalink
```

El código anterior generará una URL que apunta a una versión redimensionada de mi imagen original. Pero si tu imagen original no existe (ya), tu código fallará y Hugo mostrará un error. Por lo tanto, es inteligente comprobar la existencia del recurso deseado (envolver 'resources.GetMatch' en una declaración if), que se vería así:

```
{{ if (resources.GetMatch .Params.image) }}
<img src="{{ ((resources.GetMatch .Params.image).Fit `600x600 jpg Smart q50`).RelPermalink }}" />
{{ end }}
```

## 4. Crea un render hook

Ahora tenemos imágenes redimensionadas en nuestro diseño. Pero, ¿qué pasa con las imágenes de contenido? Para las imágenes en el markdown, puedes usar un 'render hook'. Este es un archivo que describe/sobrescribe cómo se manejan las imágenes en markdown. Para usar el enfoque anterior en el render hook, debes crear el siguiente archivo:

```
/layouts/_default/_markup/render-image.html
```

... y colocar esta lógica dentro:

```
{{ if (resources.GetMatch .Destination) }}
  <img src="
  {{ ((resources.GetMatch .Destination).Fit `600x600 jpg Smart q50`).RelPermalink | safeURL }}
  " alt="{{ .Text }}" />
{{ end }}
```

Ten en cuenta que usamos '.Destination' para la fuente de la imagen original y '.Text' para el texto alternativo definido en el markdown. Una vez añadido el render hook, todas las imágenes en tu proyecto Hugo se podrán redimensionar.

## Conclusión

En esta breve [charla relámpago](https://hugoconf.io/) he explicado cómo redimensionar todas las imágenes en tu proyecto Hugo, utilizando la [técnica de una sola imagen](/blog/image-compression-for-the-lazy/). No solo redimensionamos las imágenes de diseño, sino que también apuntamos a las imágenes en el markdown a través de un render hook. Redimensionar todas las imágenes resultará en cargas de página más rápidas y una mejor experiencia de usuario.

## Más sobre redimensionamiento de imágenes

Además de mi charla, la HugoConf (edición 2022) albergó otras charlas interesantes relacionadas con imágenes. Todas valen la pena verlas. Aquí tienes un resumen de ellas:

- <a href="https://www.youtube.com/watch?v=JpxiKUHzoqM&t=21270s" target="_blank" class="no-lightbox">Haciendo más rápidas las cargas de imágenes con Figmage - Ravi Lingineni</a>
- <a href="https://www.youtube.com/watch?v=JpxiKUHzoqM&t=30304s" target="_blank" class="no-lightbox">Shortcodes personalizados para ganar - Chris Griffing</a>
- <a href="https://youtu.be/ACRN43SbF2g?t=23494" target="_blank" class="no-lightbox">Cómo lograr puntuaciones perfectas en Google Lighthouse usando Hugo - Scott Reilly</a>

< Happy coding /> !
