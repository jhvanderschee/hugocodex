---
title: Slider/Carrusel
---

### Introducción

Muchos sitios web tienen un 'slider' (o carrusel). La mayoría de ellos en la cabecera (header). La gran pregunta es: [¿debería añadir un carrusel](https://shouldiuseacarousel.com/) a mi sitio con Hugo? Si te decides a hacerlo... esta página te muestra cómo usar uno decente.

Este carrusel está basado en un [carrusel con CSS scroll snap](https://codepen.io/joosts/pen/MWJBPgo). Tan solo pesa 3kb (sin comprimir). En el ordenador de sobremesa puedes interactuar con las flechas y los puntos, y en el móvil puedes deslizar. Funciona más o menos incluso sin Javascript. Este carrusel admite carga diferida ('lazy loading') nativa, ya que usa etiquetas de imagen normales en vez de imágenes de fondo. Puedes poner varios carruseles en una misma página y el carrusel se 'pausará' al pasar el ratón por encima ('on hover'). El contenido se almacena en un fichero de datos y las decisiones de diseño se guardan en las variables del 'include'.

### Cómo funciona

Puedes definir el tiempo que cada diapositiva se muestra en pantalla (en milisegundos) y cuántas diapositivas (items) se muestran simultáneamente. También puedes definir la altura del 'slider' como un número, y la unidad como porcentaje (‘%’) o píxeles (‘px’). De ese modo el carrusel se adapta a distintos tamaños de pantalla. Si estableces la altura en ‘50’ y la unidad en ‘%’, las proporciones serán siempre 2:1, si bien la altura variará. Si defines la altura en ‘500’ y la unidad en ‘px’, la altura será siempre la misma, pero las proporciones variarán.

{{< carousel items="1" height="500" unit="px" duration="7000" >}}

{{< carousel items="2" height="35" unit="%" duration="5000" >}}

### Instalación

Paso 1. Descarga los ficheros [carousel.js](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/js/carousel.js) y [carousel.css](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/css/carousel.css)
<br />Paso 2. Guarda los ficheros en los directorios '/js' y '/css' de tu proyecto respectivamente
<br />Paso 3. Haz que el pie ('footer') de tu plantilla ('layout') incluya lo siguiente:

```
<script type="text/javascript" src="/js/carousel.js"></script>
<link rel="stylesheet" href="/css/carousel.css">
</body>
</html>
```
Paso 4. Crea un fichero carousel.yaml en tu directorio 'data' con el siguiente contenido:  
```
images: 
  - image: /uploads/slider/image1.jpg
    content_html: "1"
  - image: /uploads/slider/image2.jpg
    content_html: "2"
  - image: /uploads/slider/image3.jpg
    content_html: "3"
  - image: /uploads/slider/image4.jpg
    content_html: "4"
```

### Instalación de la plantilla

Paso 5. Descarga el fichero [carousel.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/carousel.html)  
Paso 6. Guarda el fichero en el directorio ‘layouts/_partials’ de tu proyecto  
Paso 7. Añade esto a tu plantilla:  
```
{{ partial "carousel.html" (dict "context" . "items" "1" "height" "50" "unit" "%" "duration" "7000") }}
```

### Instalación del 'shortcode'

Paso 5. Descarga el fichero [carousel.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_shortcodes/carousel.html)  
Paso 6. Guarda el fichero en el directorio ‘layouts/_partials/_shortcodes’ de tu proyecto  
Paso 7. Añade esto a tu contenido (el fichero .md):  
```
{{</* carousel items="1" height="500" unit="px" duration="7000" */>}}
```
