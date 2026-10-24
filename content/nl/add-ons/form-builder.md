---
title: Formulierbouwer
---
### Introductie

Formulieren zijn een van de belangrijkste onderdelen van een website. Ze variëren van simpele contactformulieren tot formulieren die complete webshopbestellingen of evenementinschrijvingen afhandelen. WordPress heeft extreem populaire formulieroplossingen, zoals 'Contact Form 7' en 'Gravity Forms', maar Hugo niet. Om dat gat te vullen heb ik een eenvoudige formulierbouwer voor Hugo gemaakt.

### Hoe het werkt

Het formulier gebruikt HTML5. Het formulier kan verstuurd worden door CloudCannon of Netlify. De eerste werkt alleen op hosting bij CloudCannon. Je kunt kiezen tussen placeholders in de invulvelden of labels erboven. Er zijn twee bijzondere velden beschikbaar: een veld met de naam 'name' (type 'text') toont invulvelden voor 'voornaam' en 'achternaam' op één regel. Een veld met de naam 'address' (type 'text') toont invulvelden voor 'adres', 'plaats' en 'postcode'.

Om een formulier te maken, voeg je de volgende code toe aan de front matter van je pagina:

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

En dit voeg je toe aan je layout:

```
{{ if (index page.Params.forms 0) }}
  {{ partial "form.html" (dict "context" . "form" 0) }}
{{ end }}
```

Gebruikers van CloudCannon kunnen de beschikbare opties aan hun 'hugo.yaml' toevoegen, zodat het werken voor content-editors nog soepeler gaat.

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

Let op: er is (nog) geen ondersteuning voor select (dropdown). Let er ook op dat de browserondersteuning niet perfect is. De native HTML5-datumkiezer is niet in elke browser beschikbaar en HTML5-validatie werkt niet in IE9, Safari op desktop en Opera Mini.

### Installatie

Stap 1. Zorg dat de front matter van je pagina eruitziet als het voorbeeld hierboven  
Stap 2. Download het bestand [form.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_partials/form.html)  
Stap 3. Sla het bestand op in de map 'layouts/_partials' van je project  
Stap 4. Voeg de volgende regel toe aan je layout op de plek waar je het formulier wilt laten zien:  
```
{{ if (index page.Params.forms 0) }}
  {{ partial "form.html" (dict "context" . "form" 0) }}
{{ end }}
```
