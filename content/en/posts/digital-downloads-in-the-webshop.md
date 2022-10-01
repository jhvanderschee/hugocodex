---
title: Digital downloads in the webshop
date: 2022-12-12
draft: true
---

Every now and then We get messages through our chat button on the bottom of this website). Some people ask questions, some want to say thanks and some people provide great ideas. The latter was the case yesterday. Andrei (I will leave out his last name for privacy reasons) introduced himself to me and asked if it would be possible to use the webshop in Jekyll Codex to create digital downloads.

At first I thought that his request would require a lot of changes and I was somewhat reluctant. But the more we talked, the clearer it became that these changes were actually quite subtle. We both agreed that if we wanted to use Mollie's Plink service we had to get rid of the cart, as multiple downloads would complicate things unnessecary. We ended up with an extra variable in the products, called 'payment_link'. Leaving this empty would make the webshop behave normally. Entering a product-specific payment link, would send the buyer to the checkout, bypassing the cart, by adding the variables to the URL instead of to the cart cookie. People would still be able to use the cart, only not for products with a product-specific payment link. One could argue that this might be a bit confusing (using the shopping cart only for some products). However, in a real-life scenario it would be more likely to have a webshop with only digital downloads or no digital downloads at all.

I am very pleased with the end-result. Feel free to [check it out](/donate/digitaldownload/). I also like it that people actually feel free to request and discuss features on this website. That is what this website is for. Thank you for your input and your inspiration! Keep it coming!
