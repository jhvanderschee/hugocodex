---
title: Botones de compartir

---
### Introducción

Puede ser muy útil permitir que la gente comparta fácilmente el contenido que acaba de leer. Los botones de compartir suelen estar al final de una entrada del blog. Este script los añade automáticamente al contenido que tú quieras.

### Cómo funciona

El script lee el `.Permalink` y crea un enlace para compartir. El partial tiene algunas opciones de configuración para ajustar los colores y los iconos que se muestran.

### Instalación

Paso 1. Descarga el archivo [share-buttons.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/share-buttons.html)
<br />Paso 2. Guarda el archivo en el directorio 'layouts/_partials' de tu proyecto
<br />Paso 3. Añade la siguiente línea a tu plantilla, en el lugar donde quieras que aparezcan los botones de compartir:

```
{{ partial "share-buttons.html" . }}
```
