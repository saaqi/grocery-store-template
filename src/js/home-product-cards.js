import generateProductCards from "./functions/generate-product-cards.js";
import generateGlideCards from "./functions/generate-glide-cards.js";
import fresh_fruit from "./data/fresh_fruit.js";

const products = [...fresh_fruit];
products.sort((a, b) => (b.added) - (a.added));

// New Arrivals First 4 products
const firstFourProdsReturn = products.slice(0, 4).map(generateProductCards);
const arrivalProdsParent = document.getElementById("new-arrivals");
if (arrivalProdsParent) arrivalProdsParent.innerHTML = firstFourProdsReturn.join("");
const arrivalProdsElements = document.querySelectorAll("#new-arrivals > li");
arrivalProdsElements.forEach((e) => {
  e.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
});

// Featured products
const featuredProdsReturn = products.filter((prods) => prods.featured).map(generateProductCards);
const featuredProdsParent = document.getElementById("featured-items");
if (featuredProdsParent) featuredProdsParent.innerHTML = featuredProdsReturn.join("");
const featuredProdsElements = document.querySelectorAll("#featured-items > li");
featuredProdsElements.forEach((e) => {
  e.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
});

// Generate Glide Cards
generateGlideCards(fresh_fruit, 'fruit-shop');
