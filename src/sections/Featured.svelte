<script lang="ts">
	import { ProductCards, SectionWrapper, DraggableContainer } from '$components';
	import { dateSortedProducts } from '$data';
	const featured = dateSortedProducts
		.filter((product) => product.featured && !product.sale).slice(0, 8);
</script>

<SectionWrapper id="featured" heading="Featured Products:">
  <div class="container py-4">
    <ul id="featured-items" class="row list-unstyled g-1 g-md-2 py-4">
      <DraggableContainer
			touchSensitivity={2}
			indicators={true}
			id="educationContainer"
			class="educationContainer row g-2 draggableContainer pb-lg-0 pb-3"
		>
        <ProductCards identity="weekly-sale" data={featured} />
      </DraggableContainer>
    </ul>
  </div>
</SectionWrapper>
