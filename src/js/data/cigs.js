const cigs = [
  {
    title: `Cigarettes`,
    s_desc: `All Kinds of Cigarettes.`,
    desc: `We Have all kinds of Cigarettes like, Gold Leafs, Marlboro and Pine.`,
    img: `images/cigs.webp`,
    id: `cig01`,
    price: 50,
    sale: 49,
    featured: true,
    added: 20240311,
  },
].map((item, index) => {
  return {
    ...item,
    id: `cigs-0${index}`,
    cat: `Cigarettes`,
  };
});
export default cigs;
