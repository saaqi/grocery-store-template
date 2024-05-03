const shopCats = [
  {
    category: 'fruit-shop',
    number: 'collapseOne',
    title: 'Fresh Fruits',
    shopId: 'fresh_fruits',
  },
  {
    category: 'vegetable-shop',
    number: 'collapseTwo',
    title: 'Fresh Vegetables',
    shopId: 'fresh_vegetables',
  },
  {
    category: 'frozen-meats-shop',
    number: 'collapseThree',
    title: 'Frozen Meats',
    shopId: 'frozen_meats',
  },
  {
    category: 'frozen-seafood-shop',
    number: 'collapseFour',
    title: 'Frozen Sea Food',
    shopId: 'frozen_seafood',
  },
  {
    category: 'frozen-vegetables-shop',
    number: 'collapseFive',
    title: 'Frozen Vegetables',
    shopId: 'frozen_vegetables',
  },
]

function generateShopCats(cats) {

  const {
    category = '',
    number = '',
    title = '',
    shopId = '',
  } = cats;

  const output =
    `<div id="${category}" class="accordion-item bg-transparent">`+
     `<h2 class="accordion-header">`+
        `<button class="accordion-button collapsed fw-medium fs-5 btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target="#${number}" aria-expanded="false" aria-controls="collapseOne">`+
          `${title}`+
        `</button>`+
      `</h2>`+
      `<div id="${number}" class="accordion-collapse collapse" data-bs-parent="#shopAccordian">`+
        `<div class="accordion-body px-0">`+
          `<ul id="${shopId}" class="list-unstyled row g-1 mb-0"></ul>`+
        `</div>`+
      `</div>`+
    `</div>`;

  return output;
}

export default function shop_categories(parentId) {
  const parentElement = document.getElementById(parentId);
  if (parentElement) {
    const shopCategories = shopCats.map(generateShopCats).join("");
    parentElement.innerHTML = shopCategories;
  }
}
