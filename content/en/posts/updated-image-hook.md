---
title: Updated image render hook
date: 2024-09-23
---

I have updated the image render hook from my article [Resize all images](/blog/resize-all-images/). It now checks for SVG images and handles them correctly. Additionally, I use with to check for the existence of the image resource. 


```
{{ with (resources.GetMatch .Destination) }}
    {{ if ne .MediaType.SubType "svg" }}
        <img src="{{ (.Resize `900x jpg Smart q50`).RelPermalink | safeURL }}" alt="{{ $.Text }}" />
    {{ else }}
        <img src="{{ .RelPermalink | safeURL }}" alt="{{ $.Text }}" />
    {{ end }}
{{ end }}
```