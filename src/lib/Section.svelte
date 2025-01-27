<script>
	import { Text } from "$lib/components";
	import VerticalSeperator from "$lib/VerticalSeperator.svelte";
	import VerticalSeperatorExpandable from "$lib/VerticalSeperatorExpandable.svelte";

	export let title = "";

	export let collapsible = false;

	let expanded = false;

	const onExpand = () => {
		expanded = true;
	};

	const hasExpandedSlot = !!$$slots.expanded;
</script>

{#if title !== ""}
	<Text text={title} size="xl_title" />
	<div class="h-4"></div>
{/if}

<div>
	<slot />

	{#if expanded}
		<slot name="expanded" />
	{/if}
</div>

<div class="h-8"></div>

{#if hasExpandedSlot}
	{#if collapsible}
		<VerticalSeperatorExpandable onClick={onExpand} />
		<div class="h-24"></div>
	{:else if expanded}
		<VerticalSeperator />
		<div class="h-16"></div>
	{:else}
		<VerticalSeperatorExpandable onClick={onExpand} />
		<div class="h-24"></div>
	{/if}
{:else}
	<VerticalSeperator />
	<div class="h-16"></div>
{/if}
