---
title: Three and a half years later
date: 2021-06-06 00:00:00 +0000
---

I already told you that [migrating from Jekyll to Hugo](/posts/migrating-from-jekyll-to-hugo) was a lot harder than I thought. But I had not expected that I would not look at Hugo for another 3.5 years. 

### What changed?

First of all [CloudCannon](https://www.cloudcannon.com) started building Hugo websites, while [Forestry](https://www.forestry.io) stopt doing so. I am a big fan of CloudCannon, I have been asked to write blog posts for them and I am featured on their website, so I definitely wanted to take Hugo for a spin on their infrastructure. Secondly, I had a few websites that were becoming quite slow due to their increasing size. Jekyll has improved its speed drasticly in the last few years, but build times of 20+ seconds were still common for my bigger websites (3k+ pages). I started experimenting with GoJekyll and got enthusiastic about the 1.4 seconds build times. However, I immediately found some bugs in GoJekyll and some limitations in blackfriday (GoJekyll's Markdown converter). Finally, I also noticed that both Netlify and CloudCannon were switching to a pricing model where you are paying for build minutes. I get that... but it gave Hugo an extra advantage over Jekyll as Hugo builds 20 times faster (thus cheaper). Finally, CloudCannon has changed its pricing in a way that made me wonder if I could cut back in the amount of domains, build minutes and bandwidth I use. This made me look at Hugo again with new eyes. A massively popular and mature project with over 50k stars on Github. 

While exploring everything that was new (and old) to Hugo, I found that creating multilingual websites had great support. I am building a lot of multilingual websites, so this is quite nice. Also, after building Jekyll websites for almost 6 years, I was less insecure about learning a new templating language and ready for a new challenge.

### What now?

I will port more of the solutions I have built on [Jekyll Codex](https://www.jekyllcodex.org) to this website. I have already updated the codebase in a way that it no longer uses Bootstrap or jQuery. Soon you will see a lot of 'Add-ons' appear on this site, containing partials or shortcodes. I will start where I left off, by exploring the possibility to let Hugo resize images.