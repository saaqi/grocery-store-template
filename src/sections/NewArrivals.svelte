<script lang="ts">
	import { ProductCards, SectionWrapper, DraggableContainer } from '$components';
	import { dateSortedProducts } from '$data';
	const featured = dateSortedProducts
		.filter((product) => !product.featured && !product.sale)
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

<SectionWrapper id="new-arrivals" heading="New Arrivals">
	<DraggableContainer id="newArrivalsContainer">
		<ProductCards identity="new-arrivals" productsData={featured} />
	</DraggableContainer>
</SectionWrapper>
