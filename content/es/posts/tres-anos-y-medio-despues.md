---
title: 'Tres años y medio después'
translationKey: three-and-a-half-years-later
date: '2021-06-06'
---
Ya te conté que [migrar de Jekyll a Hugo](/es/blog/migrar-de-jekyll-a-hugo) fue mucho más difícil de lo que pensaba. Pero no esperaba que luego no fuera a mirar Hugo durante otros 3 años y medio.

### ¿Qué ha cambiado?

En primer lugar, [CloudCannon](https://www.cloudcannon.com) empezó a construir sitios web con Hugo, mientras que [Forestry](https://www.forestry.io) dejó de hacerlo. Soy un gran fan de CloudCannon, me han pedido que escriba entradas de blog para ellos y aparezco en su sitio web, así que desde luego quería probar Hugo en su infraestructura. En segundo lugar, tenía algunos sitios web que se estaban volviendo bastante lentos por su tamaño creciente. Jekyll ha mejorado mucho su velocidad en los últimos años, pero tiempos de construcción de más de 20 segundos seguían siendo habituales en mis webs más grandes (más de 3.000 páginas). Empecé a experimentar con GoJekyll y me entusiasmaron los tiempos de construcción de 1,4 segundos. Sin embargo, enseguida encontré algunos errores en GoJekyll y algunas limitaciones en blackfriday (el conversor de Markdown de GoJekyll). También me di cuenta de que tanto Netlify como CloudCannon estaban pasando a un modelo de precios en el que pagas por minutos de construcción. Lo entiendo... pero eso le dio a Hugo una ventaja extra sobre Jekyll, ya que Hugo construye 20 veces más rápido (y por tanto más barato). Esto me hizo mirar Hugo otra vez con ojos nuevos. Un proyecto enormemente popular y maduro, con más de 50.000 estrellas en Github.

Mientras exploraba todo lo nuevo (y lo viejo) de Hugo, descubrí que la creación de sitios web multilingües estaba muy bien soportada. Yo construyo muchos sitios multilingües, así que eso está bastante bien. Además, después de casi 6 años construyendo webs con Jekyll, me sentía menos inseguro ante aprender un nuevo lenguaje de plantillas y estaba listo para un nuevo reto.

### ¿Y ahora qué?

Iré portando a este sitio web más de las soluciones que he construido en [Jekyll Codex](https://jekyllcodex.org). Ya he actualizado el código de forma que ya no usa Bootstrap ni jQuery. Pronto verás aparecer muchos 'Complementos' en esta web, con partials o shortcodes. Empezaré donde lo dejé, explorando la posibilidad de que Hugo redimensione imágenes.
