// Select elements
const basketItems = document.getElementById('basketItems');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display items in the cart
function displayCartItems() {
    basketItems.innerHTML = ''; // Clear existing items in the cart display
    if (cart.length === 0) {
        basketItems.innerHTML = '<p>Your cart is empty.</p>'; // Message for empty cart
    } else {
        cart.forEach((item, index) => {
            // Create a div for each item in the cart
            const itemDiv = document.createElement('div');
            itemDiv.style.display = 'flex';
            itemDiv.style.alignItems = 'center';
            itemDiv.style.padding = '5px 0';

            // Display item name and quantity
            const itemText = document.createElement('span');
            itemText.textContent = `${item.name} - Quantity: ${item.quantity}`;
            itemText.style.flexGrow = '1'; // Allow the item text to take remaining space
            itemDiv.appendChild(itemText);

            // Add a "Remove" button for each item
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.style.marginLeft = '10px'; // Space between item text and button
            removeButton.onclick = () => {
                removeFromCart(index); // Remove item on button click
            };
            itemDiv.appendChild(removeButton);

            // Append the item div to the basket items container
            basketItems.appendChild(itemDiv);
        });
    }
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart array by index
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage with new cart
    displayCartItems(); // Refresh cart display
}

// Initial call to display items when the page loads
displayCartItems();
