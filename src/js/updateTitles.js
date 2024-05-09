document.addEventListener("DOMContentLoaded", () => {
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
      title: `On Sale | ${title}`,
    },
    {
      id: "contact",
      title: `Contact Us! | ${title}`,
    },
  ];

  let currentSection = null;

  const updateTitles = () => {
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (
        sectionElement &&
        window.scrollY + 70 >= sectionElement.offsetTop &&
        window.scrollY <= sectionElement.offsetTop + sectionElement.offsetHeight
      ) {
        // Update the title only if the section has changed
        if (currentSection !== section.id) {
          currentSection = section.id;
          document.title = section.title;
        }
      }
    });
  }

  let debounceTimer;
 const debounceUpdateTitles = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(updateTitles, 200);
  }

  window.addEventListener('load', updateTitles);
  window.addEventListener('scroll', debounceUpdateTitles);
  window.addEventListener('resize', debounceUpdateTitles);
});
