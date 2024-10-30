// Select the basket modal and close button
const basketModal = document.getElementById('basketModal');
const basketClose = document.getElementById('basketClose');
const basketCount = document.getElementById('basketCount');
const basketItems = document.getElementById('basketItems');
const clearBasketButton = document.getElementById('clearBasket');

// Array to hold items in the basket
let cart = [];

// Function to add item to the cart
function addToCart(item, quantity) {
    const itemExists = cart.find(cartItem => cartItem.name === item);
    if (itemExists) {
        itemExists.quantity += parseInt(quantity);
    } else {
        cart.push({ name: item, quantity: parseInt(quantity) });
    }
    updateBasket();
}

// Function to update the basket count and modal
function updateBasket() {
    basketCount.textContent = cart.reduce((acc, curr) => acc + curr.quantity, 0); // Update count
    updateBasketItems(); // Update modal items
}

// Function to update basket items in the modal
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
}

// Function to remove
