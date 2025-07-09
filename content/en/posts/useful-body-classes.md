---
title: Useful body classes
date: 2025-06-09
---

Styling becomes much easier when the body of your HTML document has the right classes. These classes are very useful:

```
{{ if .IsHome}}home{{ ebd }}
```

The above code will add the class 'home' to your body for the homepage.

```
{{ if eq .Kind `page` }}{{ .Section | singularize }}{{ else }}{{ .Section }}{{ end }}
```

The above code will add the section name (like 'products') to the class of the body for the list page. For the single page it will add 'product'.