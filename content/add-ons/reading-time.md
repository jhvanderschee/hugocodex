---
title: Reading time
---

### Introduction

The reading time indicator is a simple script which helps to create a reading indicator displaying the estimated reading time for the content. The script takses advantage of the reading time page variable, already present in Hugo.

### How it works

To display the reading time of an article, the code below is used.

```
Reading time: {{ .ReadingTime }} minute{{ if (ne .ReadingTime 1) }}s{{ end }}
```

### Installation

Step 1. Download the file [reading-time.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/partials/reading-time.html)
<br />Step 2. Save the file in the 'layouts/partials' directory of your project
<br />Step 3. Add the following line to your layout on the place where you want the reading time indicator to appear:

```
{{ partial "reading-time.html" . }}
```
