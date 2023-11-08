---
title: Using 'page' in shortcodes ( cache / issue ? ) - be aware off
date: "2023-11-08"
---
Since recent Hugo versions (we are now at v0.120) the ellegant 'page' notation was introduced. We can now have an easy access to a 'global Page object' !
Great. 

While we were happily using it like this in Hugo 'shortcode' :

```
{{ page.File.BaseFileName }}
```

We noticed some (apparently) weird behaviour when building the site and watching what Firefox browser was rendering. Weird.

In the issue queue, at the Github repository we reported it  :

> ' page' used in a shortcode presents some not so consistent behaviour : problems occurs only on the first 'hugo server' run, [..]

> Are we missing something else here ?

Once more, Joe M. to the rescue (just a couple of hours later!), reminded us about the given [documentation section in which the 'missing' piece could be found.](https://gohugo.io/functions/global/page/#be-aware-of-caching)

Now we know that cache and concurrency play their role !

Just FYI. 

Happy coding !
