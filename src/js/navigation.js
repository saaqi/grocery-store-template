// --- Import only the required components.
import "bootstrap/js/dist/offcanvas.js";

import navLinks from "./data/nav-links";

// Setup Navigation Links
const navigationLinks = navLinks.map((nl) => {
  const link = nl.link ? nl.link : "";
  const text = nl.text ? nl.text : "";

  const output =
    `<li class="nav-item">` +
    `<a class="nav-link link-dark" href="${link}" data-bs-dismiss="offcanvas" data-bs-target="#bdNavbar">` +
    `${text}` +
    `</a>` +
    `</li>`;
  return output;
});

const navLinkElements = document.getElementById("navbar");
if (navLinkElements) navLinkElements.innerHTML = navigationLinks.join("");




// Setup Scroll Spy
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function highlightNavLink() {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
      const top = section.offsetTop - 76;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href').slice(1) === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNavLink);
  window.addEventListener('resize', highlightNavLink);
});
