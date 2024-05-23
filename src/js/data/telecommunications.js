const crown_foods = [
  {
    title: "Lyca Mobile SIM Card",
    s_desc: "Stay connected with a Lyca Mobile SIM card offering seamless network coverage and affordable international calling rates.",
    // desc: "",
    img: "images/products/telecommunication_logos/lycamobile.webp",
    stock: true,
    // uom: 'PC(s)',
    // quantity: 20.0,
    // price: 8.00,
    // sale: 7.20,
    featured: true,
    added: 20240501,
  },
  {
    title: "Lyca Vouchers & Cards",
    s_desc: "Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.",
    // desc: "",
    img: "images/products/telecommunication_logos/lycamobile.webp",
    stock: true,
    // uom: 'PC(s)',
    // quantity: 20.0,
    // price: 8.00,
    // sale: 7.20,
    // featured: true,
    added: 20240501,
  },
  {
    title: "Orange Vouchers & Cards",
    s_desc: "Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.",
    // desc: "",
    img: "images/products/telecommunication_logos/orange.svg",
    stock: true,
    // uom: 'PC(s)',
    // quantity: 20.0,
    // price: 8.00,
    // sale: 7.20,
    // featured: true,
    added: 20240517,
  },
  {
    title: "Poximus Vouchers & Cards",
    s_desc: "Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.",
    // desc: "",
    img: "images/products/telecommunication_logos/proximus.webp",
    stock: true,
    // uom: 'PC(s)',
    // quantity: 20.0,
    // price: 8.00,
    // sale: 7.20,
    // featured: true,
    added: 20240501,
  },
  {
    title: "Jim Mobile Vouchers & Cards",
    s_desc: "Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.",
    // desc: "",
    img: "images/products/telecommunication_logos/JIM_mobile.webp",
    stock: true,
    // uom: 'PC(s)',
    // quantity: 20.0,
    // price: 8.00,
    // sale: 7.20,
    // featured: true,
    added: 20240501,
  },
  {
    title: "Base Vouchers & Cards",
    s_desc: "Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.",
    // desc: "",
    img: "images/products/telecommunication_logos/base.webp",
    stock: true,
    // uom: 'PC(s)',
    // quantity: 20.0,
    // price: 8.00,
    // sale: 7.20,
    // featured: true,
    added: 20240501,
  },
  {
    title: "L-mobi Mobile Vouchers & Cards",
    s_desc: "Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.",
    // desc: "",
    img: "images/products/telecommunication_logos/l-mobil.webp",
    stock: true,
    // uom: 'PC(s)',
    // quantity: 20.0,
    // price: 8.00,
    // sale: 7.20,
    // featured: true,
    added: 20240501,
  },
  {
    title: "Paysafe Vouchers & Cards",
    s_desc: "Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.",
    // desc: "",
    img: "images/products/telecommunication_logos/paysafecard.webp",
    stock: true,
    // uom: 'PC(s)',
    // quantity: 20.0,
    // price: 8.00,
    // sale: 7.20,
    // featured: true,
    added: 20240501,
  },
  {
    title: "Neosurf Vouchers & Cards",
    s_desc: "Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.",
    // desc: "",
    img: "images/products/telecommunication_logos/neosurf.webp",
    stock: true,
    // uom: 'PC(s)',
    // quantity: 20.0,
    // price: 8.00,
    // sale: 7.20,
    // featured: true,
    added: 20240501,
  },
].map((item, index) => {
  return {
    ...item,
    id: `telecommunications-${index}`,
    cat: "Telecommunications",
  };
});
export default crown_foods;