---
title: Migration steps for Hugo v0.147.9
date: 2025-07-01
---

Migrating to anything above Hugo v0.146 requires the following steps:

- move everything from the `_default` directory to the root of the `layouts` folder
- remove the `_default` folder
- rename all `single.html` files to `page.html`
- rename all `list.html` files to `section.html`
- move everything from the `layouts/page` folder to the root of the `layouts` folder
- remove the `page` folder
- rename the config.yaml (or toml/json) file to hugo.yaml (or toml/json)
- replace `:filename` to `:contentbasename`

If you had an empty `single.html` in your `layouts/page` directory, you should follow [these instructions](https://discourse.gohugo.io/t/possible-bug-single-layout-for-pages-in-v0-147-9/55179/8).