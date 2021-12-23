---
title: Creating a menu with nested pages
date: 2021-12-23
---

What if you want to create an auto-collapsing nested menu? That is a great way to show a lot of content in a structured way, but it requires you to display a hierarchical view of all your pages. This post explains how to do that.

## The parent reference

I am pretty specific in my approach to Hugo, so I like to see Sections as database tables. I do not use (or like) the concept of nested sections (neither does Forestry.io). Therefore I always use a parent key in my Frontmatter. This looks like `parent_branch` in this case. The full front matter looks like this:

```
---
title: Branch
parent_branch: branche1
---
```

Note that we are using the 'slug' for the reference to the item in the section. A slug is not a thing in Hugo, so we have to use `.File.BaseFileName`. 

## List all pages

When we walk over all items on our main level it looks like this:

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

Note that we can (and will) iterate over '$regularpages' multiple times.

## Highlighting active pages

What we are missing are the active classes (what is the current path you are on). These classes can provide the auto-collapsing behaviour. We are going to collect them up front and put them in an array, so we can check if the page is an 'active' page or not.

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

## Has children or not

We also want to know if a certain page has children or not. We can do this in the same way. First we create a scratch variable and then we loop over all pages. Whenever a parent page is referenced that is not yet in our haschildren array, we add it. That looks like this:

```
{{ $.Scratch.Set "haschildren" "" }}
{{ range where $regularpages "Params.parent_branch" "!=" nil }}
    {{ if in ($.Scratch.Get "haschildren") .Params.parent_branch }}{{ else }}
        {{ $.Scratch.Add "haschildren" (print " " .Params.parent_branch) }}
    {{ end }}
{{ end }}
{{ $haschildren := split ($.Scratch.Get "haschildren") " " }}
```

Finally we can check for 'haschildren' in a similar way:

    {{ if in $haschildren .File.BaseFileName }}class="haschildren"{{ end }}

## Putting it together

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

{{ with .Site.GetPage "/branches" }}
    
    {{ $regularpages := .RegularPages.ByTitle }}

    {{ $.Scratch.Set "haschildren" "" }}
    {{ range where $regularpages "Params.parent_branch" "!=" nil }}
        {{ if in ($.Scratch.Get "haschildren") .Params.parent_branch }}{{ else }}
            {{ $.Scratch.Add "haschildren" (print " " .Params.parent_branch) }}
        {{ end }}
    {{ end }}
    {{ $haschildren := split ($.Scratch.Get "haschildren") " " }}

    <ul class="nestedmenu">
    {{ range where $regularpages "Params.parent_branch" nil }}
        <li class="{{ if in $activeitems .File.BaseFileName }}active{{ end }} {{ if in $haschildren .File.BaseFileName }}haschildren{{ end }}"><a href="{{ .RelPermalink }}">{{ .Title }}</a>
            <ul>
            {{ range where $regularpages "Params.parent_branch" .File.BaseFileName }}
                <li class="{{ if in $activeitems .File.BaseFileName }}active{{ end }} {{ if in $haschildren .File.BaseFileName }}haschildren{{ end }}"><a href="{{ .RelPermalink }}">{{ .Title }}</a>
                    <ul>
                        {{ range where $regularpages "Params.parent_branch" .File.BaseFileName }}
                            <li class="{{ if in $activeitems .File.BaseFileName }}active{{ end }} {{ if in $haschildren .File.BaseFileName }}haschildren{{ end }}"><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
                        {{ end }}
                    </ul>
                </li>
            {{ end }}
            </ul>
        </li>
    {{ end }}
    </ul>
    
{{ end }}
```

I have added some CSS to make it look good (and for the auto collapsing to work):

```
ul.nestedmenu {margin-left: 0;}
ul.nestedmenu li {list-style: none;}
ul.nestedmenu li > ul {display: none;}
ul.nestedmenu li > a::before {
    content: "•"; 
    display: inline-block; 
    margin-right: 0.25rem; 
    width: 0.5rem; 
    text-align: center;
}
ul.nestedmenu li.haschildren > a::before {content: "›";}
ul.nestedmenu li.haschildren.active > a::before {transform: rotate(90deg);}
ul.nestedmenu li.active > ul {display: block;}
ul.nestedmenu li > a {color: #444444!important;}
ul.nestedmenu li.active > a {color: rgb(247, 44, 114)!important;}
```

If you want to see this in action, you can [view a demo](/branches). If you want to make it even better you can adjust the breadcrumbs so that they respect the hierarchy. This can be done by iterating over the activeitems. 

I hope this helps you. If you have any questions, feel free to contact me.