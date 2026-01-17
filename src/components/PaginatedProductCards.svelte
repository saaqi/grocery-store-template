<script lang="ts">
	interface Props {
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
		identity: string;
		perPage?: number;
		topPagination?: boolean;
		bottomPagination?: boolean;
		[key: string]: unknown;
	}
	const {
		productsData,
		perPage = 12,
		identity = '',
		topPagination = true,
		bottomPagination = true,
		...props
	}: Props = $props();

	import { ProductCards } from '$components';
	import { shop_categories } from '$data';

	let paginatedContainer: HTMLElement;
	let currentPage: number = $state(1);
	let itemsPerPage: number = $derived(perPage);
	const totalPages = $derived(Math.ceil(productsData.length / itemsPerPage));
	const paginatedProducts = $derived(
		productsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
	);

	let dataAvailable: boolean = $state(true);
	$effect(() => {
		if (productsData.length === 0) {
			dataAvailable = false;
			currentPage = 0;
		} else {
			dataAvailable = true;
			if (!Number.isInteger(currentPage) || currentPage <= 0) {
				currentPage = 1;
			} else if (totalPages > 0 && currentPage > totalPages) {
				currentPage = totalPages;
			}
		}
	});

	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	import { store } from '$data';
	// Reset to page 1 on filter change
	$effect(() => {
		if (store.filter != '') currentPage = 1;
	});
</script>

{#snippet searchBox()}
	<div class="input-group border-primary">
		<div class="input-group-prepend">
			<span class="input-group-text rounded-0 rounded-start border-primary">🔍</span>
		</div>
		<input
			bind:value={store.filter}
			type="text"
			class="form-control border-primary"
			placeholder="Search for products."
			aria-label="Search for products."
		/>
	</div>
{/snippet}

{#snippet productCount()}
	<div class="pagination d-flex justify-content-center justify-content-sm-start w-100 mt-3">
		Showing {Math.min((currentPage - 1) * itemsPerPage + 1, productsData.length)}-{Math.min(
			currentPage * itemsPerPage,
			productsData.length
		)} of {productsData.length}
	</div>
{/snippet}

{#snippet pageCount()}
	<div class="headerButtons btn-group border border-primary align-items-center w-100">
		<button
			class="pageButton btn btn-outline-primary border-0 px-1 lh-1"
			disabled={currentPage === 1 || productsData.length <= perPage}
			onclick={() => {
				currentPage--;
				paginatedContainer?.scrollIntoView({ behavior: 'smooth' });
			}}
			aria-label="Previous page"
		>
			<i class="bx bxs-left-arrow"></i>
		</button>
		<span class="mx-2 text-center">Page {currentPage}/{totalPages}</span>
		<button
			class="pageButton btn btn-outline-primary border-0 lh-1"
			disabled={currentPage === totalPages || productsData.length <= perPage}
			onclick={() => {
				currentPage++;
				paginatedContainer?.scrollIntoView({ behavior: 'smooth' });
			}}
			aria-label="Next page"
		>
			<i class="bx bxs-right-arrow"></i>
		</button>
	</div>
{/snippet}

{#snippet categoryDropDown()}
	<div class="btn-group w-100">
		<button
			type="button"
			class="btn btn-primary dropdown-toggle"
			data-bs-toggle="dropdown"
			aria-expanded="false"
		>
			<i class="bx bxs-category"></i> Categories
		</button>
		<ul class="category-menu dropdown-menu shadow border border-primary p-0">
			{#each shop_categories as { title, shopLink } (shopLink)}
				<li class="border-bottom border-primary">
					<a
						class="dropdown-item py-2 text-uppercase fw-semibold"
						class:active={shopLink === page.params.categoryId}
						href={resolve('/shop/') + shopLink}
					>
						<i class="bx bxs-purchase-tag"></i>
						{title}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/snippet}

{#snippet headerPagination()}
	<nav class="row justify-content-between g-0 align-items-center my-3 g-3">
		<div class="col-md-6 col-12">
			{@render searchBox()}
		</div>
		<div class="col-md-3 col-6">
			{@render categoryDropDown()}
		</div>
		<div class="col-md-3 col-6">
			{@render pageCount()}
		</div>
	</nav>
{/snippet}

{#snippet footerPagination()}
	<nav aria-label="footerNavigation">
		<div class="d-flex justify-content-center justify-content-sm-end">
			<ul class="footerPagination pagination mt-3">
				<li class="page-item {currentPage === 1 ? 'disabled' : ''}">
					<button
						class="page-link align-items-center d-flex h-100"
						aria-label="Previous Page"
						disabled={currentPage === 1 || productsData.length <= perPage}
						onclick={() => {
							currentPage--;
							paginatedContainer?.scrollIntoView({ behavior: 'smooth' });
						}}
					>
						<i class="bx bxs-left-arrow"></i>
					</button>
				</li>
				{#each Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
					const start = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
					return start + i;
				}) as pageNum (pageNum)}
					<li class="page-item {currentPage === pageNum ? 'active' : ''}">
						<button
							class="page-link"
							onclick={() => {
								currentPage = pageNum;
								paginatedContainer?.scrollIntoView({ behavior: 'smooth' });
							}}
						>
							{pageNum}
						</button>
					</li>
				{/each}
				<li class="page-item {currentPage === totalPages ? 'disabled' : ''}">
					<button
						class="page-link align-items-center d-flex h-100"
						aria-label="Next Page"
						disabled={currentPage === totalPages || productsData.length <= perPage}
						onclick={() => {
							currentPage++;
							paginatedContainer?.scrollIntoView({ behavior: 'smooth' });
						}}
					>
						<i class="bx bxs-right-arrow"></i>
					</button>
				</li>
			</ul>
		</div>
	</nav>
{/snippet}

<div bind:this={paginatedContainer} class:paginatedContainer={true} {...props}>
	{#if topPagination}
		{@render headerPagination()}
	{/if}
	<div class="row g-2 mt-3">
		{#if dataAvailable}
			<ProductCards {identity} productsData={paginatedProducts} />
		{:else}
			<div class="alert alert-primary" role="alert">
				Sorry! No Product matches your search criteria.
			</div>
		{/if}
	</div>
	{#if bottomPagination}
		<div class="row align-items-center justify-content-between">
			<div class="col-sm-6">
				{@render productCount()}
			</div>
			<div class="col-sm-6">
				{@render footerPagination()}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.pageButton {
		padding: 9.28px 5px;
	}
	.dropdown-toggle {
		padding: 10px 5px;
	}
	.category-menu {
		min-width: 100%;

		li:first-child {
			padding-bottom: none !important;
		}
	}
	.category-menu {
		li:last-child {
			padding-bottom: none !important;
			border-bottom: none !important;
		}
	}
</style>
