const productsData = [
  { id: 1, name: "Modelo 1", price: 1000000 },
  { id: 2, name: "Modelo 2", price: 1500000 },
];

let cart = [];
let totalPrice = 0;

// productos en pagina
function displayProducts() {
  const productList = document.getElementById("products");
  productList.innerHTML = "";

  productsData.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${product.name} - $${product.price.toFixed(2)} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(listItem);
  });
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  totalPrice = 0;

  cart.forEach((item) => {
    const product = productsData.find((p) => p.id === item.id);
    const listItem = document.createElement("li");
    listItem.innerHTML = `${product.name} - $${product.price.toFixed(2)}`;
    cartItems.appendChild(listItem);
    totalPrice += product.price;
  });

  cartTotal.innerHTML = totalPrice.toFixed(2);
}

function addToCart(productId) {
  const product = productsData.find((p) => p.id === productId);
  if (product) {
    cart.push({ id: product.id });
    updateCart();
  }
}

function checkout() {
  alert("Gracias por su compra!");
  cart = [];
  updateCart();
}

displayProducts();

// Add event listener for the checkout button
const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", checkout);
