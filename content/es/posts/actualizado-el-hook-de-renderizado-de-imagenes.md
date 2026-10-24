---
translationKey: updated-image-hook
title: Actualizado el hook de renderizado de imágenes
date: 2024-09-23
---

He actualizado el hook de renderizado de imagen de mi artículo [Redimensionar todas las imágenes](/es/blog/redimensionar-todas-las-imagenes/). Ahora verifica si las imágenes son SVG y las maneja correctamente. Además, uso `with` para comprobar la existencia del recurso de imagen.

```
{{ with (resources.GetMatch .Destination) }}
    {{ if ne .MediaType.SubType "svg" }}
        <img src="{{ (.Resize `900x jpg Smart q50`).RelPermalink | safeURL }}" alt="{{ $.Text }}" />
    {{ else }}
        <img src="{{ .RelPermalink | safeURL }}" alt="{{ $.Text }}" />
    {{ end }}
{{ end }}
```

Línea por línea:

- `with` comprueba la existencia del recurso: el bloque solo se ejecuta si la imagen existe realmente.
- Si el subtipo del recurso **no** es 'svg', la imagen se redimensiona a un ancho de 900 píxeles con recorte inteligente ('Smart') y calidad del 50% ('q50'), y se imprime la URL de la versión redimensionada de manera segura.
- Si el subtipo **sí** es 'svg', la imagen se muestra sin redimensionar, ya que los archivos SVG son gráficos vectoriales y no lo necesitan.
