const products = document.querySelectorAll('.product');
const productQuantityControls = document.querySelectorAll('.product__quantity-controls');

productQuantityControls.forEach(productQuantityControl => {
    const productQuantityControlDec = productQuantityControl.querySelector('.product__quantity-control_dec');
    const productQuantityControlInc = productQuantityControl.querySelector('.product__quantity-control_inc');
    const productQuantityValue = productQuantityControl.querySelector('.product__quantity-value');

    productQuantityControlDec.onclick = () => {
        if (productQuantityValue.textContent > 1) {
            productQuantityValue.textContent--
        }
    }

    productQuantityControlInc.onclick = () => {
        productQuantityValue.textContent++
    }
})

products.forEach(product => {

    const productAdd = product.querySelector('.product__add');
    const dataId = product.getAttribute('data-id');
    const productImage = product.querySelector('.product__image');
    const src = productImage.getAttribute('src')
    const cartCount = product.querySelector('.product__quantity-value');

    productAdd.onclick = () => {
        const cartProducts = Array.from(document.querySelectorAll('.cart__product'));
        const product = cartProducts.find(el => el.getAttribute('data-id') == dataId);
        const cart = document.querySelector('.cart__products');
        const cartProduct = document.createElement('div');

        if (!product) {
            cartProduct.innerHTML = `<div class="cart__product" data-id="${dataId}"><img class="cart__product-image" src="${src}"><div class="cart__product-count">${cartCount.textContent}</div></div>`
            cart.appendChild(cartProduct);
        } else {
            const cartProductCount = product.querySelector('.cart__product-count');
            cartProductCount.textContent = parseInt(cartProductCount.textContent) + parseInt(cartCount.textContent);

        }
    }
})