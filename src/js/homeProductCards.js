import "bootstrap/js/dist/collapse.js";

import { attachProducts } from "./functions/generateProductCards.js";
import { attachSocialLinksByClass } from "./functions/attachSocialLinks";

import shop_categories from "./data/shop_categories.js";


// Combine all products from different categories into one array
import fresh_fruits from "./data/fresh_fruits.js";
import fresh_vegetables from "./data/fresh_vegetables.js";
import frozen_meats from "./data/frozen_meats.js";
import frozen_seafood from "./data/frozen_seafood.js";
import frozen_vegetables from "./data/frozen_vegetables.js";
import crown_foods from "./data/crown_foods.js";
const products = [
  ...fresh_fruits,
  ...fresh_vegetables,
  ...frozen_meats,
  ...frozen_seafood,
  ...frozen_vegetables,
  ...crown_foods,
];

// Sort the products array by the 'added' property in descending order
products.sort((a, b) => (b.added) - (a.added));





// Attach and modify the "new-arrivals" section
const arrivalProducts = products.slice(0, 4);
attachProducts(arrivalProducts, "new-arrivals");


// Attach first 8 featured products to the HTML element with the id 'featured-items'.
const featuredProducts = products.filter((prods) => prods.featured).slice(0, 8);
attachProducts(featuredProducts, "featured-items");


// Attach first 8 products on sale to the HTML element with the id 'on-sale'.
const onSaleProducts = products.filter((prods) => prods.sale).slice(0, 8);
attachProducts(onSaleProducts, "on-sale");



// Insert Shop Categories
shop_categories("shopAccordian");

// Attach the shops data to their respective categories
attachProducts(fresh_fruits, "fresh_fruits");
attachProducts(fresh_vegetables, "fresh_vegetables");
attachProducts(frozen_meats, "frozen_meats");
attachProducts(frozen_seafood, "frozen_seafood");
attachProducts(frozen_vegetables, "frozen_vegetables");
attachProducts(crown_foods, "crown_foods");

// Fix the accordian scroll issue
document.querySelectorAll('.accordion-item').forEach((item) => {
  item.addEventListener('shown.bs.collapse', () => {
    const scrollOffset = item.offsetTop - 73;
    window.scrollTo(0, scrollOffset);
  });
});



// Product Cards Modals Social Links
attachSocialLinksByClass('.modal-header .social-links');
