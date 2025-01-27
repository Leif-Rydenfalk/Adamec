<script lang="js">
	import ImageInternal from './ImageInternal.svelte';

	export let src = '';
	export let style = '';
	export let placeholder = '';

	// export let imagestyle = '';
	// export let style = '';

	let error = false;
	function handleError() {
		error = true;
	}
</script>

{#key error}
	<!-- <ImageInternal src={error ? '' : src} {imagestyle} {placeholder} {style} {handleError} /> -->
	<ImageInternal src={error ? '' : src} {style} {placeholder} {handleError} />
{/key}
