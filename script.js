// Sélection des éléments de navigation
let nav_elements = document.querySelectorAll('nav a');

// Fonction pour activer un lien de navigation
function activeNave(self) {
    // Retirer la classe "active" de tous les liens
    for (let i = 0; i < nav_elements.length; i++) {
        nav_elements[i].classList.remove('active');
    }
    // Ajouter la classe "active" au lien cliqué
    self.classList.add('active');
}

// Log de la hauteur de la fenêtre
console.log(innerHeight);

// Sélection des images principales et des petites images
const mainImage = document.getElementById("main-image");
const smallImages = document.querySelectorAll(".small-image");

// Tableaux des sources des images
const mainImageSources = ["images/1.png", "images/2.png", "images/5.png"];
const smallImageSources = [
    ["images/1.png", "images/1.png", "images/1.png"],
    ["images/2.png", "images/5.png", "images/4.png"],
    ["images/4.png", "images/4.png", "images/5.png"],
    ["images/5.png", "images/2.png", "images/2.png"]
];

// Index pour les images principales et petites images
let mainIndex = 0;
let smallIndices = [0, 0, 0, 0];

// Fonction pour changer les images
function changeImages() {
    // Début de la transition (on cache les images)
    mainImage.classList.add("hidden");
    smallImages.forEach(img => img.classList.add("hidden"));

    setTimeout(() => {
        // Changer l'image principale
        mainIndex = (mainIndex + 1) % mainImageSources.length;
        mainImage.src = mainImageSources[mainIndex];

        // Changer les petites images avec des décalages aléatoires
        smallImages.forEach((img, i) => {
            smallIndices[i] = (smallIndices[i] + 1) % smallImageSources[i].length;
            img.src = smallImageSources[i][smallIndices[i]];
        });

        // Fin de la transition (on réaffiche les images)
        mainImage.classList.remove("hidden");
        smallImages.forEach(img => img.classList.remove("hidden"));
    }, 500); // Attendre 0.5 seconde pour le changement
}

// Changement d'image toutes les 5 secondes
setInterval(changeImages, 5000);

// Animation de texte
const textElement = document.getElementById("typing-text");
const texts = [
    "BIENVENUE CHEZ BLÉ D'OR 🥖",
    "PAINS FRAIS & CHAUDS 🔥",
    "SAVEURS AUTHENTIQUES 🍞",
    "L’ART DU BON PAIN 💙",
    "INGRÉDIENTS NATURELS 🌿",
    "PASSION & TRADITION ✨",
    "UN GOÛT INOUBLIABLE 🚀"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[textIndex];
    if (!isDeleting) {
        // Ajouter une lettre
        textElement.textContent = currentText.substring(0, charIndex);
        charIndex++;

        // Si le texte est complètement écrit, attendre avant suppression
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeText, 1500); // Attente avant effacement
            return;
        }
    } else {
        // Effacer une lettre
        textElement.textContent = currentText.substring(0, charIndex);
        charIndex--;

        // Si le texte est complètement effacé, passer au suivant
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    // Vitesse de l'animation
    const typingSpeed = isDeleting ? 50 : 100; // Plus rapide à l'effacement
    setTimeout(typeText, typingSpeed);
}

// Lancer l'animation au chargement
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 500);
});

// Initialisation du slider Glide.js
document.addEventListener('DOMContentLoaded', function () {
    const slider = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 3000,
        hoverpause: true,
        animationDuration: 800,
    });

    // Changer la couleur de fond en fonction de la diapositive active
    slider.on('run', function () {
        const activeSlide = document.querySelector('.glide__slide--active');
        const color = activeSlide.getAttribute('data-color');
        document.querySelector('.slider-container').style.backgroundColor = color;
    });

    slider.mount();
});

// Fonction pour basculer le menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("open");
    document.querySelector(".menu").classList.toggle('active');
}

// Fonction pour activer un lien de navigation et fermer le menu sur mobile
function activeNave(element) {
    const navLinks = document.getElementById("navLinks");
    console.log(navLinks); // Vérifiez que l'élément est bien sélectionné

    // Retirer la classe "active" de tous les liens
    const links = document.querySelectorAll("#navLinks a");
    links.forEach((link) => link.classList.remove("active"));

    // Ajouter la classe "active" au lien cliqué
    element.classList.add("active");

    // Fermer le menu après avoir cliqué sur un lien (pour les petits écrans)
    if (window.innerWidth <= 884) {
        console.log("Suppression de la classe 'open'"); // Vérifiez que cette ligne est exécutée
        navLinks.classList.remove("open"); // Supprimer la classe "open" pour masquer le menu
        document.querySelector(".menu").classList.remove('active'); // Désactiver l'état du bouton menu
    }
}



