const products = [
    {
      id: 1,
      name: "In Love With You",
      price: "120 €",
      image: "https://i.makeupstore.de/r/rd/rdppgfypx7b1.jpg",
    },
    {
      id: 2,
      name: "Because It's You",
      price: "140 €",
      image: "https://m.media-amazon.com/images/I/61XAym-FT2L.jpg",
    },
    {
      id: 3,
      name: "Stronger With You",
      price: "125 €",
      image: "https://i1.perfumesclub.com/grande/108209-3.jpg",
    },
  ];
  
  function generateProductElements() {
    const productContainer = document.getElementById("product-list");
    console.log("Product container:", productContainer); // Verify the container is selected
  
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("image-box");
  
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="300" height="250" />
        <p>${product.name}</p>
        <p class="product--price">${product.price}</p>
        <div class="item-selection">
          <input type="number" value="1" min="1" id="item-${product.id}-quantity" />
          <button onclick="addToCart('${product.name}', document.getElementById('item-${product.id}-quantity').value)">Add to Cart</button>
        </div>
      `;
  
      productContainer.appendChild(productElement);
    });
    console.log("Products generated.");
  }
  
  document.addEventListener("DOMContentLoaded", generateProductElements);
  