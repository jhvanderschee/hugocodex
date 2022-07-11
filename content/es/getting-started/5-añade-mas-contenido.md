---
title: 5. Añade otro fichero de contenido
---

Nuestro sitio web va tomando forma ;-). Si bine... ¿no echamos de menos una linda página de contacto?. Para crearla, deberíamos crear el fichero '/content/contact.md'. Este fichero debería verse tal que así:

```
---
title: Página de Contacto
---
Enviar correo-e a hola@mundo.net
```

Ya teníamos un fichero de diseño (index.html), pero dicho fichero era únicamente válido para la pagina de inicio. Dicho fichero puede ser una copia exacta del fichero 'index.html' y deberías renombrarlo a 'single.html'. Lo guardarás en el directorio'/layouts/_default/' .

Tu proyecto debería ahora verse así:

```
/content/_index.md
/content/contact.md
/layouts/index.html
/layouts/_default/single.html
/layouts/partials/header.html
/layouts/partials/footer.html
/config.yaml`
```

Me he dado cuenta de que tuve que reiniciar Hugo para dichos cambios.
Puedes hacerlo tecleando Ctrl-C y volviendo a escribir el comando 'hugo server' en la línea de comandos.
