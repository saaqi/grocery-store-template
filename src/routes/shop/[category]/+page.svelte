<script lang="ts">
	import { page } from '$app/state';
	import { ProductCards } from '$components';
	import { dateSortedProducts } from '$data';

	let filter: string = $state('');
	$effect(() => {
		filter = page.params.category;
	});

	// const featured = $derived(dateSortedProducts
	// 	.filter((product) => product.cat === filter ||
	// 		product.title.toLowerCase().includes(filter.toLowerCase()) ||
	// 		product.s_desc.toLowerCase().includes(filter.toLowerCase())));
	const featured = $derived(
		dateSortedProducts.filter(
			(product) => product.cat.toLowerCase().trim() === filter.toLowerCase().trim()
		)
	);
</script>

<div class="row g-2 mt-3">
	<ProductCards identity="shopPageCards" data={featured} />
</div>
