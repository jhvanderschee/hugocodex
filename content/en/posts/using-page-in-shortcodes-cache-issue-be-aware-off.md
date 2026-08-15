---
title: Using 'page' in shortcodes - beware of caching
translationKey: using-page-in-shortcodes-cache-issue-be-aware-off
date: "2023-11-08"
---
Recent Hugo versions (we are now at v0.120) introduced the elegant 'page' notation. We now have easy access to a 'global Page object'!
Great.

While we were happily using it like this in a Hugo shortcode:

```
{{ page.File.BaseFileName }}
```

we noticed some (apparently) weird behaviour when building the site and watching what the Firefox browser was rendering. Weird.

We reported it in the issue queue on the Github repository:

> 'page' used in a shortcode presents some not so consistent behaviour: problems occur only on the first 'hugo server' run, [..]

> Are we missing something else here?

Once more Joe M. came to the rescue (just a couple of hours later!) and pointed us to the [documentation section in which the 'missing' piece could be found](https://gohugo.io/functions/global/page/#be-aware-of-caching).

Now we know that caching and concurrency play their role!

Just FYI.

Happy coding!
