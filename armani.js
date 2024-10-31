const basketCount = document.getElementById('basketCount');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update basket count on page load
function updateBasketCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    basketCount.textContent = totalItems;
}

// Add item to cart
function addToCart(itemName, quantity) {
    const itemQuantity = parseInt(quantity);
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += itemQuantity;
    } else {
        cart.push({ name: itemName, quantity: itemQuantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateBasketCount();
}

updateBasketCount();
