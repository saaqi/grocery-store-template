const beverages = [
  {
    title: `Beverage`,
    s_desc: `All Beverages, Coca Cola, Pepsi etc.`,
    desc: `We Hav all kinds of beverages.`,
    cat: `Bevrages`,
    img: `images/beverage.webp`,
    id: `beverage01`,
    price: 8,
    // sale: 0,
    featured: true,
    added: 20240311,
  },
].map((item, index) => {
  return {
    ...item,
    id: `beverage-0${index}`,
    cat: `Beverages`,
  };
});
export default beverages;
