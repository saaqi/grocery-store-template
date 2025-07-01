<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}
	const { children }: Props = $props();
	import { SectionWrapper } from '$components';

	import { store } from './store.svelte';
	store.shopHeading = 'Shop';
</script>

<svelte:head>
	<meta
		name="description"
		content="We offer fresh groceries, snacks, household essentials, and more. Whether you're picking up daily necessities or grabbing something quick, we've got you covered with friendly service and great prices!"
	/>
</svelte:head>

<div class="container">
	<div class="row justify-content-center">
		<div class="col-12">
			<SectionWrapper id="shop" heading={store.shopHeading} className="pt-3">
				<div class="container">
					{@render children()}
				</div>
			</SectionWrapper>
		</div>
	</div>
</div>
