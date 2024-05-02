const nav_links = [
  {
    link: "home",
    text: "Home",
    icon: "<i class='bx bxs-home-smile'></i>",
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
    subcategories: [
      {
        link: "fruit-shop-heading",
        text: "Fresh Fruits",
        icon: "<i class='bx bxs-purchase-tag'></i>",
      },
      {
        link: "vegetable-shop-heading",
        text: "Fresh Vegetables",
        icon: "<i class='bx bxs-purchase-tag'></i>",
      },
      {
        link: "frozen-meats-shop-heading",
        text: "Frozen Meats",
        icon: "<i class='bx bxs-purchase-tag'></i>",
      },
      {
        link: "frozen-seafood-shop-heading",
        text: "Frozen Sea Food",
        icon: "<i class='bx bxs-purchase-tag'></i>",
      },
    ],
  },
  {
    link: "sale",
    text: "Sale",
    icon: "<i class='bx bxs-shopping-bag'></i>",
  },
  {
    link: "contact",
    text: "Contact Us!",
    icon: "<i class='bx bxs-contact'></i>",
  },
];

export default nav_links;