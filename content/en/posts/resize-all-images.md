---
title: Resize all images
date: 2022-07-04
---

Thank you for joining this Lightning talk about 'image resizing'. Hugo is known for its fast page loads. However, if you want to get instantly loading webpages, you also need to resize your images properly. Fortunately Hugo can resize images natively. In this talk I will tell you how you can configure Hugo so that it automatically resizes and compresses all images in your project, even the ones that are uploaded through an external CMS by your client. 

## 1. Choose your method

First you need to choose your resizing and compression method. I like too keep things simple. Therefore I always use the [one image technique](/blog/image-compression-for-the-lazy), where you use an oversized heavily compressed jpg image. A typical image, like this one, is twice to ten times smaller than its original, while the image tag looks as simple as this:

```
<img src="large_heavily_compressed.jpg" />
```

If you want to learn more about this technique, please visit HugoCodex.org, a website full of Hugo tips and tricks.

## 2. Set the asset directory

As said, Hugo can automatically resize images. It does so during the build process. However, Hugo you can only resize images that live in an assigned 'asset directory'. I store all my images in the 'static' folder, so I always define my static folder to be the asset directory. You can do this by adding the following line to your configuration file:

```
assetDir: static
```

## 3. Create a compression rule

Now we can start. Let us assume that your front matter looks like this:

```
---
title: My first post
image: /path/to/my/image.jpg
---
```

Your path is stored in your front matter variable, thus in '.Params.image'. This could be a featured image, you want to use in the header of our website/post. Naturally, you would like to resize this image. To find the appropriate image, we use a Hugo variable called 'resources' (without a captital). Because we have set the 'assetDir' to the static folder, this variable contains everything in your static directory. You can target an individual asset/resource with a 'GetMatch' statement in combination with the path to your image. This looks like this:

```
resources.GetMatch .Params.image
```

The above code 'finds' your asset/resource. Next you have to choose an image resize strategy. This can be either 'Resize', 'Fit', 'Fill', 'Crop'. In this example I use 'Fit' to make sure my image is always smaller than 600 pixels (on each side). I use a 'Smart' crop and I use 50% image quality as explained in [Image compression for the lazy](/blog/image-compression-for-the-lazy). This results into:

```
(resources.GetMatch .Params.image).Fit "600x600 jpg Smart q50"
```

Finally you probably want the get the relative URL to this image. You can get this by adding '.RelPermalink' and wrapping the whole thing into brackets, like this:

```
((resources.GetMatch .Params.image).Fit "600x600 jpg Smart q50").RelPermalink
```

The above code will result in an URL that points to a resized version of my original image. But if your original image does not exist (anymore) your code will fail and Hugo will trow an error. Therefore it is smart to check the existance of your desired resource (wrap 'resources.GetMatch' in an if statement), which looks like this:

```
{{ if (resources.GetMatch .Params.image) }}
<img src="{{ ((resources.GetMatch .Params.image).Fit `600x600 jpg Smart q50`).RelPermalink }}" />
{{ end }}
```

## 4. Create a render hook

Now we have resized images in our layout. But what about the content images? For images in the markdown, you can use a 'render hook'. This is a file that describes/overrides how markdown images are handled. To use the above approach in the render hook you should create the following file:

```
/layouts/_default/_markup/render-image.html
```

... and put this logic inside:

```
{{ if (resources.GetMatch .Destination) }}
  <img src="
  {{ ((resources.GetMatch .Destination).Fit `600x600 jpg Smart q50`).RelPermalink | safeURL }}
  " alt="{{ .Text }}" />
{{ end }}
```

Note that we use '.Destination' for the source of the original image and '.Text' for the alt text defined in the markdown. Once you added the render hook all images in your Hugo project can and will be resized.

## Conclusion

In this short [lightning talk](https://hugoconf.io/) I have explained how to resize all images in your Hugo project, using [one image technique](/blog/image-compression-for-the-lazy/). Not only did we resize layout images, but we also targeted the images in the markdown through a render hook. Resizing all images will result in faster page loads and a better user experience.

Happy coding!