---
title: Image compression for the lazy 
date: 2022-06-19
---

No, this is not about lazy loading. We are talking about image compression only, as images are an important part of your page load (20% on average). Every byte counts when you want to [get a 100% Google Lighthouse Score](https://www.usecue.com/blog/how-to-get-a-100-google-lighthouse-score/). I was happy to find that [Boris Smus](https://github.com/borismus/image-zoom) did some great ground work on this topic. I used one of his examples to illustrate this article, in which we will try to avoid any visible compression artifacts.

## Our image

Consider the following 'retina-ready' image of 881.7kb (0.9Mb) of this orange Lambo. This images has four time the amount of pixels you are seeing, when you are on a device with a non-retina display. It looks perfect on any screen... but the fact that you just downloaded almost 1Mb is terrible.

<p><img src="/uploads/car/2x-100.jpg" width="568"/></p>

We could save a lot of bandwidth by adding a 'source set'. This would instruct the browser to get a low resolution version on non-retina displays. This means we use a 1x image and a 2x image. Both these images could be compressed to save even more bandwith. But what is the right amount of compression for images on retina and non-retina displays?  
<br>

|Compression|Size|
|----|----|
|[1x 10% jpg](/uploads/car/1x-10.jpg)|12.6kb|
|[1x 20% jpg](/uploads/car/1x-20.jpg)|18.0kb|
|[1x 30% jpg](/uploads/car/1x-30.jpg)|22.7kb|
|[1x 40% jpg](/uploads/car/1x-40.jpg)|26.5kb|
|[1x 50% jpg](/uploads/car/1x-50.jpg)|30.2kb|
|[1x 60% jpg](/uploads/car/1x-60.jpg)|34.3kb|
|[1x 70% jpg](/uploads/car/1x-70.jpg)|40.3kb|
|[1x 80% jpg](/uploads/car/1x-80.jpg)|50.3kb|
|[1x 90% jpg](/uploads/car/1x-90.jpg)|73.6kb|
|[1x 100% jpg](/uploads/car/1x-100.jpg)|246.6kb|

|Compression|Size|
|----|----|
|[2x 10% jpg](/uploads/car/2x-10.jpg)|32.2kb|
|[2x 20% jpg](/uploads/car/2x-20.jpg)|50.1kb|
|[2x 30% jpg](/uploads/car/2x-30.jpg)|66.3kb|
|[2x 40% jpg](/uploads/car/2x-40.jpg)|79.8kb|
|[2x 50% jpg](/uploads/car/2x-50.jpg)|92.8kb|
|[2x 60% jpg](/uploads/car/2x-60.jpg)|107.1kb|
|[2x 70% jpg](/uploads/car/2x-70.jpg)|129.1kb|
|[2x 80% jpg](/uploads/car/2x-80.jpg)|164.6kb|
|[2x 90% jpg](/uploads/car/2x-90.jpg)|250.8kb|
|[2x 100% jpg](/uploads/car/2x-100.jpg)|881.7kb|

## Non-retina compression

Well, I would argue that non-retina displays (can) have such large pixels that any kind of compression is visible. However, a 90% image quality still results in a good image. For some cases 50% is even acceptable. However, if I had to choose one size for all my images (because I had to define it in Hugo), I would go for 90%. The savings are enormous and the quality is always good.

## Perfect image quality

But what if I told you that you could get a perfect (100%) image quality on a non-retina device while STILL saving more than half of the bytes? Impossible you might think... but that is not the case. 

If you want a perfect non-retina image you can (heavily) compress a retina-ready image (an image with 4 times as many pixels) and get a result that is very close to 100% image quality. Compression should be around 50% in order to save around 60% of all bytes. When you [look very closely](/uploads/car/quality.png), you can see some distortion (pixelated effect) in the orange side skirt of the lower left image, while there is none visible in the bottom right image. In other words: the 2x 50% jpg image looks perfect on a non-retina display, while the 1x 90% jpg image does not. 

But there is another much more visible difference on retina displays. The larger image (2x 50% jpg) looks a lot better on screens with high pixel density (retina). Note that I doubled the resolution for a better comparison, making the non-retina image 2x larger and the retina image 4x larger(!) than it appears in real life.

## Zero complexity

If we want perfect images on non-retina displays we can best use a heavily compressed retina image. With a source set we could win some quality or save some bytes, but that would also add complexity. The same goes for using the 'webp' format, as [webp is not yet fully supported](https://caniuse.com/?search=%20webp).

## One size to rule them all

Below you will find an overview of the options ordered by file size. The conclusion is that if you care about 'perfect' images, you should always compress the retina version. If I had to choose one option from the list below, because I wanted to define that globally in Hugo, I would choose the '2x 50% jpg' version, as 2x 50% jpg has a perfect non-retina appearance, a good retina appearance and an acceptable size.  

> I would choose the '2x 50% jpg' version...

<br>

|Compression|Size|@1x|@2x|
|----|----|--|--|
|[1x 100% jpg](/uploads/car/1x-100.jpg)|//////////////////// 246.6kb|<span class="emoticon">😀</span>|<span class="emoticon">😡</span>|
|[2x 90% jpg](/uploads/car/2x-90.jpg)|//////////////////// 250.8kb|<span class="emoticon">😀</span>|<span class="emoticon">😀</span>|
|[2x 80% jpg](/uploads/car/2x-80.jpg)|///////////// 164.3kb|<span class="emoticon">😀</span>|<span class="emoticon">😀</span>|
|[2x 50% jpg](/uploads/car/2x-50.jpg)|/////// 92.8kb|<span class="emoticon">😀</span>|<span class="emoticon">🙂</span>|
|[1x 90% jpg](/uploads/car/1x-90.jpg)|////// 75.3kb|<span class="emoticon">🙂</span>|<span class="emoticon">😡</span>|
|[1x 80% jpg](/uploads/car/1x-80.jpg)|//// 50.3kb|<span class="emoticon">🙂</span>|<span class="emoticon">😡</span>|
|[2x 20% jpg](/uploads/car/2x-20.jpg)|//// 50.1kb|<span class="emoticon">🙂</span>|<span class="emoticon">😐</span>|
|[1x 50% jpg](/uploads/car/1x-50.jpg)|// 30.2kb|<span class="emoticon">😐</span>|<span class="emoticon">😡</span>|
|[1x 20% jpg](/uploads/car/1x-20.jpg)|/ 18.0kb|<span class="emoticon">😡</span>|<span class="emoticon">😡</span>|

<span class="emoticon">😀</span> = perfect   
<span class="emoticon">🙂</span> = good   
<span class="emoticon">😐</span> = decent   
<span class="emoticon">😡</span> = terrible   
<br>

## Perfect yet 50%

I said that 1x 50% was only acceptable in some cases (on certain images) on a non-retina display. Why would 2x 50% be 'good' on retina displays? A 50% jpg quality on retina has [clear compression artifacts](/uploads/car/quality.png) (see top right image), which we said we did not want to see... However, due to the size of these (distorted) pixels they are very hard to distinguish. The pixels on most retina screen are so small that your eye is unable to see them seperately, making the distortion (almost) invisible. Your eye is blurring them for you. This is why 50% rated 'good' on retina, while it was rated 'decent' on non-retina. Want proof? I challenge you to detect the difference between a perfect retina image and a 50% distorted one below (view on a retina display)...

<p><img src="/uploads/car/2x-100.jpg" width="568"/>2x 100% jpg quality (881.7kb)</p>

<p><img src="/uploads/car/2x-50.jpg" width="568"/>2x 50% jpg quality (92.8kb)</p>

Whether or not you are able to see the compression in the lower image depends largely on the pixel size of your device. When you are on a typical mobile phone (with a retina display), you will see two perfect images, while the upper one is almost 10 times larger than the lower one. When you are on a device with larger pixels (and a retina display), you might be able to spot the pixelated effect when you look very closely. Note that we are looking for the distortion effect that is visible in the top right image of this [4x close-up](/uploads/car/quality.png).

## Premiere at HugoConf

So... with 2x 50% jpg compression you get perfect images, zero added complexity and you save bytes by a factor 10. Would you like to have that in your Hugo website for all images, even the ones in your markdown? Listen to my 'Resize all images' lighting talk on [HugoConf 2022](https://hugoconf.io/). I will show you how to achieve this with a minimal amount of code. Hope to see you there!