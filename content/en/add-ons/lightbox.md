---
title: Lightbox
---
### Introduction

Lightbox is a solution that loads your [image](/uploads/grumpycat2.jpg) [links](/uploads/grumpycat.jpg), your [Youtube links](https://www.youtube.com/watch?v=dQw4w9WgXcQ&showinfo=0&rel=0) and your [Vimeo links](https://vimeo.com/132888648) automatically in a minimalistic and responsive pseudo window/overlay. No adjustment to your links is required, just follow the installation instructions below.

### How it works

Links that point to images, Youtube and Vimeo videos (also unlisted ones) are automagically recognized when you click them. The image or video opens in the lightbox. Links in the same paragraph or list form a gallery, that you browse with the arrows or the arrow keys. The lightbox closes when you click on the background/overlay or press Escape. You can prevent links from turning into lightboxes, by adding the 'no-lightbox' class.

Note that I wrote the code for this lightbox myself. It works on mobile and in all modern desktop browsers.

### Installation

Step 1. Download the file [lightbox.js](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/js/lightbox.js) and [lightbox.css](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/css/lightbox.css)
<br />Step 2. Save the file in the '/js' and '/css' directory of your project
<br />Step 3. Make sure the footer of your layout document looks like this:

```
<script type="text/javascript" src="/js/lightbox.js"></script>
<link rel="stylesheet" href="/css/lightbox.css">
</body>
</html>
```
