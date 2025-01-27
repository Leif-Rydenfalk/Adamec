<script lang="ts">
import { Text, Show } from '$lib/components';

import Section from '$lib/Section.svelte';
import VerticalSeperator from '$lib/VerticalSeperator.svelte';

import type { PageServerData } from './$types';
import { onMount } from 'svelte';
import { animate, scroll } from 'motion';
import ItemSeperator from '$lib/ItemSeperator.svelte';
import Button from '$lib/components/button/Button.svelte';
import { goto } from '$app/navigation';

// let { data }: { data: PageServerData } = $props();

import { cart, showCart } from '$lib/cart';
const { productCount, cartProducts } = cart;

import { products } from '$lib/products';
import ConfirmButton from '$lib/ConfirmButton.svelte';

// let target: HTMLDivElement;

// onMount(() => {
// 	const animation = animate(element, {
// 		rotate: ["5deg", 0],
// 		borderRadius: ["8rem", "0%"],
// 		scale: [0.8, 1],
// 	});

// 	const cancel = scroll(animation, { target: target });

// 	return () => {
// 		cancel();
// 		animation.stop();
// 	};
// });

onMount(() => {
	showCart.set(true);

	return () => {
		showCart.set(false);
	};
});
</script>

<!-- 
<div
	bind:this={element}
	class="w-[100vw] h-[100vh] flex flex-col justify-center text-center bg-black text-white"
>
	<Show>
		<Text text="Cart" size="xl_title" />
	</Show>
</div> -->

<div class="w-screen flex flex-col items-center">
	<div class="h-[8rem]"></div>

	{#if $productCount === 0}
		<Show>
			<Text text="Your cart is empty" size="lg" />
		</Show>

		<div class="h-[3rem]"></div>
	{:else}
		<Section title="Cart">
			<div class="h-[2rem]"></div>

			{#each $cartProducts as cartProduct, index}
				{@const product = products[cartProduct.id]}
				{#if product}
					<div class="w-[100vw] flex flex-col items-center">
						<Button
							type="ghost"
							onClick={() => {
								goto('products/' + product.id);
							}}
						>
							<div class="flex items-center gap-[0.5rem]">
								<Text text={product.name} size="lg" />

								<Button>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="2rem"
										height="2rem"
										viewBox="0 0 36 36"
										><path
											fill="currentColor"
											d="M27.66 15.61L18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z"
											class="clr-i-outline clr-i-outline-path-1"
										></path><path fill="none" d="M0 0h36v36H0z"></path></svg
									>
								</Button>
							</div>
						</Button>

						<div class="h-[2rem]"></div>
						<div class="w-[50vw] flex flex-col items-center">
							<Text text={product.description} size="sm" />
						</div>

						<div class="h-[2rem]"></div>

						<Button
							type="clean"
							onClick={() => {
								cart.remove(index);
							}}
						>
							<div class="flex items-center gap-[0.5rem]">
								<Text text="Remove" size="sm" />
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1rem"
									height="1rem"
									viewBox="0 0 24 24"
									><path
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
									></path></svg
								>
							</div>
						</Button>

						<!-- <div class="h-[2rem]"></div> -->

						<div class="h-[5rem]"></div>
						<ItemSeperator />
					</div>
				{/if}
			{/each}

			<div class="w-[100vw] flex flex-col items-center">
				<Text text="Total items" size="lg" />
				<Text text={String($productCount)} size="lg" />
				<div class="h-[0.3rem]"></div>
				<div class="w-[100vw] h-[3rem] flex flex-col items-center">
					<ConfirmButton
						type="clean"
						onClick={() => {
							cart.clear();
						}}
					>
						<div class="flex items-center gap-[0.5rem]">
							<Text text="Clear" size="sm" />
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1rem"
								height="1rem"
								viewBox="0 0 24 24"
								><path
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
								></path></svg
							>
						</div>

						{#snippet confirm({})}
							<div class="flex items-center gap-[0.5rem]">
								<Text text="Sure?" size="sm" />
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1.2rem"
									height="1.2rem"
									viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M4.126 20q-.234 0-.414-.111t-.28-.293q-.108-.179-.12-.387q-.01-.209.118-.421L11.3 5.212q.128-.212.308-.308T12 4.808t.391.096t.308.308l7.871 13.576q.128.212.117.42q-.01.21-.12.388q-.1.182-.28.293t-.413.111zM12 17.616q.262 0 .439-.177t.176-.439t-.177-.438t-.438-.178t-.438.177t-.177.439t.177.439t.438.177m0-2.231q.214 0 .357-.144t.143-.356v-4q0-.213-.144-.357t-.357-.143t-.356.143t-.143.357v4q0 .212.144.356t.357.144"
									></path></svg
								>
							</div>
						{/snippet}
					</ConfirmButton>
				</div>

				<div class="h-[5rem]"></div>

				<ItemSeperator />

				<div class="h-[1rem]"></div>

				<Button type="clean" onClick={() => {}}>
					<div class="flex items-center gap-[0.5rem]">
						<Text text="Checkout" size="md" />
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="2rem"
							height="2rem"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M14 13q-1.25 0-2.125-.875T11 10t.875-2.125T14 7t2.125.875T17 10t-.875 2.125T14 13m-7 3q-.825 0-1.412-.587T5 14V6q0-.825.588-1.412T7 4h14q.825 0 1.413.588T23 6v8q0 .825-.587 1.413T21 16zm2-2h10q0-.825.588-1.412T21 12V8q-.825 0-1.412-.587T19 6H9q0 .825-.587 1.413T7 8v4q.825 0 1.413.588T9 14m11 6H3q-.825 0-1.412-.587T1 18V7h2v11h17zM7 14V6z"
							></path></svg
						>
					</div>
				</Button>

				<div class="h-[1rem]"></div>
			</div>
		</Section>
	{/if}

	<Text text="Looking for something?" size="lg" />
	<div class="h-[0.5rem]"></div>
	<Button
		type="filled"
		onClick={() => {
			goto('contact/');
		}}
	>
		<Text text="Contact us" size="sm" />
	</Button>

	<div class="h-[2rem]"></div>

	<Text text="Continue Shopping" size="lg" />
	<div class="h-[0.5rem]"></div>
	<Button
		type="filled"
		onClick={() => {
			goto('/');
		}}
	>
		<Text text="Travel to our Home Page" size="sm" />
	</Button>

	<div class="h-[100vh]"></div>
</div>
