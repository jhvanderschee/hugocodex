---
title: Expandir texto

---
### Introducción

A veces, cuando quieres crear un enlace de 'leer más', crear una página entera nueva es excesivo. En ese caso una funcionalidad para expandir texto con javascript resulta muy útil. En este sitio web se usa por claridad y brevedad.

### Cómo funciona

El script busca una etiqueta `[expand]` en una línea propia y después busca la etiqueta `[/expand]` (de nuevo en una línea propia, siendo así el único contenido de su párrafo). Cuando las encuentra añade algunas clases y oculta todo lo que hay en medio. Mostrará un enlace 'leer más &rarr;' que indica que el texto se puede expandir.

### Instalación

Paso 1. Descarga el archivo [text-expand.js](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/js/text-expand.js)
<br />Paso 2. Guarda el archivo en el directorio 'static/js' de tu proyecto
<br />Paso 3. Asegúrate de que el final de tu documento de plantilla se vea así:

```
...
<script type="text/javascript" src="/js/text-expand.js"></script>
</body>
</html>
```
