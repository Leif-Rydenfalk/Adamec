<script>
import { goto } from '$app/navigation';
import { Button, Show, Text } from '$lib/components';
import Image from './components/image/Image.svelte';

export let id = 99999999999;

import { products } from './products';

let product = products[id];
if (!product) {
	product = {
		name: 'No product found',
		description:
			'This product does not exist. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies ultricies. Nullam nec purus nec nunc ultricies ultricies.'
	};
}

let delay = Math.random() * 0.2;
</script>

<div class="w-80 h-[28rem] flex flex-col justify-center items-center">
	<Show timing="smooth" delay={delay}>
		<button on:click={() => goto(`/products/${id}`)}>
			<div
				class="text-left relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
			>
				<div
					class="relative mx-4 -mt-6 h-[10rem] overflow-hidden rounded-xl bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-primary"
				>
					{#if product.imageSrc !== null}
						<Image src={product.imageSrc} />
					{/if}
				</div>
				<div class="p-6">
					<h5
						class="h-8 w-[18rem] overflow-hidden mb-2 block font-sans text-xl leading-snug tracking-normal text-blue-gray-900 antialiased"
					>
						<Text text={product.name} />
					</h5>
					<p
						class="h-[8rem] block font-sans text-base font-light leading-relaxed text-inherit antialiased"
					>
						<Text text={product.description} />
					</p>
				</div>
			</div>
		</button>
	</Show>
</div>
