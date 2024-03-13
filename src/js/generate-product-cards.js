import "./modal.js";

const generateProductCards = (prods) => {

  const title = prods.title ? prods.title : ``;
  const s_desc = prods.s_desc ? prods.s_desc : ``;
  const desc = prods.desc ? prods.desc : ``;
  const cat = prods.cat ? prods.cat : ``;
  const price = prods.price ? prods.price : ``;
  const sale = prods.sale ? prods.sale : ``;
  const img = prods.img ? prods.img : ``;
  const id = prods.id ? prods.id : ``;
  const sale_indicator = prods.sale
    ? `<i class='bx bxs-discount sale-indicator p-2 fs-4 bg-info text-bg-info rounded-circle shadow-sm'></i>`
    : ``;
  const rate = () => {
    const percent = () => {
      const percentage = ((prods.price - prods.sale) / prods.price) * 100;
      const roundedPercentage = Math.ceil(percentage);
      return roundedPercentage + "% OFF";
    };

    const regularPriceStyles = prods.sale ? `bg-info text-bg-info text-decoration-line-through` : `bg-primary text-bg-primary`;
    const salePrice = prods.sale ? `<span class="item-price-sale rounded bg-primary text-bg-primary px-2 py-1 fs-5 fw-medium ">€${sale}</span>` : ``;
    const salePercent = prods.sale ? `<span class="percent fw-medium">${percent()}</span>` : ``;
    const justifyContent = prods.sale ? `between` : `end`;

    let amount =
      `<div class="sale-price d-flex justify-content-${justifyContent} align-items-center mb-2 mt-auto gap-1 text-center">
        <span class="item-price-regular rounded ${regularPriceStyles} px-2 py-1 fs-5 fw-semibold">€${price}</span>
        ${salePercent}
        ${salePrice}
      </div>`;

    return amount;
  };

  const detailsBox = () => {
    if (prods.desc) {
      const details = `<div class="modal fade" id="${id}" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header d-flex justify-content-between align-items-center">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">${title}</h1>
              <button type="button" class="btn btn-outline-danger p-0 lh-1" data-bs-dismiss="modal" aria-label="Close">
                <i class="bx bx-x fs-1"></i>
              </button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
              <div class="row">
                <img src="${img}" alt="${title}" class="img-fluid mb-3 p-0 rounded shadow-sm">
                  <p class="card-text">
                    ${desc}
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="#" class="btn btn-primary text-uppercase"><i class="bx bx-cart"></i> Book Now!</a>
            </div>
          </div>
        </div>
      </div>`;
      return details;
    }
    return ``;
  };

  const buttons = () => {

    const infoButton = prods.desc ?
      `<button type="button" class="btn btn-secondary text-nowrap" data-bs-toggle="modal" data-bs-target="#${id}">
          <i class="bx bx-info-circle"></i>
        </button>` : ``;
    const button =
      `<div class="btn-group">
        <a href="#" class="btn btn-primary"><i class="bx bx-cart"></i> Book Now!</a>
        ${infoButton}
      </div>`;
    return button;
  };

  const output =
    `<li>
      <div class="product-card card shadow-sm h-100">
        <div class="image-holder">
          <img src="${img}" alt="${title}" class="img-fluid card-img-top" />
        </div>
        <div class="card-body d-flex flex-column gap-2">
          <h3 class="card-title fs-5 text-uppercase text-wrap mb-0">${title}</h3>
          <div class="short-description text-wrap">${s_desc}</div>
            ${rate()}
            ${buttons()}
        </div>
        ${sale_indicator}
      </div>
      ${detailsBox()}
    </li>`;
  return output;
};
export default generateProductCards;
