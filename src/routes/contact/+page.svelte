<script lang="ts">
import { Text, Show } from '$lib/components';
import GobackButton from '$lib/GobackButton.svelte';
</script>

<div
	class="fixed bottom-[1rem] left-[1rem] lg:bottom-10 lg:left-10 z-[1000] flex flex-col gap-2"
>
	<GobackButton
		onClick={() => {
			history.back();
		}}
	/>
</div>

<div class="h-[100vh] flex flex-col justify-center text-center">
	<Show>
		<Text text="Contact" size="xl_title" />
	</Show>
</div>
