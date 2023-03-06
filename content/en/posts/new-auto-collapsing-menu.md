---
title: New auto-collapsing menu
date: 2023-03-06
---

In my [previous version](/blog/creating-a-menu-with-nested-pages/) of the auto-collapsing (nested) menu I chose to avoid Hugo's subsections. However, due to an update of the breadcrumbs, I was motived to test the possibility to create a nested menu based on sections and subsections. 

The code became much cleaner/shorter and simpler, especially due to the '.Ancestors' variable. The way to determine if a page is 'active' is done through the following code:

```
{{ if or (in $.ancestors .) (eq $.curRelPermalink .RelPermalink) }}active{{ end }}
```

To check if it has children we simply check the length of the .Pages variable:

```
{{ if len .Pages }}haschildren{{ end }}
```

Hopefully you like this [new approach](/add-ons/nested-menu/)!