<script lang="ts">
	import {Text, Button, Icon} from '$lib/components';
	import { onMount } from 'svelte';
    
	// Props with default values and types
	export let style: string = 'w-auto h-12';
	export let value: number = 0;
	export let onAdd: (amount: number) => void = () => {};
	export let onRemove: (amount: number) => void = () => {};
	export let minMax: [number, number] = [0, 9999];

	let intervalId: number | undefined;

	// Adjust value ensuring it's within the min-max range
	function adjustValue(amount: number): void {
		const newValue = value + amount;

		if (newValue >= minMax[0] && newValue <= minMax[1]) {
			value = newValue;

			if (amount < 0) {
				onRemove(-amount);
			} else {
				onAdd(amount);
			}
		} else {
			// Clear hold if value goes beyond min or max limits
			clearHold();
		}
	}

	// Handle button hold for continuous adjustment
	function handleHold(direction: number): void {
		let holdDuration = 0;

		// Adjust value initially
		adjustValue(direction);

		intervalId = window.setInterval(() => {
			holdDuration += 1;

			if (holdDuration >= 4) {
				adjustValue(direction);
			}
		}, 100);

		// Attach event listeners to clear hold interaction
		window.addEventListener('mouseup', clearHold);
		window.addEventListener('touchend', clearHold);
	}

	// Clear interval and remove event listeners
	function clearHold(): void {
		if (intervalId !== undefined) {
			clearInterval(intervalId);
			intervalId = undefined;
		}

		window.removeEventListener('mouseup', clearHold);
		window.removeEventListener('touchend', clearHold);
	}

	function handleWheel(event: WheelEvent): void {
		const wheelAmount = -event.deltaX * 0.005;

		adjustValue(Math.floor(wheelAmount));
	}

	let posAtMouseDown = 0;

	// Handle mouse down event
	function handleMouseDown(event: MouseEvent): void {
		posAtMouseDown = event.clientX;
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
	}

	// Handle mouse move event
	function handleMouseMove(event: MouseEvent): void {
		const dragAmount = Math.floor((event.clientX - posAtMouseDown) * 0.01);

		if (dragAmount !== 0) {
			posAtMouseDown = event.clientX; // Update posAtMouseDown to the current position
			adjustValue(dragAmount);
		}
	}

	// Handle mouse up event
	function handleMouseUp(): void {
		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('mouseup', handleMouseUp);

		posAtMouseDown = 0;
	}

	onMount(() => {
		// valueDiv.addEventListener('drag', (event) => {
		// 	let dragAmount = 0;

		// 	if (event.clientX > 0) {
		// 		dragAmount = event.clientX > 0 ? 1 : -1;
		// 	}

		// 	adjustValue(dragAmount);
		// });

		// valueDiv.addEventListener('wheel', handleWheel);
		// valueDiv.addEventListener('mousedown', handleMouseDown);

		// Clean up on component unmount
		return () => {
			clearHold();
			// valueDiv.removeEventListener('wheel', handleWheel);
			// valueDiv.removeEventListener('mousedown', handleMouseDown);
			// window.removeEventListener('mousemove', handleMouseMove);
			// window.removeEventListener('mouseup', handleMouseUp);
		};
	});

	let valueDiv: HTMLDivElement;
</script>

<div class={`grid grid-cols-3 items-center bg-slate-200 rounded-md ${style}`}>
	<div class="grid-item-centered">
		<Button delay={0.1} onClick={() => adjustValue(-1)} disabled={value <= minMax[0]}>
			<Icon delay={0.2}>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"
					><path fill="currentColor" d="M19 12.998H5v-2h14z" /></svg
				>
			</Icon>
		</Button>
	</div>

	<div class="grid-item-centered">
		<div bind:this={valueDiv} class="value-display text-center">
			<Text size="md" weight="bold" text={`${value}`} />
		</div>
	</div>

	<div class="grid-item-centered">
		<Button delay={0.2} onClick={() => adjustValue(1)} disabled={value >= minMax[1]}>
			<Icon delay={0.3}>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"
					><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /></svg
				>
			</Icon>
		</Button>
	</div>
</div>

<style lang="scss">
	.grid-item-centered {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
