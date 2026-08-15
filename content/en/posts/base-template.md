---
title: A more elaborate templating/layouts strategy
date: 2024-02-26
---

## Context: the templating/layouts approach

We are (always) improving the process and the workflow. Now that we have learned the basics: is it time for a more elaborate templating/layouts strategy?

## A first templating approach

When speaking about Hugo layouts, you typically define just this:

```
my-hugo-project
|._ layouts/ Home (or index) html template
           |._ page.html
           |. _/default/list.html
```

We already talked about [how to get started](/getting-started/) and about using partials for (for example) the header and the footer.

Fine, as a start... The point is that you typically end up reusing code from those, copying snippets between these three 'starter' layouts for a basic website.
But wait... what if the website requires more templating flexibility? Or what if the overall design (user interface / CSS styling) requires more complexity?

## We can do better: the baseof.html layout and 'blocks' to the rescue

### Defining a block

Let's create a content block:

```
{{ block "content" . }}

{{ end }}
```

> NOTE: the context, also known as 'the dot' ('.'), is required

### Using a block

Aha. Now feel free to reuse it wherever you want in other templates (for example in 'page.html' or 'section.html'), by defining them with this syntax inside other layouts:

```
{{ define "content" }}

  {{ .Content }}

{{ end }}
```

Last but not least: did you know that you can override a given block in a specific template?

[Mike's video tutorial](https://gohugo.io/templates/base/) in the official Hugo docs shows how, in a more detailed and visual way.

Have fun with Hugo!
