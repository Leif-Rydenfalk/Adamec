<script lang="js">
import { animate, stagger, inView, scroll, spring } from 'motion';
import SplitType from 'split-type';
import { onMount } from 'svelte';
import { get } from 'svelte/store';

export let text = '';
export let style = '';
export let size = '';
export let weight = '';
export let color = 'default';
export let tracking = 'default';
export let timing = {};
export let element;
export let timesMounted;

let size_class = {
	xl_title: 'text-[3rem] md:text-[3.5rem] leading-[3.5rem]',
	xl_header: 'text-[2.5rem] md:text-[2.8rem] leading-[3.2rem]',
	xl: 'text-[2.5rem] leading-[3.5rem]',
	lg_header: 'text-[2.0rem] leading-[3.5rem]',
	lg: 'text-[2.0rem] leading-[3.5rem]',
	md_header: 'text-[1.5rem] leading-[2.5rem]',
	md: 'text-[1.5rem] leading-[2rem]',
	sm_header: 'text-[1.1rem] leading-[1.3rem]',
	sm: 'text-[1.0rem] leading-[1.3rem]',
	sm_link: 'text-[0.9rem] leading-[1rem]',
	tn: 'text-[0.7rem] leading-[1rem]'
}[size];

let weight_class = {
	heavy: 'font-[900]',
	bold: 'font-[600]',
	light: 'font-[200]'
}[weight];

let color_class = {
	default: '',
	primary: 'text-black',
	secondary: 'text-gray-500',
	contrast: 'text-white',
	red: 'text-[#ff1231]',
	blue: 'text-[#0291f7]'
}[color];

let tracking_class = {
	default: '',
	wide: 'tracking-wide',
	ultra_wide: 'tracking-[0.9rem]'
}[tracking];

let elementSplit;

onMount(() => {
	if (!timing.animation) timing.animation = 'default';
	if (!timing.delay) timing.delay = 0.0;
	if (!timing.stiffness) timing.stiffness = 300.0;
	if (!timing.mass) timing.mass = 0.6;
	if (!timing.damping) timing.damping = 8.0;
	if (!timing.velocity) timing.velocity = 0.0;
	if (!timing.duration) timing.duration = 0.01;
	if (!timing.separation) timing.separation = 1.0;

	startAnimation();
});

function startAnimation() {
	return;

	if (element) {
		// async
		inView(element, async () => {
			if (element) {
				let randomDelay = Math.random() * 0.3;

				animate(
					element,
					{
						scale: [0.2, 1],
						// x: [-20, 0],
						// y: [-30, 0],
						// rotate: [10, 0],
						opacity: [0, 1]
					},
					{
						delay: timing.delay + randomDelay,
						easing: spring({
							stiffness: 100
							// stiffness: timingData.stiffness,
							// damping: timingData.damping,
							// mass: timingData.mass,
							// velocity: timingData.velocity,
							// restDistance: 0.005,
							// restSpeed: 0.005
						})
					}
				);
			}

			// return () => {
			// 	if (element) {
			// 		element.style.opacity = 0.0;
			// 		// animate(
			// 		// 	element,
			// 		// 	{
			// 		// 		// scale: [1, 0.2],
			// 		// 		// transform: ['scale(1)', 'scale(0.2)'],
			// 		// 		opacity: [1, 0]
			// 		// 	},
			// 		// 	{
			// 		// 		duration: 0.1,
			// 		// 		easing: 'linear'
			// 		// 		// easing: spring({
			// 		// 		// 	stiffness: 100
			// 		// 		// })
			// 		// 	}
			// 		// );
			// 	}
			// };
		});
	}

	return;

	if (element) {
		let longText = text.length > 40;

		let splitType = longText ? 'words' : 'lines';
		// let splitType = 'lines';

		// The splitting does cause reactivity issues
		elementSplit = new SplitType(element, {
			type: splitType
		});

		let timingFunction = (i) => {
			let timingData = timing;

			return spring({
				stiffness: timingData.stiffness,
				damping: timingData.damping,
				mass: timingData.mass,
				velocity: timingData.velocity,
				restDistance: 0.005,
				restSpeed: 0.005
			});
		};

		let showAnimation = { scale: [0, 1], opacity: [0, 1] };

		let showEasing = timingFunction(0);

		let splitAnimation = {
			scale: [0.7, 1],
			x: [-20, 0],
			y: [-30, 0],
			opacity: [0, 1]
		}; // , x: [-20, 0], y: [-5, 0], opacity: [0, 1]

		let perDelay = 0.01 * timing.separation;
		if (splitType === 'words') {
			perDelay = 0.02 * timing.separation;
		}

		let splitEasing = (i) => {
			return {
				easing: timingFunction(i),
				delay: i * perDelay
			};
		};

		if (!element) return;

		inView(element, async () => {
			let firstFrame = timesMounted === 0;
			let delay = 0;

			if (firstFrame) {
				delay = timing.delay;
			}

			setTimeout(async () => {
				if (!element) return;

				animate(element, showAnimation, showEasing);

				if (splitType === 'words') {
					await elementSplit.words.forEach(async (childElement, i) => {
						animate(childElement, splitAnimation, splitEasing(i));
					});
				} else {
					await elementSplit.chars.forEach(async (childElement, i) => {
						animate(childElement, splitAnimation, splitEasing(i));
					});
				}

				let lastChildElementIndex;
				if (splitType === 'words') {
					lastChildElementIndex = elementSplit.words.length - 1;
				} else {
					lastChildElementIndex = elementSplit.chars.length - 1;
				}

				animate(
					(progress) => {
						if (progress === 1) {
							onAnimationFinished();
						}
					},
					{
						easing: timingFunction(lastChildElementIndex)
					}
				);
			}, delay * 1000);
		});
	}
}

// opacity-0 origin-center
</script>

<span
	bind:this={element}
	class={`text ${style} ${size_class} ${weight_class} ${color_class} ${tracking_class} `}
>
	{text}
</span>
