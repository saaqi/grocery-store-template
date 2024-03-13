import generateProductCards from "./generate-product-cards.js";

import beverages from "./prduct_categories/beverages.js";
import fresh from "./prduct_categories/fresh.js";
import cigs from "./prduct_categories/cigs.js";

const products = [...beverages, ...fresh, ...cigs];
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
})

// Home Glide products
const home_glide_products = products.map(generateProductCards);
const homeGlideProdsElement = document.getElementById("home-glide-products");
if (homeGlideProdsElement) homeGlideProdsElement.innerHTML = home_glide_products.join("");



// Glide.js
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const glideProductsElements = document.querySelectorAll("#home-glide-products > li");
glideProductsElements.forEach((e) => {
  e.classList.add("glide__slide", "h-auto");
})

import Glide from "@glidejs/glide";
new Glide(".home-glide", {
  type: "carousel",
  perView: 5,
  swipeThreshold: 40,
  dragThreshold: 60,
  animationDuration: 250,
  peek: 20,
  breakpoints: {
    1200: {
      perView: 3,
    },
    768: {
      perView: 1,
    },
  },
}).mount();

