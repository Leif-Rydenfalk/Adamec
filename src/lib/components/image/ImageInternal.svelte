<script lang="js">
export let src = '';
export let style = '';
export let placeholder = '';

export let handleError = () => {};

let styleClass = style === '' ? '' : style;
let placeholderClass = placeholder === '' ? 'bg-primary' : placeholder;

import { animate, inView, spring } from 'motion';
import { onMount } from 'svelte';
</script>

{#if src !== ''}
	<!-- <img {src} class={`${style} ${imagestyle}`} alt="" on:error={handleError} /> -->
	<img src={src} class={`${styleClass}`} alt="" on:error={handleError} />
{:else}
	<div class={`${styleClass} ${placeholderClass}`}> </div>
{/if}
