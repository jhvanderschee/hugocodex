---
title: Hugo webshop ported from Jekyll
date: "2022-10-12"
---

I have been wanting to port the webshop from https://www.jekyllcodex.org to this website for a while, but could not find the time to do it. Fortunately, my Spanish friend Fenix wanted to help me out. He ported the webshop to Hugo. He replaced the layouts with shortcodes to improve the usability and rewrote all Liquid to the Go templating language. It is using Mollie, which is great for European businesses. If you want to sell in the US you can replace the dynamic payment link from Mollie with a Paypal payment link. Fenix and I are still working on the manual, but Hugo aficionado should be able to read the code and understand it without any help. I you have questions, just let me know!