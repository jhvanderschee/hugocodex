---
title: Compress all images
date: 2022-06-19
draft: true
---

- choose your method

we go for lazy

- set the assetdir

add ‘assetDir: static’ to your config file

- create the rule

((resources.GetMatch .Params.image).Fit "600x600 jpg Center q50").RelPermalink

- create a render hook

/layouts/_default/_markup/render-image.html

{{ if (resources.GetMatch .Destination) }}
  <img src="{{ ((resources.GetMatch .Destination).Resize `1400x jpg q50`).RelPermalink | safeURL }}" alt="{{ .Text }}" />
{{ end }}