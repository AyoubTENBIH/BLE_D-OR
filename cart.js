// Charger le panier depuis le stockage local
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Sélectionner les éléments HTML
const cartContent = document.getElementById('cart-content');
const checkoutBtn = document.getElementById('checkout-btn');

// Fonction pour afficher le contenu du panier
function renderCart() {
    cartContent.innerHTML = ''; // Vider le contenu précédent

    if (cart.length === 0) {
        cartContent.innerHTML = '<p>Votre panier est vide.</p>';
        checkoutBtn.style.display = 'none'; // Cacher le bouton de commande si le panier est vide
        return;
    }

    checkoutBtn.style.display = 'block'; // Afficher le bouton de commande

    cart.forEach((item, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');
        productDiv.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-details">
                <h3>${item.title}</h3>
                <p>Prix : ${item.price} DH</p>
                <p>Total : ${(parseFloat(item.price) * item.quantity).toFixed(2)} DH</p>
                <div class="cart-item-actions">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                    <button onclick="removeFromCart(${index})">Supprimer</button>
                </div>
            </div>
        `;
        cartContent.appendChild(productDiv);
    });
}

// Fonction pour mettre à jour la quantité d'un produit
function updateQuantity(index, change) {
    cart[index].quantity += change;

    // Si la quantité devient 0, supprimer le produit
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart(); // Sauvegarder le panier
    renderCart(); // Mettre à jour l'affichage
}

// Fonction pour supprimer un produit du panier
function removeFromCart(index) {
    cart.splice(index, 1); // Supprimer le produit
    saveCart(); // Sauvegarder le panier
    renderCart(); // Mettre à jour l'affichage
}

// Fonction pour sauvegarder le panier dans le stockage local
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Fonction pour passer la commande
function checkout() {
    if (cart.length === 0) {
        alert('Votre panier est vide.');
        return;
    }

    alert('Commande passée avec succès !');
    cart = []; // Vider le panier
    saveCart(); // Sauvegarder le panier
    renderCart(); // Mettre à jour l'affichage
}

// Ajouter un événement au clic sur le bouton de commande
checkoutBtn.addEventListener('click', checkout);

// Afficher le panier au chargement de la page
renderCart();