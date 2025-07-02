---
title: 4. Incluye tu primer Parcial
---

Un sitio web típicamente consiste en en unos pocos elementos elements que van repitiéndose en cada página,  como una cabecera con un menu y un pie de página. En vez de agregarlo a cada página, puedes usar un 'parcial'. Los Parciales han de ser guardados en el directorio '/layouts/_partials'. 

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


Guarda ambos ficheros en el directorio '/layouts/_partials/'. Ahora actualiza tu fichero '/layouts/index.html' y aegurate de que se ve así (reemplazando el código fuente con los enlaces a los parciales):

```
{{ partial "header.html" . }}
    <h1>{{ .Title }}</h1>
    {{ .Content }}
{{ partial "footer.html" . }}
```

Tu proyecto debería ahora verse así: 

```
/content/_index.md
/layouts/index.html
/layouts/_partials/header.html
/layouts/_partials/footer.html
/hugo.yaml`
```
