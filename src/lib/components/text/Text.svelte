<script lang="js">
import { onMount } from 'svelte';
import TextInternal from './TextInternal.svelte';

// params
export let id = '';
export let text = '';
export let style = '';
export let size = '';
export let weight = '';
export let color = 'default';
export let tracking = 'default';
export let timing = {};
export let element = null;
</script>

{#key Object.values( { id, text, size, weight, color, tracking, timing, element } ).join()}
	<TextInternal
		text={text}
		style={style}
		size={size}
		weight={weight}
		color={color}
		tracking={tracking}
		timing={timing}
		element={element}
	/>
{/key}
