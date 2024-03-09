
// Setup Product Cards
const products = [
  {
    title: `ART. NO: DT- 78616`,
    s_desc: `Hight Quality polyester Biker Trousers.`,
    desc: `High quality Polyester fabric-600D, AquaDry Windproof & Waterproof membrane, Removable Thermo lining, 3M Scotchlight, CE Approved Protector.`,
    cat: `Accessories`,
    price: 100,
    img: `images/product-item5.webp`,
    id: `art78616`,
    sale: 90,
    percent: function () {
      const percentage = ((this.price - this.sale) / this.price) * 100;
      const roundedPercentage = Math.ceil(percentage);
      return roundedPercentage + "% OFF";
    },
    featured: false,
  },
];
const generateProductCard = (prods) => {
  const title = prods.title ? prods.title : ``;
  const s_desc = prods.s_desc ? prods.s_desc : ``;
  const desc = prods.desc ? prods.desc : ``;
  const cat = prods.cat ? prods.cat : ``;
  const price = prods.price ? prods.price : ``;
  const sale = prods.sale ? prods.sale : ``;
  const img = prods.img ? prods.img : ``;
  const id = prods.id ? prods.id : ``;
  const percent = prods.percent ? prods.percent() : ``;
  const sale_indicator = prods.sale
    ? `<i class='bx bxs-discount sale-indicator p-2 fs-5 bg-info text-bg-info rounded-circle text-center'></i>`
    : ``;
  function rate() {
    let amount = `<span class="item-price h-100 rounded bg-primary text-bg-primary px-2 fw-semibold">€${price}</span>`;;
    if (prods.sale) {
      amount = `<div class="sale-price w-100 d-flex justify-content-between">
        <span class="item-price rounded bg-info text-bg-info px-2 py-1 text-decoration-line-through fw-semibold">€${price}</span>
        <span class="percentae fw-medium">${percent}</span>
        <span class="item-price rounded bg-primary text-bg-primary px-2 py-1 fw-medium">€${sale}</span>
      </div>`;
    }
    return amount;
  }

  const output = `<div class="p-2 col-md-6 col-lg-3">
  <div class="product-card card shadow-sm h-100">
    <div class="image-holder">
      <img src="${img}" alt="product-item" class="img-fluid" />
    </div>
    <div class="card-body d-flex flex-wrap gap-3 align-items-baseline">
      <div class="d-flex w-100 justify-content-between flex-wrap gap-3">
        <h3 class="card-title fs-5 text-uppercase mb-0">${title}</h3>
        <div class="short-description">${s_desc}</div>
        ${rate()}
      </div>
      <div class="mt-auto w-100">
        <a href="#" class="btn btn-primary text-uppercase mb-2 w-100"><i class="bx bx-cart"></i> Book Now!</a>
        <button type="button" class="btn btn-outline-primary text-uppercase w-100" data-bs-toggle="modal" data-bs-target="#${id}">
          <i class="bx bx-info-circle"></i> Details !
        </button>
      </div>
    </div>
    ${sale_indicator}
  </div>
</div>
<div class="modal fade" id="${id}" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">${title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <p class="card-text">
              ${desc}
            </p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <a href="#" class="btn btn-dark text-uppercase"><i class="bx bx-cart"></i> Buy Now!</a>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
    ;
  return output;
};

// First 4 products
const firstFourProdsReturn = products.slice(0, 4).map(generateProductCard);
const arrivalProdsElement = document.getElementById("new-arrivals");
if (arrivalProdsElement)
  arrivalProdsElement.innerHTML = firstFourProdsReturn.join("");

// Featured products
const featuredProdsReturn = products
  .filter((prods) => prods.featured)
  .map(generateProductCard);
const featuredProdsElement = document.getElementById("featured-items");
if (featuredProdsElement)
  featuredProdsElement.innerHTML = featuredProdsReturn.join("");
