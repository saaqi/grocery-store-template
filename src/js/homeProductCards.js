import "bootstrap/js/dist/collapse.js";

import attachProducts from "./functions/attachProductsCards.js";
import shop_categories from "./data/shop_categories.js";
import fresh_fruits from "./data/fresh_fruits.js";
import fresh_vegetables from "./data/fresh_vegetables.js";
import frozen_meats from "./data/frozen_meats.js";
import frozen_seafood from "./data/frozen_seafood.js";



// Combine all products from different categories into one array
const products = [...fresh_fruits, ...fresh_vegetables, ...frozen_meats, ...frozen_seafood];

// Sort the products array by the 'added' property in descending order
products.sort((a, b) => (b.added) - (a.added));





// Attach the 4 newest arrival products to the "new-arrivals" section
attachProducts(products.slice(0, 4), "new-arrivals");

// Query and style each element in the "new-arrivals" section
// const arrivalProdsElements = document.querySelectorAll("#new-arrivals > li");
// arrivalProdsElements.forEach((e) => {
//   // Add Bootstrap CSS classes for responsive grid layout
//   e.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
// });




// Attach first 8 featured products to the HTML element with the id 'featured-items'.
attachProducts(products.filter((prods) => prods.featured).slice(0, 8), "featured-items");

// Query all the list items inside the HTML element with the id 'featured-items'.
// const featuredProdsElements = document.querySelectorAll("#featured-items > li");
// featuredProdsElements.forEach((e) => {
//   // Add Bootstrap CSS classes for responsive grid layout
//   e.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
// });


// Insert Shop Categories
shop_categories("shopAccordian");

// Attach the shops data to their respective categories
attachProducts(fresh_fruits, "fresh_fruits");
attachProducts(fresh_vegetables, "fresh_vegetables");
attachProducts(frozen_meats, "frozen_meats");
attachProducts(frozen_seafood, "frozen_seafood");

// Fix the accordian scroll issue
document.querySelectorAll('.accordion-item').forEach((item) => {
  item.addEventListener('shown.bs.collapse', () => {
    const scrollOffset = item.offsetTop - 80;
    window.scrollTo(0, scrollOffset);
  });
});
