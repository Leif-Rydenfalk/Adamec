<script>
import { goto } from '$app/navigation';
import { Show, Text, Button, Icon, Logo } from '$lib/components';
</script>

<div
	class="w-[100vw] h-[20rem] bg-foundation flex flex-row justify-center items-center rounded-t-3xl"
>
	<div class="absolute w-[calc(100vw-2rem)] h-[5rem] flex flex-row justify-end">
		<Show>
			<div
				class="flex flex-row justify-center w-[12rem] h-[5rem] bg-white rounded-3xl drop-shadow-xl scale-90 hover:scale-100 transition-transform ease-spring-smooth-slow"
			>
				<div class="flex flex-row justify-around w-[10rem]">
					<Button delay={0.3}>
						<Icon>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="2rem"
								height="2rem"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
								></path></svg
							>
						</Icon>
					</Button>
					<Button delay={0.5}>
						<Icon>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="2rem"
								height="2rem"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z"
									><animate
										fill="freeze"
										attributeName="d"
										dur="0.8s"
										keyTimes="0;0.3;0.5;1"
										values="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5zM3 2h5v2h-5zM16 20h5v2h-5zM18.5 2h3.5L5 22h-3.5z"
									></animate></path
								></svg
							>
						</Icon>
					</Button>
					<Button delay={0.7}>
						<Icon>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="2rem"
								height="2rem"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M11.953 2.25c-2.317 0-4.118 0-5.52.15c-1.418.153-2.541.47-3.437 1.186c-.92.736-1.35 1.693-1.553 2.9c-.193 1.152-.193 2.618-.193 4.446v.183c0 1.782 0 3.015.2 3.934c.108.495.278.925.545 1.323c.264.392.6.722 1.001 1.042c.631.505 1.375.81 2.254 1V21a.75.75 0 0 0 1.123.65c.586-.335 1.105-.7 1.58-1.044l.304-.221a22 22 0 0 1 1.036-.73c.844-.548 1.65-.905 2.707-.905h.047c2.317 0 4.118 0 5.52-.15c1.418-.153 2.541-.47 3.437-1.186c.4-.32.737-.65 1-1.042c.268-.398.438-.828.546-1.323c.2-.919.2-2.152.2-3.934v-.183c0-1.828 0-3.294-.193-4.445c-.203-1.208-.633-2.165-1.553-2.901c-.896-.717-2.019-1.033-3.437-1.185c-1.402-.151-3.203-.151-5.52-.151z"
								></path></svg
							>
						</Icon>
					</Button>
				</div>
			</div>
		</Show>
	</div>
</div>
