---
translationKey: add-content
title: 3. Añade tu primer contenido
---

Ahora que ya tenemos un fichero 'home.html', vamos a separar el código del contenido. Hugo usa [Markdown](https://www.markdownguide.org/cheat-sheet/) para ello. Todo el contenido se guarda en ficheros '.md' (Markdown) en una carpeta 'content' en la raíz de tu proyecto. Crea un fichero Markdown llamado '_index.md' que se vea así:

```
---
title: Mi primer fichero de contenido
---
Mi primer párrafo en Markdown
```

Guarda el fichero en el directorio 'content'. Ahora cambia el fichero '/layouts/home.html' para que quede así:

```
<html>
<head></head>
<body>
    <h1>{{ .Title }}</h1>
    {{ .Content }}
</body>
</html>
```

De esta manera separamos el código del contenido. El contenido vive ahora en '/content/_index.md' y el código HTML vive en el fichero '/layouts/home.html'. Tu proyecto tiene esta forma:

```
/content/_index.md
/layouts/home.html
/hugo.yaml
```
