---
title: Webshop
---

### Introduction

This is a simple webshop with serveral payment methods that does not require a monthly fee. Great for a simple webshop. The webshop currently does not allow for variable tax calculations. It also does not provide an alternative shipping address, although that can be added easily. An email parser would allow you to automate the buying processes even further.

### How it works

From the buyer perspective, the purchasing process is divided in 3 simple steps :

1.- Shopping Cart

2.- Checkout

3.- Payment 

Let's see how can we achieve this.

### Installation

Before you can add the webshop, in order to manage the payments, you need to [create a Mollie account](https://www.mollie.com) or a [Paypal one](https://paypal.com). 

Mollie will ask you to register your website. They will verify if you have a proper return policy, clearly mentioned company data and clear general terms and conditions. Once your
website is approved by Mollie you can add payment methods. Go to [https://useplink.com](https://useplink.com) and register. Within your Mollie dashboard you can click on your
profile and select 'Payment links' to go to your Plink account. Create a re-usable link with a variable amount and description. 

If you choose to use [Paypal and the payment methods it is offering, you'll need to configure your Paypal.me profile](https://paypal.me).

Once you have done that, you are ready to add the webshop to your website in 4 easy steps.

#### Step 1. Add scripts to the footer

Download the files and add them to your folders. Make sure the bottom of your layout document looks like the code below. The paymentlink should be the personal re-usable link you just created. 

```
<link rel="stylesheet" href="/css/webshop.css">
<script type="text/javascript" src="/js/webshop.js"></script>
```

#### Step 2. Create the 'cart', 'checkout' and 'paylink' shortcodes
	
...

As one knows, Hugo allows you to 'include' reusable code snippets onto [elegant so called shortcodes](https://gohugo.io/templates/shortcode-templates/). Let's make use of
them in order to embed our [cart](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/cart.html) source code made of a simple but elegant table + form combination.

For the checkout form embedding let's build [a checkout shortcode](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/checkout.html).

For the payment redirection, [we'll use some JavaScript](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/paypal-buttons.html).

Download those 3 files and [save them in the 'layouts/shortcodes'](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/)  of your project.

Like this you can invoke any of the 3 above mentioned subprocesses at any place in your project simply by calling the given 'shortcode', as we'll see in the next step.

Note that in this occasion we [re-wrote the url](https://gohugo.io/content-management/urls/#set-url-in-front-matter) in some of the files. Like this we can enjoy even more granular control for individual pieces of content.


#### Step 3. Create the 'cart', 'checkout' and 'paylink' content pages

Let's [create the relevant markdown formatted content pages containing the shortcodes](https://github.com/jhvanderschee/hugocodex/blob/main/content/en). That is to say the
'cart.md', 'checkout.md'  and 'paylink.md'. You can do so in the root of the 'content/' folder and rewrite the urls how you would like them.

#### Step 4. Create some products

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
