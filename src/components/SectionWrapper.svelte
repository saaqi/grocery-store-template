<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		id: string;
		fullCenter?: boolean;
		heading?: string;
		copy?: string;
		className?: string;
		children: Snippet;
	}
	const { id, heading, copy, className, fullCenter = true, children, ...props }: Props = $props();
</script>

<!-- .section, .gap-4 .py-5, .centerContent : keeps from purging -->
<section
	{id}
	class:section={true}
	class:centerContent={!fullCenter}
	class:py-5={true}
	class={className}
	{...props}
>
	<div class="container">
		{#if heading || copy}
			<div class="w-100">
				{#if heading}
					<h2 class="section-heading mb-4">{heading}</h2>
				{/if}
				{#if copy}
					<p class="section-copy">{copy}</p>
				{/if}
			</div>
		{/if}
		{@render children()}
	</div>
</section>

<style>
	.section {
		display: flex;
		place-content: center;
		align-items: center;
		flex-wrap: wrap;
		min-height: 100svh;
	}

	.section.centerContent {
		place-content: start;
		align-items: start;
	}

	.section:nth-child(even) {
		background-color: var(--even-bg);
	}

	.section:nth-child(odd) {
		background-color: var(--odd-bg);
	}

	.section-heading {
		position: relative;
		text-align: center;
		text-transform: uppercase;
		padding-bottom: 5px;
	}

	.section-heading::before {
		width: 28px;
		height: 5px;
		display: block;
		content: '';
		position: absolute;
		bottom: 3px;
		left: 50%;
		margin-left: -14px;
		background-color: rgb(var(--bs-primary-rgb));
	}

	.section-heading::after {
		width: 100px;
		height: 1px;
		display: block;
		content: '';
		position: relative;
		margin-top: 1rem;
		left: 50%;
		margin-left: -50px;
		background-color: rgb(var(--bs-primary-rgb));
	}
</style>
