<script lang="ts">
	import { dateSortedProducts } from '$data';
	import { setContext } from 'svelte';

	// Set the products data in context for the layout to use
	setContext('productsData', { products: dateSortedProducts });
</script>

<slot />
