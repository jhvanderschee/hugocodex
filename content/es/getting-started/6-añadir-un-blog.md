---
title: 6. Añadir un blog
translationKey: add-a-blog
---

Toda página web tiene una sección de noticias o un blog. Por eso vamos a añadir una carpeta 'posts' a nuestra carpeta de contenido. En esta nueva carpeta creamos un fichero markdown llamado 'hello-world.md', que será nuestra primera entrada. Este fichero debería verse así:

```
---
title: Hello world
date: 2016-02-01 10:00:00
---
This is my first blog post
```

La fecha debería ser la fecha actual. La hora es opcional. Además vamos a añadir un (nuevo) fichero de plantilla para el listado de nuestro blog (una vista de lista de nuestras entradas). Hugo requiere que este fichero se llame 'section.html' y que se guarde en la carpeta 'layouts'. Este fichero se ve así:

```
{{ partial "header.html" . }}
    <h1>Posts</h1>
    <ul>
    {{ range .RegularPages }}
        <li>
            {{ if .Date }}{{ .Date | time.Format ":date_long" }}{{ end }}
            <h2>{{ .Title }}</h2>
            <p>{{ .Summary | plainify }}... <a href="{{ .RelPermalink }}">Read more</a></p>
        </li>
    {{ end }}
    </ul>
{{ partial "footer.html" . }}
```

Adicionalmente puedes actualizar tu 'page.html' en la carpeta 'layouts' y añadir el parámetro '.Date'. Entonces debería verse más o menos así:

```
{{ partial "header.html" . }}
    {{ if .Date }}{{ .Date | time.Format ":date_long" }}{{ end }}
    <h1>{{ .Title }}</h1>
    {{ .Content }}
{{ partial "footer.html" . }}
```

Esto hará que tus entradas (páginas individuales) también muestren la fecha de publicación. Tu proyecto debería verse ahora así:

```
/content/_index.md
/content/contact.md
/content/posts/hello-world.md
/layouts/home.html
/layouts/page.html
/layouts/section.html
/layouts/_partials/header.html
/layouts/_partials/footer.html
/hugo.yaml
```
