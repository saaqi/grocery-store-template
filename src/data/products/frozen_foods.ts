const toDate = (d: string) => new Date(d);

interface Product {
	title: string;
	s_desc: string;
	img: string;
	stock: boolean;
	featured?: boolean;
	uom?: string;
	quantity?: number;
	approximate?: boolean;
	price?: number;
	sale?: number;
	added: Date;
	cat: string;
}

export const frozen_foods: Product[] = [
	{
		title: 'Goat Meat',
		s_desc:
			'Premium quality goat meat - tender, flavorful, and perfect for your next culinary adventure.',
		img: 'frozen_foods/goat_meat.webp',
		stock: true,
		uom: 'KG',
		quantity: 1.0,
		added: toDate('2025-03-30T06:00:49')
	},
	{
		title: 'Goat Feet',
		s_desc:
			'Goat feet a flavorful addition to traditional soups and stews, packed with collagen and nutrients.',
		img: 'frozen_foods/goat_feet.webp',
		stock: true,
		uom: 'KG',
		quantity: 1.0,
		added: toDate('2025-03-30T06:00:45')
	},
	{
		title: 'Cow Meat',
		s_desc: 'Prime cow meat - tender cuts for exquisite meals, sourced from trusted farms.',
		img: 'frozen_foods/cow_meat.webp',
		stock: true,
		uom: 'KG',
		quantity: 1.0,
		added: toDate('2025-03-30T06:00:41')
	},
	{
		title: 'Cow Legs',
		s_desc: 'Cow legs a flavorful and versatile cut, perfect for hearty soups and stews.',
		img: 'frozen_foods/cow_feet.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:00:35')
	},
	{
		title: 'Cow Stomach',
		s_desc: 'Cow stomach meat a delicacy prized for its unique texture and rich flavor profile.',
		img: 'frozen_foods/cow_stomach_meat.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:00:30')
	},
	{
		title: 'Cow Skin',
		s_desc: 'Premium cow skin meat - savory and versatile, available now at Sadiq Super Store.',
		img: 'frozen_foods/cow_skin.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:00:24')
	},
	{
		title: 'Chicken Feet',
		s_desc:
			'Tender chicken feet - a flavorful addition to your recipes, now available at Sadiq Super Store.',
		img: 'frozen_foods/chicken_feet.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:00:21')
	},
	{
		title: 'Chicken Stomach',
		s_desc: 'Savory chicken stomach - a delectable addition to your recipes, now available.',
		img: 'frozen_foods/chicken_stomach.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:00:16')
	},
	{
		title: 'Chicken Wings',
		s_desc: 'Flavorful chicken wings - perfect for any occasion.',
		img: 'frozen_foods/chicken_wings.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:00:13')
	},
	{
		title: 'Osso Bucco',
		s_desc: 'Frozen Osso Bucco meat - premium veal shanks for delicious Italian cuisine.',
		img: 'frozen_foods/osso_bucco.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:00:09')
	},
	{
		title: 'Hen Meat',
		s_desc: 'Hen meat - tender and flavorful poultry for your culinary creations.',
		img: 'frozen_foods/hen_meat.webp',
		stock: true,
		uom: 'KG',
		quantity: 1.1,
		added: toDate('2025-03-30T06:00:04')
	},
	{
		title: 'Hen Meat',
		s_desc: 'Hen meat - tender and flavorful poultry for your culinary creations.',
		img: 'frozen_foods/hen_meat.webp',
		stock: true,
		uom: 'KG',
		quantity: 1.2,
		added: toDate('2025-03-30T05:59:58')
	},
	{
		title: 'Hen Meat',
		s_desc: 'Hen meat - tender and flavorful poultry for your culinary creations.',
		img: 'frozen_foods/hen_meat.webp',
		stock: true,
		uom: 'KG',
		quantity: 1.4,
		added: toDate('2025-03-30T05:59:51')
	},
	{
		title: 'Smoked Hen Meat',
		s_desc: 'Smoked hen meat - rich, flavorful, and ready to enjoy.',
		img: 'frozen_foods/smoked_hen_meat.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		added: toDate('2025-03-30T05:59:39')
	},
	{
		title: 'Turkey Wings',
		s_desc: 'Flavorful and versatile poultry cuts for your cooking needs.',
		img: 'frozen_foods/turkey_wings.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T05:59:35')
	},
	{
		title: 'Smoked Turkey Wings',
		s_desc: 'Smoked turkey wings - rich, smoky flavor in every bite.',
		img: 'frozen_foods/smoked_turkey_wings.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T05:59:28')
	},
	{
		title: 'Fresh Lebanese Bread',
		s_desc:
			"Enjoy the authentic taste of Lebanese bread, freshly baked to perfection! Soft, fluffy, and versatile, it's perfect for wraps, sandwiches, or dipping. A must-have for every meal! 🍽️✨",
		img: 'frozen_foods/lebanese_bread.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		added: toDate('2025-03-30T05:58:19')
	},
	{
		title: 'Horse Mackerel',
		s_desc:
			'Fresh and flavorful horse mackerel, perfect for seafood lovers. Buy now for a delicious culinary experience!',
		img: 'frozen_foods/horse_mackerel.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:03:06')
	},
	{
		title: 'Horse Mackerel Thompson',
		s_desc:
			'Fresh and flavorful horse mackerel, perfect for seafood lovers. Buy now for a delicious culinary experience!',
		img: 'frozen_foods/horse_mackerel.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:03:02')
	},
	{
		title: 'Black Tilapia Whole',
		s_desc:
			'Whole black tilapia, a versatile and nutritious seafood choice. Freshly caught and ready for your culinary creations!',
		img: 'frozen_foods/black_tilapia.webp',
		stock: true,
		uom: 'KG',
		quantity: 1.5,
		approximate: true,
		added: toDate('2025-03-30T06:02:58')
	},
	{
		title: 'Black Tilapia Whole',
		s_desc:
			'Whole black tilapia, a versatile and nutritious seafood choice. Freshly caught and ready for your culinary creations!',
		img: 'frozen_foods/black_tilapia.webp',
		stock: true,
		uom: 'g',
		quantity: 900,
		approximate: true,
		added: toDate('2025-03-30T06:02:54')
	},
	{
		title: 'Croaker',
		s_desc:
			'Fresh and flavorful coaker fish, perfect for seafood lovers. Dive into deliciousness with our premium coaker selection!',
		img: 'frozen_foods/coaker.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:02:50')
	},
	{
		title: 'Red Tilapia Whole',
		s_desc:
			'Whole red tilapia, a vibrant and flavorful seafood choice. Freshly caught and ready to elevate your culinary creations!',
		img: 'frozen_foods/red_tilapia.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:02:46')
	},
	{
		title: 'Hake',
		s_desc:
			'Discover the delicate flavor and tender texture of premium hake fish. Perfect for seafood enthusiasts, our hake is sourced fresh and promises culinary excellence!',
		img: 'frozen_foods/hake.webp',
		stock: true,
		uom: 'Bag',
		quantity: 1,
		added: toDate('2025-03-30T06:02:42')
	},
	{
		title: 'Cat Fish',
		s_desc:
			'Explore the rich, savory taste of catfish - a versatile and nutritious option for seafood lovers. Dive into freshness with our premium catfish selection!',
		img: 'frozen_foods/cat_fish.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:02:38')
	},
	{
		title: 'Crab',
		s_desc:
			'Indulge in succulent crab, a delicacy celebrated for its sweet, tender meat. Explore our premium crab selection for an unforgettable seafood experience!',
		img: 'frozen_foods/crab.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		featured: true,
		added: toDate('2025-03-30T06:02:31')
	},
	{
		title: 'King Weakfish',
		s_desc:
			'Experience the delicate flavor and tender texture of king weakfish, a prized catch for seafood aficionados. Explore our premium selection for an unforgettable dining experience!',
		img: 'frozen_foods/king_weakfish.webp',
		stock: true,
		uom: 'KG',
		quantity: 0.2,
		added: toDate('2025-03-30T06:02:27')
	},
	{
		title: 'Smoked Fish',
		s_desc:
			'Savor the rich, smoky flavor of premium smoked fish. Explore our selection for a delicious addition to your culinary repertoire!',
		img: 'frozen_foods/smoked_fish.webp',
		stock: true,
		uom: 'KG',
		quantity: 1,
		added: toDate('2025-03-30T06:02:23')
	},
	{
		title: 'Pangasius Fillet',
		s_desc:
			'Discover the delicate flavor and flaky texture of premium pangasius fillet. Perfect for seafood enthusiasts, our fillets promise culinary excellence!',
		img: 'frozen_foods/pangasius_fillet.webp',
		stock: true,
		uom: 'KG',
		quantity: 0.8,
		added: toDate('2025-03-30T06:02:19')
	},
	{
		title: 'Tiger Prawns',
		s_desc:
			'Indulge in succulent tiger prawns, known for their sweet, delicate flavor. Explore our premium selection for a delightful seafood experience!',
		img: 'frozen_foods/tiger_prawns.webp',
		stock: true,
		uom: 'KG',
		quantity: 0.75,
		added: toDate('2025-03-30T06:02:14')
	},
	{
		title: 'Gambia, Harnaal Fish',
		s_desc:
			'Enjoy the flavors of Gambia with our fresh Cassava croaker, a local favorite known for its delicate taste and flaky texture. Dive into culinary tradition today!',
		img: 'frozen_foods/gambia_fish.webp',
		stock: true,
		uom: 'KG',
		quantity: 0.5,
		added: toDate('2025-03-30T06:02:11')
	},
	{
		title: 'Cat Fish Steak',
		s_desc:
			'Indulge in the rich flavor and tender texture of catfish steak, a favorite among seafood enthusiasts. Explore our premium selection for a culinary adventure!',
		img: 'frozen_foods/cat_fish_steak.webp',
		stock: true,
		uom: 'KG',
		quantity: 0.8,
		added: toDate('2025-03-30T06:02:07')
	},
	{
		title: 'Black Tilapia Steak',
		s_desc:
			'Savor the succulence of black tilapia steak, a flavorful and nutritious choice for seafood lovers. Explore our premium selection for an unforgettable dining experience!',
		img: 'frozen_foods/black_tilapia_steak.webp',
		stock: true,
		uom: 'KG',
		quantity: 0.8,
		added: toDate('2025-03-30T06:02:02')
	},
	{
		title: 'Red Tilapia Steak',
		s_desc:
			'Savor the succulence of black tilapia steak, a flavorful and nutritious choice for seafood lovers. Explore our premium selection for an unforgettable dining experience!',
		img: 'frozen_foods/red_tilapia_steak.webp',
		stock: true,
		uom: 'KG',
		quantity: 0.8,
		added: toDate('2025-03-30T06:01:52')
	},
	{
		title: 'Pangasius Steak',
		s_desc:
			'Savor the delicate flavor and tender texture of Pangasius steak, a versatile and nutritious choice for seafood enthusiasts. Explore our premium selection for culinary excellence!',
		img: 'frozen_foods/pangasius_fillet.webp',
		stock: true,
		uom: 'KG',
		quantity: 0.8,
		added: toDate('2025-03-30T06:01:48')
	},
	{
		title: 'Tuna Steak',
		s_desc:
			'Indulge in the rich, meaty flavor of tuna steak, a gourmet choice for seafood enthusiasts. Explore our premium selection for a culinary adventure!',
		img: 'frozen_foods/tuna_steak.webp',
		stock: true,
		uom: 'KG',
		quantity: 0.8,
		price: 7.2,
		added: toDate('2025-03-30T06:01:42')
	}
].map((item) => ({ ...item, cat: 'Frozen Foods' }));
