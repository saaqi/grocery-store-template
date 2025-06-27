<script lang="ts">
	import '$styles/bootstrap.css';
	import '$styles/app.scss';
	import '@fontsource-variable/inter'; // Supports weights 100-900
	import '@fontsource-variable/merriweather'; // Supports weights 300-900
	import 'boxicons/css/boxicons.min.css'; // BOX Icons

	// Initial layout component for the application
	const { children } = $props();

	// Canonical URL for SEO
	import { page } from '$app/state';
	import { data } from '../app';
	const baseUrl = data.baseURL;

	// Import Components
	import { Preloader, Navigation } from '$components';
</script>

<svelte:head>
	<link
		rel="canonical"
		href={page.url.href.startsWith(baseUrl) ? page.url.href : baseUrl + page.url.pathname}
	/>
</svelte:head>

<main id="main" class="main-container">
	<Preloader />
	<Navigation />
	{@render children()}
</main>
