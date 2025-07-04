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

export const toys: Product[] = [
	{
		title: 'Labubu Toys 🧸🌈',
		s_desc: "Adorable, collectible, and full of charm, our Labubu Toys are here in a variety of fun colors!",
		img: 'toys/labubu_toy.jpg',
		stock: true,
		featured: true,
		added: toDate("2025-07-04T11:27:47")
	}
].map((item) => ({ ...item, cat: 'Toys' }));
