<script lang="ts">
	import { Text, Show, Icon, Button } from "$lib/components";

	let { onClick } = $props();

	let confirm = $state(false);

	let timeout: ReturnType<typeof setTimeout>;
</script>

<!-- 
<div class="fixed bottom-[1rem] left-[1rem] lg:bottom-10 lg:left-10 z-[1000]">
	<Button
		onClick={() => {
			if (!confirm) {
				confirm = true;
				timeout = setTimeout(() => {
					confirm = false;
				}, 2000);
			} else {
				clearTimeout(timeout);
				onClick();
				confirm = false;
			}
		}}
	>
		<div
			class="text-white justify-center items-center bg-black rounded-3xl drop-shadow-xl scale-90 hover:scale-100 transition-transform ease-spring-smooth-slow"
		>
			<div class="p-4 lg:p-6 flex items-center justify-between">
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
									><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0"
									></path><path d="M12.5 17H6V3H4"
									></path><path
										d="m6 5l14 1l-.86 6.017M16.5 13H6m10 6h6m-3-3v6"
									></path></g
								></svg
							>
						</Show>
					</Icon>
				</div>
				{#if confirm}
					<div class="w-[1rem]"></div>
					<div class="w-[10rem] lg:w-[15rem]">
						<Text
							text="Are you sure you want to add this product to your cart?"
							size="sm"
						/>
					</div>
				{/if}
			</div>
		</div>
	</Button>
</div> -->

<div>
	<Button
		onClick={() => {
			if (!confirm) {
				confirm = true;
				timeout = setTimeout(() => {
					confirm = false;
				}, 2000);
			} else {
				clearTimeout(timeout);
				onClick();
				confirm = false;
			}
		}}
	>
		<div
			class="text-white justify-center items-center bg-black rounded-3xl drop-shadow-xl scale-90 hover:scale-100 transition-transform ease-spring-smooth-slow"
		>
			<div class="p-4 lg:p-6 flex items-center justify-between">
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
									><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0"
									></path><path d="M12.5 17H6V3H4"
									></path><path
										d="m6 5l14 1l-.86 6.017M16.5 13H6m10 6h6m-3-3v6"
									></path></g
								></svg
							>
						</Show>
					</Icon>
				</div>
				{#if confirm}
					<div class="w-[1rem]"></div>
					<div class="w-[10rem] lg:w-[15rem]">
						<Text
							text="Are you sure you want to add this product to your cart?"
							size="sm"
						/>
					</div>
				{/if}
			</div>
		</div>
	</Button>
</div>
