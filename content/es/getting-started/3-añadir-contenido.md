---
title: 3. Añade tu primer contenido
---

Ahora tenemos un fichero
index.html', vamos a separar el código fuente del contenido. Hugo usa [Markdown](https://www.markdownguide.org/cheat-sheet/) para ello. Todo el contenido se guarda en ficheros '.md' (Markdown) en una carpeta 'content' en la raíz de tu  proyecto. Crea un fichero Markdown, llamado '_index.md', que se vea así :

```
---
title: My first content file
---
My first paragraph in Markdown
```

Save the file in the 'content' directory. Now change your '/layouts/index.html' file, so it look like this:

```
<html>
<head></head>
<body>
    <h1>{{ .Title }}</h1>
    {{ .Content }}
</body>
</html>
```

This effectively separates the code from the content. Content now lives in the '/content/_index.md' file and the HTML/code lives in the '/layouts/index.html' file. Your project should now looks like this:

```
/content/_index.md
/layouts/index.html
/config.yaml`
```
