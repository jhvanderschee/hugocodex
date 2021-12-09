---
title: Breadcrumbs updated
date: 2021-12-09
---

I have been building Hugo websites for half a year now some, and I am a BIG fan. Sure the documentation is a bit weird or incomplete at times. Where do you find the variable 'resources', for example? But the [Discourse channel](https://discourse.gohugo.io/) is absolutely amazing.

I have been looking back at my breadcrumbs code and I improved a few things. First of all it distinguishes list pages from regular pages. This allows the script to show you a humanized URL part for the list pages and the full title for the regular pages. This is a nice improvement and solves a lot of issues with capitals in names, etc. Secondly, I improved the structure of the breadcrumbs. I changed the single line of text (links) into an unordered list. This unordered list is styled in CSS to look like a single line again. This is semanticly better and easier to style.

I hope you like the improvements. Happy coding!