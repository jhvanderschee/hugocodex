function updateBuyButton() {
    // assumes there is a <select> with id 'variant'
    // <option data-payment-url="" data-price=""></option>

    // assumes the payment button looks like
    // <a class="btn pay" href="{{ Dynamically filled }}">

    const
        variantSelect = document.querySelector("select#variant"),
        payButton = document.querySelector("a.btn.pay");
    if (!variantSelect || !payButton) return

    payButton.setAttribute('href', variantSelect.options[variantSelect.selectedIndex].getAttribute('data-payment-url'));
    updateProductPrice(variantSelect.options[variantSelect.selectedIndex].getAttribute('data-price'));
}

function updateProductPrice(price) {
    // assumes prices look like 
    // <span class="productprice">20</span>

    var elements = document.querySelectorAll('.productprice'), i;
    for (i = 0; i < elements.length; ++i) {
        elements[i].innerHTML = parseFloat(price).toFixed(2);
    }
}
updateBuyButton();
