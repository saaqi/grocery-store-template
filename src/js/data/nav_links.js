const nav_links = [
  {
    link: "#home",
    text: "Home",
    linkClass: 'home',
    icon: "<i class='bx bxs-home-smile'></i>",
  },
  {
    link: "#featured",
    text: "Featured",
    linkClass: 'featured',
    icon: "<i class='bx bxs-shopping-bag-alt'></i>",
  },
  {
    link: "#arrivals",
    text: "New Arrivals",
    linkClass: 'arrivals',
    icon: "<i class='bx bxs-shopping-bags'></i>",
  },
  {
    link: "#shop",
    text: "Shop",
    linkClass: 'Shop',
    icon: "<i class='bx bxs-store'></i>",
    subcategories: [
      {
        link: "#fruit-shop-heading",
        text: "Fresh Fruits",
        linkClass: 'fruit-shop',
        icon: "<i class='bx bxs-purchase-tag'></i>",
      },
      {
        link: "#vegetable-shop-heading",
        text: "Fresh Vegetables",
        linkClass: 'vegetable-shop',
        icon: "<i class='bx bxs-purchase-tag'></i>",
      },
      {
        link: "#frozen-meats-shop-heading",
        text: "Frozen Meats",
        linkClass: 'frozen-meats-shop',
        icon: "<i class='bx bxs-purchase-tag'></i>",
      },
      {
        link: "#frozen-seafood-shop-heading",
        text: "Frozen Sea Food",
        linkClass: 'frozen-seafood-shop',
        icon: "<i class='bx bxs-purchase-tag'></i>",
      },
    ],
  },
  {
    link: "#sale",
    text: "Sale",
    linkClass: 'sale',
    icon: "<i class='bx bxs-shopping-bag'></i>",
  },
  {
    link: "#contact",
    text: "Contact Us!",
    linkClass: 'contact',
    icon: "<i class='bx bxs-contact'></i>",
  },
];

export default nav_links;