const navLinks = [
  {
    link: "#home",
    text: "Home",
    linkClass: 'home',
  },
  {
    link: "#featured",
    text: "Featured",
    linkClass: 'featured',
  },
  {
    link: "#arrivals",
    text: "New Arrivals",
    linkClass: 'arrivals',
  },
  {
    // link: "#shop",
    text: "Shop",
    linkClass: 'Shop',
    subcategories: [
      {
        link: "#fruit-shop-heading",
        text: "Fresh Fruits",
        linkClass: 'fruit-shop',
      },
      {
        link: "#vegetable-shop-heading",
        text: "Fresh Vegetables",
        linkClass: 'vegetable-shop',
      },
      {
        link: "#frozen-meats-shop-heading",
        text: "Frozen Meats",
        linkClass: 'frozen-meats-shop',
      },
    ],
  },
  {
    link: "#sale",
    text: "Sale",
    linkClass: 'sale',
  },
  {
    link: "#contact",
    text: "Contact Us!",
    linkClass: 'contact',
  },
];

export default navLinks;