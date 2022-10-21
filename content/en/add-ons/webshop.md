---
title: Webshop
---

### Introduction

This is a simple webshop with serveral payment methods that does not require a monthly fee. Great for a simple webshop. The webshop currently does not allow for variable tax calculations. It also does not provide an alternative shipping address, although that can be added easily. An email parser would allow you to automate the buying processes even further.

### How it works

We do not have a database, so we have to create our cart in localStorage. In this cart we store everything: all productinfo and the users preferences, like the amount and the variant. On the productpages the products are added to your localStorage cart array. Once we get to the cart page we can simply read this array and display it on our screen (using javascript). Next, you are sent to the checkout (with the 'proceed to checkout' button). On this checkout page you are asked to fill out a form with your personal information. Once you submit this, this info is sent to the shop owner through an email. Finally you are sent to a payment page. To connect the final payment to the filled out form a unique order number is being generated during the checkout process. This number (also stored in localStorage) is sent a long to the payment link (Mollie) or button (Paypal).

### Installation

#### Step 1. Create a Mollie or Paypal account

Before you can add the webshop, in order to manage the payments, you need to [create a Mollie account](https://www.mollie.com) or a [Paypal one](https://paypal.com). Mollie only works for companies within the EU(?) and Paypal works globally. Mollie will ask you to register your website. They will verify if you have a proper return policy, clearly mentioned company data and clear general terms and conditions. Once your website is approved by Mollie you can add payment methods. Go to [https://useplink.com](https://useplink.com) and register. Within your Mollie dashboard you can click on your profile and select 'Payment links' to go to your Plink account. Create a re-usable link with a variable amount and description. This re-usable link is required in the final step of this tutorial. If you choose for a Paypal account, you need to go to the developer dashboard. There you will find 'My apps & Credentials'. At this page you have to click the 'Create App' button, which will give you a 'client_id'. This 'client_id' is needed in the final step of this manual.

#### Step 2. Add scripts to the footer

Download the files and add them to your folders. Make sure the bottom of your layout document looks like the code below.

```
<link rel="stylesheet" href="/css/webshop.css">
<script type="text/javascript" src="/js/webshop.js"></script>
```

#### Step 3. Create the 'cart', 'checkout' and 'paylink' shortcodes
	
...

As one knows, Hugo allows you to 'include' reusable code snippets onto [elegant so called shortcodes](https://gohugo.io/templates/shortcode-templates/). Let's make use of
them in order to embed our [cart](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/cart.html) source code made of a simple but elegant table + form combination.

For the checkout form embedding let's build [a checkout shortcode](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/checkout.html).

For the payment redirection, [we'll use some JavaScript](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/paypal-buttons.html).

Download those 3 files and [save them in the 'layouts/shortcodes'](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/)  of your project.

Like this you can invoke any of the 3 above mentioned subprocesses at any place in your project simply by calling the given 'shortcode', as we'll see in the next step.

Note that in this occasion we [re-wrote the url](https://gohugo.io/content-management/urls/#set-url-in-front-matter) in some of the files. Like this we can enjoy even more granular control for individual pieces of content.


#### Step 4. Create the 'cart', 'checkout' and 'paylink' content pages

Let's [create the relevant markdown formatted content pages containing the shortcodes](https://github.com/jhvanderschee/hugocodex/blob/main/content/en). That is to say the
'cart.md', 'checkout.md'  and 'paylink.md'. You can do so in the root of the 'content/' folder and rewrite the urls how you would like them.

#### Step 5. Create some products

Create some products. They should be part of the 'products' section and each 'product.md' file should look like this:

E.g. for the buy-me-beer.md we could do :

```
---
title: Buy me a beer
image: "/uploads/beer/5.jpg"
images:
- image: "/uploads/beer/2.jpg"
- image: "/uploads/beer/3.jpg"
- image: "/uploads/beer/4.jpg"
- image: "/uploads/beer/1.jpg"
variant_type: size
variants:
- name: half-a-pint
  price: 2.75
  sku: beerhalfapint
- name: pint
  price: 4.25
  sku: beerpint
order_number: 2
---

I like beer a lot! IPA, Guinness, Stout, craft beers... and I love to try new ones. Buy me half-a-pint to get going or a pint to get a good buzz.
```
