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

export const electronics: Product[] = [
	// {
	//   title: "",
	//   s_desc: "",
	//   img: "electronics/.webp",
	//   stock: true,
	//   // featured: true,
	//   uom: "PC(s)",
	//   quantity: 1,
	//   price: 75.00,
	//   sale: 55.00,
	//   added: toDate()
	// },
	{
		title: '16" Stand Fan',
		s_desc:
			'Beat the heat with our 16" Stand Fan, packed with features to keep you cool and comfortable. Perfect for your home or office, all for just €30!. 3 Speed Control. Super Quiet Motor. 180° Oscillation.',
		img: 'electronics/padestal_fan_30.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 35.0,
		sale: 30.0,
		added: toDate('2025-05-17T15:39:00')
	},
	{
		title: 'Eisenbach HW-1501 Juicer',
		s_desc:
			'Start your day the fresh way with the Eisenbach HW-1501 Juicer, now available for only €28! Powerful, efficient, and easy to clean, perfect for making fresh juices at home in minutes.',
		img: 'electronics/eisenbach_juicer_28_01.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 35,
		sale: 28,
		added: toDate('2025-05-17T15:27:16')
	},
	{
		title: 'Handheld Garment Steamer',
		s_desc:
			'Say goodbye to wrinkles in seconds with our Handheld Garment Steamer, now available for just €19.99! Perfect for quick touch-ups, easy to use, travel - friendly, and gentle on all fabrics.Look sharp every day!',
		img: 'electronics/handheld_steamer.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 25.0,
		sale: 19.99,
		added: toDate('2025-04-29T16:53:44')
	},
	{
		title: 'Universal TV Remote',
		s_desc:
			'Lost your remote? No worries! Grab a Universal TV Remote for only €4.99! Compatible with most TV brands, easy to set up, and super convenient.Switch channels with ease again!',
		img: 'electronics/universal_tv_remote.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 7.0,
		sale: 4.99,
		added: toDate('2025-04-29T15:57:13')
	},
	{
		title: 'AE800 Ultra2 Smart Watch',
		s_desc:
			'Experience smart living with the AE800 Ultra2 Smart Watch, now available for just €20! Stay connected, track your fitness, monitor your health, and enjoy a sleek, stylish design - all from your wrist. Big features.Small price.Perfect choice!',
		img: 'electronics/smart_watch_ae800_ultra2.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 30.0,
		sale: 25.0,
		added: toDate('2025-04-26T16:04:27')
	},
	{
		title: 'S9 Pro Smart Watch ',
		s_desc:
			'Upgrade your style and tech game with the S9 Pro Smart Watch, featuring a sleek 2.19-inch screen - now for just €14! Track your fitness, stay on top of calls & messages, and enjoy modern convenience on your wrist without spending big. Smart features.Smart price.',
		img: 'electronics/smart_watch_s9pro.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		sale: 14.0,
		added: toDate('2025-04-26T15:57:42')
	},
	{
		title: '3-in-1 LED Wireless Charger',
		s_desc:
			'The ultimate all-in-one gadget is here! Get a LED Wireless Charger, Digital Clock, and Bluetooth Speaker - all in one sleek device for just €20! Charge your phone wirelessly, enjoy your favorite tunes, and keep track of time - perfect for your desk or bedside table. Modern.Compact.Super useful.',
		img: 'electronics/bt_speaker_charger.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 25.0,
		sale: 20.0,
		added: toDate('2025-04-26T15:56:32')
	},
	{
		title: 'Ultra Bright Flashlight',
		s_desc:
			'Light up the night with our Ultra Bright Flashlight, now available for only €18! Perfect for camping, emergencies, or everyday use - this flashlight is powerful, durable, and compact. Don’t get caught in the dark - grab yours today!',
		img: 'electronics/led_flash_light.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		sale: 18.0,
		added: toDate('2025-04-26T15:55:37')
	},
	{
		title: 'Karaoke Wireless Mic + HiFi Speake',
		s_desc:
			'Unleash your inner superstar with our Karaoke Wireless Microphone featuring a built-in HiFi Speaker! Perfect for parties, family fun, or solo jam sessions - enjoy crystal- clear sound, wireless convenience, and hours of entertainment. Sing it loud.Sing it proud',
		img: 'electronics/bt_mic_speaker.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		// price: 75.00,
		// sale: 55.00,
		added: toDate('2025-04-26T15:53:14')
	},
	{
		title: 'GT-5 Max Smart Watch',
		s_desc:
			'Stay ahead of your day with the GT-5 Max Smart Watch, now available for just €25! Track your steps, monitor your heart rate, check messages, and more - all from your wrist. Sleek design.Smart features.Amazing price. Perfect for fitness, work, and everyday style!',
		img: 'electronics/smart_watch_gt5max.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 35.0,
		sale: 25.0,
		added: toDate('2025-04-26T15:51:59')
	},
	{
		title: 'Wireless Speaker, Lamp and Clock',
		s_desc:
			'Get the ultimate combo: Wireless Speaker + Clock + LED Lamp - all in one stylish device for just €20! Enjoy your favorite music, keep track of time, and light up your space with colorful multi- LED lights - perfect for your bedside, desk, or gifting! Function meets fun - at an unbeatable price!',
		img: 'electronics/bt_speaker_clock.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 25.0,
		sale: 20.0,
		added: toDate('2025-04-26T15:49:38')
	},
	{
		title: 'Portable Camping Light LED + Cob',
		s_desc:
			"Our Portable Camping Light is built to shine bright and last long - perfect for outdoor adventures, power outages, or late-night BBQs! Super bright, tough design, and easy to carry - all for only €20! Don't get left in the dark - grab yours today!",
		img: 'electronics/led_cob_light.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		// sale: 55.00,
		added: toDate('2025-04-26T15:46:43')
	},
	{
		title: 'Hair Straightener',
		s_desc:
			'Get salon-smooth hair at home with our Hair Straightener, now available for only €13! Perfect for quick styling, taming frizz, and adding shine - all without breaking the bank.Easy to use, lightweight, and heats up fast! Look good, feel great - every day!',
		img: 'electronics/hair_straightener.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		sale: 13.0,
		added: toDate('2025-04-26T15:42:05')
	},
	{
		title: 'Shinon Hair Dryer',
		s_desc:
			'Say goodbye to frizz and hello to sleek hair with the Shinon Hair Dryer - now available for only €20! Enjoy fast, effortless drying with a powerful motor and compact design.Perfect for daily styling with salon - like results at home! Style smart.Dry quick.Look fabulous.',
		img: 'electronics/hair_dryer.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		// sale: 30.00,
		added: toDate('2025-04-26T15:40:31')
	},
	{
		title: 'Premium Hair Trimmers',
		s_desc:
			"Achieve that fresh, clean look at home with our premium quality Hair Trimmers, now just €20! Available in multiple models to suit your style - whether you need a quick trim or detailed grooming, we've got you covered. Powerful motor, sleek design, and precise cutting - all at an unbeatable price!",
		img: 'electronics/hair_timmer_01.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		added: toDate('2025-04-26T15:35:31')
	},
	{
		title: 'Premium Hair Trimmers',
		s_desc:
			"Achieve that fresh, clean look at home with our premium quality Hair Trimmers, now just €20! Available in multiple models to suit your style - whether you need a quick trim or detailed grooming, we've got you covered. Powerful motor, sleek design, and precise cutting - all at an unbeatable price!",
		img: 'electronics/hair_timmer_02.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		added: toDate('2025-04-26T15:35:32')
	},
	{
		title: 'Premium Hair Trimmers',
		s_desc:
			"Achieve that fresh, clean look at home with our premium quality Hair Trimmers, now just €20! Available in multiple models to suit your style - whether you need a quick trim or detailed grooming, we've got you covered. Powerful motor, sleek design, and precise cutting - all at an unbeatable price!",
		img: 'electronics/hair_timmer_03.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		added: toDate('2025-04-26T15:35:33')
	},
	{
		title: 'Premium Hair Trimmers',
		s_desc:
			"Achieve that fresh, clean look at home with our premium quality Hair Trimmers, now just €20! Available in multiple models to suit your style - whether you need a quick trim or detailed grooming, we've got you covered. Powerful motor, sleek design, and precise cutting - all at an unbeatable price!",
		img: 'electronics/hair_timmer_04.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		added: toDate('2025-04-26T15:35:34')
	},
	{
		title: 'P9 Ultra 2 Combo Deal',
		s_desc:
			'Get the best of both worlds with our P9 Ultra 2 Combo -s includes Wireless Headphones + Smart Watch for only €25! Enjoy premium sound, stay connected on the go, and track your fitness, calls, and notifications - all in one stylish bundle.',
		img: 'electronics/bt_headphone_ultra2.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 30.0,
		sale: 25.0,
		added: toDate('2025-04-26T15:32:28')
	},
	{
		title: 'P9 Wireless Headphones',
		s_desc:
			'Experience premium sound quality without breaking the bank! Our P9 Wireless Bluetooth Headphones are now available for just €12! Enjoy crystal- clear audio, deep bass, and comfortable fit - perfect for music, calls, and on - the - go listening.',
		img: 'electronics/bt_headphon_p9.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		sale: 12.0,
		added: toDate('2025-04-26T15:30:06')
	},
	{
		title: 'Bluetooth Speaker',
		s_desc:
			'Turn up the volume with our Bluetooth Speaker - now only €55! Enjoy crystal- clear sound, deep bass, and wireless freedom wherever you go.Perfect for parties, picnics, or chilling at home.',
		img: 'electronics/bluetooth_speaker_55.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 75.0,
		sale: 55.0,
		added: toDate('2025-04-07T17:43:06')
	},
	{
		title: 'Electric Air Fryer',
		s_desc:
			'Get your hands on our Electric Air Fryer for just €55 and enjoy guilt-free crispy meals at home! Fry, grill, roast, or bake with little to no oil - perfect for healthy, tasty cooking.Easy to use, quick to clean, and super energy - efficient!',
		img: 'electronics/air_fryer_55.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 55.0,
		// sale: 00.00,
		added: toDate('2025-04-07T17:40:29')
	},
	{
		title: 'Electric Sandwich Maker',
		s_desc:
			'Craving crispy, golden sandwiches at home? Grab our Electric Sandwich Maker for only €20! Quick, easy, and mess- free - perfect for breakfast, lunch, or snack time.Non - stick plates, fast heating, and compact design make it a kitchen must - have!',
		img: 'electronics/sandwich_maker_20.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		// sale: 20.00,
		added: toDate('2025-04-07T17:39:14')
	},
	{
		title: 'Electric Toaster',
		s_desc:
			"Start your mornings right with our Electric Toaster, now on sale for just €16! Crisp, golden toast at the push of a button.With multiple browning settings and a sleek design, it's the perfect addition to your kitchen!",
		img: 'electronics/toaster_16.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		sale: 16.0,
		added: toDate('2025-04-07T17:38:27')
	},
	{
		title: 'Electric Iron',
		s_desc:
			"Say goodbye to creases with our Electric Iron, now available for only €20! Fast heating, lightweight, and easy to use - it's perfect for everyday ironing and keeping your clothes looking sharp.Quality and performance at an unbeatable price!",
		img: 'electronics/iron_20.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 25.0,
		sale: 20.0,
		added: toDate('2025-04-07T17:36:29')
	},
	{
		title: 'Electric Meat Grinder',
		s_desc:
			'Take your kitchen game to the next level with our Electric Meat Grinder, now on promotion for just €25! Perfect for making fresh mince, sausages, and more at home - fast, easy, and hygienic.Built to last with strong blades and a powerful motor.',
		img: 'electronics/meat_grinder_25.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 30.0,
		sale: 25.0,
		added: toDate('2025-04-07T17:35:37')
	},
	{
		title: 'Electric Mixer',
		s_desc:
			'Mix it, whip it, blend it - all with ease! Get your hands on our powerful Electric Mixer for just €25 - limited-time offer! Perfect for baking, cooking, and everyday kitchen magic.Lightweight, durable, and easy to clean - a must- have for every home chef!',
		img: 'electronics/mixer_25.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 30.0,
		sale: 25.0,
		added: toDate('2025-04-07T17:34:25')
	},
	{
		title: 'Electric HotPlate',
		s_desc:
			"Perfect for busy mornings, tiny kitchens, or cooking up a storm when the stove's taken. Compact, powerful, and super handy — it's your new kitchen buddy you didn't know you needed!",
		img: 'electronics/hotplate_25.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 30.0,
		sale: 25.0,
		added: toDate('2025-04-07T17:33:25')
	},
	{
		title: 'Electric Fan Heater',
		s_desc:
			'Compact & Portable: Perfect for any room in your home. Energy Efficient: Keeps you warm while saving on your energy bills. Safe & Reliable: Features overheat protection for peace of mind.',
		img: 'electronics/fan_heater_15.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		sale: 15.0,
		added: toDate('2025-04-07T17:32:18')
	},
	{
		title: 'Electric Hand Blender',
		s_desc:
			'Whip it, blend it, love it — our Electric Hand Blender is now on SALE! Say goodbye to uneven mixing and hello to silky- smooth shakes, sauces, and soups — all in seconds!',
		img: 'electronics/hand_blender_18.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		sale: 18.0,
		added: toDate('2025-04-07T17:31:48')
	},
	{
		title: 'Electric Hand Blender',
		s_desc:
			'Whip it, blend it, love it — our Electric Hand Blender is now on SALE! Say goodbye to uneven mixing and hello to silky- smooth shakes, sauces, and soups — all in seconds!',
		img: 'electronics/hand_blender_20.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 25.0,
		sale: 20.0,
		added: toDate('2025-04-07T17:31:42')
	},
	{
		title: 'Electric Jug Kettle',
		s_desc:
			"Whether it's your morning tea or a late-night noodle craving, this kettle's got your back — fast and fuss-free!",
		img: 'electronics/jug_kettle_15.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		sale: 15.0,
		added: toDate('2025-04-07T17:31:35')
	},
	{
		title: 'Electric Kettle',
		s_desc:
			"Whether it's your morning tea or a late-night noodle craving, this kettle's got your back — fast and fuss-free!",
		img: 'electronics/kettle_15.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 20.0,
		sale: 15.0,
		added: toDate('2025-04-07T15:30:22')
	}
].map((item) => ({ ...item, cat: 'Electronics' }));
