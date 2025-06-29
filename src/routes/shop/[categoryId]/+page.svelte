<script lang="ts">
	import { page } from '$app/state';
	import { PaginatedProductCards } from '$components';
	import { dateSortedProducts } from '$data';
	import { store } from '../store.svelte';

	// let search: string = $state('');
	const categoryProducts = $derived(
		dateSortedProducts.filter(
			(product) =>
				product.cat.toLowerCase().replace(/\s+/g, '_') === page.params.categoryId
		)
	);
	const productsData = $derived(
		categoryProducts.filter(
			(product) =>
				product.title.toLowerCase().trim().includes(store.filter.toLowerCase().trim()) ||
				product.s_desc.toLowerCase().trim().includes(store.filter.toLowerCase().trim())
		)
	);

  $inspect(page.params.categoryId)
</script>

<PaginatedProductCards
	{productsData}
	perPage={12}
	identity="shopPageCards"
	topPagination={true}
	bottomPagination={true}
/>
