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
	import { appData } from '$lib';

	// Import Components
	import { Preloader, Navigation, TopLink } from '$components';
	import { Footer } from '$sections';
</script>

<svelte:head>
	<title>{appData.title} | {appData.tagline}</title>
	<meta
		name="description"
		content="We offer fresh groceries, snacks, household essentials, and more. Whether you're picking up daily necessities or grabbing something quick, we've got you covered with friendly service and great prices!"
	/>
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
