---
title: Slider/Carrusel (manual)
---

### Introducción

Muchos sitios web tienen un slider (o carrusel). La mayoría de ellos en la cabecera. La gran pregunta es: [¿Debería añadir un carrusel](https://shouldiuseacarousel.com/) a mi sitio web con Hugo? Si decides que sí... esta página te enseña cómo usar uno decente.

El carrusel está basado en un [carrusel con CSS scroll snap](https://codepen.io/joosts/pen/MWJBPgo). Este carrusel pesa solo 3kb (sin comprimir). En escritorio puedes interactuar con las flechas y los puntos, en móvil puedes deslizar. Funciona más o menos sin Javascript. Este carrusel admite carga diferida nativa (porque usa etiquetas de imagen normales en lugar de imágenes de fondo). Puedes poner varios carruseles en una misma página y el carrusel se 'pausa' al pasar el ratón por encima. El contenido se guarda en un archivo de datos y las decisiones de diseño se guardan en las variables del include.

### Cómo funciona

Puedes definir cuánto tiempo debe permanecer cada diapositiva en pantalla (en milisegundos) y cuántas diapositivas (elementos) se muestran a la vez. También puedes definir la altura del slider como un número, y la unidad como ‘%’ o ‘px’. Esto hace que el slider sea responsive. Si pones la altura a ‘50’ y la unidad a ‘%’, las proporciones serán siempre 2:1, pero la altura variará. Si pones la altura a ‘500’ y la unidad a ‘px’, la altura será siempre la misma, pero las proporciones variarán.

{{< carousel items="1" height="500" unit="px" duration="7000" >}}

{{< carousel items="2" height="35" unit="%" duration="5000" >}}

### Instalación

Paso 1. Descarga el archivo [carousel.js](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/js/carousel.js) y [carousel.css](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/css/carousel.css)
<br />Paso 2. Guarda el archivo en el directorio '/js' y '/css' de tu proyecto
<br />Paso 3. Asegúrate de que el pie de tu documento de plantilla se vea así:

```
<script type="text/javascript" src="/js/carousel.js"></script>
<link rel="stylesheet" href="/css/carousel.css">
</body>
</html>
```
Paso 4. Crea un archivo carousel.yaml en tu directorio 'data' con este contenido:  
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

### Instalación como plantilla

Paso 5. Descarga el archivo [carousel.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/carousel.html)  
Paso 6. Guarda el archivo en el directorio ‘layouts/_partials’ de tu proyecto  
Paso 7. Añade esto a tu plantilla:  
```
{{ partial "carousel.html" (dict "context" . "items" "1" "height" "50" "unit" "%" "duration" "7000") }}
```

### Instalación como shortcode

Paso 5. Descarga el archivo [carousel.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_shortcodes/carousel.html)  
Paso 6. Guarda el archivo en el directorio ‘layouts/_partials/_shortcodes’ de tu proyecto  
Paso 7. Añade esto a tu contenido (archivo .md):  
```
{{</* carousel items="1" height="500" unit="px" duration="7000" */>}}
```
