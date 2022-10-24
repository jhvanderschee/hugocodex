---
title: Tienda online
---

### Introducción

Esta es una sencilla tienda online con diferentes formas de pago que no requiere una cuota mensual. Muy convenviente para un simple comercio electrónico. La tienda online no
permite por ahora el calculo de impuestos variables. Tampoco proporciona una dirección de envío alternativa, si bien esta puede añadirse fácilmente. Un  parser de email podría
analizar y automatizar el proceso de compra más aún.

### Funcionamiento

No usamos una base de datos, por lo que crearemos nuestro carrito de la compra en localStorage. En este carrito guardaremos todo: toda la información del producto, las preferencias de usuario, como la cantidad y la variante del producto. En las páginas de producto los productos son añadidos al  array que compone localStorage. Una vez obtenemos la página de nuestro carrito de la compra podemos simplemente leer dicho array y mostrarlo en nuestra pantalla (usando javascript). A continuación, seremos redirigidos al checkout (mediante el botón 'Proceder al checkout'). En esta página de checkout se nos requiere el que rellenemos un formulario con nuestros datos personales. Una vez enviado esto, dicha información se envía al dueño de la tienda via e-mail. Finalmente somos enviados a la página en la que proceder al pago. Para conectar dicho pago al formulario recién enviado se ha generado un número de pedido único durante el proceso de checkout. Dicho número (también almacenado en localStorage) es enviado con el hiperenlace (Mollie) o mediante un botón (Paypal).

Veamos como podemos alcanzar esto.

### Instalación


Antes de poder añadir la tienda online a tu sitio web es necesario [crear una cuenta en Mollie](https://www.mollie.com) o [en Paypal](https://paypal.com) para gestionar los pagos. Mollie funciona exclusivamente para países de la Unión Europea y Paypal funciona globalmente. Mollie te preguntará si quieres registrar tu sitio
web. Verificarán que dispones de una política de devolución adecuada, unos datos empresariarales y unos claros 'términos y condiciones generales de compra'. Una vez el sitio web
haya sido aprobado por Mollie podrás agregar formas de pago.  Ve a registrarte a [https://useplink.com](https://useplink.com). Una vez en tu panel de control puedes hacer click en
tu perfil y seleccionar 'Payment links' para ir a tu cuenta Plink. Crea un enlace reutilizable (requerido para el 'Paso 3' de este tutorial) con una cantidad variable y descripción.

Si optas por usar [Paypal y los métodos de pago que ofrece, necesitarás configurar tu perfil  Paypal.me](https://paypal.me).  En él encontrarás el apartado 'Mis Apps & Credenciales'. En dicha página haz click en el botón 'Crear App', el cual te asignará un 'client_id'. Dicho 'client_id' será necesario en la parte final del 'Paso 3' de este  manual.

Ya sea 'Mollie' o 'Paypal.me', una vez escogido y configurado uno de los dos servicios de pago online referidos anteriormente , está todo listo para
agregar tu tienda online al sitio web en cuatro sencillos pasos.

#### Paso 1. Añade los 'scripts' necesarios al 'footer'

Descarga los ficheros y añadelos a tus carpetas. Asegurate de que el final de tu fichero de plantilla ('layout') comprende código fuente que se muestra más abajo. El 'paymentlink'
debería ser el enlace personal y reutilizable que acabas de crear.

```
<link rel="stylesheet" href="/css/webshop.css">
<script type="text/javascript" src="/js/webshop.js"></script>
<script type="text/javascript">
 updateCartCount();
</script>
```

#### Paso 2. Crea los 'shortcodes' del carrito de la compra,  'checkout' y 'paylink'

Como es sabido, Hugo permite 'incluir' y [reutilizar retazos de código fuente en los elegantes llamados 'shortcodes'](https://gohugo.io/templates/shortcode-templates/). Usemosles
para embeber nuestro [carrito de la compra](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/cart.html) hecho de una simple pero elegante combinación de tabla + formulario.

Para embeber el formulario de checkout hagamos un ['checkout shortcode'](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/checkout.html).

Para el redirecionamiento del pago [usaremos un poco de JavaScript](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/paypal-buttons.html) :

Descarga los 3 archivos mencionados y [guardalos en el directorio 'layouts/shortcodes'][a checkout shortcode](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/) de tu proyecto.

De este modo puedes invocar a cualquiera de los 3 subprocesos mencionados anteriormente en cualquier lugar de tu proyecto simplemente llamando al 'shortcode' correspondiente, como
veremos en el siguiente paso. 


Señalar que en esta ocasión hemos [reescrito la url](https://gohugo.io/content-management/urls/#set-url-in-front-matter), de tal manera que así podemos disfrutar de una mayor
granularidad en los contenidos.

#### Paso 3. Crea las páginas para el 'carrito de la compra', 'checkout' y 'paylink'

Creemos ahora [las páginas de contenido en formato markdown que incorporarán los 'shortcodes'](https://github.com/jhvanderschee/hugocodex/blob/main/content/es). Esto es 'cart.md',
'checkout.md' y 'paylink.md'. Puedes hacerlo en la raíz del directorio 'content/' y luego reescribir las urls a tu conveniencia.



#### Paso 4. Crea algunos productos

Crea algunos productos. Deberían ser parte de la sección 'productos' y cada fichero 'producto.md' debería verse así :

```
title: Invitame a una cerveza
image: "/uploads/products/beer/5.jpg"
images:
- image: "/uploads/products/beer/2.jpg"
- image: "/uploads/products/beer/3.jpg"
- image: "/uploads/products/beer/4.jpg"
- image: "/uploads/products/beer/1.jpg"
variant_type: size
variants:
- name: media-pinta
  price: 2.75
  sku: beerhalfapint
- name: pinta
  price: 4.25
  sku: beerpint
order_number: 2
```

Nos encanta la cerveza! IPA, Guinness, Stout, cervezas artesanas... y nos encanta probar nuevos sabores. Regálanos un quinto para probar o una jarra para darnos un buen trago!


