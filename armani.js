// Product data
const products = [
  {
    id: 1,
    name: "In Love With You",
    price: 120,
    description: "A captivating fragrance.",
    image: "https://i.makeupstore.de/r/rd/rdppgfypx7b1.jpg"
  },
  {
    id: 2,
    name: "Because It's You",
    price: 140,
    description: "An unforgettable aroma.",
    image: "https://m.media-amazon.com/images/I/61XAym-FT2L.jpg"
  },
  {
    id: 3,
    name: "Stronger With You",
    price: 125,
    description: "A bold and elegant fragrance.",
    image: "https://i1.perfumesclub.com/grande/108209-3.jpg"
  }
];

// Function to add a product to the cart
function addToCart(productName, quantity) {
  alert(`${quantity} of ${productName} added to cart.`);
}

// Function to generate the product elements
function generateProductElements() {
  const productContainer = document.getElementById("product-list");
  productContainer.innerHTML = ""; // Clear the container before rendering

  products.forEach((product) => {
    console.log(`Generating product: ${product.name}`); // Debugging output
    const productElement = document.createElement("div");
    productElement.className = "image-box";
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="300" height="250" />
      <p>${product.name}</p>
      <p class="product--price">${product.price} €</p>
      <p>${product.description}</p>
      <div class="item-selection">
        <input type="number" value="1" min="1" id="quantity-${product.id}" />
        <button onclick="addToCart('${product.name}', document.getElementById('quantity-${product.id}').value)">Add to Cart</button>
      </div>
    `;
    productContainer.appendChild(productElement);
  });
}


// Sorting function
function sortProducts(criteria) {
  if (criteria === "price-asc") {
    products.sort((a, b) => a.price - b.price);
  } else if (criteria === "price-desc") {
    products.sort((a, b) => b.price - a.price);
  } else if (criteria === "name-asc") {
    products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (criteria === "name-desc") {
    products.sort((a, b) => b.name.localeCompare(a.name));
  }
  generateProductElements(); // Re-render sorted products
}

// Event listener for sorting dropdown
document.getElementById("sort").addEventListener("change", (event) => {
  sortProducts(event.target.value);
});

// Initial product rendering
document.addEventListener("DOMContentLoaded", generateProductElements);

// Array to hold cart items
// Array to hold cart items
const cart = []; 

// Function to add items to the cart
// Function to add items to the cart
function addToCart(productName, quantity) {
  console.log(`Attempting to add to cart: ${productName}, Quantity: ${quantity}`); // Debugging output
  const item = {
      name: productName,
      quantity: parseInt(quantity),
  };

  // Add item to the cart array
  cart.push(item);
  console.log(`${quantity} of ${productName} added to the cart`); // Debugging output
  console.log(cart); // To check cart items in the console

  // Update cart display on the page
  displayCart();
}


// Function to display cart items on the page
function displayCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ""; // Clear previous cart content

    // Check if cart is empty
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        // Generate HTML for each item in the cart
        cart.forEach(item => {
            const cartItem = document.createElement("p");
            cartItem.textContent = `${item.quantity} of ${item.name}`;
            cartContainer.appendChild(cartItem);
        });
    }
}
