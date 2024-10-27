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

function initCart() {
    if (localStorage.getItem("cart")) var cart = JSON.parse(localStorage.getItem("cart"));
        else var cart = new Array();
    return cart;
}

function updateCartCount() {
    
    // assumes itemcount look like 
    // <span class="itemcount">0</span>

    var cart = initCart();

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

function addToCart(el) {

    // assumes execution onsubmit of a form where el is the form and the submit button (input[type="submit"]) looks like 
    // <input type="submit" data-url="" data-sku="" data-title="" data-varianttype="" data-variantname="" data-price="" data-image="" value="Add to cart" />

    var cart = initCart();

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
    var cart = initCart();
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
    
    var cart = initCart();
    for (i = 0; i < cart.length; ++i) {
        if(cart[i].sku == sku) {
            cart.splice(i, 1);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    populateCart();
}

function updateQuantity(sku,quantity) {
    
    var cart = initCart();
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

    var cart = initCart();

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

    var cart = initCart();
    var carttotal = 0;
    if(cart.length) {
        for (i = 0; i < cart.length; ++i) {
            carttotal += parseFloat(cart[i].quantity * cart[i].price);
        }
    }
    return carttotal;
}

func initAddons() {
    if (localStorage.getItem("addons")) var cart = JSON.parse(localStorage.getItem("addons"));
        else var addons = new Array();
    return addons;
}


function getAddonTotal() {
    
    // sum of prices in the addons

    var addontotal = 0;
    var addons = initAddons();
    for (i=0; i<addons.length; i++){
        addontotal = addontotal + parseFloat(addons[i].price);
    }
    return addontotal;
}

function redirectToPayment(paymentlink) {

    // is used on the paylink page/layout

    var checkoutcalculation = getCartTotal() + getAddonTotal();
    var ordernumber = localStorage.getItem('ordernumber');
    document.location.href = paymentlink+'/'+checkoutcalculation+'/Order%20number%20'+ordernumber;
}


// init functions after DOM tree is loaded
window.addEventListener('DOMContentLoaded', function() {
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
}
