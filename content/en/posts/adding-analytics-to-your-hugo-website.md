---
title: Adding analytics to your Hugo website
date: 2023-02-03
---

To get analytics in a Hugo Jamstack website, you can use one of the following approaches:

- Third-party analytics tools such as Google Analytics or Matomo. These tools provide a tracking code that you can embed in your JAMstack website to collect user behavior data.
- Custom server-side tracking: You can use a serverless function to track user behavior data and store it in a database.
- Use an all-in-one service provider.

It should be noted that all three options have their downsides. 

### Third-party analytics

The first solution may appear free, but is most likely breaking the GDPR law. The best is to use a paid privacy-friendly solution, like the [Cloud version of Matomo](https://matomo.org) (formerly Piwik).

### Server-side analytics

The second solution: server-side tracking, requires you to set up a traditional server (such as a LAMP or MEAN stack) or serverless functions to collect and process analytics data. It will require you to program the analytics yourself or install an open-source solution. A good option is to install the good (but old) [AWstats](https://www.awstats.org/).

### An all-in-one service provider

The third option is an all-in-one service provider, that includes analytics. This option will most likely cost you money. There are several all-in-one service providers, like [Netlify](https://www.netlify.com/) and [CloudCannon](https://cloudcannon.com/). Netlify costs 9 dollar per website per month (just for the analytics). CloudCannon has (very limited) integrated usage statistics and starts at 45 dollar per month.

Note that I run a LOT of Hugo websites. I have set up my own all-in-one service JUST for Hugo websites. It is a fixed-fee one-stop-shop that includes analytics. It shows you traffic and hits per month and per day. More info? Check out [cms.usecue.com](https://cms.usecue.com/)!