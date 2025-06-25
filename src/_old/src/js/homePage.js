import "bootstrap/js/dist/collapse.js";

import { attachProducts } from "./functions/generateProductCards.js";
import { products } from "../data/products.js";

import shop_categories from "../data/shop_categories.js";


// ---------------------------------------------------------------------
const sortedProducts = [...products].sort((a, b) => (b.added) - (a.added))

// Attach first 8 products on sale to the HTML element with the id 'on-sale'.
const onSaleProducts = sortedProducts
    .filter((prods) => prods.sale && !prods.featured)
    .slice(0, 8);
attachProducts(onSaleProducts, "on-sale");

// Attach first 4 featured products to the HTML element with the id 'featured-items'.
const featuredProducts = sortedProducts
  .filter((prods) => prods.featured)
  .slice(0, 4);
attachProducts(featuredProducts, "featured-items");

// Attach "new-arrivals" section to include the first 4 products in the sorted array.
const arrivalProducts = sortedProducts
  .filter((prods) => !prods.featured && !prods.sale)
  .slice(0, 4);
attachProducts(arrivalProducts, "new-arrivals");



// ---------------------------------------------------------------------
// Insert Shop Categories to the HTML element with the id 'shopAccordian'
shop_categories("shopAccordian");


// Fix the accordian scroll issue
document.querySelectorAll('.accordion-item').forEach((item) => {
  item.addEventListener('shown.bs.collapse', () => {
    const scrollOffset = item.offsetTop - 68;
    window.scrollTo(0, scrollOffset);
  });
});

