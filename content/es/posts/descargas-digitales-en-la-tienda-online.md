---
title: Descargas digitales en la tienda online
translationKey: digital-downloads-in-the-webshop
date: 2022-12-12
---

De vez en cuando recibimos mensajes a través del botón de chat que hay al final de este sitio web. Algunas personas hacen preguntas, otras quieren dar las gracias y otras aportan grandes ideas. Esto último fue lo que pasó ayer. Andrei (omito su apellido por motivos de privacidad) se presentó y me preguntó si sería posible usar la tienda online de Jekyll Codex para crear descargas digitales.

Al principio pensé que su petición requeriría muchos cambios y me mostré algo reticente. Pero cuanto más hablábamos, más claro quedaba que esos cambios eran en realidad bastante sutiles. Ambos estuvimos de acuerdo en que si queríamos usar el servicio Plink de Mollie teníamos que deshacernos del carrito, ya que varias descargas complicarían las cosas innecesariamente. Acabamos con una variable extra en los productos, llamada 'payment_link'. Dejarla vacía hace que la tienda se comporte con normalidad. Introducir un enlace de pago específico del producto envía al comprador directamente al checkout, saltándose el carrito, añadiendo las variables a la URL en lugar de a la cookie del carrito. La gente seguiría pudiendo usar el carrito, solo que no para los productos con un enlace de pago específico. Se podría argumentar que esto quizá resulte algo confuso (usar el carrito solo para algunos productos). Sin embargo, en un escenario real es más probable tener una tienda online solo con descargas digitales o sin ninguna descarga digital.

Estoy muy contento con el resultado final. Siéntete libre de [echarle un vistazo](/donate/digitaldownload/). También me gusta que la gente se sienta libre de pedir y debatir funcionalidades en este sitio web. Para eso está esta web. ¡Gracias por tus aportaciones y tu inspiración! ¡Que no paren!
