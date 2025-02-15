const itemsContainer = document.querySelector(".items-container"); 
const cart = [];
// Select elements
const cartButton = document.getElementById("cartButton"); // The button that toggles the dropdown
const cartDropdown = document.querySelector(".dropdown-container"); // The dropdown container




function toggleDropdown() {
    console.log("clicked");
    cartDropdown.classList.toggle("show"); // Toggle visibility
}

// Add event listener to the button
if (cartButton) {
    cartButton.addEventListener("click", toggleDropdown);
}


function openDropdown() {
    cartDropdown.classList.add("show");
    console.log("clicked");
}




const productos = [
    { 
        id: 1, 
        nombre: "Laptop Dell XPS 15", 
        categoria: "Computers", 
        precio: 1500, 
        descripcion: "Powerful and sleek laptop with a 15-inch 4K display, Intel Core i7, and 16GB RAM." ,
        image: "images/product-1-image.jpg"
    },
    { 
        id: 2, 
        nombre: "MacBook Air M2", 
        categoria: "Computers", 
        precio: 1300, 
        descripcion: "Ultra-thin and lightweight laptop with Apple's M2 chip, 13-inch Retina display, and long battery life." ,
        image: "images/product-1-image.jpg"
    },
    { 
        id: 3, 
        nombre: "Samsung Galaxy S23", 
        categoria: "Phones", 
        precio: 900, 
        descripcion: "Flagship smartphone with a powerful camera, Snapdragon 8 Gen 2, and 120Hz AMOLED display.",
        image: "images/product-1-image.jpg" 
    },
    { 
        id: 4, 
        nombre: "iPhone 15 Pro", 
        categoria: "Phones", 
        precio: 1200, 
        descripcion: "Premium Apple smartphone with an A17 chip, ProMotion display, and titanium body." ,
        image: "images/product-1-image.jpg"
    },
    { 
        id: 5, 
        nombre: "Google Pixel 7", 
        categoria: "Phones", 
        precio: 800, 
        descripcion: "AI-powered smartphone with an advanced camera system and clean Android experience." ,
        image: "images/product-1-image.jpg"
    },
    { 
        id: 6, 
        nombre: "LG OLED C3 55''", 
        categoria: "TVs", 
        precio: 1600,  
        descripcion: "Stunning 55-inch OLED TV with perfect blacks, Dolby Vision, and gaming features." ,
        image: "images/product-1-image.jpg"
    },
    { 
        id: 7, 
        nombre: "Samsung QLED 4K 65''", 
        categoria: "TVs", 
        precio: 1400, 
        descripcion: "Immersive 65-inch QLED TV with 4K resolution, HDR, and high refresh rate." ,
        image: "images/product-1-image.jpg"
    },
    { 
        id: 8, 
        nombre: "Sony Bravia XR 75''", 
        categoria: "TVs", 
        precio: 2000, 
        descripcion: "Massive 75-inch 4K TV with Cognitive Processor XR and exceptional motion handling." ,
        image: "images/product-1-image.jpg"
    },
    { 
        id: 9, 
        nombre: "Monitor Gaming ASUS 27''", 
        categoria: "Computers", 
        precio: 500, 
        descripcion: "27-inch gaming monitor with 165Hz refresh rate, 1ms response time, and G-Sync support." ,
        image: "images/product-1-image.jpg"
    },
    { 
        id: 10, 
        nombre: "Tablet iPad Pro 12.9''", 
        categoria: "Computers", 
        precio: 1100, 
        descripcion: "High-performance tablet with an M2 chip, Liquid Retina XDR display, and Apple Pencil ,support." ,
        image: "images/product-1-image.jpg"
    }
];





function updateCartCount() {
    let cartCount = cart.length;  // Update the cart count
    let cartButton = document.querySelector("#cartButton");
    cartButton.innerHTML ="Checkout " + cartCount + " items";  // Update the button text with the cart count

    if (cartCount > 0) {
        cartButton.style.backgroundColor = "black";
        cartButton.style.color = "white";
    }    
}

productos.forEach(producto => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-card");
    productDiv.innerHTML = ` 
        <img src="${producto.image}" alt="${producto.nombre}">
        <div class="description-container" style="padding: 16px;">
            <div class="top">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>${producto.precio}€</p>
            </div>
            <button class="btn" onclick="addToCart(${producto.id}); openDropdown();">Add to Cart</button>
        </div>
    `;
    
    // Append the productDiv to the items container
    itemsContainer.appendChild(productDiv);
});






function addToCart(productId) {
    cart.push(productId);
    updateCartCount();
    updateCartDropdown();  // Make sure to update the dropdown
}


function removeFromCart(productId) {
    cart.splice(productId);
    updateCartCount();
    updateCartDropdown();  // Make sure to update the dropdown
}

function updateCartDropdown() {
    const cartDropdown = document.querySelector("#cart-dropdown"); 
    cartDropdown.innerHTML = ""; // Clear previous items

    // Convert cart IDs into product objects
    const cartItems = cart.map(cartId => productos.find(producto => producto.id === cartId));

    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = 
            `<div class="dropdown-item"><img class="item-img" src="${item.image}" alt="${item.nombre}" style="width: 50px; height: 50px;">
                <p>${item.nombre}<br>${item.precio}€</p><button class="remove-btn"><img src="trash.svg"></button>
            </div>`
        ;  // Show product name instead of ID
        cartDropdown.appendChild(li);
    });
}

function logCart() {
    console.log(cart.map(id => productos.find(p => p.id === id)));  // Log product objects
}






