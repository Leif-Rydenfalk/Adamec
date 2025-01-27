<script lang="ts">
	import AddToCartButton from "$lib/AddToCartButton.svelte";
	import { cart } from "$lib/cart";
	import { Text, Show, Icon, Button } from "$lib/components";
	import GobackButton from "$lib/GobackButton.svelte";

	import type { PageServerData } from "./$types";
	let { data }: { data: PageServerData } = $props();

	function addToCart() {
		if (!data.product) return;
		cart.add({ id: data.product.id });
	}
</script>

<div
	class="fixed bottom-[1rem] left-[1rem] lg:bottom-10 lg:left-10 z-[1000] flex flex-col gap-2"
>
	<GobackButton
		onClick={() => {
			history.back();
		}}
	/>

	<AddToCartButton
		onClick={() => {
			addToCart();
		}}
	/>
</div>

<div class="h-[10rem]"></div>

{#if data.product}
	<div class="w-[100vw] flex flex-col items-center text-center">
		<Text text={data.product.name} size="xl_title" />
		<div class="h-[2rem]"></div>
		<div class="w-[50vw] flex flex-col items-center">
			<Text text={data.product.description} size="md" />
		</div>
		<div class="h-[2rem]"></div>
		<Button
			type="filled"
			onClick={() => {
				addToCart();
			}}><Text text="Add to cart" /></Button
		>
	</div>
{:else}
	<div class="w-[100vw] flex flex-col items-center text-center">
		<Text text="No product found" size="xl_title" />
	</div>
{/if}

<div class="h-[100vh]"></div>
