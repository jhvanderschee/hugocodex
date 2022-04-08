---
title: 'Resize all images'
date: '2022-04-08'
---

Before 2015 I was building WordPress websites. Some things in WordPress I really liked. One of them was the image resizing. 

When I switched to Jekyll in 2015 I found out that I could no longer resize images automatically. Fortunately, I found [images.weserv.nl](https://images.weserv.nl), a Dutch image resizing service. This service was smarter than WordPress. It resized your images on the fly and kept it in their cache for 30 days. An excellent strategy. However, images in my markdown were still not resized, often resulting in huge page loads.

When I switched to Hugo in June 2021 I was happy to find that Hugo could resize images 'on build time'. The command to do so had to be written in a shortcode or a layout. Although shortcodes were a step in the right direction, 'regular' markdown editors (like my CMS [cms.usecue.com](https://cms.usecue.com) is using) still created unresized images.

But... when I saw BEP give [this answer](https://discourse.gohugo.io/t/is-this-possible-with-hugo/38089/6?u=jhvanderschee) to a relatively unrelated question, I realized Hugo can resize standard markdown images through render hooks! I immediately browsed through the docs and created a hook to add to my most recent project... and it worked! 

The file is called '/layouts/_default/_markup/render-image.html' and contains the following code:

```
{{ if (resources.GetMatch .Destination) }}
  <img src="{{ ((resources.GetMatch .Destination).Resize `1400x jpg q50`).RelPermalink | safeURL }}" alt="{{ .Text }}" />
{{ end }}
```
This means that a standard image in markdown, like this:

```
![alt tekst](/uploads/image.png)
```

... is now procesed by Hugo. It turns it into a JPG file with 50% compression and a width of maximum 1400 pixels, typically resulting in a <100kb image. Isn't that amazing!? I absolutely think so, as I like to call myself a [website performance expert](https://www.usecue.com).