<script>
	import {
		Show,
		Text,
		Button,
		Icon,
		Logo,
		CancelIcon,
	} from "$lib/components";

	import { cart, showCart } from "$lib/cart";
	const { productCount } = cart;
	import { get } from "svelte/store";
	import { goto } from "$app/navigation";
	import { products } from "./products";
</script>

{#if !$showCart}
	<div
		class="fixed bottom-[0.5rem] right-[0.5rem] lg:bottom-[1.9rem] lg:right-[1.9rem] z-[1001]"
	>
		<Button delay={0.2}>
			<div
				class="text-black justify-center items-center bg-white rounded-3xl drop-shadow-xl scale-90 hover:scale-100 transition-transform ease-spring-smooth-slow"
			>
				<div class="px-2">
					<Text text={$productCount} size="md" />
				</div>
			</div>
		</Button>
	</div>

	<div
		class="fixed bottom-[1rem] right-[1rem] lg:bottom-10 lg:right-10 z-[1000]"
	>
		<Button
			onClick={() => {
				goto("/cart");
			}}
		>
			<div
				class="text-white justify-center items-center bg-secondary rounded-3xl drop-shadow-xl scale-90 hover:scale-100 transition-transform ease-spring-smooth-slow"
			>
				<div class="p-4 lg:p-6">
					<div class="flex gap-3 items-center justify-center">
						<Icon>
							<Show delay={0.2}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="2.5rem"
									height="2.5rem"
									viewBox="0 0 24 24"
									><g
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										><path
											d="M4 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m11 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"
										></path><path d="M17 17H6V3H4"
										></path><path d="m6 5l14 1l-1 7H6"
										></path></g
									></svg
								>
							</Show>
						</Icon>
					</div>
				</div>
			</div>
		</Button>
	</div>
	<!-- <div class="fixed bottom-10 right-10 z-[1000]">
		<Button
			delay={0.1}
			onClick={() => {
				// showCart.set(true);
				goto('/cart');
			}}
		>
			<div
				class="text-white flex flex-row justify-center items-center w-[5rem] h-[5rem] bg-sky rounded-3xl drop-shadow-3xl scale-90 hover:scale-100 transition-transform ease-spring-smooth-slow"
			>
				<div
					class="flex flex-row justify-center items-center h-[2rem] w-[2rem]"
				>
					<Icon>
						<Show delay={0.2}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="2.5rem"
								height="2.5rem"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									fill-rule="evenodd"
									d="M8.25 6.015V5a3.75 3.75 0 0 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 1 1 4.5 0v1h-4.5z"
									clip-rule="evenodd"
								></path></svg
							>
						</Show>
					</Icon>
				</div>
			</div>
		</Button>
	</div> -->
{/if}
