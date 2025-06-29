<script lang="ts">
	import { page } from '$app/state';
	import { PaginatedProductCards } from '$components';
	import { dateSortedProducts } from '$data';
	import { appData } from '$lib'

	import {shop_categories } from '$data'
	import { store } from '../store.svelte';

	const matchedCategory = $derived(shop_categories.find(
		(category) => category.shopId === page.params.categoryId
	));
	$effect(() => {
		store.shopHeading = matchedCategory ? matchedCategory.title : 'Shop';
	});

	// let search: string = $state('');
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
	<title>{matchedCategory ? matchedCategory.title : 'Shop'} - {appData.title}</title>
</svelte:head>

<PaginatedProductCards
	{productsData}
	perPage={12}
	identity="shopPageCards"
	topPagination={true}
	bottomPagination={true}
/>
