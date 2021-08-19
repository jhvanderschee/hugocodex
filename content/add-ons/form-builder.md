---
title: 'Form builder'
---

### Introduction

Forms are the most important parts of a websites. They range from simple contact forms to forms that handle complete webshop orders or event sign-ups. WordPress has extremely popular form solutions, like ‘Contact Form 7’ and ‘Gravity Forms’, but Hugo does not. To fill this void I created a basic form builder for Hugo.

### How it works

The form uses HTML5. The form can be submitted by CloudCannon, Formspree and FormBucket. The first only works on CloudCannon hosting. You can choose between showing placeholders in the inputs or labels above it. Two special fields are available: a field named ‘name’ (type ‘text’) will show ‘first name’ and ‘last name’ input boxes on one line. A field named ‘address’ (type ‘text’) will show ‘address’, ‘city’ and ‘postal code’ input boxes.

To create a form, add the following code to the front matter of your page:

```
---
forms:
  - to: jhvanderschee@gmail.com
    subject: New submission!
    redirect: /
    form_engine: formspree
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

And add this to your layout:

```
{{ .Scratch.Set "form" "0" }}
{{ if (index .Page.Params.forms (.Scratch.Get "form")) }}
  {{ .Scratch.Set "form" (.Scratch.Get "form") }}{{ partial "form.html" . }}
{{ end }}
```

CloudCannon users should add the available options to their ‘_config.yaml’ file to make the experience for content editors even smoother.

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

### Installation

Step 1. Make sure your front matter of your page looks like the example above  
Step 2. Download the file [form.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/partials/form.html)  
Step 3. Save the file in the ‘_includes’ directory of your project  
Step 4. Add the following line to your layout on the place where you want the form to appear:  
```
{{ .Scratch.Set "form" "0" }}
{{ if (index .Page.Params.forms (.Scratch.Get "form")) }}
  {{ .Scratch.Set "form" (.Scratch.Get "form") }}{{ partial "form.html" . }}
{{ end }}
```