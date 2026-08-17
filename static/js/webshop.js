function getStoredItem(name) {

    // storage is not always allowed: Safari with cookies blocked, private windows and
    // some privacy extensions throw on the very first read, and a refusal has to read
    // as 'nothing there' instead of stopping the script that asked

    try {
        return localStorage.getItem(name);
    } catch (e) {
        return null;
    }
}

function getStoredJson(name) {

    // same as above, and a leftover that is no longer valid json counts as nothing too

    try {
        return JSON.parse(localStorage.getItem(name));
    } catch (e) {
        return null;
    }
}

function capitalizeFirstLetter(mystring) {
    return mystring.charAt(0).toUpperCase() + mystring.slice(1);
}
function stripHtml(html) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

function updateBuyButton(el) {
    
    // assumes el is a <select> with 
    // <option data-variantname="" data-price=""></option>
    
    // assumes el is part of a form where the submit button (input[type="submit"]) looks like 
    // <input type="submit" data-url="" data-sku="" data-title="" data-varianttype="" data-variantname="" data-price="" data-image="" value="Add to cart" />

    el.closest('form').querySelector('input[type=\'submit\']').setAttribute('data-sku',el.options[el.selectedIndex].getAttribute('data-sku'));
    el.closest('form').querySelector('input[type=\'submit\']').setAttribute('data-variantname',el.options[el.selectedIndex].getAttribute('data-variantname'));
    el.closest('form').querySelector('input[type=\'submit\']').setAttribute('data-price',el.options[el.selectedIndex].getAttribute('data-price'));
    
    updateProductPrice(el.closest('form').querySelector('input[type=\'submit\']').getAttribute('data-price'));
}

function updateProductPrice(price) {
    
    // assumes prices look like 
    // <span class="productprice">20</span>

    var elements = document.querySelectorAll('.productprice'), i;
    for (i = 0; i < elements.length; ++i) {
        elements[i].innerHTML = parseFloat(price).toFixed(2);
    }
}

function updateCartCount() {
    
    // assumes itemcount look like 
    // <span class="itemcount">0</span>

    var cart = getStoredJson("cart");
    if(cart) {
        var itemcount = 0;
        for (i = 0; i < cart.length; ++i) {
            itemcount += cart[i].quantity;
        }

        var elements = document.querySelectorAll('.itemcount'), i;
        for (i = 0; i < elements.length; ++i) {
            elements[i].innerHTML = itemcount;
            if(itemcount == 0) elements[i].style.display = 'none';
            else elements[i].style.display = 'initial';
        }
    }
}

function addToCart(el) {

    // assumes execution onsubmit of a form where el is the form and the submit button (input[type="submit"]) looks like 
    // <input type="submit" data-url="" data-sku="" data-title="" data-varianttype="" data-variantname="" data-price="" data-image="" value="Add to cart" />

    if (localStorage.getItem("cart")) var cart = JSON.parse(localStorage.getItem("cart"));
    else var cart = new Array();

    // increment quantity when sku exists
    var found = false;
    var i;
    for (i = 0; i < cart.length; ++i) {
        if(cart[i].sku == el.querySelector('input[type=\'submit\']').getAttribute('data-sku')) {
            found = true;
            cart[i].quantity = cart[i].quantity + 1;
        }
    }

    // add to cart array when sku does not exist
    if(!found) {
        var newitem = {
            url: el.querySelector('input[type=\'submit\']').getAttribute('data-url'), 
            sku: el.querySelector('input[type=\'submit\']').getAttribute('data-sku'), 
            title: el.querySelector('input[type=\'submit\']').getAttribute('data-title'), 
            varianttype: el.querySelector('input[type=\'submit\']').getAttribute('data-varianttype'), 
            variantname: el.querySelector('input[type=\'submit\']').getAttribute('data-variantname'), 
            price: el.querySelector('input[type=\'submit\']').getAttribute('data-price'), 
            image: el.querySelector('input[type=\'submit\']').getAttribute('data-image'),
            quantity: 1
        };
        cart.push(newitem);
    }
    // store cart array
    localStorage.setItem("cart", JSON.stringify(cart));
    
    updateCartCount();
    
    return true;
}

