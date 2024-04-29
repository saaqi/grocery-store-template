import generateProductCards from "./generate-product-cards.js";

import fresh_fruit from "./data/fresh_fruit.js";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import Glide from "@glidejs/glide";
// import cigs from "./data/cigs.js";

// const products = [...fresh_fruit, ...cigs];
const products = [...fresh_fruit];
products.sort((a, b) => (b.added) - (a.added));

function createGlide() {
  document.getElementById('fruit-shop').innerHTML =
    `<div class="home-glide">
      <div class="glide__track" data-glide-el="track">
        <ul id="home-glide-products" class="glide__slides list-unstyled"></ul>
        <div class="glide__arrows text-center d-flex justify-content-around" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left p-1 rounded-circle bg-primary" data-glide-dir="<">
            <i class='bx bxs-chevron-left fs-3'></i>
          </button>
          <button class="glide__arrow glide__arrow--right p-1 rounded-circle bg-primary" data-glide-dir=">">
            <i class='bx bxs-chevron-right fs-3'></i>
          </button>
        </div>
      </div>
    </div>`;


  // New Arrivals First 4 products
  const fresh_fruits = products.map(generateProductCards);
  const freshFruitsParent = document.getElementById("fresh-fruits");
  if (freshFruitsParent) freshFruitsParent.innerHTML = fresh_fruits.join("");
  const freshFruitsElements = document.querySelectorAll("#fresh-fruits > li");
  freshFruitsElements.forEach((e) => {
    e.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');
  });

  // Home Glide products
  const home_glide_products = products.map(generateProductCards);
  const homeGlideProdsElement = document.getElementById("home-glide-products");
  if (homeGlideProdsElement) homeGlideProdsElement.innerHTML = home_glide_products.join("");

  // Glide.js
  const glideProductsElements = document.querySelectorAll("#home-glide-products > li");
  glideProductsElements.forEach((e) => {
    e.classList.add("glide__slide", "h-auto");
  })

  new Glide(".home-glide", {
    type: "carousel",
    perView: 5,
    swipeThreshold: 40,
    dragThreshold: 60,
    animationDuration: 250,
    peek: 20,
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();
};

createGlide();
