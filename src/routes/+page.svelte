<script lang="ts">
import { goto } from '$app/navigation';
import { Text, Button, Logo, Show, Icon } from '$lib/components';
import Product from '$lib/Product.svelte';
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
	<VerticalSectionExpandable title="Featured products">
		<Product id={1} />
		<Product id={2} />
		<Product id={3} />
		<Product id={4} />
		<Product id={5} />
		<Product id={6} />
		<svelte:fragment slot="expanded">
			<Product id={7} />
			<Product id={8} />
			<Product id={9} />
			<Product id={10} />
			<Product id={11} />
			<Product id={12} />
		</svelte:fragment>
	</VerticalSectionExpandable>

	<VerticalSectionExpandable title="Equipment">
		<Product id={13} />
		<Product id={14} />
		<Product id={15} />
	</VerticalSectionExpandable>

	<VerticalSectionExpandable title="Gym">
		<Product id={16} />
		<Product id={17} />
		<Product id={18} />
	</VerticalSectionExpandable>

	<VerticalSectionExpandable title="Suppliments">
		<Product id={19} />
		<Product id={20} />
		<Product id={21} />
	</VerticalSectionExpandable>
</div>
