---
title: Breadcrumbs
---
### Introduction

Breadcrumb paths are a single line of links (often placed above the title) that show a page's location in the site hierarchy. Every website should have breadcrumbs, as it benefits SEO as well as the users understanding of the sites structure.

### How it works

This code looks at the Ancestors variable to create the breadcrumb path. This approach has a small footprint. Additionally, this code does not require the breadcrumbs to be explicitly defined in the front matter / YAML.

[expand]

```
<ul id="breadcrumbs">
    {{- range .Ancestors.Reverse }}
        <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
    {{- end }}
    <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
</ul>
```

Note that I have added an example on how to manually replace/change certain titles (here: posts > blog).

[/expand]

### Installation

Step 1. Download the file [breadcrumbs.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/partials/breadcrumbs.html)
<br />Step 2. Save the file in the ‘layouts/partials’ directory of your project
<br />Step 3. Add the following line to your layout on the place where you want the breadcrumbs to appear:

```
{{ partial "breadcrumbs.html" . }}
```
