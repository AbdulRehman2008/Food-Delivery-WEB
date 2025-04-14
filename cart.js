function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex >= 0) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = 0;
    cart.forEach(item => totalItems += item.quantity);
    document.getElementById('cart-count').textContent = totalItems;
}

window.onload = updateCartCount;
