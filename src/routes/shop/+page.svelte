<script lang="ts">
	import { ProductCards } from '$components';
	import { dateSortedProducts } from '$data';

	let filter: string = $state('');

	const featured = $derived(dateSortedProducts
		.filter((product) => product.cat === filter ||
			product.title.toLowerCase().includes(filter.toLowerCase()) ||
			product.s_desc.toLowerCase().includes(filter.toLowerCase())));
	
</script>

<div class="row g-2 mt-3">
	<button class="btn btn-primary" onclick={() => filter = 'Electronics'}>Electronics</button>
  <ProductCards identity="shopPageCards" data={featured} />
</div>
