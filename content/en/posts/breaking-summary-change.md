---
title: Breaking summary change
date: 2024-10-10
---

I found out that in [release 0.134 of Hugo](https://github.com/gohugoio/hugo/releases/tag/v0.134.0) a breaking change was made. An automaticly generated `{{ .Summary }}` no longer outputs plain content. This might make you think twice about updating Hugo to the latest version. This problem can only be solved by replacing `{{ .Summary }}` by `{{ .Summary | plainify }}` wherever you use automatic summaries, which is quite some work. Be warned!