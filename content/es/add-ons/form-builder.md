---
title: Form builder
---
### Introducción


Los formularios son de las partes más importantes de un sitio web. Abarcan desde simples formularios de contacto hasta formularios que gestionan pedidos completos de tiendas web o inscripciones a eventos. WordPress tiene soluciones de formularios muy populares, como 'Contact Form 7' y 'Gravity Forms', pero Hugo no. Para llenar este vacío hemos creado un constructor de formularios básico para Hugo.


### Cómo funciona

El formulario utiliza HTML5. El formulario puede ser enviado por CloudCannon o Netlify. El primero sólo funciona en CloudCannon hosting. Puedes elegir entre mostrar marcadores de posición en las entradas o etiquetas encima. Hay dos campos especiales disponibles: un campo llamado 'nombre' (tipo 'texto') mostrará las casillas de entrada 'nombre' y 'apellido' en una línea. Un campo llamado "dirección" (tipo "texto") mostrará las casillas de entrada "dirección", "ciudad" y "código postal".

Para crear un formulario, añade el siguiente código a la cabecera de tu página:

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

Y a tu plantill/layout :

```
{{ if (index page.Params.forms 0) }}
  {{ partial "form.html" (dict "context" . "form" 0) }}
{{ end }}
```

Quienes usen CloudCannon pueden  habilitar las opciones en su ‘hugo.yaml’ para enriquecer la experiencia de la edición de contenido.

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

Disclaimer: Note that there is no select (dropdown) support (yet). Also note that browser support is not perfect. The native HTML5 date picker is not available in every browser and that HMTL5 validation does not work in IE9, Safari for desktop and Opera Mini.
Disclaimer: Nótese que no se soporta (aún) selección  (dropdown)

### Installation

Step 1. Make sure your front matter of your page looks like the example above  
Step 2. Download the file [form.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_partials/form.html)  
Step 3. Save the file in the ‘layouts/_partials’ directory of your project  
Step 4. Add the following line to your layout on the place where you want the form to appear:  
```
{{ if (index page.Params.forms 0) }}
  {{ partial "form.html" (dict "context" . "form" 0) }}
{{ end }}
```
