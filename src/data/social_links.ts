interface SocialLink {
	link: string;
	title: string;
	link_class: string;
	icon: string;
}

export const social_links: SocialLink[] = [
	{
		link: `https://facebook.com/sadiqsuperstore`,
		title: `Follow our Facebook Page to stay Up to date with our latest offers!`,
		link_class: `faceook-link`,
		icon: `bxl-facebook`
	},
	{
		link: `https://instagram.com/sadiq.superstore`,
		title: `Follow us on Instagram to stay Up to date with our latest offers!`,
		link_class: `instagram-link`,
		icon: `bxl-instagram`
	},
	{
		link: `https://maps.app.goo.gl/5LcX4sf9Wz3zGMxE9`,
		title: `Visit Us Now!`,
		link_class: `map-link`,
		icon: `bx-map-alt`
	},
	{
		link: `https://wa.me/+32465638887`,
		title: `Send us a message on WhatsApp!`,
		link_class: `whatsapp-link`,
		icon: `bxl-whatsapp`
	},
	{
		link: `mailto:info@sadiqsuperstore.com?subject=Message%20From%20Website!`,
		title: `Send us an E-Mail!`,
		link_class: `email-link`,
		icon: `bxl-gmail`
	},
	{
		link: `tel:+32465638887`,
		title: `Give us a Call!`,
		link_class: `phone-link`,
		icon: `bx-phone-call`
	}
];

export default social_links;
