import "./modal.js";

const generateProductCards = (prods) => {

  const title = prods.title ? prods.title : ``;
  const s_desc = prods.s_desc ? prods.s_desc : ``;
  const desc = prods.desc ? prods.desc : ``;
  // const cat = prods.cat ? prods.cat : ``;
  const price = prods.price ? prods.price : ``;
  const sale = prods.sale ? prods.sale : ``;
  const img = prods.img ? prods.img : ``;
  const id = prods.id ? prods.id : ``;


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
      `<div class="sale-price d-flex justify-content-${justifyContent} align-items-center mb-2 mt-auto gap-1 text-center">`+
        `<span span class="item-price-regular rounded ${regularPriceStyles} px-2 py-1 fs-5 fw-semibold" >€${ price }</span >`+
        `${salePercent}`+
        `${salePrice}`+
      `</div>`

    return amount;
  };

  const output =
    // Product Card
    `<li>`+
      `<div class="product-card card shadow-sm h-100">`+
        `<div class="image-holder">`+
          `<img src="${img}" alt="${title}" class="img-fluid card-img-top" loading="lazy">`+
        `</div>`+
        `<div class="card-body d-flex flex-column gap-2">`+
          `<h4 class="card-title fs-5 mb-0">${title}</h4>`+
          `<div class="short-description">${s_desc}</div>`+
          `${rate()}`+
          `<div class="btn-group w-100">` +
            `<a href="#" class="btn btn-primary"><i class="bx bx-cart"></i> Book Now!</a>`+
            `${desc ?
              `<button type="button" class="btn btn-secondary text-nowrap" data-bs-toggle="modal" data-bs-target="#${id}">`+
                `<i class="bx bx-info-circle"></i>`+
              `</button>` : ``}`+
          `</div>`+
        `</div>`+
        `${sale ? `<i class='bx bxs-discount sale-indicator p-2 fs-4 bg-info text-bg-info rounded-circle shadow-sm'></i>` : ``}`+
      `</div>` +

      // Modal Info Box
      `${desc ?
      `<div class="modal fade" id="${id}" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">`+
        `<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">`+
          `<div class="modal-content">`+
            `<div class="modal-header d-flex justify-content-between align-items-center">`+
              `<h4 class="modal-title" id="staticBackdropLabel">${title}</h4>`+
              `<button type="button" class="btn btn-outline-danger p-0 lh-1" data-bs-dismiss="modal" aria-label="Close">`+
                `<i class="bx bx-x fs-1"></i>`+
              `</button>`+
            `</div>`+
            `<div class="modal-body">`+
              `<div class="container-fluid">`+
                `<div class="row">`+
                  `<img src="${img}" alt="${title}" class="col-md-4 img-fluid mb-3 p-0 rounded shadow-sm" loading="lazy">`+
                  `<div class="col-md-8">`+
                    `<h4>${title}</h4>`+
                    `<p class="card-text my-3">${desc}</p>`+
                    `<div class="my-3">${rate()}</div>`+
                  `</div>`+
                `</div>`+
              `</div>`+
            `</div>`+
            // `<div class="modal-footer">`+
            //   `<a href="#" class="btn btn-primary text-uppercase"><i class="bx bx-cart"></i> Book Now!</a>`+
            // `</div>`+
          `</div>`+
        `</div>`+
      `</div>` : ''}` +
    `</li>`;
  return output;
};
export default generateProductCards;
