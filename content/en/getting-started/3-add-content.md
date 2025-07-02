---
title: 3. Add your first content
---

Now we have an 'index.html' file, we are going to separate the code from the content. Hugo uses [Markdown](https://www.markdownguide.org/cheat-sheet/) for this. All content is saved in '.md' (Markdown) files in a 'content' directory in the root of your project. Create a Markdown file, called '_index.md', that looks like this:

```
---
title: My first content file
---
My first paragraph in Markdown
```

Save the file in the 'content' directory. Now change your '/layouts/home.html' file, so it look like this:

```
<html>
<head></head>
<body>
    <h1>{{ .Title }}</h1>
    {{ .Content }}
</body>
</html>
```

This effectively separates the code from the content. Content now lives in the '/content/_index.md' file and the HTML/code lives in the '/layouts/home.html' file. Your project should now looks like this:

```
/content/_index.md
/layouts/home.html
/hugo.yaml
```