<script lang="ts">
	interface Props {
		mapUrl: string;
	}
	const { mapUrl }: Props = $props();
</script>

<div class="map-container border border-2 border-primary rounded">
	<iframe
		src={mapUrl}
		width="600"
		height="338"
		style="border:0;"
		allowfullscreen
		title="Google Maps Location"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
	></iframe>
</div>

<style>
  .map-container {
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    position: relative;
  }

  iframe {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

</style>
