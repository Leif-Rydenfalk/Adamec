<script>
import { Show, Text, Button, Icon, Logo, CancelIcon } from '$lib/components';
import { animate, spring } from 'motion';
import { onMount } from 'svelte';
import Loader from './Loader.svelte';

let show = true;

let element;

onMount(() => {
	animate(element, { opacity: 0 }, { duration: 0.5, delay: 0.1 });

	setTimeout(() => {
		show = false;
	}, 500);
});
</script>

{#if show}
	<div
		bind:this={element}
		class="fixed top-0 left-0 z-[99999] w-[100vw] h-[100vh] bg-black flex justify-center items-center"
	>
		<Loader />
	</div>
{/if}
