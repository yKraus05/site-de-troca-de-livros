
// Dados dos produtos
const products = [
    {
        id: 1,
        name: "Kit É Assim Que Acaba + É Assim Que Começa",
        price: 152.90,
        image: "image/livro1.webp"
    },
    {
        id: 2,
        name: "Ed & Lorraine Warren - Lugar Sombrio",
        price: 59.99,
        image: "image/livro2.jpg"
    },
    {
        id: 3,
        name: "O grande livro da matematica",
        price: 42.99,
        image: "image/livro3.jpg"
    },
    {
        id: 4,
        name: "Trilogia Completa O Povo Do Ar",
        price: 179.99,
        image: "image/livro4.webp"
    },
    
];

// Estado do carrinho
let cart = [];

// Elementos DOM
const productsGrid = document.getElementById('products-grid');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

// Inicializar a página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();
});

// Renderizar produtos
function renderProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <a href="livro${product.id}.html"><button class="add-to-cart" data-id="${product.id}">Mais informações</button></a>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    // Adicionar event listeners aos botões
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

