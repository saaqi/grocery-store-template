export const misc = [
  {
    title: "Miswak",
    s_desc: "Our Tasbeeh (Prayer Beads) are crafted with care to help you stay focused during dhikr. With smooth, durable beads, it's the perfect tool for enhancing your spiritual practice and bringing peace to your heart. 🙏✨",
    desc: false,
    img: "misc/miswak.webp",
    // img_extra: [],
    stock: true,
    // featured: false,
    uom: "PC(s)",
    quantity: 1,
    price: 3.00,
    sale: 1.50,
    added: 20250324
  },
  {
    title: "Birthday Party Supplies",
    s_desc: "Planning a birthday party? Don't stress—we’ve got everything you need to make it unforgettable! 🎂🎉",
    desc: false,
    img: "misc/birthday_supplies.webp",
    // img_extra: [],
    stock: true,
    // featured: false,
    // uom: "PC(s)",
    // quantity: 1,
    // price: 3.00,
    // sale: 1.50,
    added: 20250324
  },
  {
    title: "Special Perfumes",
    s_desc: "Discover our exquisite collection of miscellaneous perfumes, featuring unique scents for every occasion. Long-lasting, captivating, and perfect for any style. Find your signature fragrance today!",
    desc: false,
    img: "misc/perfumes.webp",
    // img_extra: [],
    stock: true,
    featured: true,
    uom: "PC(s)",
    quantity: 1,
    price: 12.00,
    sale: 6.50,
    added: 20250324
  }
].map((item) => ({ ...item, cat: 'Miscellaneous' }));
