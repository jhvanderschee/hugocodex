---
title: A new CMS for Hugo websites
date: 2021-11-19
---

Netlify did some research on [the priorities of Jamstack developers](https://www.usecue.com/blog/jamstack-is-eating-the-world/). The thing Jamstack developers value most is 'performance', which explains Hugo's popularity. Hugo is the absolute king of performance. There is no SSG that is as fast as Hugo. Other priorities of Jamstack developers are uptime, security and speed of development, which are generally good for any Jamstack project. However, we know (and see in the data) that people increasingly struggle to get their Jamstack website compliant. This is probably caused by the distributed nature of Jamstack projects. A Jamstack project combines multiple services from multiple providers. This means you will have to check each vendor for compliancy. We also see that people increasingly worry about vendor lock-in. Each vendor requires you to learn how their software works. This is the reason those Jamstack channels are filled with commercial blog posts and ads. Once you have invested time into learning to use a certain vendors solution, you have created yourself a lock-in. Changing to another provider would mean learning to use another solution, thus investing extra time you probably don't have.

This does also apply to hosting and CMS systems for the Jamstack. Hosting solutions are often not very optimized, providing mediocre performance. Especially CDN systems are configured 'incorrectly'. Almost all CDN's only cache high traffic requests. In general CDN's make popular websites faster and impopular websites slower. Your website is probably not a very popular one, which means [you will not profit from using a CDN](https://www.usecue.com/blog/faster-websites-with-a-cdn/). This is the reason I use my own servers with a proper configuration. Currently, I only have nodes in Europe, but I will expand this in the future.

Equally important and equally flawed are CMS systems. They tend to have mediocre performance and are hard to learn. Additionally, they require a ton of CMS specific configuration. This creates a huge vendor lock-in. Switching from one CMS provider to another can take weeks or months. 

Nevertheless, I am moving all my websites (250+) to my own CMS at https://cms.usecue.com. Why? Because it is a zero-config solution, it has top performance and combined with my own hosting and failover it gives me the perfect uptime, security and compliancy. I will soon have all the things I know you want too (based on Netlify's research)! 

Feeling envious? You can always contact me to see if I have some space left on my server... ;-)
