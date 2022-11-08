---
title: Slider/Carrusel
draft: false
---

### Introducción

Muchos sitios web tienen un 'slider' (o carousel - carrusel, en el idioma de Cervantes). La mayoría de ellos en la cabecera (header). La gran pregunta es: ["¿Debería Añadir un
Carousel?"](https://shouldiuseacarousel.com/) a mi sitio Hugo ? Si te decides a hacerlo ...  esta página te muestra como usar uno decente. 


Este carousel está basado en el ["carousel with CSS scroll snap"](https://codepen.io/joosts/pen/MWJBPgo). Tan sólo pesa 3kb (sin comprimir). En PC de sobremesa puedes interactuar
con las teclas <- y -> y en el teléfono móvil puedes 'arrastrar'. Como que funciona sin Javascript. Este carousel soporta  'lazy loading' nativo ( dado que usa el lenguaje de
marcas típico de imagen en vez de imágenes de fondo). Puedes poner múltiples carruseles en una página y el carrusel 'pausará'  al pasar el ratón por encima ( 'on hover'). El
contenido se almacena en un fichero de datos file y los principios de diseño se guardan en las variables del 'include'.

### Como funciona

Puedes definir el tiempo que cada diapositiva se muestre en pantall (en milisegundos) y cuantas diapositivas (items) se muestran simultáneamente. También puedes definir la altura
del 'slider' en forma de unidad, así como en porcentaje (‘%’)  o en número de píxeles (‘px’). De ese modo el carrusel se muestra de forma 'responsiva', adaptándose a distinto
tamaños de pantalla. Si estableces la altura a ‘50’ y la unidad como  ‘%’, las dimensiones serán siempre 2:1, si bien la altura variará. Si defines la altura  ‘500’ y la unidad
como  ‘px’ la altura será siempre la misma, pero las dimensiones variarán.

{{< carousel items="1" height="500" unit="px" duration="7000" >}}

{{< carousel items="2" height="35" unit="%" duration="5000" >}}

### Instalación

Paso 1. Descarga los ficheros [carousel.js](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/js/carousel.js) y [carousel.css](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/css/carousel.css)
<br />Paso 2. Guarda los ficheros en los directorios '/js' y '/css' de tu proyecto respectivamente
<br />Paso 3. Haz que la sección al pie ('footer') de tu plantilla ('layout') incluya lo siguiente:

```
<script type="text/javascript" src="/js/carousel.js"></script>
<link rel="stylesheet" href="/css/carousel.css">
</body>
</html>
```
Paso 4. Crea un fichero carousel.yaml  en tu  directorio 'data' con el siguiente contenido:  
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

Paso 5. Descarga el fichero [carousel.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/partials/carousel.html)  
Paso 6. Guarda el fichero en   directorio ‘layouts/partials’ de tu proyecto  
Paso 7. Añade esto a tu plantilla :  
```
{{ partial "carousel.html" (dict "context" . "items" "1" "height" "50" "unit" "%" "duration" "7000") }}
```

### Instalación del  'Shortcode'

Paso 5. Descarga el fichero [carousel.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/shortcodes/carousel.html)  
Paso 6. Guarda el fichero en el directorio ‘layouts/partials/shortcodes’ de tu proyecto  
Paso 7. Añade esto a tu contenido (el fichero .md ):  
```
{{</* carousel items="1" height="500" unit="px" duration="7000" */>}}
```
