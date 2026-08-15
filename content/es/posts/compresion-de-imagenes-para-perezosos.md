---
title: Compresión de imágenes para perezosos
translationKey: image-compression-for-the-lazy
date: 2022-06-19
---

No, esto no va sobre carga diferida. Hablamos únicamente de compresión de imágenes, ya que las imágenes son una parte importante de la carga de tu página (un 20% de media). Cada byte cuenta cuando quieres [conseguir un 100% en Google Lighthouse](https://www.usecue.com/blog/how-to-get-a-100-google-lighthouse-score/). Me alegró descubrir que [Boris Smus](https://github.com/borismus/image-zoom) hizo un gran [trabajo de base](https://web.dev/easy-high-dpi-images/) sobre [este tema](https://www.filamentgroup.com/lab/compressive-images.html), sugiriendo que una 'imagen 2x muy comprimida ocupa menos y se ve mejor que la imagen 1x sin comprimir'. He usado uno de los ejemplos de Boris para ilustrar este artículo, en el que intentaremos evitar cualquier artefacto de compresión visible mientras comprimimos nuestras imágenes de forma significativa.

> Intentaremos evitar cualquier artefacto de compresión visible mientras comprimimos nuestras imágenes de forma significativa.

## Nuestra imagen

Fíjate en la siguiente imagen 'retina-ready' de 881,7kb (0,9Mb) de este Lamborghini deportivo naranja. Esta imagen tiene cuatro veces la cantidad de píxeles que estás viendo si estás en un dispositivo con pantalla no retina. Se ve perfecta en cualquier pantalla... pero el hecho de que acabes de descargar casi 1Mb es terrible.

<p><img src="/uploads/car/2x-100.jpg" width="568"/></p>

Podríamos ahorrar mucho ancho de banda añadiendo un 'source set'. Eso le indicaría al navegador que obtenga una versión de baja resolución en pantallas no retina. Es decir, usamos una imagen 1x y una imagen 2x. Ambas imágenes podrían comprimirse para ahorrar aún más ancho de banda. Pero, ¿cuál es la cantidad adecuada de compresión para imágenes en pantallas retina y no retina?  
<br>

|Calidad|Tamaño|
|----|----|
|[1x 10% jpg](/uploads/car/1x-10.jpg)|12.6kb|
|[1x 20% jpg](/uploads/car/1x-20.jpg)|18.0kb|
|[1x 30% jpg](/uploads/car/1x-30.jpg)|22.7kb|
|[1x 40% jpg](/uploads/car/1x-40.jpg)|26.5kb|
|[1x 50% jpg](/uploads/car/1x-50.jpg)|30.2kb|
|[1x 60% jpg](/uploads/car/1x-60.jpg)|34.3kb|
|[1x 70% jpg](/uploads/car/1x-70.jpg)|40.3kb|
|[1x 80% jpg](/uploads/car/1x-80.jpg)|50.3kb|
|[1x 90% jpg](/uploads/car/1x-90.jpg)|73.6kb|
|[1x 100% jpg](/uploads/car/1x-100.jpg)|246.6kb|

|Calidad|Tamaño|
|----|----|
|[2x 10% jpg](/uploads/car/2x-10.jpg)|32.2kb|
|[2x 20% jpg](/uploads/car/2x-20.jpg)|50.1kb|
|[2x 30% jpg](/uploads/car/2x-30.jpg)|66.3kb|
|[2x 40% jpg](/uploads/car/2x-40.jpg)|79.8kb|
|[2x 50% jpg](/uploads/car/2x-50.jpg)|92.8kb|
|[2x 60% jpg](/uploads/car/2x-60.jpg)|107.1kb|
|[2x 70% jpg](/uploads/car/2x-70.jpg)|129.1kb|
|[2x 80% jpg](/uploads/car/2x-80.jpg)|164.6kb|
|[2x 90% jpg](/uploads/car/2x-90.jpg)|250.8kb|
|[2x 100% jpg](/uploads/car/2x-100.jpg)|881.7kb|

## Compresión en pantallas no retina

Bueno, yo diría que las pantallas no retina (pueden) tener píxeles tan grandes que cualquier tipo de compresión resulta visible. Sin embargo, una calidad de imagen del 90% sigue dando una buena imagen. En algunos casos incluso el 50% es aceptable. Aun así, si tuviera que elegir un único valor para todas mis imágenes (porque tengo que definirlo en Hugo), me quedaría con el 90%. El ahorro es enorme y la calidad siempre es buena.

## Calidad de imagen perfecta

Pero, ¿y si te dijera que puedes conseguir una calidad de imagen perfecta (100%) en un dispositivo no retina AHORRÁNDOTE aún más de la mitad de los bytes? Imposible, pensarás... pues no lo es.

Si quieres una imagen no retina perfecta puedes comprimir (mucho) una imagen retina-ready (una imagen con 4 veces más píxeles) y obtener un resultado muy cercano al 100% de calidad. La compresión debería rondar el 50% para ahorrar alrededor del 60% de todos los bytes. Cuando [miras muy de cerca](/uploads/car/quality.png), puedes ver algo de distorsión (efecto pixelado) en el faldón lateral naranja de la imagen inferior izquierda, mientras que no se ve ninguna en la imagen inferior derecha. En otras palabras: la imagen 2x 50% jpg se ve perfecta en una pantalla no retina, mientras que la 1x 90% jpg no.

Pero hay otra diferencia mucho más visible en las pantallas retina. La imagen más grande (2x 50% jpg) se ve mucho mejor en pantallas de alta densidad de píxeles (retina). Ten en cuenta que he duplicado la resolución para una mejor comparación, haciendo la imagen no retina 2 veces más grande y la imagen retina ¡4 veces más grande! de lo que aparece en la realidad.

## Complejidad cero

Si queremos imágenes perfectas en pantallas no retina, lo mejor es usar una imagen retina muy comprimida. Con un source set podríamos ganar algo de calidad o ahorrar algunos bytes, pero eso también añadiría complejidad. Lo mismo ocurre con el uso del formato 'webp', ya que [webp aún no está totalmente soportado](https://caniuse.com/?search=%20webp). El código cuesta dinero y la complejidad añadida también. Además, soy perezoso. Por eso prefiero la solución más simple posible: usar una sola imagen jpg.

## Un tamaño para gobernarlos a todos

Abajo encontrarás un resumen de las opciones ordenadas por tamaño de archivo. La conclusión es que si te importan las imágenes 'perfectas' en pantallas no retina, siempre deberías comprimir la versión retina. Si tuviera que elegir una opción de la lista de abajo (porque quisiera definirla globalmente en Hugo), elegiría la versión '2x 50% jpg'. La 2x 50% jpg tiene un aspecto perfecto en no retina, buen aspecto en retina y un tamaño aceptable.  

> La 2x 50% jpg tiene un aspecto perfecto en no retina, buen aspecto en retina y un tamaño aceptable.

<br>

|Compresión|Tamaño|1x|2x|
|----|----|--|--|
|[1x 100% jpg](/uploads/car/1x-100.jpg)|//////////////////// 246.6kb|<span class="emoticon">😀</span>|<span class="emoticon">😡</span>|
|[2x 90% jpg](/uploads/car/2x-90.jpg)|//////////////////// 250.8kb|<span class="emoticon">😀</span>|<span class="emoticon">😀</span>|
|[2x 80% jpg](/uploads/car/2x-80.jpg)|///////////// 164.3kb|<span class="emoticon">😀</span>|<span class="emoticon">😀</span>|
|[2x 50% jpg](/uploads/car/2x-50.jpg)|/////// 92.8kb|<span class="emoticon">😀</span>|<span class="emoticon">🙂</span>|
|[1x 90% jpg](/uploads/car/1x-90.jpg)|////// 75.3kb|<span class="emoticon">🙂</span>|<span class="emoticon">😡</span>|
|[1x 80% jpg](/uploads/car/1x-80.jpg)|//// 50.3kb|<span class="emoticon">🙂</span>|<span class="emoticon">😡</span>|
|[2x 20% jpg](/uploads/car/2x-20.jpg)|//// 50.1kb|<span class="emoticon">🙂</span>|<span class="emoticon">😐</span>|
|[1x 50% jpg](/uploads/car/1x-50.jpg)|// 30.2kb|<span class="emoticon">😐</span>|<span class="emoticon">😡</span>|
|[1x 20% jpg](/uploads/car/1x-20.jpg)|/ 18.0kb|<span class="emoticon">😡</span>|<span class="emoticon">😡</span>|

<span class="emoticon">😀</span> = perfecto   
<span class="emoticon">🙂</span> = bueno   
<span class="emoticon">😐</span> = aceptable   
<span class="emoticon">😡</span> = terrible   
<br>

## Perfecta y aun así al 50%

Dije que la calidad 1x 50% jpg solo era aceptable en algunos casos (en ciertas imágenes) en una pantalla no retina. ¿Por qué sería 2x 50% 'buena' en pantallas retina? Una calidad jpg del 50% en retina tiene [artefactos de compresión evidentes](/uploads/car/quality.png) (mira la imagen superior derecha) y dijimos que queríamos 'evitar cualquier artefacto de compresión visible'... La respuesta es sencilla. Los píxeles de la mayoría de pantallas retina son tan pequeños que tu ojo no es capaz de verlos por separado, lo que hace que la distorsión sea (casi) invisible. Tu ojo desenfoca la imagen por ti, dando como resultado lo que parece una imagen perfecta. Por eso el 50% se valoró como 'bueno' en retina, mientras que se valoró como 'aceptable' en no retina.

¿Quieres pruebas? Te reto a detectar la diferencia entre una imagen retina perfecta y una distorsionada al 50% aquí abajo (obviamente tienes que verlas en una pantalla retina, si no siempre se verán perfectas)...

<p><img src="/uploads/car/2x-100.jpg" width="568"/>2x 100% calidad jpg (881.7kb)</p>

<p><img src="/uploads/car/2x-50.jpg" width="568"/>2x 50% calidad jpg (92.8kb)</p>

Que seas capaz o no de ver la compresión en la imagen inferior depende en gran medida del tamaño de píxel de tu dispositivo. Si estás en un móvil normal (con pantalla retina), verás dos imágenes perfectas, mientras que la de arriba es casi 10 veces más grande que la de abajo. Si estás en un dispositivo con píxeles más grandes (y pantalla retina), quizá puedas detectar el efecto pixelado si miras muy de cerca. Fíjate en que buscamos el efecto de distorsión visible en la imagen superior derecha de este [primer plano 4x](/uploads/car/quality.png).

## HugoConf 2022

Así que... con una compresión 2x 50% jpg consigues imágenes (casi) perfectas en pantallas retina Y no retina, complejidad añadida cero y ahorras bytes por un factor de 10 (o de 2 si ignoras las pantallas retina). Apuesto a que te gustaría tener eso en tu web con Hugo para todas las imágenes, incluso las de tu markdown. ¡Sin problema! He propuesto una charla relámpago para [HugoConf 2022](https://hugoconf.io/), llamada 'Redimensionar todas las imágenes', donde te enseñaré cómo lograrlo con una cantidad mínima de código. No estoy seguro de entrar en el programa final, así que también he [publicado la transcripción completa](/es/blog/redimensionar-todas-las-imagenes).
