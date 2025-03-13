
import { products } from "./products.js";
import { attachProducts } from "../functions/generateProductCards.js";
import draggableContainer from "../functions/draggableContainer.js";
import "../../scss/draggable.scss";

const shopCats = [
  {
    title: 'Drinks',
    shopId: 'drinks',
  },
  {
    title: 'Fresh Fruits',
    shopId: 'fresh_fruits',
  },
  {
    title: 'Vegetables',
    shopId: 'vegetables',
  },
  {
    title: 'Frozen Meats',
    shopId: 'frozen_meats',
  },
  {
    title: 'Frozen Seafood',
    shopId: 'frozen_seafood',
  },
  {
    title: 'Frozen Foods',
    shopId: 'frozen_foods',
  },
  {
    title: 'Nuts & Dry Fruits',
    shopId: 'nuts_dry_fruits',
  },
  {
    title: 'Home Essentials',
    shopId: 'home_essentials',
  },
  {
    title: 'Telecommunications',
    shopId: 'telecommunications',
  },
]


const generateShopCats = (cats, index) => {

  const {
    title = '',
    shopId = '',
  } = cats;

  const output =
    `<div id="${shopId + '_shop'}" class="accordion-item bg-transparent">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-medium fs-5 btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target="#${`shop-` + index}" aria-expanded="false" aria-controls="${`shop-` + index}">
          ${title}
        </button>
      </h2>
      <div id="${`shop-` + index}" class="accordion-collapse collapse" data-bs-parent="#shopAccordian">
        <div class="accordion-body px-0 py-1">
          <ul id="${shopId}" class="list-unstyled draggableContainer row g-2"></ul>
          <div class="directionIndicators fs-4">
            <i class='bx bxs-chevron-left-circle swipe-indicator'></i>
            <i class='bx bxs-chevron-right-circle swipe-indicator me-1'></i>
          </div>
        </div>
      </div>
    </div>`.replace(/\s+/g, ' ');

  return output;
}

const shop_categories = parentId => {
  const parentElement = document.getElementById(parentId);
  if (parentElement) {
    const shopCategories = shopCats.map(generateShopCats).join("");
    parentElement.innerHTML = shopCategories;
  }

  // Attach the shops data to their respective categories
  shopCats.forEach(cat => {
    attachProducts(products.filter(p => p.cat === cat.title), cat.shopId);
  });
}

// Setup Carousel
document.addEventListener('DOMContentLoaded', function () {
  shopCats.forEach((cat) => {
    draggableContainer(cat.shopId);
  })
})

export default shop_categories;
