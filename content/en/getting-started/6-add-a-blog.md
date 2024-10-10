---
title: 6. Add a blog
---

Every website has a news section or a blog. That is why are going to add a 'posts' directory to our content folder. In this new directory we create a markdown file named 'hello-world.md', which is our first post. This file should look like this:

```
---
title: Hello world
date: 2016-02-01 10:00:00
---
This is my first blog post
```

The date should be the current date. The time is optional. Additionally we are going to add a (new) layout file for our blog overview (a list view of our posts). Hugo requires you to name this file 'list.html' and store it in the '_default' directory. This file looks like this:

```
{{ partial "header.html" . }}
    <h1>Posts</h1>
    <ul>
    {{ range .RegularPages }}
        <li>
            {{ if .Date }}{{ .Date | time.Format ":date_long" }}{{ end }}
            <h2>{{ .Title }}</h2>
            <p>{{ .Summary | plainify }}... <a href="{{ .RelPermalink }}">Read more</a></p>
        </li>
    {{ end }}
    </ul>
{{ partial "footer.html" . }}
```

You can additionally update your 'single.html' in the '_defaults' directory and add the '.Date' parameter. It should then look something like this:

```
{{ partial "header.html" . }}
    {{ if .Date }}{{ .Date | time.Format ":date_long" }}{{ end }}
    <h1>{{ .Title }}</h1>
    {{ .Content }}
{{ partial "footer.html" . }}
```

This will make sure your posts (single pages) also show the date of the post. Your project should now looks like this:

```
/content/_index.md
/content/contact.md
/content/posts/hello-world.md
/layouts/index.html
/layouts/_default/single.html
/layouts/_default/list.html
/layouts/partials/header.html
/layouts/partials/footer.html
/config.yaml
```