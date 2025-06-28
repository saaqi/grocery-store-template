<script lang="ts">
  import { SectionWrapper, ProductCards } from '$components';
  import { getContext, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  // Define types for context
  type Product = {
    cat: string;
    title: string;
    s_desc: string;
    [key: string]: any; // Allow other properties
  };

  type ProductContext = {
    products: Product[];
  };

  // Get products from context set by the page
  const { products } = getContext<ProductContext>('productsData');

  let filter: string = $state('');
  let currentPage: number = $state(1);
  let itemsPerPage: number = $state(12);

  const filteredProducts = $derived(
    products.filter(
      (product) =>
        product.cat === filter ||
        product.title.toLowerCase().includes(filter.toLowerCase()) ||
        product.s_desc.toLowerCase().includes(filter.toLowerCase())
    )
  );

  const totalPages = $derived(Math.ceil(filteredProducts.length / itemsPerPage));
  const paginatedProducts = $derived(
    filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  );

  // Expose filter and current page to child components if needed
  setContext('filter', writable(filter));
  setContext('currentPage', writable(currentPage));
</script>

{#snippet paginationButtons(dataLength: number, current: number, total: number)}
  <div class="d-flex justify-content-between gap-3 flex-wrap align-items-center my-3">
    <div class="pagination">
      Showing {Math.min((current - 1) * itemsPerPage + 1, dataLength)} - {Math.min(
        current * itemsPerPage,
        dataLength
      )} of {dataLength} products
    </div>
    <div class="headerButtons btn-group align-items-center">
      <button
        class="pageButton btn btn-outline-primary p-2"
        disabled={current === 1}
        onclick={() => {
          currentPage--;
          document.querySelector('.mainContent')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Previous page"
      >
        <i class="bx bxs-left-arrow"></i>
      </button>
      <span class="mx-2">Page {current} of {total}</span>
      <button
        class="pageButton btn btn-outline-primary p-2"
        disabled={current === total}
        onclick={() => {
          currentPage++;
          document.querySelector('.mainContent')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Next page"
      >
        <i class="bx bxs-right-arrow"></i>
      </button>
    </div>
  </div>
{/snippet}

<SectionWrapper id="shop" heading="Shop by Category">
  <div class="container">
    <div class="row">
      <div class="mainContent">
        <input
          type="text"
          placeholder="Filter products..."
          bind:value={filter}
          class="form-control mb-3"
        />

        {@render paginationButtons(filteredProducts.length, currentPage, totalPages)}
        <div class="row g-2 mt-3">
          <ProductCards identity="shopPageCards" data={paginatedProducts} />
        </div>
        {@render paginationButtons(filteredProducts.length, currentPage, totalPages)}
      </div>
    </div>
  </div>
</SectionWrapper>

<style>
  .pageButton {
    line-height: 1;
  }
</style>