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
            <li><a href="{{ .RelPermalink }}">{{ .Title }}</a>
                <ul>
                    {{ range where $regularpages "Params.parent_branch" .File.BaseFileName }}
                        <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
                    {{ end }}
                </ul>
            </li>
        {{ end }}
        </ul>
    </li>
{{ end }}
```

What we are missing are the active classes (what is the current path you are on). This can be retreived using:

```
{{ $.Scratch.Set "activeitems" .File.BaseFileName }}
{{ if .Params.parent_branch }}
    {{ $.Scratch.Add "activeitems" (print " " .Params.parent_branch) }}
    {{ with .Site.GetPage (print "/branches/" .Params.parent_branch) }}
        {{ if .Params.parent_branch }}
            {{ $.Scratch.Add "activeitems" (print " " .Params.parent_branch) }}
        {{ end }}
    {{ end }}
{{ end }}
{{ $activeitems := split ($.Scratch.Get "activeitems") " " }}
```

Now we can check each `li` with:

    {{ if in $activeitems .File.BaseFileName }}class="active"{{ end }}

I hope this helps you. If you have any questions, just contact me.
