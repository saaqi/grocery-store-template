<script lang="ts">
	import { PaginatedProductCards } from '$components';
	import { dateSortedProducts } from '$data';
	import { store } from './store.svelte';
	store.shopHeading = 'Shop';

	// let search: string = $state('');
	const productsData = $derived(
		dateSortedProducts.filter(
			(product) =>
				product.cat.toLowerCase().includes(store.filter.toLowerCase()) ||
				product.title.toLowerCase().includes(store.filter.toLowerCase()) ||
				product.s_desc.toLowerCase().includes(store.filter.toLowerCase())
		)
	);
	import { appData } from '$lib';
</script>

<svelte:head>
	<title>Shop Products | {appData.title}</title>
</svelte:head>

<PaginatedProductCards
	{productsData}
	perPage={12}
	identity="shopPageCards"
	topPagination={true}
	bottomPagination={true}
/>
