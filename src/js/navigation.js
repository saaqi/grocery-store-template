// --- Import only the required components.
import "bootstrap/js/dist/offcanvas.js";
import "bootstrap/js/dist/scrollspy.js";

import navLinks from "./data/nav-links";

// Setup Navigation Links
const navigationLinks = navLinks.map((nl) => {
  const link = nl.link ? nl.link : "";
  const text = nl.text ? nl.text : "";

  const output =
    `<li class="nav-item">`+
      `<a class="nav-link link-dark" href="${link}" data-bs-dismiss="offcanvas" data-bs-target="#bdNavbar">`+
        `${text}`+
      `</a>`+
    `</li>`;
  return output;
});

const navLinkElements = document.getElementById("navbar");
if (navLinkElements) navLinkElements.innerHTML = navigationLinks.join("");