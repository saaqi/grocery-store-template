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

export const telecommunications: Product[] = [
	{
		title: 'Lyca Mobile SIM Card',
		s_desc:
			'Stay connected with a Lyca Mobile SIM card offering seamless network coverage and affordable international calling rates.',
		img: 'telecommunication_logos/lycamobile.webp',
		stock: true,
		added: toDate('2025-03-30T06:34:59')
	},
	{
		title: 'Lyca Vouchers & Cards',
		s_desc:
			'Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.',
		img: 'telecommunication_logos/lycamobile.webp',
		stock: true,
		added: toDate('2025-03-30T06:34:57')
	},
	{
		title: 'Orange Vouchers & Cards',
		s_desc:
			'Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.',
		img: 'telecommunication_logos/orange.svg',
		stock: true,
		added: toDate('2025-03-30T06:34:53')
	},
	{
		title: 'Poximus Vouchers & Cards',
		s_desc:
			'Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.',
		img: 'telecommunication_logos/proximus.webp',
		stock: true,
		added: toDate('2025-03-30T06:34:35')
	},
	{
		title: 'Jim Mobile Vouchers & Cards',
		s_desc:
			'Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.',
		img: 'telecommunication_logos/JIM_mobile.webp',
		stock: true,
		added: toDate('2025-03-30T06:34:32')
	},
	{
		title: 'Base Vouchers & Cards',
		s_desc:
			'Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.',
		img: 'telecommunication_logos/base.webp',
		stock: true,
		added: toDate('2025-03-30T06:34:20')
	},
	{
		title: 'L-mobi Mobile Vouchers & Cards',
		s_desc:
			'Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.',
		img: 'telecommunication_logos/l-mobil.webp',
		stock: true,
		added: toDate('2025-03-30T06:34:17')
	},
	{
		title: 'Paysafe Vouchers & Cards',
		s_desc:
			'Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.',
		img: 'telecommunication_logos/paysafecard.webp',
		stock: true,
		added: toDate('2025-03-30T06:34:14')
	},
	{
		title: 'Neosurf Vouchers & Cards',
		s_desc:
			'Recharge your mobile credit effortlessly with our recharge vouchers and cards, ensuring uninterrupted communication whenever you need it.',
		img: 'telecommunication_logos/neosurf.webp',
		stock: true,
		added: toDate('2025-03-30T06:34:11')
	}
].map((item) => ({ ...item, cat: 'Telecommunications' }));
