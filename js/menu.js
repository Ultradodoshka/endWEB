const menuItems = [
    { id: 1, category: 'Starters', name: 'Pkhali', description: 'Spinach and walnut spread with pomegranate', price: 18 },
    { id: 2, category: 'Starters', name: 'Badrijani', description: 'Fried aubergine rolls with walnut filling', price: 22 },
    { id: 3, category: 'Starters', name: 'Lobio', description: 'Red bean stew in a clay pot with cornbread', price: 20 },
    { id: 4, category: 'Mains', name: 'Khinkali (5 pcs)', description: 'Beef and pork dumplings with black pepper', price: 28 },
    { id: 5, category: 'Mains', name: 'Chakapuli', description: 'Lamb stewed with tarragon and sour plums', price: 48 },
    { id: 6, category: 'Mains', name: 'Mtsvadi', description: 'Grilled pork skewers with tkemali', price: 45 },
    { id: 7, category: 'Breads', name: 'Imeruli Khachapuri', description: 'Imeretian cheese-filled bread', price: 24 },
    { id: 8, category: 'Breads', name: 'Adjaruli Khachapuri', description: 'Boat-shaped, cheese, butter and egg', price: 30 },
    { id: 9, category: 'Desserts', name: 'Churchkhela', description: 'Walnuts in grape-must coating', price: 12 },
    { id: 10, category: 'Desserts', name: 'Pelamushi', description: 'Grape pudding with walnuts', price: 14 }
];

let cart = [];

const menuContainer = document.getElementById('menu-container');
const searchInput = document.getElementById('searchInput');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

function renderMenu(itemsToRender) {
    menuContainer.innerHTML = '';

    itemsToRender.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.category}</td>
            <th scope="row">${item.name}</th>
            <td>${item.description}</td>
            <td class="text-end">${item.price} GEL</td>
            <td class="text-center">
                <button class="btn btn-sm btn-success add-to-cart-btn" data-id="${item.id}">+ Add</button>
            </td>
        `;
        menuContainer.appendChild(tr);
    });

    const addButtons = document.querySelectorAll('.add-to-cart-btn');
    addButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemId = parseInt(this.getAttribute('data-id'));
            addToCart(itemId);
        });
    });
}

function calculateTotal(cartArray) {
    let total = 0;
    for (let item of cartArray) {
        total += item.price;
    }
    return total;
}

function addToCart(id) {
    const item = menuItems.find(dish => dish.id === id);
    if (item) {
        cart.push(item);
        cartCount.textContent = cart.length;
        cartTotal.textContent = calculateTotal(cart);
    }
}

searchInput.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm)
    );
    renderMenu(filteredItems);
});

document.addEventListener('DOMContentLoaded', () => {
    renderMenu(menuItems);
});