---
title: 2. Crear algo de HTML
---

Una vez instalado Hugo, empezemos con una página web bien simple. Primero debes crear dos ficheros. Primero creas un fichero vacío llamado  'config.yaml'. Luego creas un fichero llamado 'index.html' con algún simple HTML:

```
<html>
<head></head>
<body>
    Página Web bien simple 
</body>
</html>
```

Debes guardar el fichero 'config.yaml' en la raíz de tu proyecto y el fichero 'index.html' en una carpeta llamada 'layouts'. Tu proyecto se verá ahora así :

```
/layouts/index.html
/config.yaml
```

Ahora puedes teclear el comando 'hugo server' en la línea de comandos y pulsar enter. Hugo te dirá que tu sitio web vive ahora en http://localhost:1313. Si vas ahora a dichar dirección en tu navegador, encontrarás tu sitio web.
