<script lang="js">
	import { goto } from '$app/navigation';
	import { Show, QuickLinks, LinkButton, Text, SearchBar, Button } from '$lib/components';

	let searchValue = '';
</script>


<Show preset="slide" delay={0.1}>
	<SearchBar placeholder="Search morph.com" bind:searchValue />

	<Button
		type="filled"
		delay={0.4}
		onClick={() => {
			console.log("Search for '" + searchValue + "'");
		}}
		>
		<Text text="Search" />
	</Button>

	<div class="h-[3rem]"></div>

	{#if searchValue.length < 3}
		<QuickLinks />
	{:else}
		<Text size="sm_header" text="Suggested results" />
	{/if}
</Show>