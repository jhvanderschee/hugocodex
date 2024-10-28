---
title: Actualizado el hook de renderizado de imágenes
date: 2024-09-23
---

He actualizado el hook de renderizado de imagen de mi artículo [Redimensionar todas las imágenes](/blog/resize-all-images/). Ahora verifica si las imágenes son SVG y las maneja correctamente. Además, uso `with` para comprobar la existencia del recurso de imagen. 

```
{{ with (resources.GetMatch .Destination) }}
    {{ if ne .MediaType.SubType "svg" }}
        <img src="{{ (.Resize `900x jpg Smart q50`).RelPermalink | safeURL }}" alt="{{ $.Text }}" />
        // Si el subtipo del recurso no es 'svg', redimensiona la imagen a un ancho de 900 píxeles,
        // aplica un recorte inteligente ('Smart'), calidad del 50% ('q50'), y muestra la URL de la imagen redimensionada de manera segura.
    {{ else }}
        <img src="{{ .RelPermalink | safeURL }}" alt="{{ $.Text }}" />
        // Si el subtipo del recurso es 'svg', simplemente muestra la imagen sin redimensionar,
        // ya que los archivos SVG son gráficos vectoriales y no necesitan ser redimensionados.
    {{ end }}
{{ end }}
// 'with' se usa para verificar la existencia del recurso. Si el recurso existe, se ejecuta el bloque.
```
