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

export const foods: Product[] = [
	{
		title: 'Asian Tiger Fragrant Rice',
		s_desc: 'Aromatic long-grain rice that cooks fluffy and fragrant, great for Asian cuisine.',
		img: 'foods/asian_tiger_fragrant_ice.webp',
		stock: true,
		uom: 'Lb(s)',
		quantity: 40,
		featured: true,
		added: toDate('2025-08-16T15:02:35')
	},
	{
		title: 'Laila Basmati Rice',
		s_desc: 'Extra-long grain basmati rice with rich aroma and fluffy texture for perfect dishes.',
		img: 'foods/laila_basmati_rice.webp',
		stock: true,
		uom: 'Kg(s)',
		quantity: 20,
		price: 50,
		sale: 48,
		added: toDate('2025-08-16T15:02:35')
	},
	{
		title: 'Elephant Chapati Flour',
		s_desc: 'High-quality wheat flour ideal for soft, authentic chapatis and rotis.',
		img: 'foods/elephant_chapati_flour.webp',
		stock: true,
		uom: 'Kg(s)',
		quantity: 25,
		price: 30,
		sale: 24,
		added: toDate('2025-08-16T14:59:06')
	},
	{
		title: 'AAA Thai Hom Mali Fragrant Rice',
		s_desc: 'Premium Thai jasmine rice with a soft, fragrant aroma perfect for everyday meals.',
		img: 'foods/AAA_thai_hom_mali_fragrant_rice.webp',
		stock: true,
		uom: 'Kg(s)',
		quantity: 18,
		price: 30,
		added: toDate('2025-08-16T14:59:06')
	},
	{
		title: 'Cerelac',
		s_desc:
			'Nestlé Cerelac is a nutritious instant cereal specially made for babies, packed with essential vitamins and minerals to support healthy growth and development.',
		img: 'foods/cerelac.webp',
		stock: true,
		uom: 'PC(s)',
		quantity: 1,
		featured: true,
		added: toDate('2025-08-16T14:53:24')
	}
].map((item) => ({ ...item, cat: 'Foods' }));
