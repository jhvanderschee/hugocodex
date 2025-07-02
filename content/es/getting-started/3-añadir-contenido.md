---
title: 3. Añade tu primer contenido
---

Ahora tenemos un fichero
index.html', vamos a separar el código fuente del contenido. Hugo usa [Markdown](https://www.markdownguide.org/cheat-sheet/) para ello. Todo el contenido se guarda en ficheros '.md' (Markdown) en una carpeta 'content' en la raíz de tu  proyecto. Crea un fichero Markdown, llamado '_index.md', que se vea así :

```
---
title: Mi primer fichero de contenido
---
Mi primer párrafo en Markdown
```

Guarda el fichero en en el directorio 'content' . Ahora cambia el fichero '/layouts/index.html' , tal que así: 

```
<html>
<head></head>
<body>
    <h1>{{ .Title }}</h1>
    {{ .Content }}
</body>
</html>
```

De esta manera separamos el código fuente del contenido. El contenido vive ahora en '/content/_index.md' y el código HTML vive en el fichero '/layouts/index.html'. Tu proyecto tiene esta forma:

```
/content/_index.md
/layouts/index.html
/hugo.yaml`
```
























