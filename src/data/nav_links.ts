import { shop_categories } from './shop_categories';

interface Navigation {
	link: string;
	text: string;
	target?: string;
	icon: string;
	subcategories?: { title: string; shopLink: string }[];
}

export const nav_links: Navigation[] = [
	{
		link: '/',
		target: 'home',
		text: 'Home',
		icon: 'bxs-home-smile'
	},
	{
		link: '/shop',
		text: 'Shop',
		icon: 'bxs-store'
	},
	{
		link: '/shop/',
		text: 'Categories',
		icon: 'bxs-category',
		subcategories: shop_categories
	},
	{
		link: '/weekly-sale',
		text: 'Sale',
		icon: 'bxs-shopping-bag'
	},
	{
		link: '/featured',
		text: 'Featured',
		icon: 'bxs-shopping-bag-alt'
	},
	{
		link: '/new-arrivals',
		text: 'New Arrivals',
		icon: 'bxs-shopping-bags'
	},
	{
		link: '/contact-us',
		text: 'Contact Us!',
		icon: 'bxs-contact'
	}
];
