---
title: Webshop
---

### Introduction

This is a webshop with several payment methods that does not require a monthly fee. The webshop currently does not allow for variable tax calculations. It also does not provide an alternative shipping address, although that can be added easily. An email parser would allow you to automate the buying processes even further. If you are looking for something less complex, try the [simpler implementation](/add-ons/webshop-simple), using Stripe instead of PayPal.

### How it works

We do not have a database, so we have to create our cart in localStorage. In this cart we store everything: all productinfo and the users preferences, like the amount and the variant. On the productpages the products are added to your localStorage cart array. Once we get to the cart page we can simply read this array and display it on our screen (using javascript). Next, you are sent to the checkout (with the 'proceed to checkout' button). On this checkout page you are asked to fill out a form with your personal information. Once you submit this, this info is sent to the shop owner through an email. Finally you are sent to a payment page. To connect the final payment to the filled out form a unique order number is being generated during the checkout process. This number (also stored in localStorage) is sent a long to the payment link (Mollie) or button (Paypal).

### Installation

#### Step 1. Create a Mollie or Paypal account

Before you can add the webshop, in order to manage the payments, you need to [create a Mollie account](https://www.mollie.com) or a [Paypal account](https://paypal.com). Mollie only works for companies within the EU(?) and Paypal works globally. Mollie will ask you to register your website. They will verify if you have a proper return policy, clearly mentioned company data and clear general terms and conditions. Once your website is approved by Mollie you can add payment methods. Go to [https://useplink.com](https://useplink.com) and register. Within your Mollie dashboard you can click on your profile and select 'Payment links' to go to your Plink account. Create a re-usable link with a variable amount and description. This re-usable link is required in the final part of step 3 of this tutorial.  
If you chose to create a Paypal account, you need to go to the developer dashboard. There you will find 'My apps & Credentials'. At this page you have to click the 'Create App' button, which will give you a 'client_id'. This 'client_id' is needed in the final part of step 3 of this manual.

#### Step 2. Add scripts to the footer

Download the files and add them to your folders. Make sure the bottom of your layout document looks like the code below.

```
<link rel="stylesheet" href="/css/webshop.css">
<script type="text/javascript" src="/js/webshop.js"></script>
```

#### Step 3. Create the 'cart', 'checkout' and 'paylink' shortcodes
	
You need the shortcodes [cart.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/cart.html), [checkout.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/checkout.html) and [paypal-buttons.html](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/paypal-buttons.html). Download these 3 files and save them in the [layouts/shortcodes](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/) folder of your project.

#### Step 4. Create the 'cart', 'checkout' and 'paylink' content pages

Create the relevant markdown formatted content pages containing the shortcodes. That is to say the 'cart.md', 'checkout.md'  and 'paylink.md'. You can do so in the root of the 'content/' folder and rewrite the urls how you would like them.

#### Step 5. Create some products

Create a new Hugo section (folder in the root) and call it 'products'. In this folder you can create your products and your product overview in the '_index.md' file. Each 'my-product-name.md' file (replace 'my-product-name' with a great product slug), should look like this:

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