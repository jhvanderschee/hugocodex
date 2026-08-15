---
title: Por qué deberías actualizar a Hugo v0.120
translationKey: why-you-should-upgrade-hugo-to-0-120
date: "2023-11-02"
---
Si construyes sitios web multilingües y usas un CMS, entonces querrás actualizar a la última versión de Hugo. Deja que te cuente por qué. Las páginas de índice con guion bajo en tu directorio de contenido (las páginas de listado de las secciones) necesitaban una entrada en el front matter para que la URL siguiera la estructura de permalinks. En una de las versiones más recientes de Hugo esto se ha arreglado. ¡Ahora puedes definir el permalink de la página de listado en el archivo de configuración! Las páginas individuales se llaman 'page' y la página de listado se llama 'section'. Con yaml queda así:

```
permalinks:
  page:
    yoursection: /xyz/:filename
  section:
    yoursection: /xyz/
```

Genial, ¿verdad? Ahora ya no tienes que molestar a tus clientes con la URL de la página de listado (si tienes un archivo `_index.md` y dejas su front matter editable en tu CMS). Merece mucho la pena actualizar, en mi opinión.
