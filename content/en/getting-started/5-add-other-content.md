---
title: 5. Add another content file
---

Our website is taking shape ;-). But we are missing a nice contact page. To create it, we should create a file '/content/contact.md'. This file should look like this:

```
---
title: Contact page
---
Send me an email at joost@vdschee.nl
```

We already had a layout file (home.html), but that file was only valid for the homepage. Therefore we now need another file. This file can be an exact copy of the 'home.html' file and you should name it 'page.html'. You must store this file in the '/layouts/' directory.

Your project should now looks like this:

```
/content/_index.md
/content/contact.md
/layouts/home.html
/layouts/page.html
/layouts/_partials/header.html
/layouts/_partials/footer.html
/hugo.yaml
```

I noticed that I had to restart Hugo for these changes. You can do this by pressing Ctrl-C and re-enter the 'hugo server' command on the command line.