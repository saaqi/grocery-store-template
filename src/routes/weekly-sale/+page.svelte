<script lang="ts">
	import { WeeklySales } from '$sections';
	import { appData } from '$lib';
</script>

<svelte:head>
	<title>Weekly Sales | {appData.title}</title>
	<meta
		name="description"
		content="Check out our weekly sales for the best deals on groceries, snacks, and household essentials. Save big on your favorite items!"
	/>
</svelte:head>

<WeeklySales />
