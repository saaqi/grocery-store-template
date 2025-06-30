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

	let paginatedContainer: HTMLElement;
	let currentPage: number = $state(1);
	let itemsPerPage: number = $state(perPage);
	const totalPages = $derived(Math.ceil(productsData.length / itemsPerPage));
	const paginatedProducts = $derived(
		productsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
	);

	let dataAvailable: boolean = $state(true);

	$effect(() => {
		if (productsData.length === 0 || currentPage <= 0) {
			dataAvailable = false;
			currentPage = 1;
		} else if (currentPage > totalPages) {
			currentPage = totalPages;
			dataAvailable = true;
		} else {
			dataAvailable = true;
		}
	});
</script>


{#snippet headerPagination()}
	<nav class="d-flex justify-content-between gap-3 flex-wrap align-items-center my-3">
		<div class="pagination">
			Showing {Math.min((currentPage - 1) * itemsPerPage + 1, productsData.length)} - {Math.min(
				currentPage * itemsPerPage,
				productsData.length
			)} of {productsData.length} products
		</div>
		<div class="headerButtons btn-group border border-primary align-items-center">
			<button
				class="pageButton btn btn-outline-primary border-0 p-2 lh-1"
				disabled={currentPage === 1}
				onclick={() => {
					currentPage--;
					paginatedContainer?.scrollIntoView({ behavior: 'smooth' });
				}}
				aria-label="Previous page"
			>
				<i class="bx bxs-left-arrow"></i>
			</button>
			<span class="mx-2">Page {currentPage} of {totalPages}</span>
			<button
				class="pageButton btn btn-outline-primary border-0 p-2 lh-1"
				disabled={currentPage === totalPages}
				onclick={() => {
					currentPage++;
					paginatedContainer?.scrollIntoView({ behavior: 'smooth' });
				}}
				aria-label="Next page"
			>
				<i class="bx bxs-right-arrow"></i>
			</button>
		</div>
	</nav>
{/snippet}

{#snippet footerPagination()}
	<nav aria-label="footerNavigation">
		<div class="container text-end d-flex justify-content-center justify-content-md-end">
			<ul class="footerPagination pagination mt-4">
				<li class="page-item {currentPage === 1 ? 'disabled' : ''}">
					<button
						class="page-link align-items-center d-flex h-100"
						aria-label="Previous Page"
						disabled={currentPage === 1}
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
						disabled={currentPage === totalPages}
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
	<div class="container">
		<div class="row g-2 mt-3">
			{#if dataAvailable}
				<ProductCards {identity} productsData={paginatedProducts} />
				{:else}
				<div class="alert alert-primary" role="alert">
				  Sorry! No Product matches your search criteria.
				</div>
				{/if}
		</div>
	</div>
	{#if bottomPagination}
		{@render footerPagination()}
	{/if}
</div>
