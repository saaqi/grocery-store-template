import generateProductCards from "./generate-product-cards.js";

import beverages from "./prduct_categories/beverages.js";
import fresh from "./prduct_categories/fresh.js";
import cigs from "./prduct_categories/cigs.js";

const products = [...beverages, ...fresh, ...cigs];
products.sort((a, b) => (b.added) - (a.added));

// First 4 products
const firstFourProdsReturn = products.slice(0, 4).map(generateProductCards);
const arrivalProdsElement = document.getElementById("new-arrivals");
if (arrivalProdsElement) arrivalProdsElement.innerHTML = firstFourProdsReturn.join("");

// Featured products
const featuredProdsReturn = products.filter((prods) => prods.featured).map(generateProductCards);
const featuredProdsElement = document.getElementById("featured-items");
if (featuredProdsElement) featuredProdsElement.innerHTML = featuredProdsReturn.join("");

// Home Glide products
const home_glide_products = products.filter((prods) => prods.featured).map(generateProductCards);
const homeGlideProdsElement = document.getElementById("home-glide-products");
if (homeGlideProdsElement) homeGlideProdsElement.innerHTML = home_glide_products.join("");



// Glide.js
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

import Glide from "@glidejs/glide";
// new Glide(".glide").mount();
var glide = new Glide(".glide", {
  type: "carousel",
  perView: 3,
  // gap: 10,
  swipeThreshold: 40,
  dragThreshold: 60,
  animationDuration: 250,
  focusAt: "center",
  peek: 20,
  breakpoints: {
    992: {
      perView: 1,
    },
    // 768: {
    //   perView: 1,
    // },
  },
});
glide.mount();
