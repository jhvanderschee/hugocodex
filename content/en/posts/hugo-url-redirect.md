---
title: Creating a URL Redirect
date: 2025-11-14
---

Sometimes you have an page that moved to a new URL. To prevent loss of SEO link juice, you want the old URL to forward to the new one. Fortunately Hugo has built in support for this. Just put the old relative url in the front matter in the aliases key, like this:

```
---
title: Some post
aliases
- /my-old-url
- /even-older-url
---
```

Hugo now creates pages based on the built in [alias.html template](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/alias.html). That looks like this:

```
<!DOCTYPE html>
<html lang="{{ site.Language.LanguageCode }}">
  <head>
    <title>{{ .Permalink }}</title>
    <link rel="canonical" href="{{ .Permalink }}">
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="0; url={{ .Permalink }}">
  </head>
</html>
```

Happy coding!
