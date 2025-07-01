---
title: Search with Lunr.js
---

### Introduction

Modern websites have a search bar, searching within the site for specific content. These search boxes often search the database in real-time. That is not possible within a static website. Therefore another solution must be found. An [demo](/search) can be found on the search page.

### How it works

This search relies on a local index. It uses the Lunr.js script to search. This script does not require jQuery. First a local index is build, using the documents variable. Then the Lunr.js code is called. Finally a custom-made function (called 'lunr_search') puts the results in a Google-like style on the screen.

### Installation

Step 1. Download the file [lunr.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_partials/lunr.html)
<br />Step 2. Save the file in the '_includes' directory of your project
<br />Step 3. Download the file [lunr.js](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/_partials/lunr.html)
<br />Step 4. Save the file in the 'js' (root) directory of your project
<br />Step 5. Add the following statement to your layout where you want the search box to appear:

```
{% raw %}{% include search-lunr.html %}{% endraw %}
```