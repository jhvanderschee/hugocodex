---
title: 'Improvement of the Youtube shortcode'
date: '2025-06-20'
---

We have added an improvement to the [Youtube shortcode](/add-ons/youtube-shortcode/). It now downloads the Youtube image automatically and resizes and crops it to fit a 16:9 layout. This requires `assetDir: static` in your config. It is a GDPR friendly/legal Youtube embed (no need for a cookie bar). You can call it by writing {{< youtube dQw4w9WgXcQ >}}. The trick is that it is not an actual embed... but a link/image with a clear Youtube marking on it. Outgoing links are not subject to GDPR rules.