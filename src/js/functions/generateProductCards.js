import "bootstrap/js/dist/modal.js";
// Include the classes added by Bootstrap Modal to keep them from purging on build from stylesheet ;)
const keepStyles = document.querySelectorAll(
  ".modal-backdrop, .fad, .show, .modal-open"
);


const generateProductCards = (prods) => {
  // Destructure properties from prods with default values to avoid errors
  const {
    title = '',
    s_desc = '',
    desc = '',
    price = '',
    sale = '',
    img = '',
    id = '',
    stock = '',
    uom = '',
    quantity = ''
  } = prods;

  // Calculate percentage discount
  const percent = () => {
    const percentage = ((prods.price - prods.sale) / prods.price) * 100;
    const roundedPercentage = Math.ceil(percentage) + "% OFF";
    return roundedPercentage;
  };

  // Generate HTML output
  const output =
    `<li class="col-6 col-md-3">`+
      `<div class="product-card card shadow-sm h-100">`+
        `<div class="image-holder">`+
          `<img src="${img}" alt="${title}" class="img-fluid card-img-top border-bottom border-light-subtle" loading="lazy">`+
        `</div>`+
        `<div class="card-body d-flex flex-column gap-2">`+
          `<h4 class="card-title fs-5 mb-0">${title}</h4>`+
          `<div class="card-qauntity mb-0">${quantity ? ` ${quantity} ${uom}` : ''}</div>`+
          `<div class="short-description">${s_desc}</div>`+
          `<div class="sale-price d-flex justify-content-${sale ? `between` : `end`} align-items-center mb-2 mt-auto gap-1 text-center">`+
          `${stock ?
            `${price ? `<span class="item-price-regular rounded ${sale ? `bg-info text-bg-info text-decoration-line-through` : `bg-primary text-bg-primary`} px-2 py-1 fs-5 fw-semibold" >€${price}</span >` : ``}`+
            `${sale ?
            `<span class="percent fw-medium">${percent()}</span>` +
            `<span class="item-price-sale rounded bg-primary text-bg-primary px-2 py-1 fs-5 fw-medium">€${sale}</span>` : ''}`
          : '<span class="text-muted">Out of Stock</span"></span>'}`+
          `</div>`+
          `<div class="btn-group w-100">`+
            `<a href="https://wa.me/+32493338881" class="btn btn-primary text-nowrap" target="_blank">`+
              `<i class='bx bxl-whatsapp'></i>`+
            `</a>`+
            `${desc ?
              `<button type="button" class="btn btn-secondary text-nowrap" data-bs-toggle="modal" data-bs-target="#${id}">`+
                `<i class="bx bx-info-circle"></i>`+
              `</button>` : ''}`+
          `</div>`+
        `</div>`+
        `${sale ? `<i class='bx bxs-discount sale-indicator p-2 fs-4 bg-info text-bg-info rounded-circle shadow-sm'></i>` : ``}`+
      `</div>` +

      // Modal Info Box
      `${desc ?
      `<div class="modal fade" id="${id}" data-bs-keyboard="false" tabindex="-1" aria-labelledby="${id}Label" aria-hidden="true">`+
        `<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">`+
          `<div class="modal-content">` +
            `<div class="modal-header py-2 shadow-sm bg-warning text-bg-warning">`+
              `<div class="d-flex justify-content-between w-100">`+
                `<ul class="modal-header-social-links modal-header-social-link list-unstyled d-flex flex-wrap align-items-center gap-4 gap-md-5"></ul>`+
                `<button type="button" class="btn btn-outline-danger p-0 lh-1" data-bs-dismiss="modal" aria-label="Close">`+
                  `<i class="bx bx-x fs-1"></i>`+
                `</button>`+
              `</div>`+
            `</div>`+
            `<div class="modal-body">`+
              `<div class="container-fluid">`+
                `<div class="row">`+
                  `<img src="${img}" alt="${title}" class="col-md-4 h-100 img-fluid mb-3 p-0 rounded shadow-sm" loading="lazy">`+
                  `<div class="col-md-8">`+
                    `<h4 id="${id}Label">${title}${quantity ? ` - ${quantity} ${uom}` : ''}</h4>`+
                    `<p class="card-text my-3">${desc}</p>`+
                    `<div class="sale-price d-flex justify-content-${sale ? `between` : `end`} align-items-center mb-2 mt-auto gap-1 text-center">`+
                      `${price ? `<span class="item-price-regular rounded ${sale ? `bg-info text-bg-info text-decoration-line-through`
                        : `bg-primary text-bg-primary`} px-2 py-1 fs-5 fw-semibold" >€${price}</span > ` : ``}`+
                      `${sale ? `<span class="percent fw-medium">${percent()}</span>`+
                      `<span class="item-price-sale rounded bg-primary text-bg-primary px-2 py-1 fs-5 fw-medium">€${sale}</span>` : ''}` +
                    `</div>` +
                  `</div>`+
                `</div>`+
              `</div>`+
            `</div>`+
            // `<div class="modal-footer">`+
            //   `<a href="https://wa.me/+32493338881" class="btn btn-primary text-uppercase"><i class="bx bx-cart"></i> Book Now!</a>`+
            // `</div>`+
          `</div>`+
        `</div>`+
      `</div>` : ''}` +
    `</li>`;
  return output;
};
export default generateProductCards;
