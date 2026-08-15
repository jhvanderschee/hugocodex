---
title: Lecciones aprendidas al portar desde Jekyll
translationKey: lessons-learned-porting-from-jekyll
date: "2021-09-19"
---
En los últimos 6 años he construido unas 30 webs con Jekyll al año. Hace poco me pasé por completo a Hugo y he portado varios sitios web de Jekyll a Hugo. Por el camino aprendí unas cuantas cosas que tú también necesitarás saber cuando des el paso de Jekyll a Hugo. Me ha costado bastante aprender Hugo, pero al final ha merecido la pena, sobre todo por los bajos tiempos de construcción y la conversión de imágenes integrada que he ganado.

Ten en cuenta que este va a ser un documento vivo, así que asegúrate de volver más adelante para consultarlo de nuevo.

## Estructura de directorios

### Colecciones

En Hugo las 'colecciones' se llaman 'secciones'. Personalmente ese nombre no me gusta nada, pero hay que vivir con ello. Una sección es un directorio de primer nivel dentro del directorio 'content' O un directorio que contenga un archivo '\_index.md'. Un directorio con un archivo 'index.md' NO es una sección (sino un 'page bundle'). Cuando creas un sitio web multilingüe usas los directorios de primer nivel para los idiomas y los de segundo nivel para las secciones/colecciones.

### Layouts

Puedes tener layouts que nombres en tu front matter, pero esos layouts deben vivir en el directorio de su sección dentro del directorio 'layouts'. Para las páginas ese debería ser el directorio 'page'.

### Archivos de contenido

Mientras que Jekyll da por hecho que todos los archivos .md son contenido, Hugo te obliga a usar un directorio de contenido ('content' por defecto) y poner tus archivos .md en él.

### Archivos estáticos

Jekyll asume que todos los archivos son estáticos. Ese no es el caso en Hugo. Cuando tienes archivos estáticos, como hojas de estilo o imágenes, debes ponerlos en el directorio 'static'.

### Data

'data' es el único directorio que es igual en Jekyll y en Hugo. Puedes renombrar tus '.yml' a '.yaml' para que sean compatibles con versiones antiguas de Hugo.

### Construcciones

Jekyll construye tu web en el directorio '\_site' con cada actualización. Hugo solo construye tu web cuando ejecutas el comando hugo (en lugar de 'hugo server'). Hugo construye tu web en un directorio llamado 'public'.

### Resources

Hugo es capaz de redimensionar imágenes. Esas imágenes redimensionadas acaban en el directorio 'resources', dentro de la carpeta 'gen'. Jekyll no tiene ese directorio ni esa funcionalidad.

## Ajustes de configuración

### Sobre el archivo de configuración

En Jekyll el archivo de configuración se llama '\_config.yml'. En Hugo es 'hugo.yaml'. Ten en cuenta que en versiones modernas de Hugo también puedes usar la extensión 'yml'. Otra cosa llamativa es que Jekyll te obliga a listar tus colecciones en el archivo de configuración. Hugo no tiene ese requisito.

### Evitar la salida

