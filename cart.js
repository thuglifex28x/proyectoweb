let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

// Lista de precios de productos
const productPrices = {
    'Procesador Intel Core i9': 500,
    'Procesador AMD Ryzen 9': 450,
    'Tarjeta Gráfica NVIDIA RTX 3080': 700,
    'Tarjeta Gráfica AMD Radeon RX 6800': 650,
    'Motherboard ASUS ROG': 250,
    'Motherboard MSI B450': 150,
};

// Función para añadir productos al carrito
function addToCart(product) {
    if (productPrices[product]) {
        cart.push(product);
        totalPrice += productPrices[product];
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', totalPrice.toString());
        alert(product + " ha sido añadido al carrito.");
    }
}

// Función para mostrar la página del carrito
function showCart() {
    window.location.href = "carrito.html";
}

// Función para obtener los detalles del carrito
function getCartDetails() {
    return cart.map(item => `${item} - $${productPrices[item]}`).join("\n");
}

// Función para calcular el total
function getTotal() {
    return totalPrice;
}

// Función para eliminar un producto del carrito
function removeFromCart(product) {
    const index = cart.indexOf(product);
    if (index > -1) {
        cart.splice(index, 1);
        totalPrice -= productPrices[product];
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('totalPrice', totalPrice.toString());
        alert(product + " ha sido eliminado del carrito.");
    }
}

// Función para limpiar el carrito (opcional)
function clearCart() {
    cart = [];
    totalPrice = 0;
    localStorage.removeItem('cart');
    localStorage.removeItem('totalPrice');
}
