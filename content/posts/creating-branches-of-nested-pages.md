---
title: Creating branches of nested pages
date: 2021-12-23
---

What if you want to create an auto-collapsing nested menu? That is a great way to show a lot of content in a structured way, but it requires you to display a hierarchical view of all your pages. This post explains how to do that.

I am pretty specific in my approach to Hugo, so I like to see Sections as database tables. I do not use (or like) the concept of nested Sections (neither does Forestry.io). Therefore I always use a parent key in my Frontmatter. This looks like `parent_branch` in this case. The full front matter looks like this:

```
---
title: Branch
parent_branch: branche1
---
```

Note that we are using the 'slug' for the reference to the item in the section. A slug is not a thing in Hugo, so we have to use `.File.BaseFileName`. When we walk over all items on our main level it looks like this:

```
{{ $regularpages := .RegularPages.ByTitle }}
{{ range where $regularpages "Params.parent_branch" nil }}
    <li><a href="{{ .RelPermalink }}">{{ .Title }}</a>
        <ul>
        {{ range where $regularpages "Params.parent_branch" .File.BaseFileName }}
            ...
        {{ end }}
        </ul>
    </li>
{{ end }}
```

What we are missing are the active classes (what is the current path you are on). We are going to collect them up front and put them in an array, so we can check if the page is an 'active' page or not.

The slug of the current page can be retreived using:

    {{ $.Scratch.Set "activeitems" .File.BaseFileName }}

The slug of the parent can be retreived using:

```
{{ if .Params.parent_branch }}
    {{ $.Scratch.Add "activeitems" (print " " .Params.parent_branch) }}
{{ end }}
```

Note that we seperate the slugs with a space (using the 'print' command). The page of the parent of the parent can be retreived using:

```
{{ with .Site.GetPage (print "/branches/" .Params.parent_branch) }}
    {{ if .Params.parent_branch }}
        {{ $.Scratch.Add "activeitems" (print " " .Params.parent_branch) }}
    {{ end }}
{{ end }}
```
Again, notice the print and the space. Finally we can put this in an array (variable), like this:

    {{ $activeitems := split ($.Scratch.Get "activeitems") " " }}

This allows us to check each list item with:

    {{ if in $activeitems .File.BaseFileName }}class="active"{{ end }}

I hope this helps you. If you have any questions, feel free to contact me.