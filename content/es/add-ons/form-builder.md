---
title: Form builder
---
### Introducción

Los formularios son una de las partes más importantes de un sitio web. Abarcan desde simples formularios de contacto hasta formularios que gestionan pedidos completos de tiendas web o inscripciones a eventos. WordPress tiene soluciones de formularios muy populares, como 'Contact Form 7' y 'Gravity Forms', pero Hugo no. Para llenar este vacío hemos creado un constructor de formularios básico para Hugo.


### Cómo funciona

El formulario utiliza HTML5. El formulario puede ser enviado por CloudCannon o Netlify. El primero solo funciona en el hosting de CloudCannon. Puedes elegir entre mostrar marcadores de posición en las entradas o etiquetas encima. Hay dos campos especiales disponibles: un campo llamado 'nombre' (tipo 'texto') mostrará las casillas de entrada 'nombre' y 'apellido' en una línea. Un campo llamado 'dirección' (tipo 'texto') mostrará las casillas de entrada 'dirección', 'ciudad' y 'código postal'.

Para crear un formulario, añade el siguiente código al front matter de tu página:

```
---
forms:
  - to: jhvanderschee@gmail.com
    subject: New submission!
    redirect: /
    form_engine: netlify
    placeholders: false
    fields: 
      - name: name
        input_type: text
        placeholder: Name
        required: true
      - name: email
        input_type: email
        placeholder: Email address
        required: true
      - name: sex
        input_type: radio
        placeholder: male
        required: true
      - name: sex
        input_type: radio
        placeholder: female
        required: true
      - name: message
        input_type: textarea
        placeholder: Message
        required: false
      - name: terms
        input_type: checkbox
        placeholder: I accept the terms and conditions
        required: true
      - name: submit
        input_type: submit
        placeholder: Submit form
        required: true
---
```

Y a tu plantilla ('layout'):

```
{{ if (index page.Params.forms 0) }}
  {{ partial "form.html" (dict "context" . "form" 0) }}
{{ end }}
```

Quienes usen CloudCannon pueden habilitar estas opciones en su ‘hugo.yaml’ para enriquecer la experiencia de edición de contenido.

```
params: 
  input_types:
    - text
    - textarea
    - email
    - date
    - checkbox
    - radio
    - number
    - submit
  form_engines:
    - netlify
    - cloudcannon
```

Aviso: ten en cuenta que (todavía) no hay soporte para el campo de selección (dropdown). Ten en cuenta también que el soporte de los navegadores no es perfecto: el selector de fecha nativo de HTML5 no está disponible en todos los navegadores y la validación de HTML5 no funciona en IE9, Safari para escritorio ni Opera Mini.

### Instalación

Paso 1. Asegúrate de que el front matter de tu página se parece al ejemplo de más arriba  
Paso 2. Descarga el fichero [form.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_partials/form.html)  
Paso 3. Guarda el fichero en el directorio ‘layouts/_partials’ de tu proyecto  
Paso 4. Añade la siguiente línea a tu plantilla, en el lugar donde quieres que aparezca el formulario:  
```
{{ if (index page.Params.forms 0) }}
  {{ partial "form.html" (dict "context" . "form" 0) }}
{{ end }}
```
