<script lang="ts">
	import { ProductCards, SectionWrapper, DraggableContainer } from '$components';
	import { dateSortedProducts } from '$data';
	const featured = dateSortedProducts
		.filter((product) => product.featured && !product.sale)
		.slice(0, 8)
		.map((product) => ({
			...product,
			approximate: false,
			uom: product.uom || '',
			quantity: product.quantity || 0,
			price: product.price || 0,
			sale: product.sale || 0
		}));
</script>

<SectionWrapper id="featured" heading="Featured Products:">
	<div class="container py-4">
		<DraggableContainer id="educationContainer">
			<ProductCards identity="weekly-sale" productsData={featured} />
		</DraggableContainer>
	</div>
</SectionWrapper>
