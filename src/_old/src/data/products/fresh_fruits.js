const toDate = d => new Date(d)

export const fresh_fruits = [
  {
    title: "Apples",
    s_desc: "Fresh and juicy apples - nature's perfect snack!",
    img: "fruits/apples.webp",
    stock: true,
    added: toDate("2025-03-30T05:56:18")
  },
  {
    title: "Bananas",
    s_desc: "Creamy and nutritious bananas - the perfect on-the-go snack!",
    img: "fruits/bananas.webp",
    stock: true,
    added: toDate("2025-03-30T05:56:12")
  },
  {
    title: "Coconuts",
    s_desc: "Fresh coconuts - a taste of the tropics in every bite!",
    img: "fruits/coconut.webp",
    stock: true,
    // featured:true,
    added: toDate("2025-03-30T05:56:06")
  },
  {
    title: "Guava",
    s_desc: "Juicy and aromatic guavas - a taste of the tropics!",
    img: "fruits/guava.webp",
    stock: true,
    added: toDate("2025-03-30T05:55:59")
  },
  {
    title: "Brazilian Mangoes",
    s_desc: "Exotic Brazilian mangoes - ripe, juicy, and bursting with tropical flavor!",
    img: "fruits/mango_brazilian.webp",
    stock: true,
    // featured:true,
    added: toDate("2025-03-29T06:55:46")
  },
  {
    title: "Oranges",
    s_desc: "Juicy and vibrant oranges - a burst of sunshine in every bite!",
    img: "fruits/oranges.webp",
    stock: true,
    added: toDate("2025-03-30T05:55:34")
  },
  {
    title: "Papaya",
    s_desc: "Exotic papayas - sweet, juicy, and bursting with tropical goodness!",
    img: "fruits/papaya.webp",
    stock: true,
    added: toDate("2025-03-30T05:55:28")
  },
  {
    title: "Plantain Green",
    s_desc: "Versatile green plantains - perfect for frying, boiling, or baking into delicious dishes!",
    img: "fruits/plantain_green.webp",
    stock: true,
    added: toDate("2025-03-30T05:55:20")
  },
  {
    title: "Plantain Yellow",
    s_desc: "Ripe yellow plantains - sweet, creamy, and perfect for both sweet and savory dishes!",
    img: "fruits/plantain_yellow.webp",
    stock: true,
    added: toDate("2025-03-30T05:55:15")
  }
].map((item) => ({ ...item, cat: 'Fresh Fruits' }));