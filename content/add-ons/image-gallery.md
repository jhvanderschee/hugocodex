---
title: Image gallery
---

### Introduction

This script creates an image gallery. The script reads all images from a specific (user-defined) static folder in Hugo, automagically crops them to 300px squares and shows them in rows of five.

{{< image-gallery gallery_dir="album" >}}

### How it works

The script searches for any file with a path that contains the string given in ‘folder’ and checks whether it is a ‘jpg’ file. If so, it creates an image tag for the image. The source is a 300 pixel wide square cropped version of the image. Then the script wraps the image in a link, containing the full path to the image. This will trigger the lightbox if present.

### Shortcode installation

Step 1. Download the file [image-gallery.html]()  
Step 2. Save the file in the ‘layouts/shortcodes directory of your project  
Step 3. Add the following line to your content on the place where you want the image gallery to appear:  

```
{{</* image-gallery gallery_dir="album" */>}}
```

### Template installation

Step 1. Download the file [image-gallery.html]()  
Step 2. Save the file in the ‘layouts/partials directory of your project  
Step 3. Add the following line to your layout on the place where you want the image gallery to appear:  

```
{{ .Scratch.Set "gallery_dir" "album" }}  
{{ partial "image-gallery" . }}
```