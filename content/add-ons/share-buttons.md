---
title: Share buttons

---
### Introduction

It can be very useful to allow people to easily share the content they have just read. Share buttons are often found on the footer of a blog post. This script automatically adds them to the content you want.

### How it works

The script reads the `.Permalink` and creates a share link. If the page has a `.Params.image` an additional Pinterest button wil be shown.

### Installation

Step 1. Download the file [share-buttons.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/master/layouts/partials/share-buttons.html)
<br />Step 2. Save the file in the 'layouts/partials' directory of your project
<br />Step 3. Add the following line to your layout on the place where you want the share buttons to appear:

```
{{ partial "share-buttons.html" . }}
```