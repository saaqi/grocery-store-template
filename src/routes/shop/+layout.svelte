<script lang="ts">
	import { store } from '$data';
	import type { Snippet } from 'svelte';
	import { SectionWrapper } from '$components';

	const { children }: { children: Snippet } = $props();

	store.shopHeading = 'Shop';
</script>

<svelte:head>
	<meta
		name="description"
		content="We offer fresh groceries, snacks, household essentials, and more. Whether you're picking up daily necessities or grabbing something quick, we've got you covered with friendly service and great prices!"
	/>
</svelte:head>

<SectionWrapper id="shop" heading={store.shopHeading} fullCenter={false}>
	{@render children()}
</SectionWrapper>
