<script lang="ts">
	import { ProductCards, SectionWrapper, DraggableContainer } from '$components';
	import { dateSortedProducts } from '$data';
	const featured = dateSortedProducts
		.filter((product) => !product.featured && !product.sale)
		.slice(0, 8);
</script>

<SectionWrapper id="new-arrivals" heading="New Arrivals">
	<div class="container py-4">
		<DraggableContainer id="newArrivalsContainer">
			<ProductCards identity="new-arrivals" productsData={featured} />
		</DraggableContainer>
	</div>
</SectionWrapper>
