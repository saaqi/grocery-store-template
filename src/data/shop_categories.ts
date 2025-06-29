import { products } from './products';

interface Cats {
	title: string;
	shopLink: string;
}

export const shop_categories: Cats[] = [
	...new Set(products.map((item) => item.cat).filter((cat) => cat))
]
	.map((cat) => ({ cat }))
	.map((item) => {
		return {
			...item,
			title: item.cat,
			shopLink: item.cat.toLowerCase().replace(/\s+/g, '_')
		};
	});
