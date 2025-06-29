<script lang="ts">
	import { ContactUs } from '$sections';
	import { appData } from '$lib';
</script>

<svelte:head>
	<title>Conact Us | {appData.title}</title>
	<meta
		name="description"
		content="Get in touch with us for any inquiries, feedback, or support. We're here to help you with your grocery needs!"
	/>
</svelte:head>
<ContactUs />
