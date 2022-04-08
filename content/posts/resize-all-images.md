---
title: 'Resize all images'
date: '2022-04-08'
---

Before 2015 I was building WordPress websites. Some things in WordPress I really liked. One of them was the image resizing. When I switched to Jekyll in 2015 I could no longer resize images. Fortunately I found images.weserv.nl, a Dutch image resizing service. This service was smarter than WordPress. It resized your images on the fly and kept it in their cache for 30 days. An excellent strategy. However, images in my markdown were still no resized and often too large. 

When I switched to Hugo in June 2021 I was happy to find that Hugo could resize images 'on build time'. The command to do so had to be written in a shortcode or a layout. Although shortcodes were a step in the right direction, 'regular' markdown editors (like cms.usecue.com is using) still created unresized images.

But... when BEP gave [this answer](https://discourse.gohugo.io/t/is-this-possible-with-hugo/38089/6?u=jhvanderschee) to a relatively unrelated question, I realized Hugo can resize standard markdown images through render hooks! I immediately created a hook an added it to my most recent project... and it worked! 

The file is called '/layouts/_default/_markup/render-image.html' and contains the following code:

```
{{ if (resources.GetMatch .Destination) }}
  <img src="{{ ((resources.GetMatch .Destination).Resize `1400x jpg q50`).RelPermalink | safeURL }}" alt="{{ .Text }}" />
{{ end }}
```

This processes all images and makes JPG files with 50% compression and a width of maximum 1400 pixels, typically resulting in <100kb images. 

Thank you Bjørn!