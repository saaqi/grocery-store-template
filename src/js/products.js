// Setup Alert Boxes
const products = [
  {
    title: `ART. NO: DT- 78616`,
    cat: `Accessories`,
    price: 100,
    sale: 90,
    img: `images/product-item5.webp`,
    id: `art78616`,
    featured: false,
  },
];
const generateProductCard = (prods) => {
  const title = prods.title ? prods.title : ``;
  const cat = prods.cat ? prods.cat : ``;
  const price = prods.price ? prods.price : ``;
  const sale = prods.sale ? prods.sale : ``;
  const img = prods.img ? prods.img : ``;
  const id = prods.id ? prods.id : ``;
  const sale_indi = prods.sale ? `<span class="sale-indicator p-3 bg-info text-bg-info rounded-circle">Sale</span>` : ``;

  const output =
`<div class="product-card card shadow-sm col-md-6 col-lg-3 position-relative">
  <div class="image-holder">
    <img src="${img}" alt="product-item" class="img-fluid" />
  </div>
  <div class="card-body d-flex flex-wrap gap-3 align-items-baseline">
    <div class="d-flex w-100 justify-content-between flex-wrap gap-3">
      <h3 class="card-title fs-5 text-uppercase"><a href="#">${title}</a></h3>
      <span class="item-price text-light fs-6 rounded bg-dark px-2">€${price}</span>
    </div>
    <div class="mt-auto">
      <a href="#" class="btn btn-primary text-uppercase w-100 mb-2"><i class="bx bx-cart"></i> Book Now!</a>
      <button type="button" class="btn btn-outline-dark text-uppercase w-100" data-bs-toggle="modal" data-bs-target="#product_78616">
        <i class="bx bx-info-circle"></i> Details !
      </button>
    </div>
  </div>
  ${sale_indi}
</div>`;
  return output;
};

// First 4 products
const firstFourProdsReturn = products.slice(0, 4).map(generateProductCard);
const arrivalProdsElement = document.getElementById("new-arrivals");
if (arrivalProdsElement) arrivalProdsElement.innerHTML = firstFourProdsReturn.join("");

// Featured products
const featuredProdsReturn = products.filter((prods) => prods.featured).map(generateProductCard);
const featuredProdsElement = document.getElementById("featured-items");
if (featuredProdsElement) featuredProdsElement.innerHTML = featuredProdsReturn.join("");
