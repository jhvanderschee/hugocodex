---
title: ¿Una estrategia más elaborada de plantillas / diseños?
date: 2024-02-26
---

## Contexto: enfoque de plantillas / diseños

Estamos (siempre) mejorando el proceso/flujo de trabajo. Ahora que hemos aprendido lo básico (véase la sección 'Empezando'), ¿es momento de una estrategia de plantillas / diseños más elaborada?

## Un primer enfoque de plantillas

Cuando hablamos de diseños de Hugo, típicamente defines algo así:

```
mi-proyecto-hugo
|._ layouts/ Home (o index) plantilla html
           |._ page.html
           |. _/default/list.html
```

Ya hablamos de [cómo empezar](/es/empezando/) y de cómo usar parciales para (por ejemplo) el header y el footer.

Bien. Para empezar... El punto aquí es que típicamente terminarías reutilizando código de esos diseños: copiando fragmentos de un lado a otro entre estos 3 layouts 'iniciales' de un sitio web básico. Pero espera... ¿qué pasa si el sitio web requiere más flexibilidad de plantillas? O... ¿si el diseño general (interfaz de usuario / UI ~ estilo CSS) requiere algo más de complejidad?

## Podemos hacerlo mejor: hola layout baseof.html y 'bloques' al rescate

Mejoremos nuestro flujo de trabajo esbozando algo de pseudocódigo:

- `<header />` → sección 'header'
- `baseof.html` → sección principal "contenido" (el bloque)
- `<footer />` → sección "footer"

### Definición del bloque

Creemos un bloque de contenido:

```
{{ block "content" . }}

{{ end }}
```

> NOTA: el contexto, también conocido como 'el punto' '.', es necesario.

### Uso del bloque

Ahá. Ahora siéntete libre de reutilizarlo donde quieras en otras plantillas (por ejemplo, en 'page.html' o 'list.html'), definiéndolo con esta sintaxis dentro de otros diseños:

```
{{ define "content" }}

  {{ .Content }}

{{ end }}
```

Por último, pero no menos importante: ¿sabías que puedes sobrescribir un bloque concreto en una plantilla específica?

[El video tutorial de Mike](https://gohugo.io/templates/base/) en la documentación oficial de Hugo lo explica de manera más detallada y visual. Puedes disfrutar de la explicación completa allí.

Diviértete con Hugo.
