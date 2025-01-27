<script lang="js">
import { onMount } from 'svelte';
import { Show } from '$lib/components';
import { animate } from 'motion';

export let show = false;

let background;

function showAnimate() {
	animate(background, { opacity: [1] }, { duration: 0.3 });
}

function hideAnimate() {
	animate(background, { opacity: [0] }, { duration: 0.5 });
}

onMount(() => {
	if (show) {
		showAnimate();
	} else {
		hideAnimate();
	}
});

$: {
	if (background) {
		if (show) {
			showAnimate();
		} else {
			hideAnimate();
		}
	}
}
</script>

<div
	bind:this={background}
	class="fixed top-0 left-0 w-screen h-screen bg-transparent backdrop-blur-lg z-[1500] touch-none pointer-events-none"
></div>

{#if show}
	<div class="fixed top-0 left-0 w-screen h-screen bg-transparent z-[1500]"
	></div>
{/if}
