const toDate = (d: string) => new Date(d);

interface Product {
  title: string;
  s_desc: string;
  img: string;
  stock: boolean;
  featured?: boolean;
  uom?: string;
  quantity?: number;
  price?: number;
  sale?: number;
  added: Date;
  cat: string;
}

export const travel: Product[] = [
  {
    title: '3-Piece Travel Suitcase Set',
    s_desc:
      'Durable • Spacious • Perfect for all your trips!',
    img: 'travel/3piece_suite_set_02.webp',
    stock: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 99.0,
    added: toDate('2025-08-16T14:47:27')
  },
  {
    title: '3-Piece Travel Suitcase Set',
    s_desc:
      'Durable • Spacious • Perfect for all your trips!',
    img: 'travel/3piece_suite_set_01.webp',
    stock: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 119.0,
    sale: 99.0,
    added: toDate('2025-08-16T14:46:19')
  },
  {
    title: 'Stylish Utility Bags',
    s_desc:
      'Stay organized with our good quality Utility Bags, now available for just €10! Perfect for daily use, shopping, travel, or storage - these bags come in multiple designs to match your style and needs. Durable, spacious, and super handy - grab yours now!',
    img: 'travel/utility_bags_01.webp',
    stock: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 10.0,
    added: toDate('2025-04-26T15:36:11')
  },
  {
    title: 'Stylish Utility Bags',
    s_desc:
      'Stay organized with our good quality Utility Bags, now available for just €10! Perfect for daily use, shopping, travel, or storage - these bags come in multiple designs to match your style and needs. Durable, spacious, and super handy - grab yours now!',
    img: 'travel/utility_bags_02.webp',
    stock: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 10.0,
    added: toDate('2025-04-26T15:36:12')
  },
  {
    title: 'Stylish Utility Bags',
    s_desc:
      'Stay organized with our good quality Utility Bags, now available for just €10! Perfect for daily use, shopping, travel, or storage - these bags come in multiple designs to match your style and needs. Durable, spacious, and super handy - grab yours now!',
    img: 'travel/utility_bags_03.webp',
    stock: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 10.0,
    added: toDate('2025-04-26T15:36:13')
  },
  {
    title: 'Quality Backpacks',
    s_desc:
      "Looking for the perfect everyday bag? We've got you covered! Our Amazing Quality Backpacks are.",
    img: 'travel/quality_backpacks.webp',
    stock: true,
    featured: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 15,
    added: toDate('2025-06-24T16:36:19')
  },
  {
    title: 'Premium Backpacks',
    s_desc:
      'Upgrade your carry game with our Premium Backpacks. built for comfort, style, and durability!',
    img: 'travel/premium_backpacks_02.webp',
    stock: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 20,
    sale: 18,
    added: toDate('2025-06-24T15:27:18')
  },
  {
    title: 'Premium Backpacks',
    s_desc:
      'Upgrade your carry game with our Premium Backpacks. built for comfort, style, and durability!',
    img: 'travel/premium_backpacks_01.webp',
    stock: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 20,
    sale: 18,
    added: toDate('2025-06-24T15:26:15')
  },
  {
    title: 'Stylish and Durable Backpack',
    s_desc:
      'Stay organized on the go with our high-quality backpack! Spacious, comfortable, and designed for everyday use—whether for work, school, or travel. Available in multiple colors!',
    img: 'travel/backpack_01.webp',
    stock: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 15.0,
    added: toDate('2025-03-30T06:40:11')
  },
  {
    title: 'Stylish and Durable Backpack',
    s_desc:
      'Stay organized on the go with our high-quality backpack! Spacious, comfortable, and designed for everyday use—whether for work, school, or travel. Available in multiple colors!',
    img: 'travel/backpack_02.webp',
    stock: true,
    featured: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 15.0,
    added: toDate('2025-03-30T06:13:32')
  },
  {
    title: 'Stylish & Spacious Utility Bags',
    s_desc:
      'Need a bag that does it all? Our Utility Bags come in multiple sizes, colors, and designs. Perfect for shopping, travel, or daily use!',
    img: 'travel/stylish_bags_04.webp',
    stock: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 10,
    added: toDate('2025-06-24T15:20:59')
  },
  {
    title: 'Stylish & Spacious Utility Bags',
    s_desc:
      'Need a bag that does it all? Our Utility Bags come in multiple sizes, colors, and designs. Perfect for shopping, travel, or daily use!',
    img: 'travel/stylish_bags_03.webp',
    stock: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 12,
    sale: 10,
    added: toDate('2025-06-24T15:20:33')
  },
  {
    title: 'Stylish & Spacious Utility Bags',
    s_desc:
      'Need a bag that does it all? Our Utility Bags come in multiple sizes, colors, and designs. Perfect for shopping, travel, or daily use!',
    img: 'travel/stylish_bags_02.webp',
    stock: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 10,
    added: toDate('2025-06-24T15:20:19')
  },
  {
    title: 'Stylish & Spacious Utility Bags',
    s_desc:
      'Need a bag that does it all? Our Utility Bags come in multiple sizes, colors, and designs. Perfect for shopping, travel, or daily use!',
    img: 'travel/stylish_bags_01.webp',
    stock: true,
    featured: true,
    uom: 'PC(s)',
    quantity: 1,
    price: 10,
    added: toDate('2025-06-24T15:19:14')
  },
  {
    title: '4-Piece Suitcase',
    s_desc:
      "Travel in Style, Get ready for your next trip with this durable and spacious 4-piece suitcase set! Available in multiple colors, it's perfect for all your travel needs. 🏖️✈️",
    img: 'travel/suite_case_4x_01.webp',
    stock: true,
    featured: true,
    uom: 'PC(s)',
    quantity: 4,
    price: 200,
    sale: 140,
    added: toDate('2025-03-30T06:06:41')
  },
  {
    title: '4-Piece Suitcase',
    s_desc:
      "Travel in Style, Get ready for your next trip with this durable and spacious 4-piece suitcase set! Available in multiple colors, it's perfect for all your travel needs. 🏖️✈️",
    img: 'travel/suite_case_4x_02.webp',
    stock: true,
    featured: false,
    uom: 'PC(s)',
    quantity: 4,
    price: 210,
    sale: 145,
    added: toDate('2025-03-30T06:06:35')
  },
  {
    title: 'Premium Travel Suitcase Set',
    s_desc:
      'Travel with ease using our 3-piece suitcase set, available in multiple colors to match your style! Lightweight, durable, and spacious, these suitcases are perfect for all your adventures.',
    img: 'travel/suite_case_3x.webp',
    stock: true,
    featured: true,
    uom: 'PC(s)',
    quantity: 3,
    price: 180,
    sale: 130,
    added: toDate('2025-03-30T06:05:20')
  },
  {
    title: 'Premium Travel Suitcase Set',
    s_desc:
      'Travel with ease using our 3-piece suitcase set, available in multiple colors to match your style! Lightweight, durable, and spacious, these suitcases are perfect for all your adventures.',
    img: 'travel/suite_case_3x_ex1.webp',
    stock: true,
    featured: true,
    uom: 'PC(s)',
    quantity: 3,
    price: 180,
    sale: 130,
    added: toDate('2025-03-30T06:05:21')
  },
  {
    title: 'Premium Travel Suitcase Set',
    s_desc:
      'Travel with ease using our 3-piece suitcase set, available in multiple colors to match your style! Lightweight, durable, and spacious, these suitcases are perfect for all your adventures.',
    img: 'travel/suite_case_3x_ex2.webp',
    stock: true,
    featured: true,
    uom: 'PC(s)',
    quantity: 3,
    price: 180,
    sale: 130,
    added: toDate('2025-03-30T06:05:22')
  },
  {
    title: 'Premium Travel Suitcase Set',
    s_desc:
      'Travel with ease using our 3-piece suitcase set, available in multiple colors to match your style! Lightweight, durable, and spacious, these suitcases are perfect for all your adventures.',
    img: 'travel/suite_case_3x_ex3.webp',
    stock: true,
    featured: true,
    uom: 'PC(s)',
    quantity: 3,
    price: 180,
    sale: 130,
    added: toDate('2025-03-30T06:05:23')
  },
  {
    title: 'Premium Travel Suitcase Set',
    s_desc:
      'Travel with ease using our 3-piece suitcase set, available in multiple colors to match your style! Lightweight, durable, and spacious, these suitcases are perfect for all your adventures.',
    img: 'travel/suite_case_3x_ex4.webp',
    stock: true,
    featured: true,
    uom: 'PC(s)',
    quantity: 3,
    price: 180,
    sale: 130,
    added: toDate('2025-03-30T06:05:24')
  },
  {
    title: 'Premium Travel Suitcase Set',
    s_desc:
      'Travel with ease using our 3-piece suitcase set, available in multiple colors to match your style! Lightweight, durable, and spacious, these suitcases are perfect for all your adventures.',
    img: 'travel/suite_case_3x_ex5.webp',
    stock: true,
    featured: true,
    uom: 'PC(s)',
    quantity: 3,
    price: 180,
    sale: 130,
    added: toDate('2025-03-30T06:05:25')
  },
  {
    title: 'Premium Travel Suitcase Set',
    s_desc:
      'Travel with ease using our 3-piece suitcase set, available in multiple colors to match your style! Lightweight, durable, and spacious, these suitcases are perfect for all your adventures.',
    img: 'travel/suite_case_3x_ex6.webp',
    stock: true,
    featured: true,
    uom: 'PC(s)',
    quantity: 3,
    price: 180,
    sale: 130,
    added: toDate('2025-03-30T06:05:26')
  },
].map((item) => ({ ...item, cat: 'Travel' }));
