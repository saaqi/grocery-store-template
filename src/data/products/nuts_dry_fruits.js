const toDate = d => new Date(d)

export const nuts_dry_fruits = [
  {
    title: "Premium Quality Dates",
    s_desc: "Stay connected with a Lyca Mobile SIM card offering seamless network coverage and affordable international calling rates.",
    img: "nuts_dry_fruits/gold_dates.webp",
    stock: true,
    uom: "Box",
    quantity: 1,
    price: 2.70,
    sale: 2.00,
    added: toDate("2025-03-30T06:35:28")
  }
].map((item) => ({ ...item, cat: 'Nuts and Dry Fruits' }));