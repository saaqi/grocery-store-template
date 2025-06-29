import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { shop_categories } from '$data';

interface Category {
	title: string;
	shopId: string;
	shopLink: string;
	shopIndex: string;
}

export const load: PageLoad = ({ params }) => {
	const { categoryId } = params;
	const category = (shop_categories as Category[]).find((cat) => cat.shopId === categoryId);

	if (!category) {
		throw error(404, 'Category not found');
	}

	return { category };
};

// import type { PageLoad } from "./$types";
// import { error } from '@sveltejs/kit';
// import { shop_categories } from '$data';

// interface Cats {
// 	title: string;
// 	shopId: string;
// 	shopLink: string;
// 	shopIndex: string;
// }

// const shopCategories: Cats[] = shop_categories;
// export const load: PageLoad = ({ params }) => {
//   const id = params.categoryId;
//   const category = shopCategories.find((category) => category.shopId === id);
//   if (!category) {
//     throw error(404, { message: 'Category not found.' });
//   }
//   return {
//     category,
//   }
// }
