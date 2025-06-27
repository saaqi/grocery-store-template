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

export const vegetables: Product[] = [
	{
		title: 'Aloe Vera Fresh',
		s_desc: "Discover the purest form of nature's healing with our fresh Aloe Vera products.",
		img: 'vegetables/aloe_vera_fresh.webp',
		stock: true,
		added: toDate('2025-03-30T06:31:46')
	},
	{
		title: 'Aubergina White',
		s_desc: 'Add elegance to your culinary creations with our pristine white aubergines.',
		img: 'vegetables/aubergine_white.webp',
		stock: true,
		added: toDate('2025-03-30T06:31:32')
	},
	{
		title: 'Aubergina Thai',
		s_desc: 'Experience the vibrant flavors of Thailand with our authentic Thai eggplants.',
		img: 'vegetables/aubergine_thai.webp',
		stock: true,
		added: toDate('2025-03-30T06:31:27')
	},
	{
		title: 'Bird Eye Chilli',
		s_desc:
			"Ignite your senses with our fiery bird's eye chili, perfect for adding a spicy kick to your dishes.",
		img: 'vegetables/bird_eye_chilli.webp',
		stock: true,
		added: toDate('2025-03-30T06:31:24')
	},
	{
		title: 'Bitter Gourd',
		s_desc: 'Discover the health benefits of bitter gourd with our fresh, nutritious selection.',
		img: 'vegetables/bitter_gourd.webp',
		stock: true,
		added: toDate('2025-03-30T06:31:19')
	},
	{
		title: 'Bottle Gourd',
		s_desc: 'Enhance your culinary creations with our fresh and versatile bottle gourd.',
		img: 'vegetables/bottle_gourd.webp',
		stock: true,
		added: toDate('2025-03-30T06:31:15')
	},
	{
		title: 'Brinjal',
		s_desc:
			'Unlock culinary creativity with our fresh and flavorful brinjal, perfect for diverse dishes.',
		img: 'vegetables/brinjal.webp',
		stock: true,
		added: toDate('2025-03-30T06:31:06')
	},
	{
		title: 'Cassava',
		s_desc:
			'Experience the versatility of cassava, a staple ingredient for delicious dishes worldwide.',
		img: 'vegetables/cassava.webp',
		stock: true,
		added: toDate('2025-03-30T06:31:01')
	},
	{
		title: 'Coriander',
		s_desc: 'Add freshness and flavor to your dishes with our fragrant coriander leaves.',
		img: 'vegetables/coriander.webp',
		stock: true,
		added: toDate('2025-03-30T06:30:58')
	},
	{
		title: 'Garlic',
		s_desc: 'Enhance your recipes with the bold flavor of our premium garlic bulbs.',
		img: 'vegetables/garlic.webp',
		stock: true,
		added: toDate('2025-03-30T06:30:53')
	},
	{
		title: 'Ginger',
		s_desc: 'Spice up your dishes with the zesty kick of our premium ginger roots.',
		img: 'vegetables/ginger.webp',
		stock: true,
		added: toDate('2025-03-30T06:30:47')
	},
	{
		title: 'Gourd',
		s_desc: 'Experience culinary versatility with our fresh and nutritious gourds.',
		img: 'vegetables/gourd.webp',
		stock: true,
		added: toDate('2025-03-30T06:30:43')
	},
	{
		title: 'Green Chiili',
		s_desc: 'Add a spicy kick to your dishes with our vibrant green chilies.',
		img: 'vegetables/green_chiili.webp',
		stock: true,
		added: toDate('2025-03-30T06:30:38')
	},
	{
		title: 'Lemon Green',
		s_desc: 'Brighten up your dishes with the tangy zest of our fresh green lemons.',
		img: 'vegetables/lemon_green.webp',
		stock: true,
		added: toDate('2025-03-30T06:30:34')
	},
	{
		title: 'Lemon Yellow',
		s_desc: 'Add a burst of sunshine to your dishes with our vibrant yellow lemons.',
		img: 'vegetables/lemon_yellow.webp',
		stock: true,
		added: toDate('2025-03-30T06:30:27')
	},
	{
		title: 'Mint',
		s_desc: 'Elevate your dishes with the refreshing flavor of our aromatic mint leaves.',
		img: 'vegetables/mint.webp',
		stock: true,
		added: toDate('2025-03-30T06:30:23')
	},
	{
		title: 'Moroccan Chilli',
		s_desc: 'Spice up your dishes with the exotic flavors of our Moroccan chilli blend.',
		img: 'vegetables/moroccan_chilli.webp',
		stock: true,
		featured: true,
		added: toDate('2025-03-30T06:30:18')
	},
	{
		title: 'Okra African',
		s_desc:
			'Fresh Okra - A staple in African cuisine, our premium-quality okra is rich in flavor and nutrients.',
		img: 'vegetables/okra_african.webp',
		stock: true,
		added: toDate('2025-03-30T06:30:14')
	},
	{
		title: 'Okra Indian',
		s_desc: 'Explore the vibrant flavors of Indian cuisine with our fresh and tender okra.',
		img: 'vegetables/okra_indian.webp',
		stock: true,
		added: toDate('2025-03-30T06:30:08')
	},
	{
		title: 'Red Onion',
		s_desc: 'Add a burst of color and flavor to your dishes with our vibrant and crisp red onions.',
		img: 'vegetables/onion_red.webp',
		stock: true,
		added: toDate('2025-03-30T06:30:04')
	},
	{
		title: 'White Onion',
		s_desc:
			'Discover the crisp and subtly sweet flavor of our fresh white onions, perfect for a variety of culinary uses.',
		img: 'vegetables/onion_white.webp',
		stock: true,
		added: toDate('2025-03-30T06:29:57')
	},
	{
		title: 'Green Paprika',
		s_desc: 'Add a vibrant touch of flavor to your dishes with our fresh and crisp green paprika.',
		img: 'vegetables/paprika_green.webp',
		stock: true,
		added: toDate('2025-03-30T06:29:53')
	},
	{
		title: 'Yellow Paprika',
		s_desc:
			'Brighten up your dishes with the sunny flavor and vibrant color of our premium yellow paprika.',
		img: 'vegetables/paprika_yellow.webp',
		stock: true,
		added: toDate('2025-03-30T06:29:45')
	},
	{
		title: 'Red Paprika',
		s_desc:
			'Intensify your dishes with the bold flavor and vibrant color of our premium red paprika.',
		img: 'vegetables/paprika_red.webp',
		stock: true,
		added: toDate('2025-03-30T06:39:40')
	},
	{
		title: 'Pili Pili',
		s_desc:
			'Spice up your dishes with the fiery heat and intense flavor of our premium pili pili peppers.',
		img: 'vegetables/pili_pili.webp',
		stock: true,
		added: toDate('2025-03-30T06:29:34')
	},
	{
		title: 'Fresh Potatoes',
		s_desc:
			'Versatile and nutritious, our premium potatoes are perfect for a variety of culinary delights.',
		img: 'vegetables/potato.webp',
		stock: true,
		added: toDate('2025-03-30T06:29:31')
	},
	{
		title: 'Red Potatoes',
		s_desc:
			'Vibrant in color and rich in flavor, our premium red potatoes are perfect for roasting, mashing, or grilling.',
		img: 'vegetables/potato_white.webp',
		stock: true,
		added: toDate('2025-03-30T06:29:26')
	},
	{
		title: 'White Potatoes',
		s_desc:
			'Versatile and velvety, our premium white potatoes are ideal for a wide range of culinary applications.',
		img: 'vegetables/potato_red.webp',
		stock: true,
		added: toDate('2025-03-30T06:29:23')
	},
	{
		title: 'Minced Molokhia - Frozen',
		s_desc:
			'Discover the authentic taste of minced Molokhia, a Middle Eastern delicacy, now available at your fingertips!',
		img: 'vegetables/minced_molokhia.webp',
		stock: true,
		added: toDate('2025-03-30T06:29:19')
	},
	{
		title: 'Okra - Frozen',
		s_desc:
			'Experience convenience and freshness with our frozen okra, perfect for wholesome meals anytime!',
		img: 'vegetables/okra.webp',
		stock: true,
		added: toDate('2025-03-30T06:29:13')
	},
	{
		title: 'Green Beans - Frozen',
		s_desc:
			'Experience the taste of Africa with our frozen attieke, bringing authentic flavor to your kitchen!',
		img: 'vegetables/green_beans.webp',
		stock: true,
		added: toDate('2025-03-30T06:29:04')
	},
	{
		title: 'Attiéké - Frozen',
		s_desc:
			'Experience the taste of Africa with our frozen attiéké, bringing authentic flavor to your kitchen!',
		img: 'vegetables/attiéké.webp',
		stock: true,
		added: toDate('2025-03-30T06:28:59')
	},
	{
		title: 'Kwanga - Frozen',
		s_desc:
			'Embark on a flavor journey with our frozen kwanga, bringing the taste of Central Africa to your table!',
		img: 'vegetables/kwanga.webp',
		stock: true,
		added: toDate('2025-03-30T06:28:55')
	},
	{
		title: 'Ngai Ngai - Frozen',
		s_desc:
			'Savor the taste of tradition with our frozen ngai ngai, a flavorful staple of Central African cuisine!',
		img: 'vegetables/ngai_ngai.webp',
		stock: true,
		added: toDate('2025-03-30T06:28:50')
	},
	{
		title: 'Colocasia - Frozen',
		s_desc:
			'Unlock the culinary magic of the tropics with our frozen colocasia, perfect for adding exotic flair to your dishes!',
		img: 'vegetables/colocasia.webp',
		stock: true,
		added: toDate('2025-03-30T06:28:42')
	},
	{
		title: 'Fumbwa - Frozen',
		s_desc:
			'Experience the essence of Central African cuisine with our frozen fumbwa, bringing exotic flavors to your table!',
		img: 'vegetables/fumbwa.webp',
		stock: true,
		uom: 'KG',
		quantity: 0.2,
		added: toDate('2025-03-30T06:28:36')
	},
	{
		title: 'Saka Saka Congo - Frozen',
		s_desc:
			'Bring home the taste of the Congo with our frozen saka saka, a flavorful addition to your culinary journey!',
		img: 'vegetables/saka_saka_congo.webp',
		stock: true,
		uom: 'KG',
		quantity: 0.4,
		added: toDate('2025-03-30T06:28:27')
	}
].map((item) => ({ ...item, cat: 'Vegetables' }));
