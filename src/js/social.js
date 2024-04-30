// Setup Social Media Links
import socialMediaLinks from "./data/social-links";

const socialLinks = socialMediaLinks.map((sl) => {
  const {
    link = '',
    title = '',
    icon = '',
    link_class = ''
  } = sl;

  const output =
    `<li class="lh-1">`+
      `<a class="${link_class} fs-3" href="${link}" title="${title}!" target="_blank" rel="nofollow">`+
        `<i class="bx ${icon}"></i>`+
      `</a>`+
    `</li>`;

  return output;
});

const socialLinkElements = document.querySelectorAll(".social-links");

if (socialLinkElements) socialLinkElements.forEach((e) => {
  e.innerHTML = socialLinks.join("");
});
