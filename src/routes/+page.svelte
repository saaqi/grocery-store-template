<script lang="ts">
	import { Home, WeeklySales, Featured, NewArrivals, ContactUs } from '$sections';
	import { appData } from '$lib';
</script>

<svelte:head>
	<title>{appData.title} | {appData.tagline}</title>
	<meta
		name="description"
		content="We offer fresh groceries, snacks, household essentials, and more. Whether you're picking up daily necessities or grabbing something quick, we've got you covered with friendly service and great prices!"
	/>
</svelte:head>

<Home />
<WeeklySales />
<Featured />
<NewArrivals />
<ContactUs />
