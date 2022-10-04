---
title: Webshop
---

### Introduction

This is a simple webshop with serveral payment methods that does not require a monthly fee. Great for a simple webshop. The webshop currently does not allow for variable (variable) tax calculations. It also does not provide an alternative shipping address, although that can be added easily. An email parser would allow you to automate the buying processes even further.

### How it works

...

### Installation

Before you can add the webshop you need to [create a Mollie account](https://www.mollie.com). Mollie will ask you to register your website. They will verify if you have a proper return policy, clearly mentioned company data and clear general terms and conditions. Once your website is approved by Mollie you can add payment methods. Go to [https://useplink.com](https://useplink.com) and register. Within your Mollie dashboard you can click on your profile and select 'Payment links' to go to your Plink account. Create a re-usable link with a variable amount and description. Once you have done that, you are ready to add the webshop to your website.

#### Step 1. Add the footer files with the payment link

Download the files and add them to your folders. Make sure the bottom of your layout document looks like the code below. The paymentlink should be the personal re-usable link you just created. 

```
footer code
```

#### Step 2. Add the cart, checkout and paylink shortcodes

...

#### Step 3. Create some products

Create some products. They should be part of the 'products' collection and each 'product.md' file should look like this:

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