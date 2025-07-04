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

export const misc: Product[] = [
	{
		title: '9 Days Nail Polish',
		s_desc:
			'Soft, huggable, and full of charm, our Plush Skin Stuffed Toys are perfect for kids and collectors alike! Super soft & safe. Adorable designs. Great gift idea.',
		img: 'misc/toy_set_10.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 10,
		added: toDate('2025-05-17T15:51:07')
	},
	{
		title: '9 Days Nail Polish',
		s_desc:
			'Add a pop of color to your nails with our high-quality nail polish! Available in gorgeous shades, it offers a smooth finish, long-lasting shine, and quick drying. Perfect for any occasion!',
		img: 'misc/9_days_nail_polish.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 6.0,
		sale: 3.0,
		added: toDate('2025-03-30T06:38:43')
	},
	{
		title: 'Waterproof Liquid Eyeliner',
		s_desc:
			'Get the perfect cat-eye every time with our Waterproof Liquid Eyeliner. Easy to apply, long-lasting, and smudge-proof—so you can look flawless all day long!',
		img: 'misc/waterproof_liquid_eyeliner.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 6.0,
		sale: 3.0,
		added: toDate('2025-03-30T06:38:39')
	},
	{
		title: 'Skin Shimmer Loose Powder',
		s_desc:
			'Looking for that perfect shimmer without spending a fortune? Our Skin Shimmer Loose Powder is just €4.50—because luxury doesn’t have to be expensive!',
		img: 'misc/skin_shimmer_loose_powder.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 8.0,
		sale: 4.5,
		added: toDate('2025-03-30T06:38:36')
	},
	{
		title: 'KC Compact Powder',
		s_desc:
			'Affordable, effective, and perfect for your daily beauty routine. Why pay more when you can look flawless for less?',
		img: 'misc/compact_powder.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 6.0,
		sale: 3.0,
		added: toDate('2025-03-30T06:38:32')
	},
	{
		title: 'Meryam Perfumes for Men',
		s_desc:
			'Discover our exquisite collection of miscellaneous perfumes, featuring unique scents for every occasion. Long-lasting, captivating, and perfect for any style. Find your signature fragrance today!',
		img: 'misc/meryam_men.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 5.0,
		sale: 3.5,
		added: toDate('2025-03-30T06:38:29')
	},
	{
		title: 'Meryam Perfumes for Women',
		s_desc:
			'Discover our exquisite collection of miscellaneous perfumes, featuring unique scents for every occasion. Long-lasting, captivating, and perfect for any style. Find your signature fragrance today!',
		img: 'misc/meryam_women.webp',
		stock: true,
		// featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 5.0,
		sale: 3.5,
		added: toDate('2025-03-30T06:38:25')
	},
	{
		title: 'Miswak',
		s_desc:
			'Experience the power of nature with our high-quality Miswak! Known for its natural antibacterial properties, it helps whiten teeth, freshen breath, and promote healthy gums—all without chemicals! Stay fresh the traditional way.',
		img: 'misc/miswak.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 3.0,
		sale: 1.5,
		added: toDate('2025-03-30T06:38:21')
	},
	{
		title: 'Birthday Party Supplies',
		s_desc:
			"Planning a birthday party? Don't stress—we’ve got everything you need to make it unforgettable! 🎂🎉",
		img: 'misc/birthday_supplies.webp',
		stock: true,
		added: toDate('2025-03-30T06:38:16')
	},
	{
		title: 'Special Perfumes',
		s_desc:
			'Discover our exquisite collection of miscellaneous perfumes, featuring unique scents for every occasion. Long-lasting, captivating, and perfect for any style. Find your signature fragrance today!',
		img: 'misc/perfumes-special.webp',
		stock: true,
		featured: true,
		uom: 'PC(s)',
		quantity: 1,
		price: 12.0,
		sale: 6.5,
		added: toDate('2025-03-30T06:38:11')
	}
].map((item) => ({ ...item, cat: 'Miscellaneous' }));
