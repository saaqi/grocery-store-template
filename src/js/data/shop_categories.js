const shopCats = [
  {
    category: 'fruit-shop',
    title: 'Fresh Fruits',
    shopId: 'fresh_fruits',
  },
  {
    category: 'vegetable-shop',
    title: 'Fresh Vegetables',
    shopId: 'fresh_vegetables',
  },
  {
    category: 'frozen-meats-shop',
    title: 'Frozen Meats',
    shopId: 'frozen_meats',
  },
  {
    category: 'frozen-seafood-shop',
    title: 'Frozen Sea Food',
    shopId: 'frozen_seafood',
  },
  {
    category: 'frozen-vegetables-shop',
    title: 'Frozen Vegetables',
    shopId: 'frozen_vegetables',
  },
  {
    category: 'frozen-foods-shop',
    title: 'Frozen Foods',
    shopId: 'frozen_foods',
  },
  {
    category: 'nuts-dry-fruits-shop',
    title: 'Nuts & Dry Fruits',
    shopId: 'nuts_dry_fruits',
  },
  {
    category: 'home-essentials-shop',
    title: 'Home Essentials',
    shopId: 'home_essentials',
  },
  {
    category: 'telecommunications-shop',
    title: 'Telecommunications',
    shopId: 'telecommunications',
  },
].map((item, index) => {
  return {
    ...item,
    number: `shop-${index}`,
  };
});

import { products } from "./products.js";
import { attachProducts } from "../functions/generateProductCards.js";


const generateShopCats = cats => {

  const {
    category = '',
    number = '',
    title = '',
    shopId = '',
  } = cats;

  const output =
    `<div id="${category}" class="accordion-item bg-transparent">
     <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-medium fs-5 btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target="#${number}" aria-expanded="false" aria-controls="${number}">
          ${title}
        </button>
      </h2>
      <div id="${number}" class="accordion-collapse collapse" data-bs-parent="#shopAccordian">
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
  attachProducts(products.filter((p) => p.cat === 'Fresh Fruits'), "fresh_fruits");
  attachProducts(products.filter((p) => p.cat === 'Fresh Vegetables'), "fresh_vegetables");
  attachProducts(products.filter((p) => p.cat === 'Frozen Meats'), "frozen_meats");
  attachProducts(products.filter((p) => p.cat === 'Frozen Seafood'), "frozen_seafood");
  attachProducts(products.filter((p) => p.cat === 'Frozen Vegetables'), "frozen_vegetables");
  attachProducts(products.filter((p) => p.cat === 'Frozen Foods'), "frozen_foods");
  attachProducts(products.filter((p) => p.cat === 'Nuts & Dry Fruits'), "nuts_dry_fruits");
  attachProducts(products.filter((p) => p.cat === 'Home Essentials'), "home_essentials");
  attachProducts(products.filter((p) => p.cat === 'Telecommunications'), "telecommunications");
}


export default shop_categories;
