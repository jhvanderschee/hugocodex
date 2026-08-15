---
translationKey: create-html
title: 2. Crear algo de HTML
---

Una vez instalado Hugo, empecemos con una página web muy simple. Primero debes crear dos ficheros. Empieza por un fichero vacío llamado 'hugo.yaml'. Luego crea un fichero llamado 'home.html' con algo de HTML sencillo:

```
<html>
<head></head>
<body>
    Una página web muy simple
</body>
</html>
```

Debes guardar el fichero 'hugo.yaml' en la raíz de tu proyecto y el fichero 'home.html' en una carpeta llamada 'layouts'. Tu proyecto se verá ahora así:

```
/layouts/home.html
/hugo.yaml
```

Ahora puedes teclear el comando 'hugo server' en la línea de comandos y pulsar enter. Hugo te dirá que tu sitio web está ahora en http://localhost:1313. Si vas ahora a dicha dirección en tu navegador, encontrarás tu sitio web.
