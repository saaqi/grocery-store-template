<script lang="ts">
	interface Props {
		mapUrl: string;
	}
	const { mapUrl }: Props = $props();
</script>

<div class="map-container">
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
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    bottom: 0;
  }

</style>
