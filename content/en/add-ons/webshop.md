---
title: Webshop
layout: webshop
---

<!-- Simple explanation -->
## Introduction
This is a simple webshop using [Stripe](https://stripe.com/) that does not require a monthly fee. Great for a simple webshop. 

## How it works
We leverage [Stripe payment links](https://stripe.com/en-nl/payments/payment-links) to do most of the heavy lifting for us. We create a payment link for every product variant in Stripe. Then, in Hugo we create the product pages and add these payment links to the associated products. 

## Installation

### Step 1. Create a Stripe account

Before you can add the webshop, in order to manage the payments, you need to [create a Stripe account](https://dashboard.stripe.com/register). 


### Step 2. Create your products in Stripe
When you have an account, go to the [Stripe dashboard](https://dashboard.stripe.com) and navigate to the **Product catalog** in the left column. Hit "N" on your keyboard or click on "New Product" to create a new product. Here, setup your product as you desire: add a name, price and optional image. You can create as many products as you like. 


### Step 3. Create your checkout page in Stripe. 
As soon as you have a pricing for your product, click on the kebab (three horizontal dots) on the far right of the pricing row. This will open a menu in which you can see "Create payment link". 

After clicking this you will see a UI in which you can customize your checkout page. You can customize this as you see fit, but the recommendation is to check the checkbox that says "Let customers adjust quantity". When you are finished, click "Create link ✓" at the top right. 

Well done! You can now copy your payment link which you need for the next step. You can repeat this step for every product you wish to offer. 


### Step 4. Create some products
Create a new Hugo section (folder in the root) and call it 'products'. In this folder you can create your products and your product overview in the '_index.md' file. Each 'my-product-name.md' file (replace 'my-product-name' with a great product slug), could look like this:

```
---
title: Buy me a beer
image: "/uploads/beer/5.jpg"
variant_type: size
variants:
- name: half-a-pint
  price: 2.75
  stripe_payment_link: https://buy.stripe.com/test_bIY28m9VB6VY1AA144
- name: pint
  price: 4.25
  stripe_payment_link: https://buy.stripe.com/test_7sI14i9VBcgia766op
---
I like beer a lot! IPA, Guinness, Stout, craft beers... and I love to try new ones. Buy me half-a-pint to get going or a pint to get a good buzz.

```

### Step 5. Add scripts to the footer
Download the [Javascript](https://hugocodex.org/js/webshop-simple.js) file and add it to your project. Make sure the bottom of your layout document looks like the code below.

```
<script type="text/javascript" src="/js/webshop-simple.js"></script>
```


### Step 6. Wrap it all up
Now, on your brand new Hugo product page, make sure your template looks something like this:

````
<section class="product">
    {{ $myProductHasMoreThanOneVariant := gt (len .Params.variants) 0 }}
    <h1>{{ .Title }}</h1>
    <img src="{{ .Params.image }}" alt="My awesome product">
    <span class="productprice">{{/* Dynamically filled by Javascript */}}</span>
    {{ if $myProductHasMoreThanOneVariant }}
        <label for="variant">Choose a {{ .Params.variant_type }}:</label>
        <select onchange="updateBuyButton()" id="variant" name="variant">
            {{ range $variant :=.Params.variants }}
                <option data-payment-url="{{ $variant.stripe_payment_link }}" data-price="{{ $variant.price }}">
                    {{ $variant.name }}
                </option>
            {{ end }}
        </select>
        <a href="{{/*  Dynamically filled by Javascript  */}}" class="pay btn">Buy now</a>
    {{ else }}
        <a href="{{ (index .Params.variants 0).stripe_payment_link }}" class="pay btn">Buy now</a>
    {{ end }}
</section>
````

---

<!-- Complex explanation -->
## Introduction

This is a webshop with several payment methods that does not require a monthly fee. The webshop currently does not allow for variable tax calculations. It also does not provide an alternative shipping address, although that can be added easily. An email parser would allow you to automate the buying processes even further.

## How it works

We do not have a database, so we have to create our cart in localStorage. In this cart we store everything: all productinfo and the users preferences, like the amount and the variant. On the productpages the products are added to your localStorage cart array. Once we get to the cart page we can simply read this array and display it on our screen (using javascript). Next, you are sent to the checkout (with the 'proceed to checkout' button). On this checkout page you are asked to fill out a form with your personal information. Once you submit this, this info is sent to the shop owner through an email. Finally you are sent to a payment page. To connect the final payment to the filled out form a unique order number is being generated during the checkout process. This number (also stored in localStorage) is sent a long to the payment link (Mollie) or button (Paypal).

## Installation

### Step 1. Create a Mollie or Paypal account

Before you can add the webshop, in order to manage the payments, you need to [create a Mollie account](https://www.mollie.com) or a [Paypal account](https://paypal.com). Mollie only works for companies within the EU(?) and Paypal works globally. Mollie will ask you to register your website. They will verify if you have a proper return policy, clearly mentioned company data and clear general terms and conditions. Once your website is approved by Mollie you can add payment methods. Go to [https://useplink.com](https://useplink.com) and register. Within your Mollie dashboard you can click on your profile and select 'Payment links' to go to your Plink account. Create a re-usable link with a variable amount and description. This re-usable link is required in the final part of step 3 of this tutorial.  
If you chose to create a Paypal account, you need to go to the developer dashboard. There you will find 'My apps & Credentials'. At this page you have to click the 'Create App' button, which will give you a 'client_id'. This 'client_id' is needed in the final part of step 3 of this manual.

### Step 2. Add scripts to the footer

Download the files and add them to your folders. Make sure the bottom of your layout document looks like the code below.

```
<link rel="stylesheet" href="/css/webshop.css">
<script type="text/javascript" src="/js/webshop.js"></script>
```

### Step 3. Create the 'cart', 'checkout' and 'paylink' shortcodes
	
...

As one knows, Hugo allows you to 'include' reusable code snippets onto [elegant so called shortcodes](https://gohugo.io/templates/shortcode-templates/). Let's make use of
them in order to embed our [cart](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/cart.html) source code made of a simple but elegant table + form combination.

For the checkout form embedding let's build [a checkout shortcode](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/checkout.html).

For the payment redirection, [we'll use some JavaScript](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/paypal-buttons.html).

Download those 3 files and [save them in the 'layouts/shortcodes'](https://github.com/jhvanderschee/hugocodex/blob/main/layouts/shortcodes/)  of your project.

Like this you can invoke any of the 3 above mentioned subprocesses at any place in your project simply by calling the given 'shortcode', as we'll see in the next step.

Note that in this occasion we [re-wrote the url](https://gohugo.io/content-management/urls/#set-url-in-front-matter) in some of the files. Like this we can enjoy even more granular control for individual pieces of content.


### Step 4. Create the 'cart', 'checkout' and 'paylink' content pages

Let's [create the relevant markdown formatted content pages containing the shortcodes](https://github.com/jhvanderschee/hugocodex/blob/main/content/en). That is to say the
'cart.md', 'checkout.md'  and 'paylink.md'. You can do so in the root of the 'content/' folder and rewrite the urls how you would like them.

### Step 5. Create some products

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