function populateCart() {
    var cart = JSON.parse(localStorage.getItem("cart")), i;
    var carttotal = 0;

    document.getElementById('shoppingcart').querySelector('tbody').innerHTML = '<tr><td colspan="6" style="text-align: center;">Your shopping cart is currently empty.</td></tr>';

    if(cart && cart.length) {
        document.getElementById('shoppingcart').querySelector('tbody').innerHTML = '';
        for (i = 0; i < cart.length; ++i) {
            var newline = '<tr><td><a href="'+cart[i].url+'" class="productavatar" style="background-image: url(\''+cart[i].image+'\');" title="'+cart[i].sku+'"></a></td><td>'+cart[i].title;
            if(cart[i].varianttype && cart[i].variantname) newline += '<br />'+capitalizeFirstLetter(cart[i].varianttype)+': '+cart[i].variantname;
            newline += '<br />&euro;&nbsp;'+parseFloat(cart[i].price).toFixed(2)+'</td><td><a href="javascript:removeFromCart(\''+cart[i].sku+'\');">remove</a></td><td><input class="quantity" type="number" value ="'+cart[i].quantity+'" min="0" max="99" onchange="updateQuantity(\''+cart[i].sku+'\',this.value)" /></td><td>&euro;&nbsp;'+(cart[i].quantity * cart[i].price).toFixed(2)+'</td></tr>';
            document.getElementById('shoppingcart').querySelector('tbody').innerHTML += newline;
            carttotal += parseFloat(cart[i].quantity * cart[i].price);
        }
    }

    var elements = document.querySelectorAll('.carttotal'), i;
    for (i = 0; i < elements.length; ++i) {
        elements[i].innerHTML = carttotal.toFixed(2);
    }

    updateCartCount();
}

