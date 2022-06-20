---
title: Resize all images
date: 2022-06-20
draft: true
---

## 1. Choose your method

I like too keep things simple... very simple. When it comes to responsive images for retina displays I always use the 'one image' technique, where you use a heavily compressed (50%) retina jpg image for both retina and non-retina displays. This technique is explained in more detail in my post 'Image compression for the lazy'.

## 2. Set the assetdir

In Hugo you can only resize images that live in your asset dir. I store all my images in the static folder, so I always make my static folder the asset directory. You can do this by setting `assetDir: static` in your config file.

## 3. Create a compression rule

Now we have to find the right resource, with `resources.GetMatch`. It is smart to check of the existance of the resource (wrap it in an if statement). When you do not, Hugo might abort its building process when it finds a missing image. Then you define the image resize strategy. This can be either 'Fit'

set its height and width

```
((resources.GetMatch .Params.image).Fit "600x600 jpg Smart q50").RelPermalink
```

- create a render hook

'/layouts/_default/_markup/render-image.html'

```
{{ if (resources.GetMatch .Destination) }}
  <img src="{{ ((resources.GetMatch .Destination).Resize `1400x jpg q50`).RelPermalink | safeURL }}" alt="{{ .Text }}" />
{{ end }}
```
