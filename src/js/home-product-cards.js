import generateProductCards from "./functions/generate-product-cards.js";
import fresh_fruit from "./data/fresh_fruit.js";
import fresh_vegetables from "./data/fresh_vegetables.js";

const products = [...fresh_fruit, ...fresh_vegetables];
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


// Fresh Fruits
const freshFruitOutput = fresh_fruit.map(generateProductCards);
const fruitShopParent = document.getElementById("fruit-shop");
if (fruitShopParent) fruitShopParent.innerHTML = freshFruitOutput.join("");
const fruitShopElements = document.querySelectorAll("#fruit-shop > li");
fruitShopElements.forEach((e) => {
  e.classList.add('col-6', 'col-md-4', 'col-lg-3');
});
// Fresh Vegetables
const freshVegetablesOutput = fresh_vegetables.map(generateProductCards);
const vegetableShopParent = document.getElementById("vegetable-shop");
if (vegetableShopParent) vegetableShopParent.innerHTML = freshVegetablesOutput.join("");
const vegetableShopElements = document.querySelectorAll("#vegetable-shop > li");
vegetableShopElements.forEach((e) => {
  e.classList.add('col-6', 'col-md-4', 'col-lg-3');
});
