import "bootstrap/js/dist/modal.js";
// Include the classes added by Bootstrap Modal to keep them from purging on build from stylesheet ;)
const keepStyles = document.querySelectorAll(
  ".modal-backdrop, .fad, .show, .modal-open"
);
