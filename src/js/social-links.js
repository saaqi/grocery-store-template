// Setup Social Media Links
const socialMediaLinks = [
  {
    link: `mailto:saaqi.grw@gmail.com?subject=Hi,&nbsp;Saqib&nbsp;Let's&nbsp;talk!`,
    title: `Send us an E-Mail!`,
    link_class: `email-link`,
    icon: `bxl-gmail`,
  },
  {
    link: `tel:+923006412193`,
    title: `Give us a Call!`,
    link_class: `phone-link`,
    icon: `bx-phone-call`,
  },
  {
    link: `https://wa.me/+923006412193`,
    title: `Send us a message on WhatsApp!`,
    link_class: `whatsapp-link`,
    icon: `bxl-whatsapp`,
  },
  {
    link: `https://facebook.com/saqibislam`,
    title: `Follow our Facebook Page to stay Up to date with our latest offers!`,
    link_class: `faceook-link`,
    icon: `bxl-facebook`,
  },
  {
    link: `https://twitter.com/saaqi`,
    title: `Follow us on X to stay Up to date with our latest offers!`,
    link_class: `x-link`,
    icon: `bxl-twitter`,
  },
];

const socialLinks = socialMediaLinks.map((sl) => {
  const link = sl.link ? sl.link : ``;
  const title = sl.title ? sl.title : ``;
  const icon = sl.icon ? sl.icon : ``;
  const link_class = sl.link_class ? sl.link_class : ``;

  const output =
    `<li>`+
      `<a class="${link_class} fs-3 lh-1" href="${link}" title="${title}!" target="_blank" rel="nofollow">`+
        `<i class="pe-4 bx ${icon}"></i>`+
      `</a>`+
    `</li>`;

  return output;
});

const socialLinkElements = document.querySelectorAll(".social-links");

if (socialLinkElements)
  socialLinkElements.forEach((e) => {
    e.innerHTML = socialLinks.join("");
  });
