import nav_links from "./data/nav_links";

// Setup Navigation Links
const footerQuickLinks = nav_links.map((nl) => {
  const {
    text = '',
    link = '',
    icon = ''
  } = nl;

  const output =
    `<li class="nav-item mb-2">` +
      `<a class="nav-link link-dark fw-medium" href="${link}">` +
        `${icon ? icon + ' ' : ''}${text}` +
      `</a>` +
    `</li>`;
  return output;
});

const navLinkElements = document.getElementById("footer-nav");
if (navLinkElements) navLinkElements.innerHTML = footerQuickLinks.join("");