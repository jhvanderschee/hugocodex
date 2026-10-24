---
title: Debugging Hugo
translationKey: debugging-hugo
date: 2022-10-05
---

I have been building Hugo websites for about half a year now. In those six months I have struggled a lot and learned a lot. I have learned that my learning strategy is "learning by error".
So, looking back, I am now telling myself: it is time to learn how to properly debug Hugo.

I ran into a problem where a layout had to be styled by adding a CSS class conditionally, with:

```
  <body class="{{ .Type }} {{ .Layout }}">
```

By reading [An's question on the forum](https://discourse.gohugo.io/t/add-css-class-depending-on-layout-type/1989) I got a starting point for debugging.
Now I know that by adding:

```
{{ printf "%#v" . }}
```

I can easily read the list of all the variables scoped to the current context (., a.k.a. "the dot").
In my case,

```
{{ printf "%#v" .Layout }}
```

will tell me which layout is in use on a page!

Sure, [the Hugo documentation](https://gohugo.io/templates/template-debugging/#readout) is a bit weird or incomplete at times. On the other hand, the [Discourse channel](https://discourse.gohugo.io/) is a wonderful place to learn Hugo, thanks to the time people devote to helping everybody out. See you there!

Happy coding!
