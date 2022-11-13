---
title: Debugging Hugo
date: 2022-10-05
draft: true
---

I have been building Hugo websites for half a year now some. In the past six months I have stuggled a lot and learned a lot. I've learned that my learning strategy is "learning by
error". 
So, when I looked back, i'm now telling myself: it is the time to learn about how to properly debug Hugo ? .

I'm facing a layout to be styled with a CSS class addition upon condition issue with

```
  <body class="{{ .Type }} {{ .Layout }}">
```

  By reading [An 's question on the forum](https://discourse.gohugo.io/t/add-css-class-depending-on-layout-type/1989)i have a debugging starting point.
Now i know that by adding :

```
{{ printf "%#v" . }}
```
I can easily read the list of all the variables scoped to the current context (., aka “the dot”).
In my use case, 

```
{{ printf "%#v" .Layout }}
```

Will tell which layout is in use on a page!

Sure [the Hugo documentation](https://gohugo.io/templates/template-debugging/#readout) is a bit weird or incomplete at times. On the other hand, the [Discourse channel](https://discourse.gohugo.io/) is a wonderful place to learn Hugo. The time people are
devoting to help everybody out. See you there ! 



Happy coding!
