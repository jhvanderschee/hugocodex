---
title: Usar 'page' en shortcodes - cuidado con la caché
translationKey: using-page-in-shortcodes-cache-issue-be-aware-off
date: "2023-11-08"
---
Desde versiones recientes de Hugo (vamos ya por la v0.120) se introdujo la elegante notación 'page'. ¡Ahora podemos acceder fácilmente a un 'objeto Page global'!
Genial.

Mientras la usábamos tan contentos así en un 'shortcode' de Hugo:

```
{{ page.File.BaseFileName }}
```

nos dimos cuenta de un comportamiento (aparentemente) raro al construir el sitio y ver lo que renderizaba el navegador Firefox. Raro.

Lo reportamos en la cola de incidencias del repositorio de Github:

> 'page' usado en un shortcode presenta un comportamiento no del todo consistente: los problemas solo ocurren en la primera ejecución de 'hugo server', [..]

> ¿Se nos está escapando algo más?

Una vez más, Joe M. al rescate (¡solo un par de horas después!), nos recordó [la sección de la documentación en la que se encontraba la pieza que 'faltaba'.](https://gohugo.io/functions/global/page/#be-aware-of-caching)

¡Ahora sabemos que la caché y la concurrencia juegan su papel!

Solo para que lo sepas.

¡Feliz programación!
