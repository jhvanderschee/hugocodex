---
translationKey: include-partials
title: 4. Incluye tu primer Parcial
---

Un sitio web suele constar de unos pocos elementos que se repiten en cada página, como una cabecera con un menú y un pie de página. En vez de añadirlos a cada página, puedes usar un 'parcial'. Los parciales han de guardarse en el directorio '/layouts/_partials'.

Crea un fichero 'header.html' como este:

```
<html>
<head></head>
<body>
```

Crea un fichero 'footer.html' como este otro:

```
</body>
</html>
```


Guarda ambos ficheros en el directorio '/layouts/_partials/'. Ahora actualiza tu fichero '/layouts/home.html' y asegúrate de que se ve así (sustituyendo el código por las llamadas a los parciales):

```
{{ partial "header.html" . }}
    <h1>{{ .Title }}</h1>
    {{ .Content }}
{{ partial "footer.html" . }}
```

Tu proyecto debería verse ahora así:

```
/content/_index.md
/layouts/home.html
/layouts/_partials/header.html
/layouts/_partials/footer.html
/hugo.yaml
```
