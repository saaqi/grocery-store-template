import "bootstrap/js/dist/modal.js";
// Include the classes added by Bootstrap Modal to keep them from purging on build from stylesheet ;)
// ".modal-backdrop, .fad, .show, .modal-open"

// Import Products Images folder
const productPics = import.meta.glob('../../assets/products/**/*', { eager: true });
import fallBackImg from '../../assets/web-app-manifest-192x192.png';
import logo from '../../assets/logo.svg'


const generateProductCards = prods => {
  // Destructure properties from prods with default values to avoid errors
  const {
    title = '',
    s_desc = '',
    desc = '',
    price = '',
    sale = '',
    img = '',
    img_extra = [],
    id = '',
    stock = '',
    uom = '',
    quantity = ''
  } = prods;

  const coverImage = productPics[`../../assets/products/${img}`]?.default || fallBackImg;
  const extraImages = img_extra.map((img) => {
    return `<div class="col-6 col-lg-4"><img src="${productPics[`../../assets/products/${img}`]?.default || fallBackImg}" alt="${title}" class="img-fluid rounded shadow-sm" loading="lazy"></div>`;
  }).join('');

  // Calculate percentage discount
  const percent = () => {
    const percentage = ((price - sale) / price) * 100;
    const roundedPercentage = Math.ceil(percentage) + "% OFF";
    return roundedPercentage;
  };


  const descButton =
    `<button type="button" class="btn btn-outline-dark modal-button border-0 px-1 d-flex flex-wrap gap-1 justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#${id}" title="Read More Information!"><i class="bx bx-info-circle"></i> <span>Info</span></button>`
  // Sale Icon
  // Quantity & UOM

  const productCard =
    `<div class="product-card card shadow-sm h-100">
      ${topImg}
      <div class="card-body d-flex flex-column align-items-start gap-3 p-2 p-sm-3">
        <div class="body-header">
          <div class="card-title h4">${title}</div>
          ${q_UOM}
        </div>
        ${s_desc ? `<div class="card-text shortDescription">${s_desc}</div>` : ''}
        <div class="mt-auto sale-price w-100 d-flex justify-content-${sale ? 'between' : 'end'} align-items-center mb-2 gap-2 flex-wrap text-center">
          ${stock ? `${priceButton + percentOff + saleButton}` : '<div class="text-muted">Out of Stock</div>'}
        </div>
      </div>
      <div class="card-footer p-0">
        <div class="btn-group card-buttons w-100" role="group" aria-label="Card Buttons">${waButton + descButton}</div>
      </div>
      ${saleIcon}
    </div>`.replace(/\s+/g, ' ');
  // Modal Box
  const modalDetails =
    `<div id="${id}" class="modal fade" data-bs-keyboard="false" tabindex="-1" aria-labelledby="${id}-label" aria-hidden="true">
      <div id="${id}-label" class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div class="modal-content">
          <div class="modal-header py-2 shadow-sm bg-warning text-bg-warning d-flex justify-content-between">
            ${logoImg}
            <button type="button" class="btn btn-outline-danger p-0 lh-1" data-bs-dismiss="modal" aria-label="Close">
              <i class="bx bx-x fs-1"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <img src="${coverImage}" alt="${title}" class="col-md-4 h-100 img-fluid mb-3 p-0 rounded shadow-sm" loading="lazy">
                <div class="col-md-8">
                  <h4 class="modal-heading">${title}${quantity ? ` - ${quantity} ${uom}` : ''}</h4>
                  ${shortDesc + longDesc}
                  <div class="sale-price w-100 d-flex justify-content-${sale ? 'between' : 'end'} align-items-center mb-2 mt-auto gap-2 flex-wrap text-center">
                    ${stock ? `${priceButton + percentOff + saleButton}` : '<div class="text-muted">Out of Stock</div>'}
                  </div>
                </div>
                ${img_extra ? `<div class="container mt-3"><div class="row g-3">${extraImages}</div></div>` : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`.replace(/\s+/g, ' ');

  // Generate HTML output
  const output =
    `<li class="col-6 col-lg-3 draggableItem">
      ${productCard + modalDetails}
    </li>`
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
    const modalID = document.querySelector(`#${parentId} > li:nth-child(${index + 1}) > .modal > .modal-dialog`);
    const modalButton = document.querySelector(`#${parentId} > li:nth-child(${index + 1}) > .product-card .modal-button`);
    if (modal) {
      modal.id = `${modal.id}-${parentId}`;
      modalButton.dataset.bsTarget = `${modalButton.dataset.bsTarget}-${parentId}`;
      const ariaLabel = modal.getAttribute('aria-labelledby');
      modal.setAttribute('aria-labelledby', `${ariaLabel}-${parentId}`);
      modalID.setAttribute('id', `${ariaLabel}-${parentId}`);
      // const lableId = modalID.getAttribute('id');
      // modalID.setAttribute('id', `${lableId}-${parentId}`);
    }
  });
}



export { generateProductCards, attachProducts };
