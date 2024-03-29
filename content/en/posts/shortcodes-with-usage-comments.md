---
title: 'Shortcodes with usage comments'
date: '2022-11-13'
---

I have added usage comments in the heads of my (relevant) shortcodes. You can see the comment in the youtube.html shortcode below:

```
<!-- 
{{/* 
    
    Usage: 
    {{</* youtube id="qtIqKaDlqXo" image="/uploads/youtubeposter.jpg" */>}} 
    
*/}}
-->
```

This is not only useful for developers, but is also instructing our own CMS ([Usecue CMS](https://cms.usecue.com)) on how to insert these shortcodes. The usage example is read from the comment by the CMS and an insert button is added to the CMS editor field. This makes it easy for your editors/clients to (re-)use these shortcodes. For more information on this read [A CMS with Hugo shortcode support](https://www.usecue.com/blog/a-cms-with-hugo-shortcode-support/).

Note that we put the comment in two types of comment tags. The HTML comment tags make sure your IDE knows this is a comment. The Go comment tags prevent the code from being rendered and executed, which prevents build errors.