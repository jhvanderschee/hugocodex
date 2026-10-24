---
title: 'Empezando con Hugo'
translationKey: getting-started-with-hugo
date: 2018-01-02
---

## Paso 1. Crear un sitio web básico

Un sitio web suele constar de unos cuantos elementos. La cabecera con un menú, una barra lateral, el contenido y el pie. Antaño usábamos frames para juntar estos componentes. Hoy en día usamos includes. Estos includes necesitan un lenguaje de programación para funcionar, como PHP. Sin embargo, usar PHP introduce un montón de vulnerabilidades. ¿Y si pudiéramos evitarlo por diseño? Pues... con Hugo puedes...

Antes creabas un archivo 'index.php' y hacías algo así:

```
<html>
<head></head>
<body>
<?php include('header.php'); ?>
content
<?php include('sidebar.php'); ?>
<?php include('footer.php'); ?>
</body>
</html>
```

Ahora creas un archivo 'home.html' y sustituyes tus etiquetas PHP por etiquetas de plantillas de Go, así:

```
<html>
<head></head>
<body>
{{ partial "header.html" . }}
{{ .Content }}
{{ partial "sidebar.html" . }}
{{ partial "footer.html" . }}
</body>
</html>
```

Este archivo 'home.html' es tu nueva plantilla de página de inicio. Tienes que guardarlo en la carpeta de tu proyecto, dentro de 'layouts'. Quizá quieras hacer una copia de este archivo en 'layouts' y llamarla 'page.html'. Los archivos html que quieras incluir debes colocarlos en la carpeta de tu proyecto, dentro de 'layouts/_partials'. Por último tienes que crear una carpeta 'content' en la raíz de tu proyecto y rellenarla con un archivo '_index.md' que se vea así:


```
---
title: Hello world
---
Your content here...
```

Para crear una página de listado, fíjate en este ejemplo.

[expand]

```
<html>
<head></head>
<body>
{{ partial "header.html" . }}
{{ .Content }}
<ul>
  {{ range (where .Data.Pages "Section" .Section ).ByTitle }}
    <li><a href="{{ .Permalink }}">{{ .Title }}</a></li>
  {{ end }}
</ul>
{{ partial "sidebar.html" . }}
{{ partial "footer.html" . }}
</body>
</html>
```

Pon este código en un archivo llamado 'section.html' y guárdalo en tu carpeta 'layouts', junto a tu 'page.html'. Tu árbol de archivos se verá ahora así:

```
├── hugo.yaml
├── content
│   └── _index.md
└── layouts
    ├── home.html
    ├── section.html
    ├── page.html
    └── _partials
        ├── footer.html
        ├── header.html
        └── sidebar.html

4 directories, 8 files
```

[/expand]

## Paso 2. Previsualizar tu sitio web

Abrir la carpeta de tu proyecto en un navegador no funciona, así que necesitas un entorno que ejecute Hugo. Puedes instalar Hugo desde la línea de comandos en tu propia máquina. Solo tienes que seguir estas sencillas instrucciones:

* instala Hugo con [estas sencillas instrucciones](https://gohugo.io/getting-started/installing/)
* abre un terminal en la carpeta de tu proyecto y escribe: `hugo server`
* ve a [http://127.0.0.1:1313/](http://127.0.0.1:1313/) y previsualiza tu sitio web

## Paso 3. Alojar tu sitio web

Ay, cuánto odio las cuentas de hosting compartido… hasta que llegó Hugo. Las cuentas de hosting compartido son baratas pero poco fiables. Sin embargo, un sitio estático basado en Git nos proporciona una copia de seguridad (en realidad, el código fuente), lo que me hace sentir mucho más seguro. CloudCannon exporta la versión estática de tu sitio a una cuenta FTP en cada actualización, permitiéndote usar el entorno de hosting que prefieras. Solo tienes que conectar tu cuenta FTP desde las opciones de CloudCannon. Así que si tu cuenta de hosting barata se cae, el código fuente seguirá viviendo en Git y en tu entorno de CloudCannon, permitiéndote subir el sitio a otra cuenta de hosting barata. ¿No es tranquilizador?

Aquí tienes el paso a paso:

- Crea una cuenta gratuita en [cloudcannon.com](https://cloudcannon.com/)
- Crea un sitio web y ponle nombre
- Selecciona Hugo como constructor del sitio
- Crea un archivo ‘hugo.yaml’ vacío en la raíz
- Sube tu archivo ‘home.html’ al directorio ‘layouts’
- Sube tu archivo ‘_index.md’ al directorio ‘contents’
- Visita tu sitio web en la URL que CloudCannon ha creado para ti
