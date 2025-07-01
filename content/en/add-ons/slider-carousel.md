---
title: Slider/Carousel
---

### Introduction

A lot of websites have a slider (or carousel). Most of them in the header. The big question is: [Should I add a carousel](https://shouldiuseacarousel.com/) to my Hugo website? If you decide you should... this page shows you how to use a decent one. 

The carousel is based on a [carousel with CSS scroll snap](https://codepen.io/joosts/pen/MWJBPgo). This carousel weighs only 3kb (uncompressed). On desktop you can interact with the arrows and the bullets, on mobile you can swipe. It kinda works without Javascript. This carousel supports native lazy loading (because it uses regular image tags instead of background images). You can put multiple carousels on one page and the carousel will 'pause' on hover. Content is stored in a data file and design decisions are stored in the include variables.

### How it works

You can define how long each slide should stay on the screen (in miliseconds) and how many slides (items) are shown at once. You can also define the height of the slider as a number, and the unit as ‘%’ or ‘px’. This makes the slider responsive. If you set the height to ‘50’ and the unit to ‘%’, the dimensions will always be 2:1, but the height will vary. If you set the height to ‘500’ and the unit to ‘px’ the height will always be the same, but the dimensions will vary.

{{< carousel items="1" height="500" unit="px" duration="7000" >}}

{{< carousel items="2" height="35" unit="%" duration="5000" >}}

### Installation

Step 1. Download the file [carousel.js](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/js/carousel.js) and [carousel.css](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/static/css/carousel.css)
<br />Step 2. Save the file in the '/js' and '/css' directory of your project
<br />Step 3. Make sure the footer of your layout document looks like this:

```
<script type="text/javascript" src="/js/carousel.js"></script>
<link rel="stylesheet" href="/css/carousel.css">
</body>
</html>
```
Step 4. Create a carousel.yaml file in your data directory with this content:  
```
images: 
  - image: /uploads/slider/image1.jpg
    content_html: "1"
  - image: /uploads/slider/image2.jpg
    content_html: "2"
  - image: /uploads/slider/image3.jpg
    content_html: "3"
  - image: /uploads/slider/image4.jpg
    content_html: "4"
```

### Template installation

Step 5. Download the file [carousel.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_partials/carousel.html)  
Step 6. Save the file in the ‘layouts/_partials’ directory of your project  
Step 7. Add this to your layout:  
```
{{ partial "carousel.html" (dict "context" . "items" "1" "height" "50" "unit" "%" "duration" "7000") }}
```

### Shortcode installation

Step 5. Download the file [carousel.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_shortcodes/carousel.html)  
Step 6. Save the file in the ‘layouts/_partials/_shortcodes’ directory of your project  
Step 7. Add this to your content (.md file):  
```
{{</* carousel items="1" height="500" unit="px" duration="7000" */>}}
```