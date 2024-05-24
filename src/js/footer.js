// Attach social links
import { attachSocialLinksById } from "./functions/attachSocialLinks";
attachSocialLinksById('footer-social-links');


// Setup Navigation Links
import nav_links from "./data/nav_links";
const footerQuickLinks = nav_links.map((nl) => {
  const {
    text = '',
    link = '',
    icon = ''
  } = nl;

  const output =
    `<li class="nav-item mb-2">` +
      `<a class="nav-link link-dark fw-bold" href="${link}">${icon} ${text}</a>` +
    `</li>`;
  return output;
});

const navLinkElements = document.getElementById("footer-nav");
if (navLinkElements) navLinkElements.innerHTML = footerQuickLinks.join("");


// Add Current Year to the footer
document.getElementById("curr_year").innerHTML = new Date().getFullYear();