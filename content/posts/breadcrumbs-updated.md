---
title: Breadcrumbs updated
date: 2021-12-09
---

I have been building Hugo websites for half a year now some, and I am a BIG fan. Sure the documentation is a bit weird or incomplete at times. Where do you find the variable 'resources', for example? I don't know. On the other hand, the [Discourse channel](https://discourse.gohugo.io/) is absolutely amazing. The time people are devoting to help everybody out is just mind blowing. In the past six months I have stuggled a lot and learned a lot. So, when I looked back at the code I used for my breadcrumbs (which I created more than half a year ago), I saw that I could improve it... and I did. 

The new code distinguishes list pages from regular pages. I use the page variable `.IsPage` for that. This allows the script to show you a humanized URL part for the list pages and the full title for the regular pages. This is a nice improvement and solves a lot of issues with capitals in names, etc. I also improved the structure of the breadcrumbs. I changed the single line of text (links) into an unordered list. This unordered list is styled in CSS to look like a single line again. This is semanticly better and easier to style. Finally, I saw that I replaced the text 'posts' with 'blog'. I now know that it is better to use an altered permalink for that, which can be set globally in the config file.

I hope you like the improvements. You can see them on Github as this repository is public. Happy coding!