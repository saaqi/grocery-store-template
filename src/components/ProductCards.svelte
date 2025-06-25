<script lang="ts">
	const { identity, data } = $props();
	const productPics = import.meta.glob('$assets/products/**/*.{webp,svg,png,jpg}', {
		eager: true,
		query: {
			enhanced: true,
			w: '500;250',
			format: 'avif;webp;jpg'
		}
	});
	// Bootstrap Modals
	import { onMount } from 'svelte';
	onMount(async () => {
		await import('bootstrap/js/dist/modal.js');
	});
	import fallBackImg from '$assets/logo.svg';
</script>

{#snippet prodImage(img: string, title: string)}
	{#each Object.entries(productPics) as [_path, module], index ('prod-' + index)}
		{#if _path.includes(img)}
			<enhanced:img
				src={(module as any).default}
				sizes="(min-width: 500px) 500px, 100vw"
				class="img-fluid card-img-top border-bottom"
				alt={'Screenshot of ' + title}
				loading="lazy"
				width="500"
				height="281"
				draggable="false"
			/>
		{/if}
	{/each}
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
		class="btn btn-outline-dark modal-button border-0 px-1 d-flex flex-wrap gap-1 justify-content-center align-items-center"
		data-bs-toggle="modal"
		data-bs-target={'#' + identity + index}
		title="Read More Information!"
	>
		<i class="bx bx-info-circle"></i> Info
	</button>
{/snippet}

{#each data as { title, s_desc, desc, img, img_extra, stock, featured, uom, quantity, price, sale, added, cat }, index (identity + index)}
	<li class="col-6 col-lg-3 draggableItem">
		<div class="product-card card shadow-sm h-100">
			{@render prodImage(img, title)}
			<!-- <div class="card-body d-flex flex-column align-items-start gap-3 p-2 p-sm-3">
				<div class="body-header">
					<div class="card-title h4">${title}</div>
					{q_UOM}
				</div>
				${s_desc ? `<div class="card-text shortDescription">${s_desc}</div>` : ''}
				<div
					class="mt-auto sale-price w-100 d-flex justify-content-${sale
						? 'between'
						: 'end'} align-items-center mb-2 gap-2 flex-wrap text-center"
				>
					${stock
						? `${priceButton + percentOff + saleButton}`
						: '<div class="text-muted">Out of Stock</div>'}
				</div>
			</div> -->
			<div class="card-footer p-0">
				<div class="btn-group card-buttons w-100" role="group" aria-label="Card Buttons">
					<!-- ${waButton + descButton} -->
					{@render whatsAppButton(title, sale, price)}
					{#if sale}
						{@render infoButton(identity, index)}
					{/if}
				</div>
			</div>
			<!-- ${saleIcon} -->
		</div>
	</li>
{/each}

<!-- <li class="col-6 col-lg-3 draggableItem">
	{productCard}
</li> -->

<!-- <div
	{id}
	class="modal fade"
	data-bs-keyboard="false"
	tabindex="-1"
	aria-labelledby={id + '-label'}
	aria-hidden="true"
>
	<div
		id={id + '-label'}
		class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
	>
		<div class="modal-content">
			<div
				class="modal-header py-2 shadow-sm bg-warning text-bg-warning d-flex justify-content-between"
			>
				${logoImg}
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
						<img
							src="${coverImage}"
							alt="${title}"
							class="col-md-4 h-100 img-fluid mb-3 p-0 rounded shadow-sm"
							loading="lazy"
						/>
						<div class="col-md-8">
							<h4 class="modal-heading">${title}${quantity ? ` - ${quantity} ${uom}` : ''}</h4>
							${shortDesc + longDesc}
							<div
								class="sale-price w-100 d-flex justify-content-${sale
									? 'between'
									: 'end'} align-items-center mb-2 mt-auto gap-2 flex-wrap text-center"
							>
								${stock
									? `${priceButton + percentOff + saleButton}`
									: '<div class="text-muted">Out of Stock</div>'}
							</div>
						</div>
						${img_extra
							? `<div class="container mt-3"><div class="row g-3">${extraImages}</div></div>`
							: ''}
					</div>
				</div>
			</div>
		</div>
	</div>
</div> -->
