document.addEventListener("DOMContentLoaded", function () {
  const title = `Sadiq Super Store`;
  const tagline = `Unearth the Extraodinary!`;
  const orgTitle = `${title} | ${tagline}`;
  const sections = [
    {
      id: "home",
      title: orgTitle,
    },
    {
      id: "arrivals",
      title: `New Arrivals | ${title}`,
    },
    {
      id: "featured",
      title: `Featured Products | ${title}`,
    },
    {
      id: "shop",
      title: `Shop | ${title}`,
    },
    {
      id: "sale",
      title: `Weekly Sale | ${title}`,
    },
    {
      id: "contact",
      title: `Contact Us! | ${title}`,
    },
  ];

  let currentSection = null;

  function updateTitles() {
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      const scrollPosition = window.scrollY;
      const top = sectionElement.offsetTop - 77;
      const bottom = top + sectionElement.offsetHeight;
      if (sectionElement && scrollPosition >= top && scrollPosition < bottom && currentSection !== section.id) {
        // Update the title only if the section has changed
        currentSection = section.id;
        document.title = section.title;
      }
    });
  }

  let debounceTimer;
  const DEBOUNCE_DELAY = 300;

  function debounceUpdateTitles() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(updateTitles, DEBOUNCE_DELAY);
  }

  window.addEventListener('load', updateTitles);
  window.addEventListener('scroll', debounceUpdateTitles);
  window.addEventListener('resize', debounceUpdateTitles);
});
