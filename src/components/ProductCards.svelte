<script lang="ts">
	interface Props {
		identity: string;
		data: Array<any>;
		element?: string;
	}

	const { element = 'article', identity, data }: Props = $props();
	const productPics = import.meta.glob('$assets/products/**/*.{webp,svg,png,jpg}', {
		eager: true,
		query: {
			enhanced: true,
			w: '500;250',
			format: 'avif;webp;jpg'
		}
	});

	// Bootstrap Modals
	let modalNumber = $state();
	const loadModal = (index: number) => () => {
		modalNumber = index;
	};
	import { onMount } from 'svelte';
	onMount(async () => {
		await import('bootstrap/js/dist/modal.js');
	});
	import logo from '$assets/logo.svg';
</script>

{#snippet prodImage(img: string, title: string, topImg: boolean)}
	{#each Object.entries(productPics) as [_path, module], index ('prod-' + index)}
		<!-- .card-img-top, rounded : keeps from purging -->
		{#if _path.includes(img)}
			<enhanced:img
				src={(module as any).default}
				sizes="(min-width: 500px) 500px, 100vw"
				class="img-fluid border-bottom"
				class:card-img-top={topImg}
				class:rounded={!topImg}
				alt={'Screenshot of ' + title}
				loading="lazy"
				width="500"
				height="281"
				draggable="false"
			/>
		{/if}
	{/each}
{/snippet}

{#snippet q_UOM(uom: string, quantity: number | string)}
	{#if quantity}
		<div class="card-quantity fw-medium">{quantity} {uom}</div>
	{/if}
{/snippet}

{#snippet whatsAppButton(title: string, sale: number, price: number)}
	<a
		class="btn btn-outline-primary border-0 px-1 d-flex flex-wrap gap-2 gap-sm-1 justify-content-center align-items-center"
		href={'https://wa.me/32465638887?text=' + title + ' €' + (sale ? sale : price)}
		target="_blank"
		rel="nofollow noopener noreferrer"
		title="Contact us via WhatsApp!"
	>
		<i class="bx bxl-whatsapp"></i> Buy!
	</a>
{/snippet}

{#snippet infoButton(identity: string, index: number)}
	<button
		type="button"
		onmouseover={loadModal(index)}
		onfocus={loadModal(index)}
		class="btn btn-outline-dark modal-button border-0 px-1 d-flex flex-wrap gap-1 justify-content-center align-items-center"
		data-bs-toggle="modal"
		data-bs-target={'#' + identity + index}
		title="Read More Information!"
	>
		<i class="bx bx-info-circle"></i> Info
	</button>
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

{#each data as { title, s_desc, img, stock, featured, uom, quantity, price, sale }, index (identity + index)}
	<svelte:element this={element} class="col-6 col-lg-3 draggableItem hoverTransition">
		<div class="product-card card shadow-sm h-100">
			{@render prodImage(img, title, true)}
			<div class="card-body d-flex flex-column align-items-start gap-3 p-2 p-sm-3">
				<div class="body-header">
					<div class="card-title h4">{title}</div>
					{@render q_UOM(uom, quantity)}
					{#if featured}
						<div class="sale-indicator badge bg-warning text-dark">Featured</div>
					{/if}
				</div>
				<div class="card-text shortDescription">{s_desc}</div>
				<!-- .justify-content-between, .justify-content-end : keeps from purging -->
				<div
					class="mt-auto sale-price w-100 d-flex align-items-center mb-2 gap-2 flex-wrap text-center"
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
				<div class="btn-group card-buttons w-100" role="group" aria-label="Card Buttons">
					{@render whatsAppButton(title, sale, price)}
					{#if sale}
						{@render infoButton(identity, index)}
					{/if}
				</div>
			</div>
			{#if sale}
				<i
					class="bx bxs-discount sale-indicator p-2 fs-4 bg-info text-bg-info rounded-circle shadow-sm"
				></i>
			{/if}
		</div>
	</svelte:element>
{/each}

{#snippet modals(
	index: number,
	img: string,
	title: string,
	s_desc: string,
	desc: string,
	stock: boolean,
	sale: number,
	price: number,
	uom: string,
	quantity: number | string,
	img_extra: Array<string> = []
)}
	<div
		id={identity + index}
		class="modal fade"
		data-bs-keyboard="false"
		tabindex="-1"
		aria-labelledby={identity + index + '-label'}
		aria-hidden="true"
	>
		<div
			id={identity + index + '-label'}
			class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
		>
			<div class="modal-content">
				<div
					class="modal-header py-2 shadow-sm bg-warning text-bg-warning d-flex justify-content-between"
				>
					<img
						src={logo}
						alt="Sadiq Super Store Logo"
						class="img-fluid fs-1"
						style="height: 1em"
						loading="lazy"
						draggable="false"
					/>
					<button
						type="button"
						class="btn btn-outline-danger p-0 lh-1"
						data-bs-dismiss="modal"
						aria-label="Close"
					>
						<i class="bx bx-x fs-1"></i>
					</button>
				</div>
				<div class="modal-body">
					<div class="container-fluid">
						<div class="row">
							<div class="col">
								{@render prodImage(img, title, false)}
							</div>
							<div class="col-md-8 mt-4">
								<h4 class="modal-heading">{title} {quantity ? ` - ${quantity} ${uom}` : ''}</h4>
								<p class="short-description">{s_desc}</p>
								{#if desc}
									<p class="long-description">{desc}</p>
								{/if}
								<div
									class="mt-auto sale-price w-100 d-flex align-items-center mb-2 gap-2 flex-wrap text-center"
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
							{#if img_extra}
								<div class="container mt-3">
									<div class="row g-3">
										{#each img_extra as extraImg, index ('extra-' + index)}
											<div class="col-6 col-md-4 g-3">
												{@render prodImage(extraImg, title, false)}
											</div>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/snippet}

{#each data as { title, s_desc, desc, img, img_extra, stock, uom, quantity, price, sale }, index (identity + index)}
	{#if index === modalNumber}
		{@render modals(index, img, title, s_desc, desc, stock, sale, price, uom, quantity, img_extra)}
	{/if}
{/each}

<style lang="scss">
	.sale-indicator {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.card-quantity {
		flex-basis: 5em;
		flex: 0;
	}

	.sale-price > * {
		flex: auto;
	}
</style>
