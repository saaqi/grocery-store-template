export function observeWhenVisible(
	element: HTMLElement,
	threshold: number = 1.0,
	keepVisible: boolean = true
) {
	let isVisible = $state(false);
	let hasBeenVisible = $state(false);
	let observer: IntersectionObserver | undefined;

	$effect(() => {
		if (element) {
			observer = new IntersectionObserver(
				(entries) => {
					const entry = entries[0];

					if (entry.isIntersecting) {
						isVisible = true;
						hasBeenVisible = true;
					} else {
						// Element is not intersecting
						if (keepVisible && hasBeenVisible) {
							// Keep showing as visible and stop observing
							observer?.disconnect();
						} else {
							// Normal behavior - update visibility
							isVisible = false;
						}
					}
				},
				{ threshold }
			);

			observer.observe(element);

			return () => {
				observer?.disconnect();
			};
		}
	});

	return () => (keepVisible && hasBeenVisible ? true : isVisible);
}

// This is how you would use the observeVisibility function in a Svelte component:
// import { observeWhenVisible } from './observeWhenVisible.svelte';
// let element1: HTMLElement | undefined = $state();
// const isVisible = $derived(element1 ? observeWhenVisible(element1, 1.0, false) : () => false);

// <div bind:this={element1}>
// 	{#if isVisible()}
// 			IT IS SHOWING
// 	{:else}
// 			IT IS HIDDEN
// 	{/if}
// </div>
