import { shop_categories } from './shop_categories';

interface Navigation {
	slug: string;
	text: string;
	icon: string;
	subcategories?: { title: string; shopLink: string }[];
}

export const nav_links: Navigation[] = [
	{
		slug: '',
		text: 'Home',
		icon: 'bxs-home-smile'
	},
	{
		slug: 'shop',
		text: 'Shop',
		icon: 'bxs-store'
	},
	{
		slug: 'shop/',
		text: 'Categories',
		icon: 'bxs-category',
		subcategories: shop_categories
	},
	{
		slug: 'weekly-sale',
		text: 'Sale',
		icon: 'bxs-shopping-bag'
	},
	{
		slug: 'featured',
		text: 'Featured',
		icon: 'bxs-shopping-bag-alt'
	},
	{
		slug: 'new-arrivals',
		text: 'New Arrivals',
		icon: 'bxs-shopping-bags'
	},
	{
		slug: 'contact-us',
		text: 'Contact Us!',
		icon: 'bxs-contact'
	}
];
