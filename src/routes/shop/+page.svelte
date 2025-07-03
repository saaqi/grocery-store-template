<script lang="ts">
	import { PaginatedProductCards } from '$components';
	import { dateSortedProducts } from '$data';
	import { store } from '$data';

	store.shopHeading = 'Shop';

	const filterLower = $derived((store.filter || '').trim().toLowerCase());
	const productsData = $derived(
		dateSortedProducts
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
