---
title: Tienda online de Hugo portada desde Jekyll
translationKey: hugo-webshop-ported-from-jekyll
date: "2022-10-12"
---

Llevaba tiempo queriendo portar la tienda online de https://jekyllcodex.org a este sitio web, pero no encontraba el momento. Por suerte, mi amigo español Fenix quiso echarme una mano. Portó la tienda online de Jekyll a Hugo. Puedes ver una [demo](/es/donar/) haciendo clic en 'Donar' en la cabecera.

Fenix sustituyó los layouts por shortcodes, lo que mejoró la usabilidad. También reemplazó todo el código Liquid por el lenguaje de plantillas de Go. La tienda usa Mollie, que va genial para los pagos europeos. Si quieres vender en EE. UU. puedes sustituir el enlace de pago dinámico de Mollie por un enlace dinámico de Paypal.

Ten en cuenta que una tienda online totalmente del lado del cliente siempre tiene algunos inconvenientes. Sin embargo, un poquito de PHP en la gestión de pedidos puede ayudar mucho (algo que este ejemplo NO usa). Creemos que hemos creado una pequeña tienda online perfecta para sitios web con un volumen de ventas bajo.

Fenix y yo seguimos trabajando en el manual de esta tienda online, pero los aficionados a Hugo deberían poder leer el código y entenderlo sin necesidad de ese texto.
