const toDate = d => new Date(d)

export const snacks_and_drinks = [
  {
    title: "Crown Kulfi Ice Cream",
    s_desc: "Enjoy the rich, creamy taste of traditional Crown Kulfi, made with real milk and authentic flavors. A perfect frozen treat to satisfy your sweet cravings with every bite.",
    img: "snacks_and_drinks/crown_kulfi_ice.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    // price: 3.00,
    // sale: 0.50,
    added: toDate("2025-06-24T16:30:28")
  },
  {
    title: "Matri",
    s_desc: "Enjoy the perfect golden, flaky, and crispy Matri! A delicious traditional snack, perfect for tea time or whenever you crave something savory and satisfying.",
    img: "snacks_and_drinks/matri.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 3.00,
    // sale: 0.50,
    added: toDate("2025-03-30T06:11:22")
  },
  {
    title: "Fruit Cake",
    s_desc: "Enjoy the delicious blend of soft cake and fruity goodness in every bite! Our fruit cake is moist, rich, and perfect for any occasion—whether with tea, coffee, or as a sweet snack. 🍰🍓",
    img: "snacks_and_drinks/fruit_cake.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 3.90,
    // sale: 0.50,
    added: toDate("2025-03-30T06:12:28")
  },
  {
    title: "Creem Roll",
    s_desc: "Indulge in our light, fluffy, and creamy cream rolls! Perfectly sweet and delicious, they’re a must-have for any dessert lover. Enjoy with tea, coffee, or as a tasty snack anytime! ☕✨",
    img: "snacks_and_drinks/creem_roll.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 4.50,
    // sale: 0.50,
    added: toDate("2025-03-30T06:12:24")
  },
  {
    title: "Cake Rusk",
    s_desc: "Enjoy the perfect tea-time snack with our crispy and golden cake rusks! Light, sweet, and irresistibly crunchy—ideal for dipping in your favorite tea or coffee. ☕✨",
    img: "snacks_and_drinks/cake_rusk.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 6.00,
    // sale: 0.50,
    added: toDate("2025-03-30T06:12:15")
  },
  {
    title: "Sweets",
    s_desc: "Indulge in a delightful variety of miscellaneous sweets, perfect for any sweet tooth! From fruity gummies to rich chocolates, there's something for everyone to enjoy.",
    desc: "Indulge in a delightful variety of miscellaneous sweets, perfect for any sweet tooth! From fruity gummies to rich chocolates, there's something for everyone to enjoy.",
    img: "snacks_and_drinks/sweets-01.webp",
    img_extra: [
      "snacks_and_drinks/sweets-02.webp"
    ],
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 3.00,
    // sale: 0.50,
    added: toDate("2025-03-30T06:12:10")
  },
  {
    title: "Buldok Noodles",
    s_desc: "Enjoy a quick and easy meal with our delicious and convenient noodles! Perfect for busy days or late-night cravings, these noodles are a tasty and satisfying option for any time of day. 🍜🌙",
    img: "snacks_and_drinks/buldok_noodles_02.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 2.00,
    // sale: 0.50,
    added: toDate("2025-03-30T06:12:05")
  },
  {
    title: "Buldok Noodles",
    s_desc: "Enjoy a quick and easy meal with our delicious and convenient noodles! Perfect for busy days or late-night cravings, these noodles are a tasty and satisfying option for any time of day. 🍜🌙",
    img: "snacks_and_drinks/buldok_noodles_01.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 2.50,
    // sale: 0.50,
    added: toDate("2025-03-30T06:12:01")
  },
  {
    title: "Maggi Noodles",
    s_desc: "Enjoy a quick and easy meal with our delicious and convenient noodles! Perfect for busy days or late-night cravings, these noodles are a tasty and satisfying option for any time of day. 🍜🌙",
    img: "snacks_and_drinks/maggi_noodles.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 0.70,
    // sale: 0.50,
    added: toDate("2025-03-30T06:11:58")
  },
  {
    title: "Miscellaneous Noodles",
    s_desc: "Enjoy a quick and easy meal with our delicious and convenient noodles! Perfect for busy days or late-night cravings, these noodles are a tasty and satisfying option for any time of day. 🍜🌙",
    img: "snacks_and_drinks/misc_noodles.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 2.50,
    // sale: 0.50,
    added: toDate("2025-03-30T06:11:54")
  },
  {
    title: "Cookies and Biscuits",
    s_desc: "Indulge in the sweet and savory goodness of our premium cookies and biscuits! Perfect for snacking, sharing, or enjoying with a cup of tea or coffee. 🍪☕",
    img: "snacks_and_drinks/biscuits.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 3.50,
    // sale: 0.50,
    featured: true,
    added: toDate("2025-03-30T06:11:44")
  },
  {
    title: "Premium Quality Dates",
    s_desc: "Indulge in the rich taste and natural goodness of our premium quality dates! Soft, juicy, and packed with essential nutrients, they make the perfect healthy snack or energy booster. Great for everyday consumption or special occasions!",
    img: "snacks_and_drinks/gold_dates.webp",
    stock: true,
    uom: "Box",
    quantity: 1,
    price: 2.70,
    sale: 2.00,
    added: toDate("2025-03-30T06:35:28")
  },
  {
    title: "Sun Exotic Sparkling Fruit Juice",
    s_desc: "Stay refreshed and save BIG with our limited-time offer! Enjoy a 50% DISCOUNT on a variety of drinks from soft drinks to juices and more! ",
    img: "snacks_and_drinks/sun_exotic_sparkling.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 1.20,
    sale: 0.50,
    added: toDate("2025-03-30T06:11:42")
  },
  {
    title: "Rubicon Sparkling Fruit Juice",
    s_desc: "Stay refreshed and save BIG with our limited-time offer! Enjoy a 50% DISCOUNT on a variety of drinks from soft drinks to juices and more! ",
    img: "snacks_and_drinks/rubicon_fruit_drink.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 1.20,
    sale: 0.50,
    added: toDate("2025-03-30T06:11:39")
  },
  {
    title: "Maaza Fruit Punch",
    s_desc: "Experience the tropical delight of Maaza Fruit Punch, a refreshing and fruity drink that's perfect for any occasion! 🍹🌴",
    img: "snacks_and_drinks/maaza_fruit_punch.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 2.00,
    sale: 1.00,
    added: toDate("2025-03-30T06:11:36")
  },
  {
    title: "Chaudfontaine Sparkling Water",
    s_desc: "Pure, refreshing, and naturally mineral-rich! 💦✨ Enjoy the crisp bubbles and smooth taste, perfect for staying hydrated and refreshed anytime. 🥂🌿",
    img: "snacks_and_drinks/chaudfontaine_sparkling_water.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 1.00,
    sale: 0.50,
    added: toDate("2025-03-30T06:11:33")
  },
  {
    title: "Hawai Fesa Strawberry Drink",
    s_desc: "A deliciously refreshing strawberry-flavored drink! 🍓🥤 Bursting with fruity sweetness, it's the perfect way to quench your thirst and enjoy a tropical taste in every sip. 🌟✨",
    img: "snacks_and_drinks/hawai_fesa_strawberry.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 2.00,
    sale: 1.00,
    added: toDate("2025-03-30T06:11:30")
  },
  {
    title: "OKF Farmer Aloe Vera Drink",
    s_desc: "Refreshingly smooth and packed with natural aloe vera goodness! 🌿🥤 Enjoy a delicious, hydrating drink with real aloe pulp for a fresh and revitalizing experience. 💚✨",
    img: "snacks_and_drinks/okf_farmer_aloe_vera.webp",
    stock: true,
    uom: "PC(s)",
    quantity: 1,
    price: 1.50,
    sale: 1.00,
    added: toDate("2025-03-30T06:11:28")
  }
].map((item) => ({ ...item, cat: 'Snacks and Drinks' }));
