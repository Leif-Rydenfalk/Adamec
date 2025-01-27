<script lang="ts">
import { Text, Button, Logo } from '$lib/components';

import { inview } from 'svelte-inview';
let options = {};

import { message } from '$lib/messages';
import Icon from '../icons/Icon.svelte';
</script>

<footer
	use:inview={options}
	oninview_enter={(event) => {
		message.set(null);
	}}
	class="w-[100vw] h-[17rem] bg-foundation rounded-t-3xl flex flex-col justify-between pt-5 pb-5"
>
	<!-- <Logo style="w-[10.2rem] h-[10.2rem]" /> -->

	<div class="w-[100vw] h-[10rem] flex justify-center">
		<div class="w-[20rem] flex flex-col items-center justify-start gap-3">
			<Text text="Shop" size="md" />

			<Button type="ghost" onClick={() => {}}>
				<Text text="Featured Products" size="sm" />
			</Button>

			<Button type="ghost" onClick={() => {}}>
				<Text text="Equipment" size="sm" />
			</Button>

			<Button type="ghost" onClick={() => {}}>
				<Text text="Gym" size="sm" />
			</Button>
		</div>

		<div
			class=" w-[20rem] h-[10rem] flex flex-col items-center justify-start gap-3"
		>
			<Text text="Contact" size="md" />

			<Button type="ghost" onClick={() => {}}>
				<Text text="Write a review" size="sm" />
			</Button>

			<Button type="ghost" onClick={() => {}}>
				<Text text="Message us" size="sm" />
			</Button>

			<Button type="ghost" onClick={() => {}}>
				<Text text="Email us" size="sm" />
			</Button>
		</div>

		<div
			class=" w-[20rem] h-[10rem] flex flex-col items-center justify-start gap-3"
		>
			<Text text="About" size="md" />

			<Button type="ghost" onClick={() => {}}>
				<Text text="Our dynamics" size="sm" />
			</Button>

			<Button type="ghost" onClick={() => {}}>
				<Text text="Our stands" size="sm" />
			</Button>

			<Button type="ghost" onClick={() => {}}>
				<Text text="Our goals" size="sm" />
			</Button>
		</div>
	</div>

	<div
		class="relative bottom-0 w-[100%] h-[2rem] flex flex-col items-center justify-center gap-3"
	>
		<div class=" w-[20rem] h-[10rem] flex items-start justify-center gap-3">
			<Button>
				<Icon>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2rem"
						height="2rem"
						viewBox="0 0 24 24"
						><mask id="lineMdYoutubeFilled0"
							><g
								fill="none"
								fill-opacity="0"
								stroke="#fff"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								><path
									fill="#fff"
									stroke-dasharray="64"
									stroke-dashoffset="64"
									d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z"
									><animate
										fill="freeze"
										attributeName="fill-opacity"
										begin="0.6s"
										dur="0.5s"
										values="0;1"
									></animate><animate
										fill="freeze"
										attributeName="stroke-dashoffset"
										dur="0.6s"
										values="64;0"
									></animate></path
								><path fill="#000" stroke="none" d="M12 11L12 12L12 13z"
									><animate
										fill="freeze"
										attributeName="d"
										begin="1.1s"
										dur="0.2s"
										values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"
									></animate><set
										fill="freeze"
										attributeName="fill-opacity"
										begin="1.1s"
										to="1"
									></set></path
								></g
							></mask
						><rect
							width="24"
							height="24"
							fill="currentColor"
							mask="url(#lineMdYoutubeFilled0)"
						></rect></svg
					>
				</Icon>
			</Button>

			<Button>
				<Icon>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2rem"
						height="2rem"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
						></path></svg
					>
				</Icon>
			</Button>

			<Button>
				<Icon>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2rem"
						height="2rem"
						viewBox="0 0 24 24"
						><circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0"
							><animate
								fill="freeze"
								attributeName="fill-opacity"
								begin="1.3s"
								dur="0.15s"
								values="0;1"
							></animate></circle
						><g
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							><path
								stroke-dasharray="72"
								stroke-dashoffset="72"
								d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
								><animate
									fill="freeze"
									attributeName="stroke-dashoffset"
									dur="0.6s"
									values="72;0"
								></animate></path
							><path
								stroke-dasharray="28"
								stroke-dashoffset="28"
								d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
								><animate
									fill="freeze"
									attributeName="stroke-dashoffset"
									begin="0.7s"
									dur="0.6s"
									values="28;0"
								></animate></path
							></g
						></svg
					>
				</Icon>
			</Button>

			<Button>
				<Icon>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="2rem"
						height="2rem"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							fill-opacity="0"
							stroke="currentColor"
							stroke-dasharray="64"
							stroke-dashoffset="64"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19.89 7.34c-0.09 0.33 -0.49 1.16 -1.17 1.95c-0.45 8.68 -8.87 11.5 -14.64 8.59c-0.79 -1.05 2.85 -0.62 4.18 -2.63c-5.03 -2.57 -4.63 -9.44 -3.62 -9.16c2.37 3.19 6.19 3.48 6.81 3.19c0 -0.73 -0.31 -2.32 1.41 -3.65c0.99 -0.71 3.06 -1.34 4.93 0.69c0.32 0.21 0.78 0.3 1.47 0.15c0.41 -0.21 0.95 -0.07 0.67 0.66Z"
							><animate
								fill="freeze"
								attributeName="fill-opacity"
								begin="0.6s"
								dur="0.5s"
								values="0;1"
							></animate><animate
								fill="freeze"
								attributeName="stroke-dashoffset"
								dur="0.6s"
								values="64;0"
							></animate></path
						>
					</svg>
				</Icon>
			</Button>
		</div>
	</div>
</footer>
