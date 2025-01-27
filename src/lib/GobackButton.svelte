<script lang="ts">
	import { Text, Show, Icon, Button } from "$lib/components";

	let { onClick } = $props();

	let confirm = $state(false);
	let timeout: ReturnType<typeof setTimeout>;
</script>

<!-- 
<div
	class="fixed bottom-[6.5rem] left-[1rem] lg:bottom-[9rem] lg:left-10 z-[1000]"
>
	<Button
		delay={0.2}
		onClick={() => {
			if (!confirm) {
				confirm = true;
				timeout = setTimeout(() => {
					confirm = false;
				}, 2000);
			} else {
				clearTimeout(timeout);
				onClick();
			}
		}}
	>
		<div
			class="text-black justify-center items-center bg-foundation rounded-3xl drop-shadow-xl scale-90 hover:scale-100 transition-transform ease-spring-smooth-slow"
		>
			<div class="p-4 lg:p-6 flex items-center justify-between">
				<div class="flex gap-3 items-center justify-center">
					<Icon>
						<Show delay={0.2}>
							<svg
								width="2.5rem"
								height="2.5rem"
								viewBox="0 0 24 24"
								stroke-width="3"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								color="currentColor"
								><path
									d="M8 14V8.00005C8 5.23862 10.2386 3 13 3C15.7614 3 18 5.23862 18 8.00005V21"
									stroke="currentColor"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path><path
									d="M12 11C10.4379 12.5621 9.5621 13.4379 8 15C6.4379 13.4379 5.5621 12.5621 4 11"
									stroke="currentColor"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path></svg
							>
						</Show>
					</Icon>
				</div>
				{#if confirm}
					<div class="w-[1rem]"></div>
					<div class="w-[10rem] lg:w-[15rem]">
						<Text
							text="Are you sure you want to go back to the previus page?"
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
		delay={0.2}
		onClick={() => {
			if (!confirm) {
				confirm = true;
				timeout = setTimeout(() => {
					confirm = false;
				}, 2000);
			} else {
				clearTimeout(timeout);
				onClick();
			}
		}}
	>
		<div
			class="text-black justify-center items-center bg-foundation rounded-3xl drop-shadow-xl scale-90 hover:scale-100 transition-transform ease-spring-smooth-slow"
		>
			<div class="p-4 lg:p-6 flex items-center justify-between">
				<div class="flex gap-3 items-center justify-center">
					<Icon>
						<Show delay={0.2}>
							<svg
								width="2.5rem"
								height="2.5rem"
								viewBox="0 0 24 24"
								stroke-width="3"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								color="currentColor"
								><path
									d="M8 14V8.00005C8 5.23862 10.2386 3 13 3C15.7614 3 18 5.23862 18 8.00005V21"
									stroke="currentColor"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path><path
									d="M12 11C10.4379 12.5621 9.5621 13.4379 8 15C6.4379 13.4379 5.5621 12.5621 4 11"
									stroke="currentColor"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path></svg
							>
						</Show>
					</Icon>
				</div>
				{#if confirm}
					<div class="w-[1rem]"></div>
					<div class="w-[10rem] lg:w-[15rem]">
						<Text
							text="Are you sure you want to go back to the previus page?"
							size="sm"
						/>
					</div>
				{/if}
			</div>
		</div>
	</Button>
</div>
