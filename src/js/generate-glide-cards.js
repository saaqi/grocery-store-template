import generateProductCards from "./generate-product-cards.js";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import Glide from "@glidejs/glide";

export default function generateGlideCards(data, parent) {

  const products = [...data];
  products.sort((a, b) => (b.added) - (a.added));

  const parentSelector = document.getElementById(parent);
  if (parentSelector) parentSelector.innerHTML =
    `<div class="${parent}">`+
      `<div class="glide__track" data-glide-el="track">`+
        `<ul id="${parent}-products" class="glide__slides list-unstyled"></ul>`+
        `<div class="glide__arrows text-center d-flex justify-content-around" data-glide-el="controls">`+
          `<button class="glide__arrow glide__arrow--left p-1 rounded-circle bg-primary" data-glide-dir="<">`+
            `<i class='bx bxs-chevron-left fs-3'></i>`+
          `</button>`+
          `<button class="glide__arrow glide__arrow--right p-1 rounded-circle bg-primary" data-glide-dir=">">`+
            `<i class='bx bxs-chevron-right fs-3'></i>`+
          `</button>`+
        `</div>`+
      `</div>`+
    `</div>`;

  // Home Glide products
  const GlideElement = document.getElementById(`${parent}-products`);
  if (GlideElement) GlideElement.innerHTML = products.map(generateProductCards).join("");

  // Glide.js
  const glideItems = document.querySelectorAll(`#${parent}-products > li`);
  glideItems.forEach((e) => {
    e.classList.add("glide__slide", "h-auto");
  })

  if (parentSelector)
  new Glide(`.${parent}`, {
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

