---
title: 'Image gallery'
---
### Introduction

This script creates an image gallery. The script reads all images from a specific (user-defined) folder in the assets directory of Hugo, automagically crops them to 300px squares and shows them in rows of five.

{{< image-gallery gallery_dir="album" >}}

### How it works

The script searches for any file in the folder ‘album’ in the assets directory of Hugo. It creates an image tag with a thumbnail for these images. The thumbnail is a 300 pixel wide square cropped version of the image. The script wraps the thumbnail in a link, which links to a larger version and will trigger a lightbox if present. The caption is the file name without extension.

### Shortcode installation

Step 1. Download the file [image-gallery.html](https://github.com/jhvanderschee/hugocodex/blob/master/layouts/shortcodes/image-gallery.html)  
Step 2. Save the file in the ‘layouts/shortcodes directory of your project  
Step 3. Add the following line to your content on the place where you want the image gallery to appear:  

```
{{</* image-gallery gallery_dir="album" */>}}
```

### Template installation

Step 1. Download the file [image-gallery.html](https://github.com/jhvanderschee/hugocodex/blob/master/layouts/partials/image-gallery.html)  
Step 2. Save the file in the ‘layouts/partials directory of your project  
Step 3. Add the following line to your layout on the place where you want the image gallery to appear:  

```
{{ .Scratch.Set "gallery_dir" "album" }}  
{{ partial "image-gallery" . }}
```
