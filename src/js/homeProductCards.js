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

// Attach the 'fresh_fruits' products to the HTML element with the id 'fruit-shop'.
attachProducts(fresh_fruits, "fruit-shop");

// Attach the 'fresh_vegetables' products to the HTML element with the id 'vegetable-shop'.
attachProducts(fresh_vegetables, "vegetable-shop");

// Attach the 'frozen_meats' products to the HTML element with the id 'frozen-meats-shop'.
attachProducts(frozen_meats, "frozen-meats-shop");

// Attach the 'frozen_seafood' products to the HTML element with the id 'frozen-meats-shop'.
attachProducts(frozen_seafood, "frozen-seafood-shop");

// Fix the accordian scroll issue
document.querySelectorAll('.accordion-item').forEach((item) => {
  item.addEventListener('shown.bs.collapse', () => {
    const scrollOffset = item.offsetTop - 76;
    window.scrollTo(0, scrollOffset);
  });
});








// const navAccButton = document.querySelectorAll("#navbar > li.nav-item.dropdown > a");
// const selector = navAccButton.getAttribute("href");
// console.log(selector)
// navAccButton.forEach((button) => button.addEventListener("click", () => {
//   // const collapseElement = document.querySelector('#' + selector + ' .accordion-collapse');
//   // collapseElement.classList.add("show");
//   // button.setAttribute("aria-expanded", "true");
// }));


// <li class="nav-item dropdown"><a class="nav-link link-dark dropdown-toggle shop show" scroll-spy-target="#shop" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true"><i class="bx bxs-store"></i> Shop</a><ul class="dropdown-menu bg-secondary show" aria-labelledby="navbarDropdown" data-bs-popper="static"><li class="nav-item"><a class="dropdown-item fw-medium fruit-shop-heading" href="#fruit-shop-heading" data-bs-dismiss="offcanvas" data-bs-target="#bdNavbar"><i class="bx bxs-purchase-tag"></i> Fresh Fruits</a></li><li class="nav-item"><a class="dropdown-item fw-medium vegetable-shop-heading" href="#vegetable-shop-heading" data-bs-dismiss="offcanvas" data-bs-target="#bdNavbar"><i class="bx bxs-purchase-tag"></i> Fresh Vegetables</a></li><li class="nav-item"><a class="dropdown-item fw-medium frozen-meats-shop-heading" href="#frozen-meats-shop-heading" data-bs-dismiss="offcanvas" data-bs-target="#bdNavbar"><i class="bx bxs-purchase-tag"></i> Frozen Meats</a></li><li class="nav-item"><a class="dropdown-item fw-medium frozen-seafood-shop-heading" href="#frozen-seafood-shop-heading" data-bs-dismiss="offcanvas" data-bs-target="#bdNavbar"><i class="bx bxs-purchase-tag"></i> Frozen Sea Food</a></li></ul></li>