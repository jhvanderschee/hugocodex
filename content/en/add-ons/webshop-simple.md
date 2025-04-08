---
title: Webshop (simple)
---

### Introduction

This is a simple webshop using Stripe that does not require a monthly fee. Great for a simple webshop. [Checkout the demo!](/simple-donate) Note that this webshop does not use a cart, or extra's like add-ons costs for shipping. If you are looking for these functionalities, use the [other implementation](/add-ons/webshop).

### How it works

We leverage Stripes [payment links](https://stripe.com/en-nl/payments/payment-links) to do most of the heavy lifting for us. We create a payment link for every product variant in Stripe. Then, in Hugo we create the product pages and add these payment links to the associated products. 

### Installation

#### Step 1. Create a Stripe account

Before you can add the webshop, in order to manage the payments, you need to [create a Stripe account](https://dashboard.stripe.com/register). 


#### Step 2. Create your products in Stripe
When you have an account, go to the [Stripe dashboard](https://dashboard.stripe.com) and navigate to the "Product catalog" in the left column. Hit "N" on your keyboard or click on "New Product" to create a new product. Here, setup your product as you desire: add a name, price and optional image. You can create as many products as you like. 


#### Step 3. Create your checkout page in Stripe. 
As soon as you have a pricing for your product, click on the kebab (three horizontal dots) on the far right of the pricing row. This will open a menu in which you can see "Create payment link". After clicking this you will see a UI in which you can customize your checkout page. You can customize this as you see fit, but the recommendation is to check the checkbox that says "Let customers adjust quantity". When you are finished, click "Create link ✓" at the top right. Well done! You can now copy your payment link which you need for the next step. You can repeat this step for every product you wish to offer. 


#### Step 4. Create some products
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

#### Step 5. Add scripts to the footer
Download the [Javascript](https://hugocodex.org/js/webshop-simple.js) file and add it to your project. Make sure the bottom of your layout document looks like the code below.

```
<script type="text/javascript" src="/js/webshop-simple.js"></script>
```


#### Step 6. Wrap it all up
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