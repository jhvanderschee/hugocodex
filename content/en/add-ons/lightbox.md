---
title: Lightbox
---
### Introduction

Lightbox is a solution that loads your [image](/uploads/grumpycat2.jpg) [links](/uploads/grumpycat.jpg), your [Youtube links](https://www.youtube.com/watch?v=dQw4w9WgXcQ&showinfo=0&rel=0) and your [Vimeo links](https://vimeo.com/132888648) automatically in a minimalistic and responsive pseudo window/overlay. No adjustment to your links is required, just follow the installation instructions below.

### How it works

Links that point to images, Youtube and Vimeo video's are automagically recognized and provided with an additional class by javascript. Video's get an additional data-id in case of a video. A listener adds the lightboxes to the body on a click on the link. The lightboxes is removed when you click on the background/overlay. You can prevent links from turning into lightboxes, by adding the 'no-lightbox' class.

Note that I wrote the code for this lightbox myself and tested it on a minimal amount of devices. It should work on mobile (tested on Android), IE9+ and all modern desktop browsers (tested on Firefox, Safari and Chrome).

### Installation

Step 1. Download the file [lightbox.js](https://raw.githubusercontent.com/jhvanderschee/jekyllcodex/gh-pages/js/lightbox.js) and [lightbox.css](https://raw.githubusercontent.com/jhvanderschee/jekyllcodex/gh-pages/css/lightbox.css)
<br />Step 2. Save the file in the '/js' and '/css' directory of your project
<br />Step 3. Make sure the footer of your layout document looks like this:

```
<script type="text/javascript" src="/js/lightbox.js"></script>
<link rel="stylesheet" href="/css/lightbox.css">
</body>
</html>
```
