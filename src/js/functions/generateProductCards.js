import "bootstrap/js/dist/modal.js";
// Include the classes added by Bootstrap Modal to keep them from purging on build from stylesheet ;)
// ".modal-backdrop, .fad, .show, .modal-open"


const generateProductCards = prods => {
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
    const percentage = ((price - sale) / price) * 100;
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
          `${quantity ? `<div class="card-qauntity mb-0">${quantity} ${uom}</div>` : ''}`+
          `${s_desc ? `<div class="short-description">${s_desc}</div>` : ''}`+
          `<div class="sale-price d-flex justify-content-${sale ? `between` : `end`} flex-column flex-lg-row align-items-center mb-2 mt-auto gap-sm-1 gap-2 text-center">`+
          `${stock ?
            `${price ?
              `<div class="item-price-regular rounded py-1 px-2 fw-medium ${sale ? `bg-info text-bg-info text-decoration-line-through` : `bg-primary text-bg-primary`}">€${price.toFixed(2)}</div>`
            : ''}`+
            `${sale ?
              `<div class="percent fw-medium">${percent()}</div>`+
              `<div class="item-price-sale rounded py-1 px-2 fw-medium bg-primary text-bg-primary">€${sale.toFixed(2)}</div>`
            : ''}`
          : '<div class="text-muted">Out of Stock</div>'}`+
          `</div>`+
          // `<div class="btn-group w-100">`+
            // `<a href="https://wa.me/+32465638887" class="btn btn-primary" target="_blank">`+
            //   `<i class='bx bxl-whatsapp'></i>`+
            // `</a>`+
            `${desc ?
              `<button type="button" class="btn btn-outline-primary p-2 p-2 modal-button" data-bs-toggle="modal" data-bs-target="#${id}" title="Read More Information!">`+
                `<i class="bx bx-info-circle"></i>`+
              `</button>`
            : ''}`+
          // `</div>`+
        `</div>`+
        `${sale ?
          `<i class='bx bxs-discount sale-indicator p-2 fs-4 bg-info text-bg-info rounded-circle shadow-sm'></i>`
        : ''}`+
      `</div>` +

      // Modal Info Box
      `${desc ?
        `<div class="modal fade" id="${id}" data-bs-keyboard="false" tabindex="-1" aria-labelledby="${id}-label" aria-hidden="true">`+
          `<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">`+
            `<div class="modal-content">` +
              `<div class="modal-header py-2 shadow-sm bg-warning text-bg-warning">`+
                `<div class="d-flex justify-content-between w-100">`+
                  `<ul id="${id}-label" class="social-links modal-label list-unstyled d-flex flex-wrap align-items-center gap-4 gap-md-5"></ul>`+
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
                      `<h4 class="modal-heading">${title}${quantity ? ` - ${quantity} ${uom}` : ''}</h4>`+
                      `<p class="card-text my-3">${desc}</p>`+
                      `<div class="sale-price d-flex justify-content-${sale ? `between` : `end`} align-items-center mb-2 mt-auto gap-1 text-center">`+
                        `${price ? `<div class="item-price-regular ${sale ? `bg-info text-bg-info text-decoration-line-through`
                          : `bg-primary text-bg-primary`} rounded py-1 px-2 fw-medium">€${price.toFixed(2)}</div> ` : ''}`+
                        `${sale ? `<div class="percent fw-medium">${percent()}</div>`+
                        `<div class="item-price-sale bg-primary text-bg-primary rounded py-1 px-2 fw-medium">€${sale.toFixed(2)}</div>` : ''}` +
                      `</div>` +
                    `</div>`+
                  `</div>`+
                `</div>`+
              `</div>`+
              // `<div class="modal-footer py-2">`+
              //   `<a href="https://wa.me/+32465638887" class="btn btn-primary text-uppercase"><i class="bx bx-cart"></i> Book Now!</a>`+
              // `</div>`+
            `</div>`+
          `</div>`+
        `</div>`
      : ''}` +
    `</li>`;
  return output;
};

// Attach Products Function for attaching product cards in sections
const attachProducts = (dataArray, parentId) => {
  const parentElement = document.getElementById(parentId);
  if (parentElement) {
    const cardsHtml = dataArray.map(generateProductCards).join("");
    parentElement.innerHTML = cardsHtml;
  };
  // Generate custom ids for products card for individual sections to avoid duplicate ids.
  dataArray.forEach((product, index) => {
    const modal = document.querySelector(`#${parentId} > li:nth-child(${index + 1}) > .modal`);
    const modalButton = document.querySelector(`#${parentId} > li:nth-child(${index + 1}) > .product-card .modal-button`);
    const modalLabel = document.querySelector(`#${parentId} > li:nth-child(${index + 1}) > .modal .modal-label`);
    if (modal) {
      modal.id = `${modal.id}-${parentId}`;
      modalButton.dataset.bsTarget = `${modalButton.dataset.bsTarget}-${parentId}`;
      modalLabel.id = `${modalLabel.id}-${parentId}`;
      const ariaLabel = modal.getAttribute('aria-labelledby');
      modal.setAttribute('aria-labelledby', `${ariaLabel}-${parentId}`);
    }
  });
}



export { generateProductCards, attachProducts };
