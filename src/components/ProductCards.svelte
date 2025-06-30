<script lang="ts">
	import { scale } from 'svelte/transition';
	interface Props {
		identity: string;
		productsData: Array<{
			title: string;
			s_desc: string;
			img: string;
			stock: boolean;
			uom: string;
			quantity: number;
			approximate: boolean;
			price: number;
			sale: number;
			id: string;
		}>;
		element?: string;
	}
	const { element = 'article', identity, productsData }: Props = $props();
	const productPics = import.meta.glob('$assets/products/**/*.{webp,png,jpg}', {
		eager: true,
		query: {
			enhanced: true,
			w: '500;250',
			format: 'avif;webp'
		}
	});
</script>

{#snippet prodImage(img: string, title: string, topImg: boolean)}
	{#each Object.entries(productPics) as [_path, module] ((module as { default: string }).default)}
		<!-- .card-img-top, rounded : keeps from purging -->
		{#if _path.includes(img)}
			<enhanced:img
				src={(module as { default: string }).default}
				sizes="(min-width: 500px) 500px, 100vw"
				class="img-fluid border-bottom"
				class:card-img-top={topImg}
				class:rounded={!topImg}
				alt={'Screenshot of ' + title}
				loading="lazy"
				draggable="false"
			/>
		{/if}
	{/each}
{/snippet}

{#snippet q_UOM(uom: string, quantity: number, approximate: boolean)}
	{#if quantity}
		<div class="card-quantity fw-medium">{quantity} {uom} {approximate ? '(approx.)' : ''}</div>
	{/if}
{/snippet}

{#snippet whatsAppButton(title: string, sale: number, price: number)}
	<a
		class="btn btn-outline-dark waButton border-0 px-1 d-flex flex-wrap gap-2 gap-sm-1 justify-content-center align-items-center"
		href={'https://wa.me/32465638887?text=' +
			encodeURIComponent(title + ' €' + (sale ? sale : price))}
		target="_blank"
		rel="nofollow noopener noreferrer"
		title="Contact us via WhatsApp!"
	>
		<i class="bx bxl-whatsapp"></i> Buy!
	</a>
{/snippet}

{#snippet priceButton(sale: number, price: number)}
	{#if price}
		<div
			class="item-price-regular rounded p-2 fw-medium {sale
				? 'bg-info text-bg-info text-decoration-line-through'
				: 'bg-primary text-bg-primary'}"
		>
			€{price.toFixed(2)}
		</div>
	{/if}
{/snippet}

{#snippet percentOff(sale: number, price: number)}
	{#if sale}
		<div class="percent fw-medium">{Math.ceil(((price - sale) / price) * 100)}% OFF</div>
	{/if}
{/snippet}

{#snippet saleButton(sale: number)}
	{#if sale}
		<div class="item-price-sale rounded p-2 fw-medium bg-primary text-bg-primary">
			€{sale.toFixed(2)}
		</div>
	{/if}
{/snippet}

{#each productsData as { title, s_desc, img, stock, uom, quantity, approximate, price, sale, id }, index (id)}
	<svelte:element
		this={element}
		class="col-6 col-lg-3 draggableItem hoverTransition"
		id={identity + id + index}
		transition:scale
	>
		<div class="product-card card shadow-sm h-100">
			{@render prodImage(img, title, true)}
			<div class="card-body d-flex flex-column align-items-start gap-3 p-2 p-sm-3">
				<div class="body-header">
					<h3 class="card-title h4">{title}</h3>
					{@render q_UOM(uom, quantity, approximate)}
				</div>
				<p class="card-text shortDescription mb-0">{s_desc}</p>
				<!-- .justify-content-between, .justify-content-end : keeps from purging -->
				<div
					class="mt-auto sale-price w-100 d-flex align-items-center my-2 gap-2 flex-wrap text-center"
					class:justify-content-between={sale}
					class:justify-content-end={!sale}
				>
					{#if stock}
						{@render priceButton(sale, price)}
						{@render percentOff(sale, price)}
						{@render saleButton(sale)}
					{:else}
						<div class="text-muted">Out of Stock</div>
					{/if}
				</div>
			</div>
			<div class="card-footer p-0">
				{@render whatsAppButton(title, sale, price)}
			</div>
			{#if sale}
				<i
					class="bx bxs-discount sale-indicator p-2 fs-4 bg-info text-bg-info rounded-circle shadow-sm"
				></i>
			{/if}
		</div>
	</svelte:element>
{/each}

<style lang="scss">
	.waButton {
		border-radius: 0 0 var(--bs-border-radius) var(--bs-border-radius);
	}

	.sale-indicator {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.shortDescription {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		line-clamp: 3;
		max-height: 4.8em;
	}

	.card-title {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		line-clamp: 2;
		height: 2.4em;
	}

	.card-quantity {
		flex-basis: 5em;
		flex: 0;
	}

	.sale-price > * {
		flex: auto;
	}
</style>
