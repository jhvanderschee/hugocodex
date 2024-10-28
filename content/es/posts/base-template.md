---
title: ¿Una estrategia más elaborada de plantillas / diseños?
date: 2024-02-26
---

## Contexto: enfoque de plantillas / diseños

Estamos (siempre) mejorando el proceso/flujo de trabajo. Ahora que hemos aprendido lo básico (veáse la sección 'Empezando'), ¿es momento para una estrategia de plantillas / diseños más elaborada?

## Un primer enfoque de plantillas

Cuando hablamos de diseños de Hugo: típicamente simplemente defines

```
mi-proyecto-hugo
|._ layouts/ Home (o index) plantilla html
           |._ _default/single.html
           |. _/default/list.html
```

Bien. Para empezar...
El punto aquí es que típicamente terminarías reutilizando código de esos... teniendo que copiar algunos fragmentos de código alrededor de estos 3 layouts 'iniciales' para un sitio web básico.
Pero espera... ¿qué pasa si el sitio web requiere más flexibilidad de plantillas? O... ¿el diseño general (interfaz de usuario / UI ~ estilo CSS) requiere algo más de complejidad?

## Podemos hacerlo mejor: hola layout baseof.html y 'bloques' al rescate

Mejoremos nuestro flujo de trabajo esbozando algo de pseudocódigo:

* <header /> sección 'header'
* baseof.html -> sección principal "contenido"
    [bloque]
* <footer /> -> sección "footer"

### Definición de bloque

Creemos un bloque de contenido:

```
{{ block "content" . }}

{{ end }}
```

Ahá. Ahora siéntete libre de reutilizarlo donde quieras en otras plantillas (por ejemplo, en 'single.html' o 'list.html'), definiéndolos siguiendo esta sintaxis dentro de otros diseños:

```
{{ define "content" }}

{{ end }}
```

> NOTA: el contexto, también conocido como 'el punto' '.', es necesario.

[El video tutorial de Mike](https://gohugo.io/templates/base/) en la documentación oficial de Hugo lo explica de manera detallada. Puedes disfrutar de la explicación completa allí.

< diviértete con Hugo / >
