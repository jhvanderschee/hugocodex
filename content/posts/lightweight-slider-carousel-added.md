---
title: Lightweight slider/carousel added
date: '2021-08-21'
image: /uploads/slider/image1.jpg
---

A lot of websites have a slider (or carousel). Most of them in the header. The big question is: [Should I add a carousel](https://shouldiuseacarousel.com/) to my Hugo website? This is something I cannot decide for you. If you decide you need one, you can use [this one](/add-ons/slider-carousel/):

{{< carousel height="500" unit="px" duration="7000" >}}

The carousel is based on a [carousel with CSS scroll snap](https://codepen.io/joosts/pen/MWJBPgo) that I created earlier. This carousel weighs only 3kb (uncompressed and including CSS). This is 50 times less than the 150kb JS file you need to load for something like [SwiperJS](https://swiperjs.com/) (which has awesome features by the way). On desktop you can interact with the arrows and the bullets, on mobile you can swipe. This carousel supports native lazy loading and will 'pause' on hover. It even kinda works without Javascript.