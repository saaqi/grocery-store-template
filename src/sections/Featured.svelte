<script lang="ts">
	import { ProductCards, SectionWrapper, DraggableContainer } from '$components';
	import { dateSortedProducts } from '$data';
	const featured = dateSortedProducts
		.filter((product) => product.featured && !product.sale)
		.slice(0, 8);
</script>

<SectionWrapper id="featured" heading="Featured Products:">
	<div class="container py-4">
		<div id="featured-items">
			<DraggableContainer touchSensitivity={2} indicators={true} id="educationContainer">
				<ProductCards identity="weekly-sale" data={featured} />
			</DraggableContainer>
		</div>
	</div>
</SectionWrapper>
