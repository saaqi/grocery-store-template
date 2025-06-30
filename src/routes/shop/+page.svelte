<script lang="ts">
	import { PaginatedProductCards } from '$components';
	import { dateSortedProducts } from '$data';
	import { store } from './store.svelte';
	store.shopHeading = 'Shop';

	// let search: string = $state('');
	let products = $state(dateSortedProducts);
	const productsData = $derived(
		products
			.filter(
				(product) =>
					product.cat.toLowerCase().includes(store.filter.toLowerCase()) ||
					product.title.toLowerCase().includes(store.filter.toLowerCase()) ||
					product.s_desc.toLowerCase().includes(store.filter.toLowerCase())
			)
			.map((product) => ({
				...product,
				uom: product.uom || '',
				quantity: product.quantity || 0,
				price: product.price || 0,
				sale: product.sale || 0,
				approximate: false
			}))
	);
	import { appData } from '$lib';
</script>

<svelte:head>
	<title>Shop Products | {appData.title}</title>
</svelte:head>

<PaginatedProductCards
	{productsData}
	perPage={12}
	identity="shopPage"
	topPagination={true}
	bottomPagination={true}
/>
