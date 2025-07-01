<script lang="ts">
	// @ts-ignore
	import saleImageSvg from '$assets/hero/sale-image.png?enhanced&w=2800;1400;1200;992;768;576&format=avif;webp';

	import { ProductCards, SectionWrapper, DraggableContainer } from '$components';
	import { dateSortedProducts } from '$data';
	const onsale = dateSortedProducts
		.filter((product) => product.sale)
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

<SectionWrapper id="weekly-sale">
	<div class="row d-flex flex-lg-row-reverse overlay align-items-center py-4">
		<div class="graphic-col col-lg-6 mb-5 mb-lg-0">
			<enhanced:img
				src={saleImageSvg}
				sizes="(min-width: 2800px) 2800px, 100vw"
				class="img-fluid"
				alt="Shopping cart full of groceries"
				loading="lazy"
				draggable="false"
			/>
		</div>
		<div class="text-col col-lg-6">
			<!-- <h2 class="fs-3 text-uppercase mb-2">Buy one Get one Free!</h2> -->
			<h2 class="display-4 text-uppercase mb-3">Weekly Sale is now Live!</h2>
			<a href="https://maps.app.goo.gl/5LcX4sf9Wz3zGMxE9" class="btn btn-primary" target="_blank"
				>Come Visit Us!</a
			>
		</div>
	</div>
	<DraggableContainer id="on-sale">
		<ProductCards identity="weekly-sale" productsData={onsale} />
	</DraggableContainer>
</SectionWrapper>
