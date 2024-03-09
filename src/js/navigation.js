// Setup Navigation Links
const navLinks = [
  {
    link: "#home",
    text: "Home",
  },
  {
    link: "#arrivals",
    text: "New Arrivals",
  },
  {
    link: "#featured",
    text: "Featured!",
  },
  {
    link: "#contact",
    text: "Contact Us!",
  },
];

const navigationLinks = navLinks.map((nl) => {
  const link = nl.link ? nl.link : "";
  const text = nl.text ? nl.text : "";

  const output = `
    <li class="nav-item">
      <a class="nav-link link-dark" href="${link}" data-bs-dismiss="offcanvas" data-bs-target="#bdNavbar">
        ${text}
      </a>
    </li>`;

  return output;
});

const navLinkElements = document.getElementById("navbar");
if (navLinkElements) navLinkElements.innerHTML = navigationLinks.join("");

const footerNavLinkElements = document.querySelector(".menu-list");
if (footerNavLinkElements) footerNavLinkElements.innerHTML = navigationLinks.join("");
