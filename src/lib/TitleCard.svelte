<script>
	import { Text, Button, Logo, Show, Icon } from "$lib/components";

	import { scroll, animate } from "motion";
	import { onMount } from "svelte";

	let element;
	let target;

	onMount(() => {
		const animation = animate(
			element,
			{
				rotate: ["5deg", 0],
				borderRadius: ["4rem", "0%"],
				scale: [0.9, 1],
			},
			{ ease: "linear" },
		);

		const cancel = scroll(animation, { target: target });

		return () => {
			cancel();
			animation.stop();
		};
	});
</script>

<div
	bind:this={element}
	class="w-[100vw] h-[100vh] bg-primary flex flex-col justify-between items-center text-center text-white"
>
	<div></div>

	<div class="flex flex-col justify-center items-center text-center">
		<div class="h-[10rem]">
			<Logo style="w-[10.2rem] h-[10.2rem]" />
		</div>

		<div class="h-[4.3rem]">
			<Text
				timing={{ delay: 0.8 }}
				text="Morph App"
				size="xl_title"
				tracking="wide"
			/>
		</div>

		<div class="h-[3rem]">
			<Text
				timing={{ delay: 1.2 }}
				text="Find the achilles heel of your laziness"
				size="md"
				tracking="wide"
			/>
		</div>
	</div>

	<div class="h-[10rem] flex flex-col items-center justify-center">
		<Text
			timing={{ delay: 1.2 }}
			text="Scroll down"
			size="sm"
			tracking="wide"
		/>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="3rem"
			height="3rem"
			viewBox="0 0 24 24"
			><path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="m19 9l-7 7l-7-7"
			/></svg
		>
	</div>

	<!-- <div class="flex gap-6">
		<Text
			timing={{ delay: 1.2 }}
			text="Todo"
			size="lg_header"
			tracking="wide"
		/>
		<Text
			timing={{ delay: 1.2 }}
			text="Learn"
			size="lg_header"
			tracking="wide"
		/>
		<Text
			timing={{ delay: 1.2 }}
			text="Do"
			size="lg_header"
			tracking="wide"
		/>
		<Text
			timing={{ delay: 1.2 }}
			text="Earn"
			size="lg_header"
			tracking="wide"
		/>
	</div> -->
</div>

<div bind:this={target}></div>
