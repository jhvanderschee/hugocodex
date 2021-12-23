---
title: Nested menu
---

### Introduction

A lot of websites use auto-collapsing nested menu's. They are a great way to show a lot of content in a structured way, but it requires a hierarchical view of all your pages. This is a simple three level nested menu that can be added through a simple include. If you want to see this in action, you can [view a demo](/branches).

### How it works

I am pretty specific in my approach to Hugo, so I like to see Sections as database tables. I do not use (or like) the concept of nested sections (neither does Forestry.io). Therefore I always use a parent key in my Frontmatter. To learn more about how this works, [read the blog post](/blog/creating-a-menu-with-nested-pages/).

### Installation

Step 1. Download the file [nested-menu.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/partials/nested-menu.html)
<br />Step 2. Save the file in the ‘layouts/partials’ directory of your project
<br />Step 3. Change the word 'branch' to the name of your section through search and replace (do not forget to check the plural).
<br />Step 4. Add the following line to your layout on the place where you want the nested menu to appear:

```
{{ partial "nested-menu.html" . }}
```