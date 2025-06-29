<script lang="ts">
	interface Props {
		productsData: Array<any>;
	  identity: string;
		perPage?: number;
		topPagination?: boolean;
		bottomPagination?: boolean;
		[key: string]: any;
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

	let paginatedContainer: any;
	let currentPage: number = $state(1);
	let itemsPerPage: number = $state(perPage);
	const totalPages = $derived(Math.ceil(productsData.length / itemsPerPage));
	const paginatedProducts = $derived(
		productsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
	);
</script>

{#snippet paginationButtons()}
	<div class="d-flex justify-content-between gap-3 flex-wrap align-items-center my-3">
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
	</div>
{/snippet}

<div {@attach paginatedContainer} class:paginatedContainer={true} {...props}>
	{#if topPagination}
		{@render paginationButtons()}
	{/if}
	<div class="container">
		<div class="row g-2 mt-3">
			<ProductCards identity={identity} productsData={paginatedProducts} />
		</div>
	</div>
	{#if bottomPagination}
		{@render paginationButtons()}
	{/if}
</div>
