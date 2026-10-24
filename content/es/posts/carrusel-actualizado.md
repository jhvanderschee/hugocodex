---
title: Carrusel actualizado
translationKey: carousel-updated
date: "2022-05-23 13:00:00"
---

Hace medio año [creé](/es/blog/slider-carrusel-ligero-agregado/) un slider/carrusel para Hugo, basado en [este codepen](https://codepen.io/joosts/pen/MWJBPgo). Hoy he actualizado el código y he corregido un error (los puntos no mostraban la posición correcta en el móvil al deslizar). Ahora el código tiene un 'event listener' para detectar el desplazamiento y he añadido una función debounce de [Chris Ferdinandi](https://gomakethings.com/debouncing-your-javascript-events/), que resulta que también es un usuario entusiasta de Hugo. Ahora debería ser responsive y suave como la seda.

Otra cosa que ha cambiado es el comportamiento responsive. Para un sitio web que estaba construyendo necesitaba que el slider tuviera un número dinámico de diapositivas. He conseguido hacer el slider totalmente responsive. Puede que necesites recargar la página (porque quería evitar costosos listeners de redimensionado), pero puedes dejar que el CSS determine cuántas diapositivas muestra tu carrusel. El carrusel se adaptará en consecuencia.
