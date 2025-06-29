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
		<div class="col-12 col-sm-10 col-md-8 col-lg-6">
			<aside class="pt-5">
				<div class="input-group mb-3 border-primary">
					<div class="input-group-prepend">
						<span class="input-group-text rounded-0 rounded-start border-primary">🔍</span>
					</div>
					<input
						bind:value={store.filter}
						type="text"
						class="form-control border-primary"
						placeholder="Search for products."
						aria-label="Search for products."
						aria-describedby="Search for products."
					/>
				</div>
			</aside>
		</div>
		<div class="col-12">
			<SectionWrapper id="shop" heading={store.shopHeading} className="pt-0">
				<div class="container">
					<div class="row">
						{@render children()}
					</div>
				</div>
			</SectionWrapper>
		</div>
	</div>
</div>
