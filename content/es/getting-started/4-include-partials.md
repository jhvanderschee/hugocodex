---
title: 4. Incluye tu primer Parcial
---

Un sitio web típicamente consiste en en unos pocos elementos elements que van repitiéndose en cada página,  como una cabecera con un menu y un pie de página. En vez de agregarlo a cada página, puedes usar un 'parcial'. Los Parciales han de ser guardados en el directorio '/layouts/partials'. 

Crea un fichero 'header.html' tal que este :

```
<html>
<head></head>
<body>
```

Crea un fichero 'footer.html' tal que este otro:

```
</body>
</html>
```

Store both files in the '/layouts/partials' directory. Now update your '/layouts/index.html' file and make sure it looks like this (replacing the code with links to the partials):

```
{{ partial "header.html" . }}
    <h1>{{ .Title }}</h1>
    {{ .Content }}
{{ partial "footer.html" . }}
```

Your project should now looks like this:

```
/content/_index.md
/layouts/index.html
/layouts/partials/header.html
/layouts/partials/footer.html
/config.yaml`
```
