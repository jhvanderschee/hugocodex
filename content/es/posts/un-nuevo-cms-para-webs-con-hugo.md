---
title: Un nuevo CMS para webs con Hugo
translationKey: a-new-cms-for-hugo-websites
date: 2021-11-19
---

Netlify hizo un estudio sobre [las prioridades de los desarrolladores Jamstack](https://www.usecue.com/blog/jamstack-is-eating-the-world/). Lo que más valoran los desarrolladores Jamstack es el 'rendimiento', lo que explica la popularidad de Hugo. Hugo es el rey absoluto del rendimiento. No hay ningún SSG tan rápido como Hugo. Otras prioridades de los desarrolladores Jamstack son la disponibilidad, la seguridad y la velocidad de desarrollo, que en general son buenas en cualquier proyecto Jamstack. Sin embargo, sabemos (y vemos en los datos) que a la gente le cuesta cada vez más que su web Jamstack cumpla con la normativa. Esto probablemente se deba a la naturaleza distribuida de los proyectos Jamstack. Un proyecto Jamstack combina múltiples servicios de múltiples proveedores. Eso significa que tendrás que comprobar el cumplimiento normativo de cada proveedor. También vemos que la gente se preocupa cada vez más por el vendor lock-in. Cada proveedor te obliga a aprender cómo funciona su software. Esta es la razón por la que esos canales sobre Jamstack están llenos de entradas de blog comerciales y anuncios. Una vez que has invertido tiempo en aprender a usar la solución de un proveedor concreto, te has creado tú mismo un lock-in. Cambiar a otro proveedor significaría aprender a usar otra solución, invirtiendo así un tiempo extra que probablemente no tienes.

Esto también se aplica al hosting y a los CMS para Jamstack. Las soluciones de hosting a menudo no están muy optimizadas y ofrecen un rendimiento mediocre. Sobre todo los sistemas CDN están configurados 'incorrectamente'. Casi todas las CDN solo cachean las peticiones con mucho tráfico. En general, las CDN hacen que las webs populares vayan más rápido y las poco populares más lentas. Tu sitio web probablemente no sea muy popular, lo que significa que [no te beneficiarás de usar una CDN](https://www.usecue.com/blog/faster-websites-with-a-cdn/). Por eso uso mis propios servidores con una configuración adecuada. Actualmente solo tengo nodos en Europa, pero lo ampliaré en el futuro.

Igual de importantes e igual de imperfectos son los CMS. Suelen tener un rendimiento mediocre y son difíciles de aprender. Además requieren un montón de configuración específica del CMS. Eso genera un enorme vendor lock-in. Cambiar de un proveedor de CMS a otro puede llevar semanas o meses.

Aun así, estoy moviendo mis webs a mi propio CMS en https://cms.usecue.com. ¿Por qué? Porque es una solución sin configuración, tiene un rendimiento excelente y, combinada con mi propio hosting y failover, me da la disponibilidad, la seguridad y el cumplimiento normativo perfectos. ¡Pronto tendré todas las cosas que sé que tú también quieres (según el estudio de Netlify)!

¿Te da envidia? Siempre puedes contactar conmigo para ver si me queda algo de espacio en el servidor... ;-)
