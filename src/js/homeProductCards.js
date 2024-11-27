import "bootstrap/js/dist/collapse.js";

import { attachProducts } from "./functions/generateProductCards.js";
import { attachSocialLinksByClass } from "./functions/attachSocialLinks";

import shop_categories from "./data/shop_categories.js";


import fresh_fruits from "../products/fresh_fruits.json";
import fresh_vegetables from "../products/fresh_vegetables.json";
import frozen_meats from "../products/frozen_meats.json";
import frozen_seafood from "../products/frozen_seafood.json";
import frozen_vegetables from "../products/frozen_vegetables.json";
import crown_foods from "../products/crown_foods.json";
import telecommunications from "../products/telecommunications.json";

// Combine all products from different categories into one array
const products = [
  ...fresh_fruits,
  ...fresh_vegetables,
  ...frozen_meats,
  ...frozen_seafood,
  ...frozen_vegetables,
  ...crown_foods,
  ...telecommunications,
].map((item, index) => {
  return {
    ...item,
    id: `products-${index}`
  };
});


// Sort the products array by the 'added' property in descending order
const dateSortedProducts = [...products].sort((a, b) => (b.added) - (a.added));




// Attach and modify the "new-arrivals" section to include the first 4 products in the sorted array.
const arrivalProducts = dateSortedProducts.slice(0, 4);
attachProducts(arrivalProducts, "new-arrivals");


// Attach first 8 featured products to the HTML element with the id 'featured-items'.
const featuredProducts = dateSortedProducts.filter((prods) => prods.featured).slice(0, 8);
attachProducts(featuredProducts, "featured-items");


// Attach first 8 products on sale to the HTML element with the id 'on-sale'.
const onSaleProducts = dateSortedProducts.filter((prods) => prods.sale).slice(0, 8);
attachProducts(onSaleProducts, "on-sale");



// Insert Shop Categories
shop_categories("shopAccordian");

// Attach the shops data to their respective categories
attachProducts(products.filter((p) => p.cat === 'Fresh Fruits'), "fresh_fruits");
attachProducts(products.filter((p) => p.cat === 'Fresh Vegetables'), "fresh_vegetables");
attachProducts(products.filter((p) => p.cat === 'Frozen Meats'), "frozen_meats");
attachProducts(products.filter((p) => p.cat === 'Frozen Seafood'), "frozen_seafood");
attachProducts(products.filter((p) => p.cat === 'Frozen Vegetables'), "frozen_vegetables");
attachProducts(products.filter((p) => p.cat === 'Crown Foods'), "crown_foods");
attachProducts(products.filter((p) => p.cat === 'Telecommunications'), "telecommunications");

// Fix the accordian scroll issue
document.querySelectorAll('.accordion-item').forEach((item) => {
  item.addEventListener('shown.bs.collapse', () => {
    const scrollOffset = item.offsetTop - 68;
    window.scrollTo(0, scrollOffset);
  });
});



// Product Cards Modals Social Links
attachSocialLinksByClass('.modal-header .social-links');
