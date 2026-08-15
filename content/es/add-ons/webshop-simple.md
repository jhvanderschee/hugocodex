---
title: Tienda online (simple)
---

### Introducción

Esta es una tienda online sencilla que usa Stripe y que no requiere una cuota mensual. Ideal para un comercio electrónico simple. ¡Echa un vistazo a la [demo](/es/simple-donar)! Ten en cuenta que esta tienda no usa carrito ni extras como gastos de envío. Si necesitas esas funcionalidades, usa la [otra implementación](/es/complementos/webshop).

### Cómo funciona

Aprovechamos los [payment links](https://stripe.com/en-nl/payments/payment-links) de Stripe para que hagan casi todo el trabajo pesado por nosotros. Creamos en Stripe un enlace de pago para cada variante de producto. Después, en Hugo, creamos las páginas de producto y añadimos esos enlaces de pago a los productos correspondientes.

### Instalación

#### Paso 1. Crea una cuenta de Stripe

Antes de poder añadir la tienda online necesitas, para gestionar los pagos, [crear una cuenta de Stripe](https://dashboard.stripe.com/register).


#### Paso 2. Crea tus productos en Stripe
Cuando tengas una cuenta, ve al [panel de Stripe](https://dashboard.stripe.com) y navega hasta el "Catálogo de productos" en la columna de la izquierda. Pulsa "N" en tu teclado o haz clic en "Nuevo producto" para crear un producto nuevo. Aquí configura tu producto como quieras: añade un nombre, un precio y, opcionalmente, una imagen. Puedes crear tantos productos como desees.


#### Paso 3. Crea tu página de pago en Stripe
En cuanto tengas un precio para tu producto, haz clic en los tres puntos que hay al final de la fila del precio. Se abrirá un menú en el que verás "Crear enlace de pago". Al hacer clic verás una interfaz en la que puedes personalizar tu página de pago. Puedes personalizarla como quieras, pero se recomienda marcar la casilla que dice "Permitir que los clientes ajusten la cantidad". Cuando termines, haz clic en "Crear enlace ✓" arriba a la derecha. ¡Bien hecho! Ya puedes copiar tu enlace de pago, que necesitarás en el siguiente paso. Puedes repetir este paso para cada producto que quieras ofrecer.


#### Paso 4. Crea algunos productos
Crea una nueva sección de Hugo (una carpeta en la raíz) y llámala 'products'. En esta carpeta puedes crear tus productos y el listado de productos en el archivo '_index.md'. Cada archivo 'mi-nombre-de-producto.md' (sustituye 'mi-nombre-de-producto' por un buen slug de producto) podría verse así:

```
---
title: Buy me a beer
image: "/uploads/beer/5.jpg"
variant_type: size
variants:
- name: half-a-pint
  price: 2.75
  stripe_payment_link: https://buy.stripe.com/test_bIY28m9VB6VY1AA144
- name: pint
  price: 4.25
  stripe_payment_link: https://buy.stripe.com/test_7sI14i9VBcgia766op
---
I like beer a lot! IPA, Guinness, Stout, craft beers... and I love to try new ones. Buy me half-a-pint to get going or a pint to get a good buzz.

```

#### Paso 5. Añade los scripts al pie
Descarga [webshop-simple.js](https://hugocodex.org/js/webshop-simple.js) y añádelo a tu proyecto. Asegúrate de que la parte inferior de tu documento de plantilla se vea como el código de abajo.

```
<script type="text/javascript" src="/js/webshop-simple.js"></script>
```


#### Paso 6. Átalo todo
Ahora, en tu flamante página de producto de Hugo, asegúrate de que tu plantilla se vea más o menos así:

````
<section class="product">
    {{ $myProductHasMoreThanOneVariant := gt (len .Params.variants) 0 }}
    <h1>{{ .Title }}</h1>
    <img src="{{ .Params.image }}" alt="My awesome product">
    <span class="productprice">{{/* Dynamically filled by Javascript */}}</span>
    {{ if $myProductHasMoreThanOneVariant }}
        <label for="variant">Choose a {{ .Params.variant_type }}:</label>
        <select onchange="updateBuyButton()" id="variant" name="variant">
            {{ range $variant :=.Params.variants }}
                <option data-payment-url="{{ $variant.stripe_payment_link }}" data-price="{{ $variant.price }}">
                    {{ $variant.name }}
                </option>
            {{ end }}
        </select>
        <a href="{{/*  Dynamically filled by Javascript  */}}" class="pay btn">Buy now</a>
    {{ else }}
        <a href="{{ (index .Params.variants 0).stripe_payment_link }}" class="pay btn">Buy now</a>
    {{ end }}
</section>
````
