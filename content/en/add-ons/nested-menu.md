---
title: Auto-collapsing menu
---

### Introduction

A lot of websites use auto-collapsing menu's with nested pages. They are a great way to show a lot of content in a structured way, but it requires a hierarchical view of all your pages. This is a nested menu that can be added through a simple include. If you want to see this in action, you can [view a demo](/branches).

### How it works

This script reads the folders in your section and automatically creates an auto-collapsing nested menu. Note that you are NOT allowed to use an 'index.md' file in your folders. You DO, however, need an _index.md in your folder. Please look at the [directory structure](https://github.com/jhvanderschee/hugocodex/tree/main/content/branches) of the demo for a clarification. If you want to know how the script works, please read about [creating a menu with nested pages](/blog/creating-a-menu-with-nested-pages/).

### Installation

Step 1. Download the file [nested-menu.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/partials/nested-menu.html) and the file  [nested-menu-partial.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/partials/nested-menu-partial.html)
<br />Step 2. Save the files in the ‘layouts/partials’ directory of your project
<br />Step 3. Add the following line to your layout on the place where you want the nested menu to appear:

```
{{ partial "nested-menu.html" . }}
```