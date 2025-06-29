<script lang="ts">
	import { NewArrivals } from '$sections';
	import { appData } from '$lib';
</script>

<svelte:head>
	<title>New Arrivals | {appData.title}</title>
	<meta
		name="description"
		content="Discover the latest additions to our store! From fresh produce to new snacks, explore what's new and exciting at Sadiq Super Store."
	/>
</svelte:head>

<NewArrivals />
