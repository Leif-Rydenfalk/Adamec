<script>
import { Button, Show, Text, Icon } from '$lib/components';
import Expandable from '$lib/Expandable.svelte';

export let expanded = false;

export let onClick = () => {};
</script>

<div class="flex w-[60%] items-center">
	<div class="flex-1 border-b border-gray-300"></div>
	<div class="relative flex w-[14rem] items-center justify-center">
		<Expandable onClick={onClick} expanded={expanded} />
	</div>
	<div class="flex-1 border-b border-gray-300"></div>
</div>
