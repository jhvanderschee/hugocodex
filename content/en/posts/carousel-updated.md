---
title: Carousel updated
date: "2022-05-23 13:00:00"
---

Half a year ago I [created](/blog/lightweight-slider-carousel-added/) a slider/carousel for Hugo, based on [this codepen](https://codepen.io/joosts/pen/MWJBPgo). Today I updated the code and fixed a bug (the bullets did not show the right position on mobile while swiping). The code now has an 'event listener' to detect scrolling and I added a debounce function from [Chris Ferdinandi](https://gomakethings.com/debouncing-your-javascript-events/), who happens to be an avid Hugo user as well. It should now be responsive and buttery smooth.

Another thing that has changed is the responsiveness. For a website I was building I needed the slider to have a dynamic amount of slides. I managed to make the slider fully responsive. You might need a reload (because I wanted to prevent expensive resize listeners), but you can let CSS determine how many slides your carousel shows. The carousel will change accordingly.