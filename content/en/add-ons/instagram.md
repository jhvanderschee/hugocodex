---
title: Instagram
---

### Introduction

You have to register at [PPI Loader](https://profilepageimages.usecue.com) and grant us access to your Instagram account. After you have done this, this script displays your last Instagram profile images:

{{< instagram username="jhvanderschee" >}}

### How it works

For information on how this works, visit [PPI Loader](https://profilepageimages.usecue.com). They offer a safe and simple way to put (the first few) images from your Instagram account on your website. Their focus is on privacy, performance and simplicity. 'PPI Loader' is a GDPR compliant, fast loading solution with low complexity. The solution is suitable for any platform, but works exceptionally well for performance-optimized websites.

### Template installation

Step 1. Download the file [instagram.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/instagram.html)
<br />Step 2. Save the file in the 'layouts/_partials' directory of your project
<br />Step 3. Add the following line to your layout on the place where you want your instagram pictures to appear:

```
{{ partial "instagram.html" (dict "context" . "username" "jhvanderschee") }}
```

### Shortcode installation

Step 1. Download the file [instagram.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_shortcodes/instagram.html)
<br />Step 2. Save the file in the 'layouts/_partials/_shortcodes' directory of your project
<br />Step 3. Add the following line to your content on the place where you want your instagram pictures to appear:

```
{{</* instagram username="jhvanderschee" */>}}
```
