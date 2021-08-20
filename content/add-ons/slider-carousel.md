---
title: Slider/Carousel
---

### Introduction

A lot of websites have a slider (or carousel). Most of them in the header. The big question is: [Should I use a carousel?](https://shouldiuseacarousel.com/) If you decide you should... this page shows you how to use a decent one. 

The carousel is based on this [carousel with CSS scroll snap](https://codepen.io/joosts/pen/MWJBPgo). This carousel weighs only 3kb (uncompressed and including CSS). On desktop you can interact with the arrows and the bullets, on mobile you can use native horizontal scroll (swipe). Without Javascript it is not completely broken. This carousel supports native lazy loading because it uses regular image tags instead of background images. The carousel will 'pause' on hover. Content is stored in a data file and design decisions are stored in the include variables.

### How it works

The code allows you to set the height of the slider as a number, and the unit in as ‘%’ or ‘px’. You can define how long each slide should stay on the screen (in miliseconds). An interesting feature, is the option to make the slider responsive. If you set the height to ‘50’ and the unit to ‘%’, the dimensions will always be 2:1, but the height will vary. If you set the height to ‘500’ and the unit to ‘px’ the height will always be the same, but the dimensions will vary.

{{< carousel height="500" unit="px" duration="7000" >}}

Note that because this carousel uses native anchor scrolling, the page will also scroll vertically when the carousel is used halfway a page. This makes this carousel most suitable as a 'header carousel'.


## Installation

Step 1. Download the file [carousel.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/partials/carousel.html)  
Step 2. Save the file in the ‘layouts/partials’ directory of your project  
Step 3. Add this to your layout:  
```
{{ partial "carousel.html" (dict "context" . "height" "50" "unit" "%" "duration" "7000") }}
```
Step 4. Create a carousel.yaml file in your data directory with this content:  
```
images: 
  - image: /uploads/slider/image1.jpg
    content_html: ""
  - image: /uploads/slider/image2.jpg
    content_html: ""
  - image: /uploads/slider/image3.jpg
    content_html: ""
  - image: /uploads/slider/image4.jpg
    content_html: ""
```