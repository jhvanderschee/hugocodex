---
title: 5. Añade otro fichero de contenido
---

Nuestro sitio web va tomando forma ;-). Si bine... ¿no echamos de menos una linda página de contacto?. Para crearla, deberíamos crear el fichero '/content/contact.md'. Este fichero debería verse tal que así:

```
---
title: Página de Contacto
---
Enviar correo-e a donhugo@librebits.info
```

We already had a layout file (index.html), but that file was only valid for the homepage. Therefore we now need another file. This file can be an exact copy of the 'index.html' file and you should name it 'single.html'. You must store this file in the '/layouts/_default/' directory.

Your project should now looks like this:

```
/content/_index.md
/content/contact.md
/layouts/index.html
/layouts/_default/single.html
/layouts/partials/header.html
/layouts/partials/footer.html
/config.yaml`
```

I noticed that I had to restart Hugo for these changes. You can do this by pressing Ctrl-C and re-enter the 'hugo server' command on the command line.
