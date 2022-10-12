---
title: Hugo webshop ported from Jekyll
date: "2022-10-12"
---

I have been wanting to port the webshop from https://www.jekyllcodex.org to this website for a while, but could not find the time to do it. Fortunately, my Spanish friend Fenix wanted to help me out. He ported the Jekyll webshop to Hugo. You can find a [demo](/donate/) by clicking on the 'Donate' in the header.

Fenix replaced the layouts with shortcodes, which improved the usability. He also replaced all Liquid code with the Go templating language. The webshop is using Mollie, which is great for European payments. If you want to sell in the US you can replace the dynamic payment link from Mollie with a dynamic Paypal link.

Note that a fully client-side webshop always has a few drawbacks. However, a little bit of PHP in the order handling can go a long way (which this example DOES NOT use). We think we have created a perfect little webshop for websites with a low amount of sales.

Fenix and I are still working on the manual of this webshop, but Hugo aficionados should be able to read the code and understand it without such writing.