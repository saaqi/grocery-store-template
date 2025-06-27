import "bootstrap/js/dist/collapse.js";


import shop_categories from "../data/shop_categories.js";


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

