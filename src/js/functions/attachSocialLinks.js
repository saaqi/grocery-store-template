// Setup Social Media Links
import social_links from "../data/social_links";

const attachSocialLinksById = parentId => {

  const socialLinks = social_links.map((sl) => {
    const {
      link = '',
      title = '',
      icon = '',
      link_class = ''
    } = sl;

    const output =
      `<li class="lh-1">` +
        `<a class="${link_class} fs-3" href="${link}" title="${title}!" target="_blank" rel="nofollow">` +
          `<i class="bx ${icon}"></i>` +
        `</a>` +
      `</li>`;

    return output;
  });

  const parentSelector = document.getElementById(parentId);
  if (parentSelector) parentSelector.innerHTML = socialLinks.join("");
}


const attachSocialLinksByClass = parentClass => {

  const socialLinks = social_links.map((sl) => {
    const {
      link = '',
      title = '',
      icon = '',
      link_class = ''
    } = sl;

    const output =
      `<li class="lh-1">` +
        `<a class="${link_class} fs-3" href="${link}" title="${title}!" target="_blank" rel="nofollow">` +
          `<i class="bx ${icon}"></i>` +
        `</a>` +
      `</li>`;

    return output;
  });

  const parentSelector = document.querySelectorAll(parentClass);
  // if (parentSelector) for( var each of parentSelector) each.innerHTML = socialLinks.join("");
  if (parentSelector) parentSelector.forEach(each => each.innerHTML = socialLinks.join(""));
}

export { attachSocialLinksById, attachSocialLinksByClass };