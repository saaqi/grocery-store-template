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
