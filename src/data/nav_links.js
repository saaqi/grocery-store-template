import { shopCats } from "./shop_categories";

const nav_links = [
  {
    link: "home",
    text: "Home",
    icon: "<i class='bx bxs-home-smile'></i>",
  },
  {
    link: "sale",
    text: "Sale",
    icon: "<i class='bx bxs-shopping-bag'></i>",
  },
  {
    link: "featured",
    text: "Featured",
    icon: "<i class='bx bxs-shopping-bag-alt'></i>",
  },
  {
    link: "arrivals",
    text: "New Arrivals",
    icon: "<i class='bx bxs-shopping-bags'></i>",
  },
  {
    link: "shop",
    text: "Shop",
    icon: "<i class='bx bxs-store'></i>",
    subcategories: [],
  },
  {
    link: "contact",
    text: "Contact Us!",
    icon: "<i class='bx bxs-contact'></i>",
  },
];

nav_links.forEach(item => {
  if (item.link === "shop") {
    item.subcategories = shopCats;
  }
});

export default nav_links;