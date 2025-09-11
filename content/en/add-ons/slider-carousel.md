---
title: Slider/Carousel
---

### Introduction

A lot of websites have a slider (or carousel). Most of them in the header. The big question is: [Should I add a carousel](https://shouldiuseacarousel.com/) to my Hugo website? If you decide you should... this page shows you how to use a decent one. 

The carousel is based on a [carousel with CSS scroll snap](https://codepen.io/joosts/pen/MWJBPgo). This carousel weighs only 3kb (uncompressed). On desktop you can interact with the arrows and the bullets, on mobile you can swipe. It kinda works without Javascript. This carousel supports native lazy loading (because it uses regular image tags instead of background images). You can put multiple carousels on one page and the carousel will 'pause' on hover. Content is stored in a data file and design decisions are stored in the include variables.

### How it works

Just write a list with only images in you content and the list will automatically be converted into a carousel, like this:

```
- ![](/uploads/slider/image1.jpg)
- ![](/uploads/slider/image2.jpg)
```

- [![](/uploads/slider/image1.jpg)](/uploads/slider/image1.jpg)
- [![](/uploads/slider/image2.jpg)](/uploads/slider/image2.jpg)

Note that this is an improved version of the [old slider/carousel](/add-ons/slider-carousel-manual), which had to be invoked manually, but was suitable for headers (because it was available as a partial) and had a lot more options.

### Installation

Step 1. Download the file [auto-carousel.js](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/js/auto-carousel.js) and [auto-carousel.css](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/css/auto-carousel.css)
<br />Step 2. Save the file in the '/js' and '/css' directory of your project
<br />Step 3. Make sure the footer of your layout document looks like this:

```
<script type="text/javascript" src="/js/auto-carousel.js"></script>
<link rel="stylesheet" href="/css/auto-carousel.css">
</body>
</html>
```
Step 4. Download the file [list-to-carousel.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/list-to-carousel.html)  
Step 6. Save the file in the ‘layouts/_partials’ directory of your project  
Step 7. Add this to your layout where you would normally call `.Content`:  
```
{{ partial "list-to-carousel.html" .Content }}
```