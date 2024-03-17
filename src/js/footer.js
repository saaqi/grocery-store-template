import navLinks from "./data/nav-links";

// Setup Navigation Links
const footerQuickLinks = navLinks.map((nl) => {
  const link = nl.link ? nl.link : "";
  const text = nl.text ? nl.text : "";

  const output =
    `<li class="nav-item mb-2">` +
      `<a class="nav-link link-dark fw-medium" href="${link}">` +
        `${text}` +
      `</a>` +
    `</li>`;
  return output;
});

const navLinkElements = document.getElementById("footer-nav");
if (navLinkElements) navLinkElements.innerHTML = footerQuickLinks.join("");

// NATIVE JAVASCRIPT WAY
document.querySelectorAll('#footer-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView();
    });
});