<script lang="ts">
	import { Featured } from '$sections';
	import { appData } from '$lib';
</script>

<svelte:head>
	<title>Featured Products | {appData.title}</title>
	<meta
		name="description"
		content="Explore our featured products, handpicked for quality and freshness. Discover the best deals on your favorite items!"
	/>
</svelte:head>
<Featured />
