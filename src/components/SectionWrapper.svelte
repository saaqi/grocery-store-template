<script lang="ts">
	const { id, title, copy, children, ...props } = $props();
</script>

<section {id} {...props} class:section={true} class:section-wrapper={true}>
	<div class="container py-4">
		<h2 class="section-heading">{title}</h2>
		{#if copy}
			<p class="section-copy">{copy}</p>
		{/if}
		{@render children()}
	</div>
</section>

<style>
/* Section Heading Titles */
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
