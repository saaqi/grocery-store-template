import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { shop_categories } from '$data';

interface Category {
	title: string;
	shopLink: string;
	shopIndex: string;
}

export const load: PageLoad = ({ params }) => {
	const { categoryId } = params;
	const category = (shop_categories as Category[]).find((cat) => cat.shopLink === categoryId);

	if (!category) {
		throw error(404, 'Category not found');
	}

	return { category };
};
