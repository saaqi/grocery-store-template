<script lang="ts">
	import saleImage576 from '$assets/hero/sale-image@576x.webp';
	import saleImage768 from '$assets/hero/sale-image@768x.webp';
	import saleImage992 from '$assets/hero/sale-image@992x.webp';
	import saleImage1200 from '$assets/hero/sale-image@1200x.webp';
	import saleImageSvg from '$assets/hero/sale-image.svg';

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
	<div class="container py-4">
		<div class="row d-flex flex-lg-row-reverse overlay align-items-center py-4">
			<div class="graphic-col col-lg-6 mb-5 mb-lg-0">
				<picture>
					<source media="(max-width: 576px)" srcset={saleImage576} type="image/webp" />
					<source media="(max-width: 768px)" srcset={saleImage768} type="image/webp" />
					<source media="(max-width: 992px)" srcset={saleImage992} type="image/webp" />
					<source media="(max-width: 1200px)" srcset={saleImage1200} type="image/webp" />
					<source media="(min-width: 1201px)" srcset={saleImageSvg} type="image/svg+xml" />
					<img class="img-fluid" src={saleImageSvg} alt="Limited Time Sale Deals" loading="lazy" />
				</picture>
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
	</div>
</SectionWrapper>
