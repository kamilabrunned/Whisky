let cart = [];
let total = 0;

function addToCart() {
    const item = {
        name: 'Whisky',
        price: 80,
    };
    cart.push(item);
    total += item.price;
    updateCartUI();
}

function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    total -= removedItem.price;
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - ${item.price} SEK <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(listItem);
    });
    totalPrice.textContent = total;
}

function toggleCartSlide() {
    const cartSlide = document.getElementById('cart-slide');
    if (cartSlide.style.right === '0px' || cartSlide.style.right === '') {
        cartSlide.style.right = '-300px';
    } else {
        cartSlide.style.right = '0px';
    }
}
