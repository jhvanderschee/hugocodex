---
title: Slider/carrusel ligero agregado
translationKey: lightweight-slider-carousel-added
date: '2021-08-21'
image: /uploads/slider/image1.jpg
---

Muchos sitios web tienen un slider (o carrusel). La mayoría de ellos en la cabecera. La gran pregunta es: [¿Debería añadir un carrusel](https://shouldiuseacarousel.com/) a mi sitio web con Hugo? Eso no puedo decidirlo por ti. Si decides que necesitas uno, he añadido uno decente en [Complementos > Slider/carrusel](/es/complementos/slider-carousel/) en el menú principal. Abajo se muestra una demo:

{{< carousel items="1" height="500" unit="px" duration="7000" >}}

El carrusel está basado en un [carrusel con CSS scroll snap](https://codepen.io/joosts/pen/MWJBPgo) que creé anteriormente. En escritorio puedes interactuar con las flechas y los puntos, en móvil puedes deslizar. Este carrusel admite carga diferida nativa y se 'pausa' al pasar el ratón por encima. Incluso funciona más o menos sin Javascript. Este carrusel pesa solo 3kb (sin comprimir). Eso es 50 veces menos que el archivo JS de 150kb que hay que cargar para algo como [SwiperJS](https://swiperjs.com/) (que, por cierto, tiene funcionalidades estupendas).