Cuando quieres evitar la salida de una sección/colección, en el archivo de configuración de Jekyll puedes escribir 'output: false'. Eso no es posible en Hugo. La solución alternativa es crear un 'page.html' vacío en el directorio 'layouts', dentro de la carpeta correspondiente a la sección/colección a la que quieres aplicarlo. Hay otro truco que funciona, que es [este](https://gohugo.io/content-management/build-options/#listing-pages-without-publishing-them).

### Definir permalinks

En Jekyll me encanta usar 'permalinks: pretty' y luego algunos valores por defecto específicos para cada colección. En Hugo esto funciona un poco distinto. Hugo te permite simplemente listar todas las secciones bajo la clave 'permalinks' en el archivo de configuración. Un par clave-valor lógico (bajo esa clave) sería 'sectionname: /desiredpath/:filename'. La última parte (:filename) representa el nombre del archivo sin extensión. Otro ejemplo es 'posts: /:year/:month/:title/'. Esto convierte el título en slug y añade el año y el mes para evitar colisiones de URL.

### Variables de sitio personalizadas

Las variables de sitio personalizadas no se escriben como hijas de la raíz, sino como hijas de la clave 'params' en el archivo de configuración. Se pueden invocar usando '.Site.Params.customvariable', donde 'customvariable' es el nombre de tu variable personalizada.

## Trucos y consejos

### Redimensionar todas las imágenes del usuario

Para poder usar todas las imágenes del usuario como recursos, basta con añadir 'assetDir: static' a tu archivo de configuración. Después puedes redimensionar imágenes invocando:

```
((resources.GetMatch .Params.image).Fit "600x600 jpg Center q50").RelPermalink.
```

### Obtener el slug de la página

No existe nada como `page.slug`. En su lugar tienes que usar `.File.BaseFileName`.

### Cache busting de tu style.css

Usa `<link href='/css/style.css?version={{ now }}' rel='stylesheet' type='text/css'>` para hacer cache busting de tu archivo CSS.

### Una relación de muchos a muchos

Si por ejemplo quieres que un 'coche' tenga un array de 'características' compartidas entre coches, normalmente estás ante una relación de muchos a muchos. Un coche tiene muchas características y una característica pertenece a muchos coches. Puedes modelar esto creando una página para tu coche con un array de características en el front matter. En lugar de escribir la característica completa en tu front matter, solo pones el slug de la característica. Después creas una sección aparte de características que coincidan con esas claves. Esas claves te permiten encontrar el elemento/página correspondiente en la sección de características. El código para esto es bastante compacto y se ve así:

```
{{- range .Params.features -}}
    {{ with $.Site.GetPage (print "/features/" . ".md") }}
         {{ .Title }}          
    {{ end }}
{{ end }}
```

### Nombre del archivo de la página de inicio

El nombre del archivo de tu página de inicio DEBE ser '_index.md'. De lo contrario tus secciones no funcionarán correctamente. Fíjate en el guion bajo.

### Formatear fechas

Para formatear fechas automáticamente deberías añadir lo siguiente a tu archivo de configuración:

```
defaultContentLanguage: nl
languageCode: nl_NL
```

Después puedes usar este comando para mostrar una fecha específica del idioma: `{{ .Date | time.Format ":date_long" }}`.

### Configuración multilingüe

Cuando quieres una configuración multilingüe tienes que usar `defaultContentLanguage: nl` en el nivel raíz de tu archivo hugo.yaml. Además necesitas una variable 'languages', que se ve más o menos así:

```
languages:
  en:
    languageName: English
    title: Website title
    description: Website description in English
    contentDir: content/english
    permalinks: 
      posts: /news/:filename/ 
    weight: 2
  nl:
    languageName: Nederlands
    title: Website titel
    description: Website beschrijving in het Nederlands
    contentDir: content/nederlands
    permalinks: 
      posts: /nieuws/:filename/
    weight: 1
```

Ten en cuenta que lo anterior define una carpeta de contenido nueva para cada idioma. Eso significa que tienes que crear una carpeta 'english' y otra 'nederlands' dentro de tu carpeta de contenido, que contendrán tus secciones.

Además necesitas traducciones de cadenas de texto. Esto se resuelve fácilmente creando una carpeta 'i18n' en la raíz de tu proyecto. Esta carpeta contiene un archivo 'en.yaml' y otro 'nl.yaml', cada uno parecido a esto (donde 'other' contiene la traducción):

```
other_news:
  other: Overige nieuwsberichten
recent_news:
  other: Recent nieuws
```

Invocar una de esas cadenas es tan fácil como escribir: `{{ i18n "other_news" }}`. En la plantilla también tendrás disponible la variable `.Language`, que devuelve la clave del idioma ('en' o 'nl' en este caso).

### Dividir el contenido principal

Cuando quieras dividir tu contenido principal en varias partes puedes separarlas fácilmente, por ejemplo, por la etiqueta 'h2'. En el código de abajo ves el comando 'print', que une varias cadenas en una sola, y el comando '| safeHTML', que permite la salida de HTML.

```
{{ $content := split .Content "<h2" }}
<div class="part1">
    {{ print "<h2" (index $content 1) | safeHTML }}
</div>
<div class="part2">
    {{ print "<h2" (index $content 2) | safeHTML }}
</div>
```
