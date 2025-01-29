<script lang="ts">
import { goto } from '$app/navigation';
import { Text, Button, Logo, Show, Icon } from '$lib/components';
import Project from '$lib/Project.svelte';
import TitleCard from '$lib/TitleCard.svelte';
import VerticalSectionExpandable from '$lib/VerticalSectionExpandable.svelte';

let timeout: ReturnType<typeof setTimeout>;
onMount(() => {
	return () => {
		clearTimeout(timeout);
		message.set(null);
	};
});

import { inview } from 'svelte-inview';
let options = {};

import { message } from '$lib/messages';
import { onMount } from 'svelte';
</script>

<TitleCard />

<div class="h-[5rem]"></div>

<div
	use:inview={options}
	oninview_enter={(event) => {
		timeout = setTimeout(() => {
			message.set({
				// show: true,
				message: 'Tip: Press any product card to open it.',
				type: 'success'
			});
		}, 1000);
	}}
	oninview_leave={(event) => {
		message.set(null);
	}}
	class="w-[100vw] flex flex-col items-center justify-center text-center"
>
	<VerticalSectionExpandable title="Featured projects">
		<Project id={1} />
		<Project id={2} />
		<Project id={3} />
		<Project id={4} />
		<Project id={5} />
		<Project id={6} />
		<svelte:fragment slot="expanded">
			<Project id={7} />
			<Project id={8} />
			<Project id={9} />
			<Project id={10} />
			<Project id={11} />
			<Project id={12} />
		</svelte:fragment>
	</VerticalSectionExpandable>

	<VerticalSectionExpandable title="Equipment">
		<Project id={13} />
		<Project id={14} />
		<Project id={15} />
	</VerticalSectionExpandable>

	<VerticalSectionExpandable title="Gym">
		<Project id={16} />
		<Project id={17} />
		<Project id={18} />
	</VerticalSectionExpandable>

	<VerticalSectionExpandable title="Suppliments">
		<Project id={19} />
		<Project id={20} />
		<Project id={21} />
	</VerticalSectionExpandable>
</div>
