<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id: string;
		element?: string;
		touchSensitivity?: number;
		indicators?: boolean;
		children: Snippet;
	}
	const {
		id,
		element = 'div',
		touchSensitivity = 2,
		indicators = true,
		children,
		...props
	}: Props = $props();

	/**
	 * Svelte 5 action that enables horizontal dragging functionality for a container element.
	 */
	function hasTouchSupport() {
		return (
			'ontouchstart' in window || // Most browsers
			navigator.maxTouchPoints > 0 // Modern browsers
		);
	}

	function draggableContainer(node: HTMLElement, options: { sensitivity?: number } = {}) {
		// Only add drag functionality if device doesn't have touch support
		if (hasTouchSupport()) {
			return {
				destroy() {}
			};
		}

		const { sensitivity = 3 } = options;

		let isDragging = false;
		let startX: MouseEvent['pageX'];
		let scrollLeft: number;

		function handleMouseDown(e: MouseEvent) {
			isDragging = true;
			startX = e.pageX - node.offsetLeft;
			scrollLeft = node.scrollLeft;
			node.classList.add('dragging');
		}

		function handleMouseLeave() {
			isDragging = false;
			node.classList.remove('dragging');
		}

		function handleMouseUp() {
			isDragging = false;
			node.classList.remove('dragging');
		}

		function handleMouseMove(e: MouseEvent) {
			if (!isDragging) return;
			e.preventDefault();
			const x = e.pageX - node.offsetLeft;
			const walk = (x - startX) * sensitivity;
			node.scrollLeft = scrollLeft - walk;
		}

		// Add event listeners
		node.addEventListener('mousedown', handleMouseDown);
		node.addEventListener('mouseleave', handleMouseLeave);
		node.addEventListener('mouseup', handleMouseUp);
		node.addEventListener('mousemove', handleMouseMove);

		return {
			// Update function called when parameters change
			update(newOptions = {}) {
				Object.assign(options, newOptions);
			},

			// Cleanup function called when element is removed
			destroy() {
				node.removeEventListener('mousedown', handleMouseDown);
				node.removeEventListener('mouseleave', handleMouseLeave);
				node.removeEventListener('mouseup', handleMouseUp);
				node.removeEventListener('mousemove', handleMouseMove);
				node.classList.remove('dragging');
			}
		};
	}
</script>

<div class="draggableOuterContainer">
	<!-- .draggableContainer, .row, .list-unstyles, g-1, g-md-2, py-4 : keeps from purging -->
	<svelte:element
		this={element}
		{id}
		class:row={true}
		class:draggableContainer={true}
		class:list-unstyled={element === 'ul'}
		class:g-1={true}
		class:g-md-2={true}
		use:draggableContainer={{ sensitivity: touchSensitivity }}
		{...props}
	>
		{@render children()}
	</svelte:element>
	{#if indicators}
		<div class="directionIndicators d-flex justify-content-between text-primary fs-4">
			<i class="bx bxs-chevron-left-circle"></i>
			<i class="bx bxs-chevron-right-circle"></i>
		</div>
	{/if}
</div>

<style lang="scss">
	.draggableOuterContainer {
		position: relative;
	}
	.draggableContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
	}
	.directionIndicators {
		display: none;
		position: absolute;
		width: 100%;
		top: 50%;
		pointer-events: none;
	}

	@media (max-width: 1200px) {
		.draggableContainer {
			flex-wrap: nowrap;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			-webkit-overflow-scrolling: touch;
			cursor: grab;
			user-select: none;

			&.dragging {
				cursor: grabbing;
			}
		}
		.directionIndicators {
			display: block;
		}
	}

	@media (max-width: 1200px) {
		.draggableContainer > :global(*) {
			flex: 0 0 32% !important;
		}
	}

	@media (max-width: 992px) {
		.draggableContainer > :global(*) {
			flex: 0 0 47.5% !important;
		}
	}
	@media (max-width: 576px) {
		.draggableContainer > :global(*) {
			flex: 0 0 95% !important;
		}
	}
</style>
