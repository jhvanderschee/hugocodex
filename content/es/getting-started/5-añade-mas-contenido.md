---
translationKey: add-other-content
title: 5. Añade otro fichero de contenido
---

Nuestro sitio web va tomando forma ;-). Pero... ¿no echamos de menos una bonita página de contacto? Para crearla, debemos crear el fichero '/content/contact.md'. Este fichero debería verse tal que así:

```
---
title: Página de contacto
---
Envíame un correo a hola@mundo.net
```

Ya teníamos un fichero de diseño ('home.html'), pero ese fichero solo era válido para la página de inicio. Por eso ahora necesitamos otro fichero. Este puede ser una copia exacta del fichero 'home.html' y deberías llamarlo 'page.html'. Lo guardarás en el directorio '/layouts/'.

Tu proyecto debería verse ahora así:

```
/content/_index.md
/content/contact.md
/layouts/home.html
/layouts/page.html
/layouts/_partials/header.html
/layouts/_partials/footer.html
/hugo.yaml
```

Me he dado cuenta de que tuve que reiniciar Hugo para que se aplicaran estos cambios. Puedes hacerlo pulsando Ctrl-C y volviendo a escribir el comando 'hugo server' en la línea de comandos.
