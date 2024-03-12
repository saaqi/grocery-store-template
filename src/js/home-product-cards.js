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
