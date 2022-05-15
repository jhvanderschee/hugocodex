---
title: 4. Include your first partials
---

A website typically consists of a few elements that get repeated on every page, like a header with a menu and a footer. Instead of adding them to every page, you can use a 'partial'. Partials need to be saved in the '/layouts/partials' directory. 

Create a 'header.html' file that looks like this:

```
<html>
<head></head>
<body>
```

Create a 'footer.html' file that looks like this:

```
</body>
</html>
```

Store both files in the '/layouts/partials' directory. Now update your '/layouts/index.html' file and make sure it looks like this (replacing the code with links to the partials):

```
{{ partial "header.html" . }}
    <h1>{{ .Title }}</h1>
    {{ .Content }}
{{ partial "footer.html" . }}
```

Your project should now looks like this:

```
/content/_index.md
/layouts/index.html
/layouts/partials/header.html
/layouts/partials/footer.html
/config.yaml
```