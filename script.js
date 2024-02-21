// Sample products data (replace with your actual product data)
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 24.99 }
];

// Function to render products in the grid
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="product${product.id}.jpg" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(productElement);
    });
}

// Function to handle adding a product to the cart
function addToCart(productId) {
    // Find the product in the products array
    const product = products.find(p => p.id == productId);
    if (product) {
        // Add the product to the cart (you can replace this with your actual cart logic)
        console.log(`Added ${product.name} to cart`);
    }
}

// Event listener for adding a product to the cart
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = event.target.getAttribute('data-id');
        addToCart(productId);
    }
});

// Initial render of products
ren
