---
title: Migas de pan actualizadas
translationKey: breadcrumbs-updated
date: 2021-12-09
---

Llevo ya medio año construyendo sitios web con Hugo y soy un GRAN fan. Sí, la documentación es a veces algo rara o incompleta. ¿Dónde encuentras la variable 'resources' (todo en minúsculas), por ejemplo? No lo sé. Por otro lado, el [canal de Discourse](https://discourse.gohugo.io/) es absolutamente increíble. El tiempo que la gente dedica a ayudar a todo el mundo es simplemente alucinante.

En estos últimos seis meses he sufrido mucho y he aprendido mucho. Así que, cuando volví a mirar el código que usaba para mis [migas de pan](/es/complementos/breadcrumbs/) (que creé hace más de medio año), vi que podía mejorarlo... y lo hice.

El nuevo código distingue las páginas de listado de las páginas normales. Para eso uso la variable de página `.IsPage`. Esto permite que el script te muestre una parte de la URL humanizada para las páginas de listado y el título completo para las páginas normales. Es una mejora estupenda y resuelve muchos problemas con las mayúsculas en los nombres, etc. También he mejorado la estructura de las migas de pan. He cambiado la única línea de texto (enlaces) por una lista no ordenada. Esta lista no ordenada se estiliza con CSS para volver a parecer una sola línea. Esto es semánticamente mejor y más fácil de estilizar. Por último, vi que había sustituido el texto 'posts' por 'blog'. Ahora sé que para eso es mejor usar un permalink modificado, que se puede establecer globalmente en el archivo de configuración.

Espero que te gusten las mejoras. Puedes verlas en Github, ya que este repositorio es público. ¡Feliz programación!
