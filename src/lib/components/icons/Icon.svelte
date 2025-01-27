<script lang="js">
import { animate, inView, spring } from 'motion';
import { onMount } from 'svelte';

export let style = '';
export let delay = 0.0;
export let damping = 3.0;

let element;

onMount(() => {
	if (!element) return;

	// // generate a random direction vector for the animation
	// let angle = Math.random() * Math.PI * 2;
	// let direction = {
	// 	x: Math.cos(angle),
	// 	y: Math.sin(angle)
	// };

	// // generate a random magnitude for the animation
	// let magnitude = (Math.random() * 0.5 + 0.5) * 10;

	// // generate a random stiffness for the animation
	// let stiffness = Math.random() * 100 + 100;

	// generate a random mass for the animation
	let mass = Math.random() * 0.4 + 0.2;

	inView(element, async () => {
		animate(
			element,
			{ scale: [0.0, 1], opacity: [0, 1] },
			{
				easing: spring({
					stiffness: 100,
					damping: damping,
					mass: mass,
					restDistance: 0.005,
					restSpeed: 0.005
				}),
				delay
			}
		);
	});

	return () => {};
});
</script>

<div bind:this={element} class={`opacity-0 ${style} drop-shadow-lg`}>
	<slot />
</div>
