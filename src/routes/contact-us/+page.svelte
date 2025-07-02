<script lang="ts">
	import { ContactUs } from '$sections';
	import { appData } from '$lib';
	import { EmbedGoogleMaps } from '$components';
</script>

<svelte:head>
	<title>Conact Us | {appData.title}</title>
	<meta
		name="description"
		content="Get in touch with us for any inquiries, feedback, or support. We're here to help you with your grocery needs!"
	/>
</svelte:head>
<ContactUs />
<section class="bg-info-subtle">
<div class="container">
	<div class="pb-5">
		<EmbedGoogleMaps
		mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.997040871025!2d3.1197990760086705!3d50.94226777169029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c335db219ddbb7%3A0x1de254007ee94efe!2sSadiq%20Super%20Store!5e0!3m2!1sen!2s!4v1751444458306!5m2!1sen!2s"
		/>
	</div>
</div>
</section>
