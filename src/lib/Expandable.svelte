<script>
import { Button, Show, Text, Icon } from '$lib/components';
import { animate, spring } from 'motion';

export let expanded = false;

// If expanded, rotate the icon 180 degrees
let icon;
let update = () => {
	animate(
		icon,
		{ rotate: expanded ? 180 : 0 },
		{
			easing: spring({
				damping: 35.0,
				stiffness: 450,
				mass: 3.0
			})
		}
	);
};

export let onClick = () => {};
</script>

<Button
	onClick={() => {
		onClick();
		update();
	}}
>
	<div
		class="relative flex w-[10rem] h-[2rem] flex-col rounded-xl bg-clip-border text-black shadow-md items-center justify-center"
	>
		<Icon>
			<svg
				bind:this={icon}
				xmlns="http://www.w3.org/2000/svg"
				width="2rem"
				height="2rem"
				viewBox="0 0 24 24"
				><path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m19 9l-7 7l-7-7"
				></path></svg
			>
		</Icon>
	</div>
</Button>
