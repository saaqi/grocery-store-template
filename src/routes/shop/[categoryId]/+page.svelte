<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/state';
	import { PaginatedProductCards } from '$components';
	import { dateSortedProducts } from '$data';
	import { appData } from '$lib';
	let { data }: { data: PageData } = $props();

	import { store } from '../store.svelte';

	$effect(() => {
		store.shopHeading = data.category.title;
	});

	const categoryProducts = $derived(
		dateSortedProducts.filter(
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
	identity="shopPageCards"
	topPagination={true}
	bottomPagination={true}
/>
