<script lang="ts">
	interface Props {
		children: () => any;
	}
	const { children }: Props = $props();

	import { store } from './store.svelte';
	import { SectionWrapper } from '$components';
</script>

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
			<SectionWrapper id="shop" heading="">
				<div class="container">
					<div class="row">
						{@render children()}
					</div>
				</div>
			</SectionWrapper>
		</div>
	</div>
</div>
