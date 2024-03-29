---
title: Building a Webshop with Hugo
date: 2022-09-30
draft: true
---
This has been on our  wish-list for a long time : building a simple webshop in Jekyll without paying a monthly fee to a third party. And I have finally succeeded! To see how it works, please visit my [donate page](/donate). The webshop requires just two settings, the email address for the confirmation and your Plink payment link. Setup can be done in minutes and only requires a Mollie account. There are no limitations on the layout of the product pages. It uses HTML API, a principle on which Lea Verou from MIT has done a decent amount of research and is proven to be easy to implement. In the donate page we have shown how this can work for product variants.

The webshop accepts all payment methods from Mollie:

- Mastercard
- Visa
- American Express
- PayPal
- SEPA Bank Transfer
- SEPA Direct Debit
- Bitcoin
- SOFORT Banking
- iDEAL
- Bancontact
- KBC/CBC Payment Button
- Belfius Pay Button
- paysafecard
- CartaSi
- Cartes Bancaires
- Gift cards

This webshop is far from perfect. It has no stock keeping, no VAT calculations and no automated invoices. However, this webshop does allow you to sell products in almost any country for a very small fee. All fields in the checkout form are automagically added to your confirmation email and when you add radio buttons with a price and description, these values will be added to the order (i.e. gift wrapping or shipping method).

Let's see how can we add a simple webshop to our hugo based website!


### Introduction

This is a simple webshop with serveral payment methods that does not require a monthly fee. Great for a simple webshop. The webshop currently does not allow for variable (variable) tax calculations. It also does not provide an alternative shipping address, although that can be added easily. An email parser would allow you to automate the buying processes even further.

### How it works
The webshop basically works like this: you create a link with an 'addtocart' class static/js/webshop.js^@57 that links to the cart. The [given
layout](layouts/products/single.html 18 will benefit of by means of the form :

```
	    <form action="/donate/cart" onsubmit="return addToCart(this)">
```

This link will look for the 'image', 'price' and 'description' attribute
and add the product to the cart cookie. When you click 'checkout' in the cart you go to a checkout form. When you click the next step in the payment process, you go to a payment
link from Plink (Mollie). Before sending the user to the payment link the cart info will be submitted through email. At the same time an ordernumber will be generated, using a
timestamp in milliseconds. This ordernumber is added to the email and the payment. After succesful payment the user gets redirected to your websites (by Plink). 


[expand]

When you do not want to use the cart, simply use a link with a 'buy' class and directly link to the checkout page. This will make sure there is only one item in the cart.

```
{% raw %}<a href="/checkout" class="buy" image="/path/to/productimage.jpg" price="1.00" description="test">Buy</a>{% endraw %}
```

Once you got the webshop running, you can fine-tune everything by editing the Liquid/HTML code. Are you unable to figure out how to create nice product pages with product variants? Just look at the source code of this website on Github. Still need help? Ask a question on Stack Overflow, or pay me to help you.

[/expand]


.
.
.
.
.
. H
.  u 
.   g
.    o
.     n
.      i
.       z
.        i
.         n
.          g
.           \
.            .


### Installation

Before you can add the webshop you need to [create a Mollie account](https://www.mollie.com){: .gray}. Mollie will ask you to register your website. They will verify if you have a proper return policy, clearly mentioned company data and clear general terms and conditions. Once your website is approved by Mollie you can add payment methods. Go to [https://useplink.com](https://useplink.com){: .gray} and register. Within your Mollie dashboard you can click on your profile and select 'Payment links' to go to your Plink account. Create a re-usable link with a variable amount and description. Once you have done that, you are ready to add the webshop to your website.

#### Step 1. Add the footer files with the payment link

Download the files and add them to your folders. Make sure the bottom of your layout document looks like the code below. The paymentlink should be the personal re-usable link you just created. 

```
{% raw %}...

<!-- webshop -->
<script type="text/javascript" src="/js/webshop.js"></script>
<link rel="stylesheet" href="/css/webshop.css">
<script type="text/javascript">
    updateCartCount();
    {% if page.layout == 'cart' %}populateCart();{% endif %}
    {% if page.layout == 'checkout' %}initCheckoutForm(document.querySelector('#checkout form'));{% endif %}
    {% if page.layout == 'paylink' %}redirectToPayment('https://useplink.com/payment/ssMgtkddEzgC4rKKJJ9T');{% endif %}
</script>

</body>
</html>{% endraw %}
```

#### Step 2. Add the cart, checkout and paylink files

You need to download the 'cart.html', 'checkout.html' and 'paylink.html' files along with their '.md' counterparts and put them in the html files in the layout directory and the md files in the 'donate' directory. Feel free to change that to 'webshop' or whatever you like.

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
