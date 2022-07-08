---
title: 'Redimensionar imágenes en formato markdown'
date: '2022-04-08'
---
Así como Mr.Hugo ha estado construyendo sitios Web Wordpress hasta 2015, Don Hugo ha estado construyendo sitios Web principalmente con Drupal hasta 2020.

Algunas cosas de Drupal me parecían muy útiles. Una de ellas era su capacidad de redimensionado. Cuando (inspirado por el paso que dió Mr.Hugo!) empezé a usar Jekyll en 2020 me encontré con que no podía redimensionar ya más las imágenes automáticamente. Afortunadamente, encontramos [images.weserv.nl](https://images.weserv.nl), un servicio holandés de redimensionado de imágenes. Dicho servicio era más hábil que WordPress. Redimensiona tus imágenges _al vuelo_ y las guardaba en su memoria caché por 30 días. Una estrategia excelente. Sin embargo, las imágenes en markdown no era redimensionadas, derivando a menudo en tiempos de carga de la página en el navegador Web desmesurados.


Cuando empezé a usar Hugo en el verano de 2022 pudimos comprobar que Hugo podía redimensionar las imágenes en el tiempo de construcción (_on build time_) del website. Era necesario que el comando para hacer eso fuera escrito bien fuera en forma de _shortcode_ o como parte del diseño o _layout_ .

A pesar de que el uso de _shortcodes_ representaban un paso en la dirección acertada, editores _típicos_ (como el que usa el gestor de contenidos o CMS que promovemos [cms.usecue.com](https://cms.usecue.com) ) creaban imágenes sin redimensionar. Pero... cuando vimos la respuesta que BEP daba [esta respuesta](https://discourse.gohugo.io/t/is-this-possible-with-hugo/38089/6?u=jhvanderschee) a una pregunta aparentemente no relacionada con la cuestión, nos dimos cuenta de que Hugo puede redimensionar  imágenes en formato markdown estándar gracias a los llamados _render hooks_! De immediato navegamos por la documentación y creamos un _hook_ para ser añadido en el proyecto que teníamos entonces entre manos ...  y funcionó! 

El fichero se llama  '/layouts/_default/_markup/render-image.html'y contiene el siguiente código fuente:

```
{{ if (resources.GetMatch .Destination) }}
  <img src="{{ ((resources.GetMatch .Destination).Resize `1400x jpg q50`).RelPermalink | safeURL }}" alt="{{ .Text }}" />
{{ end }}
```
Ello implica que la imagen estándar en formato markdown tal que esta:

```
![alt tekst](/uploads/image.png)
```

... es ahora procesada por Hugo. Es convertida en un fichero JPG y comprimida al 50%  con una anchura máxima de 1400 pixels, resultando típicamente en una imagen de menos de 100kb, que habitualmente es 10 veces más pequeña que la original. Nos autodenominamos [expertos en rendimiento web](https://www.usecue.com) y creemos que esta cuestión a resolver es clave, especialmene cuando quieres obtener [la perfect calificación Google Lighthouse Score](https://www.usecue.com/blog/how-to-get-a-100-google-lighthouse-score/).
