<script lang="ts">
	import { SectionWrapper } from '$components';
	const { children } = $props();
</script>

<SectionWrapper id="shop" heading="Shop by Category">
	<div class="container">
		<div class="row">
			<aside class="col-2">Hello</aside>
			<div class="mainContent col-10">
				{@render children()}
			</div>
		</div>
	</div>
</SectionWrapper>
