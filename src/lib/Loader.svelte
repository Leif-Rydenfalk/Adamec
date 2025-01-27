<script>
import { Show, Text, Button, Icon, Logo, CancelIcon } from '$lib/components';
import { animate, spring } from 'motion';
import { onMount } from 'svelte';

// let line;
// let planetAndMoon;
// let container;

// function animateIn() {
// 	animate(container, { opacity: [1] }, { duration: 0.5 });
// 	animate(planetAndMoon, { scale: [0.5], gap: ['25rem'] }, { duration: 3.5 });
// 	animate(line, { width: ['20rem'] }, { duration: 2.5, delay: 0.5 });
// }

// function animateOut() {
// 	animate(planetAndMoon, { scale: [1], gap: ['0rem'] }, { duration: 3.5 });
// 	animate(line, { width: ['0rem'] }, { duration: 2.5, easing: 'ease-in-out' });
// 	animate(container, { opacity: [0] }, { duration: 0.5, delay: 3.5 });
// }

// onMount(() => {
// 	animateIn();

// 	// setTimeout(() => {
// 	// 	animateOut();
// 	// }, 3500);
// });
</script>

<!-- <div
	bind:this={container}
	class="relative flex justify-center items-center opacity-0"
>
	<div class="absolute flex justify-center items-center">
		<div bind:this={line} class="w-[0rem] h-[0.05rem] bg-white"> </div>
	</div>

	<div
		bind:this={planetAndMoon}
		class="absolute flex justify-center items-center gap-[0rem]"
	>
		<div
			class="p-[0.15rem] animate-spin drop-shadow-2xl bg-gradient-to-bl from-lime-700 to-lime-200 h-20 w-20 aspect-square rounded-full"
		>
			<div class="rounded-full h-full w-full bg-black background-blur-md"></div>
		</div>

		<div
			class="p-[0.15rem] animate-spin drop-shadow-2xl bg-gradient-to-bl from-lime-700 to-lime-200 h-5 w-5 aspect-square rounded-full"
		>
			<div class="rounded-full h-full w-full bg-black background-blur-md"></div>
		</div>
	</div>
</div> -->

<div class="relative">
	<div class="flex flex-row gap-2">
		<div class="w-4 h-4 rounded-full bg-white animate-bounce"></div>
		<div
			class="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.3s]"
		></div>
		<div
			class="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:-.5s]"
		></div>
	</div>
</div>
