<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/state';
	import { appData } from '$lib';
	import { PaginatedProductCards } from '$components';
	import { dateSortedProducts, store } from '$data';

	let { data }: { data: PageData } = $props();

	$effect(() => {
		store.shopHeading = data.category.title;
	});

	const categoryProducts = $derived(
		dateSortedProducts.filter(
			(product) => product.cat.toLowerCase().replace(/\s+/g, '_') === page.params.categoryId
		)
	);

	const filterLower = $derived((store.filter || '').trim().toLowerCase());
	const productsData = $derived(
		categoryProducts
			.filter((product) => {
				if (!filterLower) return true; // Skip filtering if no search term

				const searchFields = [product.cat, product.title, product.s_desc].filter(
					(field): field is string => Boolean(field)
				);
				return searchFields.some((field) => field.toLowerCase().includes(filterLower));
			})
			.map((product) => ({
				...product,
				uom: product.uom || '',
				quantity: product.quantity || 0,
				price: product.price || 0,
				sale: product.sale || 0,
				approximate: false
			}))
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
