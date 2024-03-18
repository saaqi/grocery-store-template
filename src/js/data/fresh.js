const fresh = [
  {
    title: `Fresh Meats`,
    s_desc: `All Kinds of Fresh Meats.`,
    desc: `We Have all kinds of fresh meats like, beaf, mutton and chicken.`,
    img: `images/meats.webp`,
    price: 23,
    sale: 20,
    featured: true,
    added: 20240312,
  },
  {
    title: `Fresh Vegetables`,
    s_desc: `All Kinds of Fresh Vegetables.`,
    desc: `We Have all kinds of fresh begetables like, cucumber, bitter gourd and lady fingers.`,
    img: `images/vegetables.webp`,
    price: 23,
    sale: 20,
    featured: true,
    added: 20240312,
  },
].map((item, index) => {
  return {
    ...item,
    id: `fresh-0${index}`,
    cat: `Fresh Produce`,
  };
});

export default fresh;
