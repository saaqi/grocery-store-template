import generateProductCards from "./generate-product-cards.js";

import fresh_fruit from "./data/fresh_fruit.js";
// import cigs from "./data/cigs.js";

// const products = [...fresh_fruit, ...cigs];
const products = [...fresh_fruit];
products.sort((a, b) => (b.added) - (a.added));

// New Arrivals First 4 products
const fresh_fruits = products.map(generateProductCards);
const freshFruitsParent = document.getElementById("fresh-fruits");
if (freshFruitsParent) freshFruitsParent.innerHTML = fresh_fruits.join("");
const freshFruitsElements = document.querySelectorAll("#fresh-fruits > li");
freshFruitsElements.forEach((e) => {
  e.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
});



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
