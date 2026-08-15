---
title: Consentimiento de cookies
---

### Introducción

Para cumplir con el RGPD, necesitas el consentimiento del usuario para todas las cookies y scripts no funcionales y de terceros. Esto se puede resolver añadiendo este 'banner de consentimiento de cookies' al pie de la página web. Este banner te ofrece una visión detallada y un control preciso sobre los scripts que se cargan.

### Cómo funciona

El código inserta un banner de consentimiento en la parte inferior de la pantalla. Cuando haces clic en 'Denegar', 'Permitir', 'Permitir todo' o 'Guardar preferencias' se crea una cookie válida durante 31 días. En cada carga de página el código comprueba si esa cookie existe. Si existe, comprobará qué scripts están permitidos. Si no existe, la página solo cargará los scripts funcionales. Los scripts se gestionan en un archivo 'consent.yaml' en el directorio 'data'. Los visitantes pueden establecer o revisar su consentimiento haciendo clic en un enlace con la clase 'manage-consent', como este: <a class="manage-consent" href="#manage-consent">gestionar consentimiento</a>. Consejo: coloca al menos uno de estos enlaces en el pie de tu sitio web. ¿Quieres reiniciar el comportamiento de este banner? Elimina la cookie 'consent-settings' en tu navegador o pulsa este <a href="#" onclick="eraseCookie('consent-settings'); location.reload();">enlace de reinicio</a>.

Aquí puedes ver cómo es el archivo 'consent.yaml':

```
items:
  - title: Google Anaytics (functional)
    description: This code gives us insight into the number of people that visit our website, where they are from and what they are clicking on.
    is_functional: true
    script_file: ga.js
  - title: Crisp chat
    description: This code gives users the option to chat directly with us through a chat box in the bottom right corner.
    is_functional: false
    script_file: crisp.js
```

### Instalación

Paso 1. Descarga el archivo [consent.yaml](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/data/consent.yaml) y adáptalo a tus necesidades
<br />Paso 2. Guárdalo en el directorio 'data' de tu proyecto
<br />Paso 3. Asegúrate de que los archivos de script estén en tu carpeta 'static/js'
<br />Paso 4. Descarga el archivo [consent.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/consent.html)
<br />Paso 5. Guarda el archivo en el directorio 'layouts/_partials' de tu proyecto
<br />Paso 6. Asegúrate de que el final de tu documento de plantilla se vea así:

```
...
{{ partial "consent.html" . }}
</body>
</html>
```
