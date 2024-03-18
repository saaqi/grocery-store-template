const title = `Sadiq Super Store`;
const tagline = `Unearth the Extraodinary!`;

const orgTitle = `${title} | ${tagline}`;

window.addEventListener("scroll", () => {
  // Define the sections and their corresponding titles
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
      id: "weaklysale",
      title: `Weekly Sale | ${title}`,
    },
    {
      id: "contact",
      title: `Contct Us! | ${title}`,
    },
  ];

  // Loop through each section to check if it's in view
  sections.forEach((section) => {
    const sectionElement = document.getElementById(section.id);
    if (
      sectionElement &&
      window.scrollY + 77 >= sectionElement.offsetTop &&
      window.scrollY <= sectionElement.offsetTop + sectionElement.offsetHeight
    ) {
      // Update the title if the section is in view
      document.title = section.title;
    }
  });
});