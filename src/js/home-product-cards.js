import attachProducts from "./functions/attachProductsCards.js";
import fresh_fruits from "./data/fresh_fruits.js";
import fresh_vegetables from "./data/fresh_vegetables.js";
import frozen_meats from "./data/frozen_meats.js";



// Combine all products from different categories into one array
const products = [...fresh_fruits, ...fresh_vegetables, ...frozen_meats];

// Sort the products array by the 'added' property in descending order
products.sort((a, b) => (b.added) - (a.added));

// Attach the 4 newest arrival products to the "new-arrivals" section
attachProducts(products.slice(0, 4), "new-arrivals");

// Query and style each element in the "new-arrivals" section
const arrivalProdsElements = document.querySelectorAll("#new-arrivals > li");
arrivalProdsElements.forEach((e) => {
  // Add Bootstrap CSS classes for responsive grid layout
  e.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
});




// Attach the featured products to the HTML element with the id 'featured-items'.
// Filter the 'products' array to include only the products with the 'featured' property set to true.
// Select the first 8 elements of the resulting array.
attachProducts(products.filter((prods) => prods.featured).slice(0, 8), "featured-items");

// Query all the list items inside the HTML element with the id 'featured-items'.
const featuredProdsElements = document.querySelectorAll("#featured-items > li");
featuredProdsElements.forEach((e) => {
  // Add Bootstrap CSS classes for responsive grid layout
  e.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
});




// Attach the 'fresh_fruits' products to the HTML element with the id 'fruit-shop'.
attachProducts(fresh_fruits, "fruit-shop");
// Query and style each element in the "fruit-shop" section
const fruitShopElements = document.querySelectorAll("#fruit-shop > li");
fruitShopElements.forEach((e) => {
  // Add Bootstrap CSS classes for responsive grid layout
  e.classList.add('col-6', 'col-md-4', 'col-lg-3');
});

// Attach the 'fresh_vegetables' products to the HTML element with the id 'vegetable-shop'.
attachProducts(fresh_vegetables, "vegetable-shop");
// Query and style each element in the "vegetable-shop" section
const vegetableShopElements = document.querySelectorAll("#vegetable-shop > li");
vegetableShopElements.forEach((e) => {
  // Add Bootstrap CSS classes for responsive grid layout
  e.classList.add('col-6', 'col-md-4', 'col-lg-3');
});

// Attach the 'frozen_meats' products to the HTML element with the id 'frozen-meats-shop'.
attachProducts(frozen_meats, "frozen-meats-shop");
// Query and style each element in the "frozen-meats-shop" section
const frozenMeatsShopElements = document.querySelectorAll("#frozen-meats-shop > li");
frozenMeatsShopElements.forEach((e) => {
  // Add Bootstrap CSS classes for responsive grid layout
  e.classList.add('col-6', 'col-md-4', 'col-lg-3');
});

