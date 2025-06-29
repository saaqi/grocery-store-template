import { shop_categories } from './shop_categories';

interface Navigation {
	link: string;
	text: string;
	target?: string;
	icon: string;
	subcategories?: { title: string; shopId: string; shopLink: string; shopIndex: string }[];
}

export const nav_links: Navigation[] = [
	{
		link: '/',
		target: 'home',
		text: 'Home',
		icon: 'bxs-home-smile'
	},
	{
		link: '/weekly-sale',
		target: 'weekly-sale',
		text: 'Sale',
		icon: 'bxs-shopping-bag'
	},
	{
		link: '/featured',
		target: 'featured',
		text: 'Featured',
		icon: 'bxs-shopping-bag-alt'
	},
	{
		link: '/new-arrivals',
		target: 'new-arrivals',
		text: 'New Arrivals',
		icon: 'bxs-shopping-bags'
	},
	{
		link: '/shop',
		target: 'shop',
		text: 'Shop',
		icon: 'bxs-store'
	},
	{
		link: '/shop',
		target: 'shop/*',
		text: 'Categories',
		icon: 'bxs-store',
		subcategories: shop_categories
	},
	{
		link: '/contact-us',
		target: 'contact-us',
		text: 'Contact Us!',
		icon: 'bxs-contact'
	}
];
