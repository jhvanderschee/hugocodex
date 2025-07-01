---
title: Vimeo shortcode
---

### Introduction

Paul Irish did a nice thing. He created [a lighter Youtube embed](https://github.com/paulirish/lite-youtube-embed). His solution does no longer slow your website down, like normal Youtube embeds do. There is only one downside: it loads content from Youtube without consent, while Youtube is a service from a company that is known for tracking and profiling. This is not very privacy friendly. The solution is to host the poster yourself and link it to Youtube. This can be done using a shortcode. This can also be done for Vimeo.

### How it works

The shortcode creates an image and a link to Vimeo. The classes on this link tell the CSS to add the Vimeo logo and add a play button. This makes it look like an embed. Note that when you load the [lightbox](/add-ons/lightbox/) from this website, your video will automatically open in a lightbox instead of in a new page. Below you find a demo (with the lightbox enabled).

{{< vimeo id="727145223" image="/uploads/resizeallimages.png" >}}

### Installation

Step 1. Download the file [vimeo.html](https://raw.githubusercontent.com/jhvanderschee/hugocodex/main/layouts/_shortcodes/vimeo.html)
<br />Step 2. Save the file in the 'layouts/_partials/_shortcodes' directory of your project
<br />Step 3. Add the following line to your content on the place where you want your Vimeo video to appear:

```
{{</* vimeo id="727145223" image="/uploads/resizeallimages.png" */>}}
```
