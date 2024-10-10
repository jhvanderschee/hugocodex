---
title: Breaking Summary change
date: 2024-10-10
---

I found out that in [release 0.134](https://github.com/gohugoio/hugo/releases/tag/v0.134.0) of Hugo a breaking change was made. An automaticly generated `{{ .Summary }}` no longer outputs plain content. This is a major and breaking change. 

This can only be solved by replacing `{{ .Summary }}` by `{{ .Summary | plainify }}` wherever you use automatic summaries... which is quite some work. Be warned!