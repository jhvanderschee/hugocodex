---
title: Nuevo menú plegable automático
translationKey: new-auto-collapsing-menu
date: 2023-03-06
---

En mi [versión anterior](/es/blog/crear-un-menu-con-paginas-anidadas/) del menú (anidado) que se pliega automáticamente decidí evitar las subsecciones de Hugo. Sin embargo, gracias a una actualización de las [migas de pan](/es/complementos/breadcrumbs/), me animé a probar la posibilidad de crear un menú anidado basado en secciones y subsecciones. Lo conseguí y el código quedó mucho más limpio/corto y sencillo, sobre todo gracias a la variable '.Ancestors'. La forma de determinar si una página está 'activa' se hace con el siguiente código:

```
{{ if or (in $.ancestors .) (eq $.curRelPermalink .RelPermalink) }}active{{ end }}
```

Para comprobar si tiene hijos simplemente comprobamos la longitud de la variable .Pages:

```
{{ if len .Pages }}haschildren{{ end }}
```

¡Espero que te guste este nuevo enfoque para un [menú anidado plegable automático](/es/complementos/nested-menu/)!
