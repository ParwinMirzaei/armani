// Select the basket icon in the navigation bar to update the item count
const basketIcon = document.querySelector('.basket-icon #basketCount');
let basket = [];

// Function to add item to basket
function addToBasket(item) {
    basket.push(item);
    updateBasketCount();
}

// Function to update basket count in the navbar
function updateBasketCount() {
    basketIcon.textContent = basket.length;
}

// Add event listeners to all "Add to Basket" buttons in the shopping section
document.querySelectorAll('.add-to-basket').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-item');
        addToBasket(itemName);
        alert(`${itemName} has been added to your basket.`);
    });
});
