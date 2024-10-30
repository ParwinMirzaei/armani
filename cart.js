// Select elements
const basketCount = document.getElementById('basketCount');
const basketItems = document.getElementById('basketItems');
const clearBasketButton = document.getElementById('clearBasket');

// Array to hold items in the basket (use localStorage to persist data)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart display
function updateBasketItems() {
    basketItems.innerHTML = ''; // Clear current items
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - Quantity: ${item.quantity}`;
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => {
            removeFromCart(index); // Call remove function on click
        };
        
        itemDiv.appendChild(removeButton);
        basketItems.appendChild(itemDiv);
    });
    updateBasketCount();
}

// Function to update the basket count
function updateBasketCount() {
    const totalCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    basketCount.textContent = totalCount; // Update count
}

// Function to remove item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    updateBasketItems(); // Refresh the display
}

// Function to clear the cart
clearBasketButton.onclick = () => {
    cart = []; // Clear cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    updateBasketItems(); // Refresh the display
};

// Initial display update
updateBasketItems();
