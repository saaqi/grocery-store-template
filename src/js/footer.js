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