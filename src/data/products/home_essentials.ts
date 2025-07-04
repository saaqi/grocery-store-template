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

export const home_essentials: Product[] = [
	// {
	//   title: "",
	//   s_desc: "",
	//   img: "home_essentials/metal_basket_02.webp",
	//   stock: true,
	//   featured: true,
	//   uom: "PC(s)",
	//   quantity: 1,
	//   price: ,
	//   sale: ,
	//   added: toDate()
	// },
	{
		title: 'Stylish Utility Bags',
		s_desc:
			'Stay organized with our good quality Utility Bags, now available for just €10! Perfect for daily use, shopping, travel, or storage - these bags come in multiple designs to match your style and needs. Durable, spacious, and super handy - grab yours now!',
		img: 'home_essentials/utility_bags_01.webp',
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
		img: 'home_essentials/utility_bags_02.webp',
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
		img: 'home_essentials/utility_bags_03.webp',
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
		img: 'home_essentials/quality_backpacks.webp',
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
		img: 'home_essentials/premium_backpacks_02.webp',
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
		img: 'home_essentials/premium_backpacks_01.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20,
		sale: 18,
		added: toDate('2025-06-24T15:26:15')
	},
	{
		title: 'Stylish & Spacious Utility Bags',
		s_desc:
			'Need a bag that does it all? Our Utility Bags come in multiple sizes, colors, and designs. Perfect for shopping, travel, or daily use!',
		img: 'home_essentials/stylish_bags_04.webp',
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
		img: 'home_essentials/stylish_bags_03.webp',
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
		img: 'home_essentials/stylish_bags_02.webp',
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
		img: 'home_essentials/stylish_bags_01.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 10,
		added: toDate('2025-06-24T15:19:14')
	},
	{
		title: 'Temperature Mugs',
		s_desc:
			'Add charm to your coffee break with our premium quality mugs. elegant, durable, and perfect for every sip!',
		img: 'home_essentials/temperature_mug_15_2.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 15,
		added: toDate('2025-06-24T15:14:04')
	},
	{
		title: 'Temperature Mugs',
		s_desc:
			'Add charm to your coffee break with our premium quality mugs. elegant, durable, and perfect for every sip!',
		img: 'home_essentials/temperature_mug_15.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 18,
		sale: 15,
		added: toDate('2025-06-24T15:14:03')
	},
	{
		title: 'Portable BBQ Grill Just',
		s_desc:
			'Get ready for tasty outdoor fun with our Portable Barbecue Grill, perfect for picnics, camping, and backyard gatherings! Easy to carry. Quick setup. Durable & stylish.',
		img: 'home_essentials/barbecue_grill_40.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 45,
		sale: 40,
		added: toDate('2025-05-17T15:41:58')
	},
	{
		title: '10-Piece Schleizer Immer Base',
		s_desc:
			"Cook like a pro with the 10-Piece Schleizer Immer Base Set, durable, stylish, and built for everyday use. Whether you're whipping up breakfast or a family feast, this set has everything you need, and it's just €20!",
		img: 'home_essentials/immer_base_20_01.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 25,
		sale: 20,
		added: toDate('2025-05-17T15:29:08')
	},
	{
		title: 'Premium 4-Piece Ceramic Bowl Set',
		s_desc:
			'Style meets function with our 4-Piece Ceramic Bowl Set, elegant, durable, and perfect for everyday use or special meals! Serve soups, salads, or snacks in premium quality ceramic, all for just €6',
		img: 'home_essentials/ceramic_bowl_set_6_01.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 6.0,
		added: toDate('2025-05-17T15:21:38')
	},
	{
		title: 'Professional 9-Piece Kitchen Knife Set',
		s_desc:
			'Upgrade your kitchen like a pro with our 9-Piece Kitchen Knife Set, perfect for chefs and home cooks alike! Precision blades, sleek design, and chef- level quality, all for just €18! Chop, slice, and dice with ease, your kitchen deserves this!',
		img: 'home_essentials/knife_set_18.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 22.0,
		sale: 18.0,
		added: toDate('2025-05-17T15:18:40')
	},
	{
		title: 'Mercury Haus Cooking Pot',
		s_desc:
			'Cook like a pro with the Mercury Haus Premium Cooking Pot, now available for just €39.99! Known for its exceptional quality, durability, and sleek design, it’s perfect for everyday meals and special recipes.Even heat distribution and easy cleanup make cooking a breeze!',
		img: 'home_essentials/mercury_haus_pot.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 50.0,
		sale: 39.99,
		added: toDate('2025-04-14T12:59:40')
	},
	{
		title: '5 Piece Cooking Set',
		s_desc:
			'Level up your kitchen with our Premium Quality 5-Piece Cooking Pot Set - now available for just €124.99! Durable, stylish, and built for performance - perfect for daily cooking or special meals.Even heat distribution, easy to clean, and long- lasting shine make it a must - have',
		img: 'home_essentials/5p_cooking_set.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 5,
		price: 150.0,
		sale: 124.99,
		added: toDate('2025-04-14T12:53:58')
	},
	{
		title: 'Kitchen Knife Set',
		s_desc:
			'Upgrade your kitchen game with our Premium Quality Kitchen Knife Set, now available for just €12.99! Sharp, durable, and stylish - perfect for chopping, slicing, and dicing with ease.A must- have for every home chef!',
		img: 'home_essentials/kitchen_knife.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 15.0,
		sale: 12.99,
		added: toDate('2025-04-14T12:51:55')
	},
	{
		title: 'Metal Fruit Baskets',
		s_desc:
			'Add elegance to your kitchen or dining space with our Premium Metal Fruit Baskets - now available for only €6.49! Beautiful, sturdy, and perfect for keeping your fruits fresh and organized in style.A touch of charm for every home!',
		img: 'home_essentials/metal_basket_02.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 10.0,
		sale: 6.49,
		added: toDate('2025-04-14T12:48:18')
	},
	{
		title: 'Traditional Khal Batta',
		s_desc:
			'Bring back the authentic touch to your kitchen with our Khal Batta - perfect for grinding spices the traditional way! Strong, durable, and timeless - ideal for those who love rich flavors and homemade goodness.A must- have for every desi kitchen.',
		img: 'home_essentials/khal_batta.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		added: toDate('2025-04-14T12:43:07')
	},
	{
		title: 'Premium Tea Cups',
		s_desc:
			'Upgrade your tea time with our Premium Tea Cups - elegant, durable, and now only €17.99! Perfect for daily use or serving guests with a touch of class.Available in beautiful designs that bring charm to every sip.',
		img: 'home_essentials/tea_cups.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 6,
		price: 20.0,
		sale: 17.99,
		added: toDate('2025-04-14T12:39:39')
	},
	{
		title: 'School Bags - Large',
		s_desc:
			'Get your kids ready for school with our high-quality school bags! Designed for comfort, durability, and style, they come in multiple sizes, colors, and fun designs. Perfect for carrying books, lunch, and essentials with ease!',
		img: 'home_essentials/school_bag_large.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 15.0,
		added: toDate('2025-04-03T13:11:20')
	},
	{
		title: 'School Bags - Small',
		s_desc:
			'Get your kids ready for school with our high-quality school bags! Designed for comfort, durability, and style, they come in multiple sizes, colors, and fun designs. Perfect for carrying books, lunch, and essentials with ease!',
		img: 'home_essentials/school_bag_small.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 15.0,
		sale: 12.0,
		added: toDate('2025-04-03T13:11:20')
	},
	{
		title: 'Soup Set - 27 Pieces',
		s_desc:
			'Enjoy warm, hearty soups with our high-quality soup set! Perfect for serving your favorite broths, stews, and chowders in style. Crafted for durability and elegance, it’s a must-have for every kitchen! Available in various designs and sizes.',
		img: 'home_essentials/soup_set_27pcs.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 35.0,
		added: toDate('2025-04-03T12:46:30')
	},
	{
		title: 'Soup Set - 15 Pieces',
		s_desc:
			'Enjoy warm, hearty soups with our high-quality soup set! Perfect for serving your favorite broths, stews, and chowders in style. Crafted for durability and elegance, it’s a must-have for every kitchen! Available in various designs and sizes.',
		img: 'home_essentials/soup_set_15pcs.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 30.0,
		sale: 25.0,
		added: toDate('2025-04-03T12:46:15')
	},
	{
		title: 'Baby Blanket',
		s_desc:
			"Wrap yourself in warmth with our premium-quality blanket! 🛌✨ Made from super-soft, breathable fabric, it's perfect for chilly nights or cozy lounging. Available in various colors and sizes, it adds a touch of comfort and style to your home.",
		img: 'home_essentials/baby_blanket_15.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		sale: 15.0,
		added: toDate('2025-04-03T12:46:05')
	},
	{
		title: 'Quilt 220x240',
		s_desc:
			"Wrap yourself in warmth with our premium-quality blanket! 🛌✨ Made from super-soft, breathable fabric, it's perfect for chilly nights or cozy lounging. Available in various colors and sizes, it adds a touch of comfort and style to your home.",
		img: 'home_essentials/quilt_220_240.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 28.0,
		added: toDate('2025-04-03T12:46:05')
	},
	{
		title: 'Blanket for 2 Persons - Double Ply',
		s_desc:
			"Wrap yourself in warmth with our premium-quality blanket! 🛌✨ Made from super-soft, breathable fabric, it's perfect for chilly nights or cozy lounging. Available in various colors and sizes, it adds a touch of comfort and style to your home.",
		img: 'home_essentials/blanket_2person_2ply.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 35.0,
		added: toDate('2025-04-03T12:43:30')
	},
	{
		title: 'Blanket For One Person - Single Ply',
		s_desc:
			"Wrap yourself in warmth with our premium-quality blanket! 🛌✨ Made from super-soft, breathable fabric, it's perfect for chilly nights or cozy lounging. Available in various colors and sizes, it adds a touch of comfort and style to your home.",
		img: 'home_essentials/blanket_single_ply.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 22.0,
		added: toDate('2025-04-03T12:43:06')
	},
	{
		title: 'Clocks - Stylish and Functional',
		s_desc:
			'Upgrade your space with our beautiful and functional clocks - perfect for any home or office! 🏡⌚ Available in multiple designs to match your style.',
		img: 'home_essentials/clocks.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 30.0,
		sale: 15.0,
		added: toDate('2025-03-30T06:07:54')
	},
	{
		title: 'Home Cleaning Equipment',
		s_desc:
			'Keep your home clean and organized with our premium cleaning equipment! From mops and brooms to dustpans and brushes, we have everything you need to maintain a spotless living space. 🏡✨',
		img: 'home_essentials/cleaning_equipment.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		added: toDate('2025-03-30T06:07:39')
	},
	{
		title: 'Fabric Softeners',
		s_desc:
			'Keep your clothes soft, fresh, and clean with our premium fabric softeners! Available in multiple scents, these softeners are perfect for all your laundry needs. 🧺✨',
		img: 'home_essentials/fabric_softener_01.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 7.0,
		added: toDate('2025-03-30T06:07:30')
	},
	{
		title: 'Fabric Softeners',
		s_desc:
			'Keep your clothes soft, fresh, and clean with our premium fabric softeners! Available in multiple scents, these softeners are perfect for all your laundry needs. 🧺✨',
		img: 'home_essentials/fabric_softener_02.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 6.5,
		added: toDate('2025-03-30T06:07:21')
	},
	{
		title: 'Stylish and Durable Backpack',
		s_desc:
			'Stay organized on the go with our high-quality backpack! Spacious, comfortable, and designed for everyday use—whether for work, school, or travel. Available in multiple colors!',
		img: 'home_essentials/backpack_01.webp',
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
		img: 'home_essentials/backpack_02.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 15.0,
		added: toDate('2025-03-30T06:13:32')
	},
	{
		title: '2-Piece Tray Set',
		s_desc:
			'Serve in style with our premium 2-piece tray set! Perfect for everyday use or special gatherings, these trays are durable, stylish, and easy to carry. A must-have for any home! 🏡🍽️',
		img: 'home_essentials/2x_tray_set.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 2,
		price: 8.5,
		added: toDate('2025-03-30T06:06:52')
	},
	{
		title: '4-Piece Suitcase',
		s_desc:
			"Travel in Style, Get ready for your next trip with this durable and spacious 4-piece suitcase set! Available in multiple colors, it's perfect for all your travel needs. 🏖️✈️",
		img: 'home_essentials/suite_case_4x_01.webp',
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
		img: 'home_essentials/suite_case_4x_02.webp',
		stock: true,
		featured: false,
		uom: 'PC(s)',
		quantity: 4,
		price: 210,
		sale: 145,
		added: toDate('2025-03-30T06:06:35')
	},
	{
		title: 'Temperature Cups - Perfect for Hot & Cold Drinks!',
		s_desc:
			'Keep your drinks at the perfect temperature with our premium temperature control cups! Whether you love hot coffee or ice-cold juice, these cups maintain the ideal temperature for longer. Stylish, durable, and perfect for everyday use!',
		img: 'home_essentials/temperature_cup.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 15,
		sale: 20,
		added: toDate('2025-04-26T15:06:37')
	},
	{
		title: 'Bowls and Plates',
		s_desc:
			'Enhance your dining experience with our beautiful collection of bowls and plates! 🍽️✨ Available in various designs, sizes, and colors—perfect for everyday use or special occasions.',
		img: 'home_essentials/bowls_plates_01.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		added: toDate('2025-03-30T06:05:51')
	},
	{
		title: 'Bowls and Plates',
		s_desc:
			'Enhance your dining experience with our beautiful collection of bowls and plates! 🍽️✨ Available in various designs, sizes, and colors—perfect for everyday use or special occasions.',
		img: 'home_essentials/bowls_plates_02.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		added: toDate('2025-03-30T06:05:52')
	},
	{
		title: 'Bowls and Plates',
		s_desc:
			'Enhance your dining experience with our beautiful collection of bowls and plates! 🍽️✨ Available in various designs, sizes, and colors—perfect for everyday use or special occasions.',
		img: 'home_essentials/bowls_plates_03.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		added: toDate('2025-03-30T06:05:53')
	},
	{
		title: 'Bowls and Plates',
		s_desc:
			'Enhance your dining experience with our beautiful collection of bowls and plates! 🍽️✨ Available in various designs, sizes, and colors—perfect for everyday use or special occasions.',
		img: 'home_essentials/bowls_plates_04.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		added: toDate('2025-03-30T06:05:54')
	},
	{
		title: 'Bowls and Plates',
		s_desc:
			'Enhance your dining experience with our beautiful collection of bowls and plates! 🍽️✨ Available in various designs, sizes, and colors—perfect for everyday use or special occasions.',
		img: 'home_essentials/bowls_plates_05.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		added: toDate('2025-03-30T06:05:55')
	},
	{
		title: 'Premium Travel Suitcase Set',
		s_desc:
			'Travel with ease using our 3-piece suitcase set, available in multiple colors to match your style! Lightweight, durable, and spacious, these suitcases are perfect for all your adventures.',
		img: 'home_essentials/suite_case_3x.webp',
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
		img: 'home_essentials/suite_case_3x_ex1.webp',
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
		img: 'home_essentials/suite_case_3x_ex2.webp',
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
		img: 'home_essentials/suite_case_3x_ex3.webp',
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
		img: 'home_essentials/suite_case_3x_ex4.webp',
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
		img: 'home_essentials/suite_case_3x_ex5.webp',
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
		img: 'home_essentials/suite_case_3x_ex6.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 3,
		price: 180,
		sale: 130,
		added: toDate('2025-03-30T06:05:26')
	},
	{
		title: 'Musallah (Prayer Mat)',
		s_desc:
			'Experience peace and comfort during your prayers with our high-quality Musallah. Designed with soft, durable fabric, it provides a comfortable surface for daily worship. Perfect for home, travel, or gifting! 🙏✨',
		img: 'home_essentials/musllah.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 5.0,
		added: toDate('2025-03-30T06:05:15')
	},
	{
		title: 'Tasbeeh (Digital)',
		s_desc:
			'Keep track of your prayers and supplications effortlessly with our Digital Tasbeeh. Compact, easy to use, and perfect for daily zikr, it helps you stay focused and connected anytime, anywhere! 🙏✨',
		img: 'home_essentials/digtal_tasbeeh.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 5.0,
		sale: 3.0,
		added: toDate('2025-03-30T06:05:03')
	},
	{
		title: 'Tasbeeh (Prayer Beads)',
		s_desc:
			"Our Tasbeeh (Prayer Beads) are crafted with care to help you stay focused during dhikr. With smooth, durable beads, it's the perfect tool for enhancing your spiritual practice and bringing peace to your heart. 🙏✨",
		img: 'home_essentials/tasbeeh.webp',
		stock: true,
		featured: false,
		uom: 'PC(s)',
		quantity: 1,
		price: 5.0,
		sale: 3.0,
		added: toDate('2025-03-30T06:04:55')
	}
].map((item) => ({ ...item, cat: 'Home Essentials' }));
