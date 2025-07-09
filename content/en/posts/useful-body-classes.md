---
title: Useful body classes
date: 2025-07-09
---

Styling becomes much easier when the body of your HTML document has the right classes. These classes are very useful:

```
<body class="{{ if .IsHome}}home{{ end }}">
```

The above code will add the class 'home' to your body for the homepage.

```
<body class="{{ if eq .Kind `page` }}{{ .Section | singularize }}{{ else }}{{ .Section }}{{ end }}">
```

The above code will add the section name (like 'products') to the class of the body for the list page. For the single page it will add 'product'.

```
<body class="{{ if eq .Type `page` }}page{{ end }}">
```

The above code will add a 'page' class to the body if the content is not part of a section (typically these are markdown files in the root, including the homepage).