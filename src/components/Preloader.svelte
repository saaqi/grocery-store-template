<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import { fade } from 'svelte/transition';
	let hidden: boolean = $state(false);
	const hidePreloader: Attachment = () => {
		hidden = true;
	};
</script>

{#if !hidden}
	<div {@attach hidePreloader} class="atf-preloader" id="atf-preloader" out:fade>
		<div class="atf-status">
			<div class="atf-lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
{/if}

<style>
	#atf-preloader {
		transition: all ease-in-out 1s;
	}

	.atf-preloader {
		background: rgba(0, 0, 0, 0.97);
		bottom: 0;
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 99999999;
	}

	.atf-lds-roller {
		display: inline-block;
		position: absolute;
		width: 96px;
		height: 96px;
		top: 50%;
		left: 50%;
		margin: -40px 0 0 -40px;
		filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
	}

	.atf-lds-roller div {
		position: absolute;
		top: 33px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: #fff;
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}

	.atf-lds-roller div:nth-child(1) {
		left: 8px;
		animation: atf-lds-roller1 0.6s infinite;
	}

	.atf-lds-roller div:nth-child(2) {
		left: 8px;
		animation: atf-lds-roller2 0.6s infinite;
	}

	.atf-lds-roller div:nth-child(3) {
		left: 32px;
		animation: atf-lds-roller2 0.6s infinite;
	}

	.atf-lds-roller div:nth-child(4) {
		left: 56px;
		animation: atf-lds-roller3 0.6s infinite;
	}

	@keyframes atf-lds-roller1 {
		0% {
			transform: scale(0);
		}

		100% {
			transform: scale(1);
		}
	}

	@keyframes atf-lds-roller3 {
		0% {
			transform: scale(1);
		}

		100% {
			transform: scale(0);
		}
	}

	@keyframes atf-lds-roller2 {
		0% {
			transform: translate(0, 0);
		}

		100% {
			transform: translate(24px, 0);
		}
	}
</style>