function removeFromCart(sku) {
    
    var cart = JSON.parse(localStorage.getItem("cart")), i;
    for (i = 0; i < cart.length; ++i) {
        if(cart[i].sku == sku) {
            cart.splice(i, 1);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    populateCart();
}

function updateQuantity(sku,quantity) {
    
    var cart = JSON.parse(localStorage.getItem("cart")), i;
    for (i = 0; i < cart.length; ++i) {
        if(cart[i].sku == sku) {
            cart[i].quantity = parseInt(quantity);
            if(parseInt(quantity) == 0 ) {
                removeFromCart(sku);
                return;
            }
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    
    populateCart();
}

function setAddons(el) {

    // assumes execution onchange of a form where el is the form

    // fill addons array
    var addons = new Array();
    var inputs = el.querySelectorAll("input, select"); 
    for (i=0; i<inputs.length; i++){
        if(inputs[i].getAttribute('data-price') && inputs[i].checked) {
            var newitem = {
                title: inputs[i].getAttribute('data-title'),
                price: inputs[i].getAttribute('data-price')
            }
            addons.push(newitem);
        }
        if(inputs[i].tagName == 'SELECT') {
            if(inputs[i].value && inputs[i].options[inputs[i].selectedIndex].getAttribute('data-price')) {
                var newitem = {
                    title: inputs[i].options[inputs[i].selectedIndex].getAttribute('data-title'),
                    price: inputs[i].options[inputs[i].selectedIndex].getAttribute('data-price')
                }
                addons.push(newitem);
            }
        }
    }

    // store addons array
    localStorage.setItem("addons", JSON.stringify(addons));
    
    // update checkoutcalculation div
    var carttotal = getCartTotal();
    var addontotal = getAddonTotal();
    var newline = '<span>Shopping cart: </span>€ '+parseFloat(carttotal).toFixed(2);
    for (i=0; i<addons.length; i++){
        newline += '\n<br /><span>'+addons[i].title+': </span>€ '+parseFloat(addons[i].price).toFixed(2);
    }
    if(addons.length) newline += '\n<div class="sum"><span>Payment total: </span>€ '+parseFloat(carttotal + addontotal).toFixed(2)+'</div>';
    document.getElementById('checkoutcalculation').innerHTML = newline;
    
    // write this value to the hidden checkout input (for the form)
    el.querySelector('input[name="checkout"]').value = stripHtml(newline).replace(/(?:\r\n|\r|\n)/g, ' | ');

}

function setOrderNumber(el) {
    
    // assumes execution on the onclick handler of the submit button of a form where el is the form
    // ordernumber is the current date in tenths of a second (current date in milliseconds divided by 100) modulo 60*60*24*365*30*10 (30 years in thenth of a seconds)

    var ordernumber = Math.round(new Date().getTime()/100) % 6307200000; 
    el.querySelector('input[name=\'ordernumber\']').value = ordernumber;
    localStorage.setItem('ordernumber',ordernumber);
}

function initCheckoutForm(el) {

    var cart = JSON.parse(localStorage.getItem("cart")), i;

    // add order input (hidden)
    var newinput = document.createElement("input");
    newinput.setAttribute('type',"hidden");
    newinput.setAttribute('name',"order");
    for (i = 0; i < cart.length; ++i) {
        var productdescription = cart[i].quantity+' x '+cart[i].title;
        if(cart[i].varianttype && cart[i].variantname) productdescription += ' ('+capitalizeFirstLetter(cart[i].varianttype)+': '+cart[i].variantname+')';
        productdescription += ' = € '+parseFloat(cart[i].quantity * cart[i].price).toFixed(2);
        if(i) newinput.setAttribute('value',newinput.getAttribute('value') + ' | ' + productdescription);
        else newinput.setAttribute('value',productdescription);
    }
    el.appendChild(newinput);

    // add empty checkout input (hidden)
    var newinput = document.createElement("input");
    newinput.setAttribute('type',"hidden");
    newinput.setAttribute('name',"checkout");
    el.appendChild(newinput);
    setAddons(el);
}

function getCartTotal() {
    
    // sum of prices in the cart

    var cart = getStoredJson("cart"), i;
    var carttotal = 0;
    if(cart && cart.length) {
        for (i = 0; i < cart.length; ++i) {
            carttotal += parseFloat(cart[i].quantity * cart[i].price);
        }
    }
    return carttotal;
}

function getAddonTotal() {
    
    // sum of prices in the addons

    var addontotal = 0;
    var addons = getStoredJson("addons"), i;
    if(addons) {
        for (i=0; i<addons.length; i++){
            addontotal = addontotal + parseFloat(addons[i].price);
        }
    }
    return addontotal;
}

function redirectToPayment(paymentlink) {

    // is used on the paylink page/layout

    var checkoutcalculation = getCartTotal() + getAddonTotal();
    var ordernumber = getStoredItem('ordernumber');
    document.location.href = paymentlink+'/'+checkoutcalculation+'/Order%20number%20'+ordernumber;
}

function payWithUsecue(id, lang) {

    // is used on the paylink page/layout
    // pay.js turns the page it is loaded on into a payment page. We hand it the parameters
    // on its own script tag, because the address bar is not ours to count on: Safari
    // refuses a replaceState that comes around too often and the frame would then be
    // built from an address that never got the amount in it

    var amount = getCartTotal() + getAddonTotal();
    var ordernumber = getStoredItem('ordernumber');

    var query = 'id='+encodeURIComponent(id);
    if(amount > 0) query += '&amount='+encodeURIComponent(amount.toFixed(2));
    if(ordernumber) query += '&specification='+encodeURIComponent('Order number '+ordernumber);
    if(lang) query += '&lang='+encodeURIComponent(lang);

    // the same parameters laid over the ones the page was opened with, so that an
    // amount that came in through the link survives an empty cart
    var url = new URL(window.location.href);
    url.searchParams.set('id', id);
    if(amount > 0) url.searchParams.set('amount', amount.toFixed(2));
    if(ordernumber) url.searchParams.set('specification', 'Order number '+ordernumber);
    if(lang) url.searchParams.set('lang', lang);

    // where to send the visitor when the frame cannot be put up here
    var paypage = 'https://pos.usecue.com/pay/'+url.search;

    // the address bar is a nicety on top of that: nice to be able to read and adjust
    // the parameters, no reason to leave the visitor without a page when it fails
    try {
        window.history.replaceState(window.history.state, '', url.toString());
    } catch (e) {}

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://pos.usecue.com/p/js/pay.js?'+query;

    // a script that a blocker or a hiccup keeps from arriving leaves the visitor
    // reading 'one moment please' forever, so send them to the payment page itself:
    // they lose the address of this site, which beats losing the payment
    script.onerror = function () {
        window.location.replace(paypage);
    };

    // pay.js watches its own frame once it runs. These two are for the case where it
    // never got that far, so nothing is watching and nothing is on screen.
    function frameless() {
        return !document.querySelector('iframe[src*="pos.usecue.com"]');
    }

    // it arrived and ran: either it put a frame up or it decided not to, and if it
    // decided not to then nothing else is coming
    script.onload = function () {
        window.setTimeout(function () {
            if(frameless()) window.location.replace(paypage);
        }, 100);
    };

    // and a last stop for a script that neither arrives nor says that it will not,
    // long enough that a slow connection is not mistaken for a broken one
    window.setTimeout(function () {
        if(frameless()) window.location.replace(paypage);
    }, 8000);

    document.body.appendChild(script);
}


// init functions
if(document.getElementById('variant')) updateBuyButton(document.getElementById('variant'));
if(document.getElementById('shoppingcart')) populateCart();
if(document.getElementById('checkout')) {
    var form = document.getElementById('checkout').querySelector('form');
    initCheckoutForm(form);
    //populateMiniCart();
    form.onchange({target: form});
}

updateCartCount();


var carttotal = getCartTotal();
var addontotal = getAddonTotal();
var paymenttotal = parseFloat(carttotal + addontotal).toFixed(2);
if(document.getElementById('paymenttotal')) document.getElementById('paymenttotal').innerHTML  = paymenttotal;