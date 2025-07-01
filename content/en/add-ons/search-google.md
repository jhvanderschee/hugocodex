---
title: Search with Google
---

### Introduction

Modern websites have a search bar, searching within the site for specific content. These search boxes often search the database in real-time. That is not possible within a static website. Therefore another solution must be found.

### How it works

This search relies on the index from Google. It queries the Google Search engine directly. Results will be shown within the Google interface (on a new page), but will be limited to the site you specified.

[expand]

```
<form method="get" action="http://www.google.com/search" target="_blank"><input type="hidden" name="sitesearch" value="yourdomain.com" /><input type="text" name="q" maxlength="255" value="" placeholder="Search via Google" /></form>
```

[/expand]

### Installation

Step 1. Download the file [search-google.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/partials/search-google.html) and change the domain name
<br />Step 2. Save the file in the '/layouts/partials/' directory of your project
<br />Step 3. Add the following statement to your layout where you want the search box to appear:

```
{{ partial "search-google.html" . }}
```