
import { products } from "./products.js";
import { attachProducts } from "../js/functions/generateProductCards.js";
import "../scss/draggable.scss";

export const shopCats = [...new Set(products.map(item => item.cat).filter(cat => cat))].map(cat => ({ cat }))
  .map((item, index) => {
    return {
      ...item,
      title: item.cat,
      shopId: item.cat.toLowerCase().replace(/\s+/g, '_'),
      shopLink: item.cat.toLowerCase().replace(/\s+/g, '_') + '_shop',
      shopIndex: `shop-` + index
    }
  });

const generateShopCats = cats => {

  const {
    title = '',
    shopId = '',
    shopLink = '',
    shopIndex = ''
  } = cats;

  const output =
    `<div id="${shopLink}" class="accordion-item bg-transparent">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-medium fs-5 btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target="#${shopIndex}" aria-expanded="false" aria-controls="${shopIndex}">
          ${title}
        </button>
      </h2>
      <div id="${shopIndex}" class="accordion-collapse collapse" data-bs-parent="#shopAccordian">
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