function yeuxchange(){
    document.querySelector('.eyes').classList.toggle('hiddenn');
}



function toggleAnswer(element) {
    // Trouver l'élément parent .faq-item
    const faqItem = element.closest(".faq-item");
    if (!faqItem) {
        console.error("Error: No .faq-item found!");
        return;
    }

    // Trouver la réponse correspondante
    const answer = faqItem.querySelector(".answer");
    if (!answer) {
        console.error("Error: No .answer found inside .faq-item!");
        return;
    }

    // Basculer la visibilité de la réponse
    const isVisible = answer.classList.contains("visible");

    // Fermer toutes les réponses
    document.querySelectorAll(".answer").forEach(ans => {
        ans.classList.remove("visible");
        ans.style.maxHeight = "0"; // Réinitialiser la hauteur
    });

    // Ouvrir la réponse actuelle si elle était fermée
    if (!isVisible) {
        answer.classList.add("visible");
        answer.style.maxHeight = answer.scrollHeight + "px"; // Ajuster la hauteur au contenu
        answer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

const products = [
    { category: 'patisserie', img: 'images/patesserie/1.png', title: 'Fraisier', price: '5DH' },
    { category: 'patisserie', img: 'images/patesserie/2.png', title: 'Cupcake à la framboise et au chocolat', price: '3DH' },
    { category: 'patisserie', img: 'images/patesserie/3.png', title: 'Cheesecake caramel et chocolat', price: '4DH' },
    { category: 'patisserie', img: 'images/patesserie/4.png', title: 'Bretzels au chocolat et aux éclats de noisettes', price: '4,5DH' },
    { category: 'patisserie', img: 'images/patesserie/5.png', title: 'Éclair au chocolat avec framboises', price: '6DH' },
    { category: 'patisserie', img: 'images/patesserie/6.png', title: 'Tarte aux fraises', price: '5,5DH' },
    { category: 'patisserie', img: 'images/patesserie/7.png', title: 'Cheesecake aux cerises', price: '5DH' },
    { category: 'patisserie', img: 'images/patesserie/8.png', title: 'Mille-feuille au caramel', price: '6DH' },
    { category: 'patisserie', img: 'images/patesserie/9.png', title: 'Gâteau aux graines de pavot', price: '4,5DH' },
    { category: 'patisserie', img: 'images/patesserie/10.png', title: 'Gâteau Opéra', price: '6DH' },

    { category: 'viennoiseries', img: 'images/vie/1.png', title: 'Pain au chocolat tressé', price: '5DH' },
    { category: 'viennoiseries', img: 'images/vie/2.png', title: 'Croissant', price: '4DH' },
    { category: 'viennoiseries', img: 'images/vie/3.png', title: 'Brioche tressée', price: '4,5DH' },
    { category: 'viennoiseries', img: 'images/vie/4.png', title: 'Couronne briochée avec sucre perlé', price: '6DH' },
    { category: 'viennoiseries', img: 'images/vie/5.png', title: 'Croissant au chocolat avec copeaux de chocolat', price: '5,5DH' },
    { category: 'viennoiseries', img: 'images/vie/6.png', title: 'Pain aux raisins', price: '4DH' },
    { category: 'viennoiseries', img: 'images/vie/7.png', title: 'hou à la crème avec nappage au miel', price: '5DH' },
    { category: 'viennoiseries', img: 'images/vie/8.png', title: 'Cinnamon roll', price: '4DH' },
    { category: 'viennoiseries', img: 'images/vie/9.png', title: 'Kouglof', price: '3,5DH' },
    { category: 'viennoiseries', img: 'images/vie/10.png', title: 'Brioche torsadée au sucre et aux graines', price: '5DH' },

    { category: 'pain', img: 'images/pain/1.png', title: 'Pain de campagne', price: '4DH' },
    { category: 'pain', img: 'images/pain/2.png', title: 'Pain aux céréales', price: '6DH' },
    { category: 'pain', img: 'images/pain/3.png', title: 'Pain complet tranché', price: '3,5DH' },
    { category: 'pain', img: 'images/pain/4.png', title: 'Pain brioché', price: '2DH' },
    { category: 'pain', img: 'images/pain/5.png', title: 'Pain boule', price: '4DH' },
    { category: 'pain', img: 'images/pain/6.png', title: 'Petit pain blanc', price: '7DH' },
    { category: 'pain', img: 'images/pain/7.png', title: 'Pain burger', price: '4DH' },
    { category: 'pain', img: 'images/pain/8.png', title: 'Pain aux raisins ou cake aux fruits', price: '3DH' },
    { category: 'pain', img: 'images/pain/9.png', title: 'Baguette traditionnelle', price: '2,5DH' },
    { category: 'pain', img: 'images/pain/10.png', title: 'Pain de mie', price: '4,5DH' }
];



function displayProducts(category) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    let filteredProducts = products.filter(product => category === 'all' || product.category === category);

    if (category === 'all') {
        filteredProducts = [
            ...products.filter(p => p.category === 'patisserie').slice(0, 5),
            ...products.filter(p => p.category === 'viennoiseries').slice(0, 5),
            ...products.filter(p => p.category === 'pain').slice(0, 5)
        ];
    }

    filteredProducts.forEach((product, index) => {
        let div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
            <img src="${product.img}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <button class="cta">Acheter</button>
        `;
        container.appendChild(div);

        setTimeout(() => {
            div.style.opacity = '1';
            div.style.transform = 'scale(1)';
        }, 100 * (index + 1));
    });
}

function filterProducts(category) {
    displayProducts(category);
}

window.onload = () => displayProducts('patisserie');

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    // Ajouter ou supprimer la classe "scrolled" en fonction de la position de défilement
    if (scrollPosition > 50) { // 50px est la position de défilement pour déclencher le changement
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function () {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const scrollPosition = window.scrollY;

    // Afficher le bouton après 200px de défilement
    if (scrollPosition > 200) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Gérer le clic sur le bouton
function tohaut() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.style.scrollBehavior = "smooth";
});

function yeuxchange() {
    var passwordInput = document.getElementById("item2");
    var toggleButton = document.getElementById("toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "masquer le password  🙈"; // Icône œil barré
        document.querySelector('.eyes').classList.add('hiddenn');
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "afficher le password  👁"; // Icône œil ouvert
        document.querySelector('.eyes').classList.remove('hiddenn');
    }
}

// Sélectionner le cercle
const mouseCircle = document.getElementById('mouse-circle');

// Suivre la position de la souris
document.addEventListener('mousemove', function (e) {
    // Mettre à jour la position du cercle
    mouseCircle.style.left = `${e.clientX}px`;
    mouseCircle.style.top = `${e.clientY}px`;
});

// Optionnel : Cacher le cercle lorsque la souris quitte la fenêtre
document.addEventListener('mouseleave', function () {
    mouseCircle.style.opacity = '0';
});

// Optionnel : Afficher le cercle lorsque la souris revient dans la fenêtre
document.addEventListener('mouseenter', function () {
    mouseCircle.style.opacity = '1';
});



// Fonction pour ajouter un produit au panier
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Vérifier si le produit est déjà dans le panier
    const existingProduct = cart.find(item => item.title === product.title);

    if (existingProduct) {
        // Si le produit existe, augmenter la quantité
        existingProduct.quantity++;
    } else {
        // Sinon, ajouter le produit avec une quantité initiale de 1
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Sauvegarder le panier
    alert(`${product.title} a été ajouté au panier !`);
}

// Ajouter un événement au clic sur les boutons "Acheter"
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('cta')) {
        const productElement = e.target.closest('.product');
        const product = {
            img: productElement.querySelector('img').src,
            title: productElement.querySelector('h3').textContent,
            price: productElement.querySelector('p').textContent.replace('DH', '').trim()
        };
        addToCart(product);
    }
});

// Fonction pour ajouter un produit au panier
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Vérifier si le produit est déjà dans le panier
    const existingProduct = cart.find(item => item.title === product.title);

    if (existingProduct) {
        // Si le produit existe, augmenter la quantité
        existingProduct.quantity++;
    } else {
        // Sinon, ajouter le produit avec une quantité initiale de 1
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Sauvegarder le panier
    alert(`${product.title} a été ajouté au panier !`);
}

// Ajouter un événement au clic sur les boutons "Acheter"
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('cta')) {
        const productElement = e.target.closest('.product');
        const product = {
            img: productElement.querySelector('img').src,
            title: productElement.querySelector('h3').textContent,
            price: productElement.querySelector('p').textContent.replace('DH', '').trim()
        };
        addToCart(product);
    }
});