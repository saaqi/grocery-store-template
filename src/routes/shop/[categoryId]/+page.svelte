<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/state';
	import { PaginatedProductCards } from '$components';
	import { dateSortedProducts } from '$data';
	import { store } from '../store.svelte';
	import { appData } from '$lib';
	let { data }: { data: PageData } = $props();

	$effect(() => {
		store.shopHeading = data.category.title;
	});

	// let search: string = $state('');
	let products = $state(dateSortedProducts);
	const categoryProducts = $derived(
		products.filter(
			(product) => product.cat.toLowerCase().replace(/\s+/g, '_') === page.params.categoryId
		)
	);
	const productsData = $derived(
		categoryProducts.filter(
			(product) =>
				product.title.toLowerCase().trim().includes(store.filter.toLowerCase().trim()) ||
				product.s_desc.toLowerCase().trim().includes(store.filter.toLowerCase().trim())
		)
	);
</script>

<svelte:head>
	<title>{data.category.title} | {appData.title}</title>
</svelte:head>

<PaginatedProductCards
	{productsData}
	perPage={12}
	identity="categoryPage"
	topPagination={true}
	bottomPagination={true}
/>
