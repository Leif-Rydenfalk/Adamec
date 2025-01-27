<script>
	import {
		Show,
		Text,
		Button,
		Icon,
		Logo,
		CancelIcon,
		InfoIcon,
	} from "$lib/components";
	import { onMount } from "svelte";

	export let show = true;

	export let message =
		"This is an info card. Here you can put some information that you want to highlight.";

	// export let type = 'info';

	export let lifetime = 3; // seconds
	let expanded = false;
	let timeout;

	let element;

	function setExpanded(value) {
		if (timeout) {
			clearTimeout(timeout);
		}
		expanded = value;
		if (value) {
			timeout = setTimeout(() => {
				expanded = false;
			}, lifetime * 1000);
		}
	}

	onMount(() => {
		setExpanded(true);
	});
</script>

{#if show}
	<div
		class="fixed bottom-[1rem] left-[1rem] lg:bottom-10 lg:left-10 z-[1000]"
	>
		<Button
			onClick={() => {
				setExpanded(!expanded);
			}}
		>
			<div
				bind:this={element}
				class="text-black justify-center items-center bg-gray-100 rounded-3xl drop-shadow-xl scale-90 hover:scale-100 transition-transform ease-spring-smooth-slow"
			>
				<div class="p-4 lg:p-6">
					<div class="flex gap-3 items-center justify-center">
						<div>
							<InfoIcon />
						</div>

						{#if expanded}
							<div class="w-[10rem] lg:w-[15rem] text-left">
								<Text text={message} />
							</div>
						{/if}
					</div>
				</div>
			</div>
		</Button>
	</div>
{/if}
