---
title: Tienda online
---

### Introducción

Esta es una sencilla tienda online con diferentes formas de pago que no requiere una cuota mensual. Muy convenviente para un simple comercio electrónico. La tienda online no
permite por ahora el calculo de impuestos variables. Tampoco proporciona una dirección de envío alternativa, si bien esta puede añadirse fácilmente. Un  parser de email podría
analizar y automatizar el proceso de compra más aún.

### Funcionamiento

...

### Instalación


Antes de poder añadir la tienda online a tu sitio web es necesario [crear una cuenta en Mollie](https://www.mollie.com). Mollie te preguntará si quieres registrar tu sitio
web. Verificarán que dispones de una política de devolución adecuada, unos datos empresariarales y unos claros 'términos y condiciones generales de compra'. Una vez el sitio web
haya sido aprobado por Mollie podrás agregar formas de pago.  Ve a registrarte a [https://useplink.com](https://useplink.com). Una vez en tu panel de control puedes hacer click en
tu perfil y seleccionar 'Payment links' para ir a tu cuenta Plink. Crea un enlace reutilizable con una cantidad variable y descripción. Una vez hecho esto, está todo listo para
agregar tu tienda online al sitio web.

#### Paso 2. Añade los <scripts> necesarios al <footer>

Descarga los ficheros y añadelos a tus carpetas. Asegurate de que el final de tu fichero de plantilla ('layout') comprende código fuente que se muestra más abajo. El 'paymentlink'
debería ser el enlace personal y reutilizable que acabas de crear.

```
<link rel="stylesheet" href="/css/webshop.css">
<script type="text/javascript" src="/js/webshop.js"></script>
<script type="text/javascript">
 updateCartCount();
</script>
```

#### Step 2. Añade el carrito de la compra, y los 'shortcodes' Hugo para el 'checkout' y el 'paylink'

...



#### Step 3. Crea algunos productos

Crea algunos productos. Deberían ser parte de la sección 'productos' y cada fichero 'producto.md' debería verse así :

```
---
title: Buy me a beer
image: "/uploads/beer/5.jpg"
images:
- image: "/uploads/beer/2.jpg"
- image: "/uploads/beer/3.jpg"
- image: "/uploads/beer/4.jpg"
- image: "/uploads/beer/1.jpg"
variant_type: size
variants:
- name: half-a-pint
  price: 2.75
  sku: beerhalfapint
- name: pint
  price: 4.25
  sku: beerpint
order_number: 2
---
```

Nos encanta la cerveza! IPA, Guinness, Stout, cervezas artesanas... y nos encanta probar nuevos sabores. Regálanos un quinto para probar o una jarra para darnos un buen trago!


