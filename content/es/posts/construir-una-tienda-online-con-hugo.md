---
title: Construir una tienda online con Hugo
translationKey: building-a-webshop-with-hugo
date: 2022-09-30
draft: true
---
Esto llevaba mucho tiempo en nuestra lista de deseos: construir una tienda online sencilla en Jekyll sin pagar una cuota mensual a un tercero. ¡Y por fin lo he conseguido! Para ver cómo funciona, visita mi [página de donaciones](/es/donar). La tienda online solo necesita dos ajustes: la dirección de correo para la confirmación y tu enlace de pago de Plink. La configuración se hace en minutos y solo requiere una cuenta de Mollie. No hay limitaciones en el diseño de las páginas de producto. Usa HTML API, un principio sobre el que Lea Verou, del MIT, ha investigado bastante y que ha demostrado ser fácil de implementar. En la página de donaciones hemos mostrado cómo puede funcionar esto con variantes de producto.

La tienda online acepta todos los métodos de pago de Mollie:

- Mastercard
- Visa
- American Express
- PayPal
- Transferencia bancaria SEPA
- Domiciliación SEPA
- Bitcoin
- SOFORT Banking
- iDEAL
- Bancontact
- Botón de pago KBC/CBC
- Botón de pago Belfius
- paysafecard
- CartaSi
- Cartes Bancaires
- Tarjetas regalo

Esta tienda online está lejos de ser perfecta. No lleva control de stock, no calcula el IVA y no genera facturas automáticas. Sin embargo, esta tienda sí te permite vender productos en casi cualquier país por una comisión muy pequeña. Todos los campos del formulario de checkout se añaden automágicamente a tu correo de confirmación y, cuando añades botones de opción con un precio y una descripción, esos valores se añaden al pedido (por ejemplo, envoltorio de regalo o método de envío).

¡Veamos cómo podemos añadir una tienda online sencilla a nuestro sitio web basado en Hugo!


### Introducción

Esta es una tienda online sencilla con varios métodos de pago que no requiere una cuota mensual. Ideal para un comercio electrónico simple. Actualmente la tienda no permite cálculos de impuestos variables. Tampoco ofrece una dirección de envío alternativa, aunque eso se puede añadir fácilmente. Un parser de correo te permitiría automatizar aún más el proceso de compra.

### Cómo funciona
Básicamente la tienda funciona así: creas un enlace con una clase 'addtocart' static/js/webshop.js^@57 que enlaza al carrito. El [layout
dado](layouts/products/single.html 18 se beneficiará de ello mediante el formulario:

```
	    <form action="/donate/cart" onsubmit="return addToCart(this)">
```

Este enlace buscará los atributos 'image', 'price' y 'description' y añadirá el producto a la cookie del carrito. Cuando haces clic en 'checkout' en el carrito vas a un formulario de compra. Cuando haces clic en el siguiente paso del proceso de pago, vas a un enlace de pago de Plink (Mollie). Antes de enviar al usuario al enlace de pago, la información del carrito se envía por correo. Al mismo tiempo se genera un número de pedido usando una marca de tiempo en milisegundos. Ese número de pedido se añade al correo y al pago. Tras un pago correcto, el usuario es redirigido a tu sitio web (por Plink).


[expand]

Cuando no quieras usar el carrito, simplemente usa un enlace con una clase 'buy' y enlaza directamente a la página de checkout. Así te aseguras de que solo hay un artículo en el carrito.

```
{% raw %}<a href="/checkout" class="buy" image="/path/to/productimage.jpg" price="1.00" description="test">Buy</a>{% endraw %}
```

Una vez que tengas la tienda funcionando, puedes afinarlo todo editando el código Liquid/HTML. ¿No consigues averiguar cómo crear páginas de producto bonitas con variantes? Mira el código fuente de este sitio web en Github. ¿Sigues necesitando ayuda? Haz una pregunta en Stack Overflow, o págame para que te ayude.

[/expand]


.
.
.
.
.
. H
.  u 
.   g
.    o
.     n
.      i
.       z
.        i
.         n
.          g
.           \
.            .


### Instalación

Antes de poder añadir la tienda online necesitas [crear una cuenta de Mollie](https://www.mollie.com){: .gray}. Mollie te pedirá que registres tu sitio web. Comprobarán si tienes una política de devoluciones adecuada, los datos de la empresa claramente indicados y unas condiciones generales claras. Una vez que Mollie apruebe tu web podrás añadir métodos de pago. Ve a [https://useplink.com](https://useplink.com){: .gray} y regístrate. Dentro de tu panel de Mollie puedes hacer clic en tu perfil y seleccionar 'Payment links' para ir a tu cuenta de Plink. Crea un enlace reutilizable con importe y descripción variables. Una vez hecho eso, ya estás listo para añadir la tienda online a tu sitio web.

#### Paso 1. Añade los archivos del pie con el enlace de pago

Descarga los archivos y añádelos a tus carpetas. Asegúrate de que la parte inferior de tu documento de plantilla se vea como el código de abajo. El paymentlink debe ser el enlace reutilizable personal que acabas de crear.

```
{% raw %}...

<!-- webshop -->
<script type="text/javascript" src="/js/webshop.js"></script>
<link rel="stylesheet" href="/css/webshop.css">
<script type="text/javascript">
    updateCartCount();
    {% if page.layout == 'cart' %}populateCart();{% endif %}
    {% if page.layout == 'checkout' %}initCheckoutForm(document.querySelector('#checkout form'));{% endif %}
    {% if page.layout == 'paylink' %}redirectToPayment('https://useplink.com/payment/ssMgtkddEzgC4rKKJJ9T');{% endif %}
</script>

</body>
</html>{% endraw %}
```

#### Paso 2. Añade los archivos de carrito, checkout y paylink

Tienes que descargar los archivos 'cart.html', 'checkout.html' y 'paylink.html' junto con sus equivalentes '.md' y poner los archivos html en el directorio de layouts y los archivos md en el directorio 'donate'. Siéntete libre de cambiarlo a 'webshop' o a lo que quieras.

#### Paso 3. Crea algunos productos

Crea algunos productos. Deben formar parte de la colección 'products' y cada archivo 'product.md' debería verse así:

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

I like beer a lot! IPA, Guinness, Stout, craft beers... and I love to try new ones. Buy me half-a-pint to get going or a pint to get a good buzz.
```
