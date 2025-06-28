<script>
	import { fade } from 'svelte/transition';
	let show = $state(false);
</script>

<svelte:window on:scroll={() => (show = window.scrollY >= 250)} />

{#if show}
	<div class="go-top" transition:fade>
		<button
			class="top fs-4 rounded-circle p-1 btn btn-outline-dark"
			aria-label="Go to Top"
			onclick={() => window.scrollTo({ top: 0 })}
		>
			<i class="bx bx-arrow-to-top"></i>
		</button>
	</div>
{/if}

<style>
	button {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		z-index: 2;
		line-height: 0;
	}
</style>
