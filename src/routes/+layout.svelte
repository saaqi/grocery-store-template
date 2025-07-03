<script lang="ts">
	import '$styles/bootstrap.css';
	import '$styles/app.scss';
	import '@fontsource-variable/inter'; // Supports weights 100-900
	import '@fontsource-variable/merriweather'; // Supports weights 300-900
	import 'boxicons/css/boxicons.min.css'; // BOX Icons
	import { appData } from '$lib';
	import { page } from '$app/state';
	import { Footer } from '$sections';
	import { Preloader, Navigation, TopLink } from '$components';
	import type { Snippet } from 'svelte';

	// Initial layout component for the application
	const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link
		rel="canonical"
		href={page.url.href.startsWith(appData.baseURL)
			? page.url.href
			: appData.baseURL + page.url.pathname}
	/>
</svelte:head>

<main id="main" class="main-container">
	<Preloader />
	<Navigation />
	{@render children()}
	<Footer />
	<TopLink />
</main>
