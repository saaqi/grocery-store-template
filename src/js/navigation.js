// --- Import only the required components.
import "bootstrap/js/dist/offcanvas.js";
import "bootstrap/js/dist/dropdown.js";

import nav_links from "./data/nav_links.js";

// Setup Navigation Links
const navigationLinks = nav_links.map((nl) => {
  const {
    text = '',
    link = '',
    linkClass = '',
    icon = '',
    subcategories = [] // Add default value for subcategories
  } = nl;

  // If there are subcategories, generate a dropdown menu
  const output = subcategories.length > 0 ?
    `<li class="nav-item dropdown">` +
      `<a class="nav-link link-dark dropdown-toggle ${linkClass}" scroll-spy-target="${link}" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">` +
        `${icon ? icon + ' ' : ''}${text}` +
      `</a>` +
      `<ul class="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">` +
        // Map over subcategories to generate dropdown items
        subcategories.map((subcategory) =>
          `<li class="nav-item">` +
            `<a class="dropdown-item fw-medium ${linkClass}" href="${subcategory.link}" data-bs-dismiss="offcanvas" data-bs-target="#bdNavbar">` +
              `${subcategory.icon ? subcategory.icon + ' ' : ''}${subcategory.text}` +
            `</a>` +
          `</li>`
        ).join("") +
      `</ul>` +
    `</li>` :
    // If there are no subcategories, generate a regular navigation link
    `<li class="nav-item">` +
    `<a class="nav-link link-dark ${linkClass}" scroll-spy-target="${link}" href="${link}" data-bs-dismiss="offcanvas" data-bs-target="#bdNavbar">` +
        `${icon ? icon + ' ' : ''}${text}` +
      `</a>` +
    `</li>`;

  return output;
});

const navLinkElements = document.getElementById("navbar");
if (navLinkElements) navLinkElements.innerHTML = navigationLinks.join("");


// Scroll to target sections on click
document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    document.querySelector(target).scrollIntoView();

    // Update URL hash without triggering page reload
    history.pushState(null, null, target);
  });
});


// Setup Scroll Spy
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function highlightNavLink() {
    sections.forEach(section => {
      const scrollPosition = window.scrollY;
      const top = section.offsetTop - 77;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('scroll-spy-target').slice(1) === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
  window.addEventListener('load', highlightNavLink);
  window.addEventListener('scroll', highlightNavLink);
  window.addEventListener('resize', highlightNavLink);
});



// Hide Navigation on right swipe
document.addEventListener("DOMContentLoaded", function () {
  const offcanvasBody = document.querySelector('.offcanvas-body');
  const closeButton = document.querySelector('[data-bs-dismiss="offcanvas"]');
  let startX;
  offcanvasBody.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  });
  offcanvasBody.addEventListener('touchend', function (e) {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX;
    if (deltaX > 50) {
      closeButton.click();
    }
  });
});