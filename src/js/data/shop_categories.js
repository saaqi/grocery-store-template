const shopCats = [
  {
    category: 'fruit-shop-heading',
    number: 'collapseOne',
    title: 'Fresh Fruits:',
    shopId: 'fruit-shop',
  },
  {
    category: 'vegetable-shop-heading',
    number: 'collapseTwo',
    title: 'Fresh Vegetables:',
    shopId: 'vegetable-shop',
  },
  {
    category: 'frozen-meats-shop-heading',
    number: 'collapseThree',
    title: 'Frozen Meats:',
    shopId: 'frozen-meats-shop',
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
    `<div id="${category}" class="accordion-item">`+
     `<h2 class="accordion-header">`+
        `<button class="accordion-button collapsed fw-medium fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#${number}" aria-expanded="false" aria-controls="collapseOne">`+
          `${title}`+
        `</button>`+
      `</h2>`+
      `<div id="${number}" class="accordion-collapse collapse" data-bs-parent="#shopAccordian">`+
        `<div class="accordion-body">`+
          `<ul id="${shopId}" class="list-unstyled row g-2"></ul>`+
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
