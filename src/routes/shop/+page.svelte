<script lang="ts">
	import { ProductCards } from '$components';
	import { dateSortedProducts } from '$data';

	let filter: string = $state('');
	let currentPage: number = $state(1);
	let itemsPerPage: number = $state(12);

	const featured = $derived(
		dateSortedProducts.filter(
			(product) =>
				product.cat === filter ||
				product.title.toLowerCase().includes(filter.toLowerCase()) ||
				product.s_desc.toLowerCase().includes(filter.toLowerCase())
		)
	);

	const totalPages = $derived(Math.ceil(featured.length / itemsPerPage));
	const paginatedProducts = $derived(
		featured.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
	);
</script>

{#snippet paginationButtons()}
<div class="d-flex justify-content-between gap-3 flex-wrap align-items-center my-3">
	<div class="pagination">
		Showing {Math.min((currentPage - 1) * itemsPerPage + 1, featured.length)} - {Math.min(
			currentPage * itemsPerPage,
			featured.length
		)} of {featured.length} products
	</div>
	<div class="headerButtons btn-group align-items-center">
		<button
			class="pageButton btn btn-outline-secondary p-2"
			disabled={currentPage === 1}
			onclick={() => {
				currentPage--;
				document.querySelector('.mainContent')?.scrollIntoView({ behavior: 'smooth' });
			}}
			aria-label="Previous page"
		>
			<i class="bx bxs-left-arrow"></i>
		</button>
		<span class="mx-2">Page {currentPage} of {totalPages}</span>
		<button
			class="pageButton btn btn-outline-secondary p-2"
			disabled={currentPage === totalPages}
			onclick={() => {
				currentPage++
				document.querySelector('.mainContent')?.scrollIntoView({ behavior: 'smooth' });
			}}
			aria-label="Next page"
		>
			<i class="bx bxs-right-arrow"></i>
		</button>
	</div>
</div>
{/snippet}

{@render paginationButtons()}
<div class="row g-2 mt-3">
	<ProductCards identity="shopPageCards" data={paginatedProducts} />
</div>
{@render paginationButtons()}

<style>
	.pageButton {
		line-height: 1;
	}
</style>
