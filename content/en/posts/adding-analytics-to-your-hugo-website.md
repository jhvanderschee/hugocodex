---
title: Adding analytics to your Hugo website
date: 2023-02-03
---

To get analytics in a Hugo Jamstack website, you can use a combination of the following approaches:

1. Third-party analytics tools such as Google Analytics, Mixpanel, or Piwik. These tools provide a tracking code that you can embed in your JAMstack website to collect user behavior data.
1. Custom server-side tracking: You can use a serverless function to track user behavior data and store it in a database.
1. Use an all-in-one service provider.

It should be noted that all three options have their downsides. The first solution may appear free, but is most likely breaking the GDPR law. The second solution: server-side tracking, requires you to set up a traditional server (such as a LAMP or MEAN stack) to collect and process analytics data. It will require you to program the analytics solution from scratch or install an open-source solution. The third option is an all-in-one service provider, that includes analytics. This option will most likely cost you money. There are several all-in-one service providers, like Netlify and CloudCannon. Netlify costs 9 dollar per website per month (just for the analytics). CloudCannon has (very limited) integrated usage statistics, but starts at 45 dollar per month.

Note that I have set up my own all-in-one service provider JUST for Hugo websites. It is a fixed-fee one-stop-shop that includes analytics. It shows you traffic and hits per month and per day. More info? Check out [cms.usecue.com](https://cms.usecue.com/)!