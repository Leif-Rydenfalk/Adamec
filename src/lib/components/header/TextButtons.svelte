<script lang="js">
import { goto } from '$app/navigation';
import {
	Image,
	Text,
	Show,
	Button,
	LinkButton,
	QuickLinks,
	Logo,
	CartIcon,
	CancelIcon,
	SearchIcon,
	MenuIcon,
	WindowSize,
	BackgroundBlur
} from '$lib/components';
</script>

<!-- <WindowSize let:width>
    {#if width > 768}

    {/if}
</WindowSize> -->

<div class="flex flex-row justify-center">
	<Button
		style="h-[3.0rem] w-[5.0rem] flex justify-center items-center"
		delay={0.2}
		onClick={() => {
			goto('/about');
		}}
	>
		<Text timing={{ delay: 0.2 }} text="About" size="tn" />
	</Button>
	<Button
		style="h-[3.0rem] w-[5.0rem] flex justify-center items-center"
		delay={0.4}
		onClick={() => {
			goto('/projects');
		}}
	>
		<Text timing={{ delay: 0.3 }} text="Projects" size="tn" />
	</Button>
	<Button
		style="h-[3.0rem] w-[5.0rem] flex justify-center items-center"
		delay={0.6}
		onClick={() => {
			goto('/projects/movies');
		}}
	>
		<Text timing={{ delay: 0.4 }} text="Movies" size="tn" />
	</Button>
	<Button
		style="h-[3.0rem] w-[5.0rem] flex justify-center items-center"
		delay={0.8}
		onClick={() => {
			goto('/contact');
		}}
	>
		<Text timing={{ delay: 0.5 }} text="Contact" size="tn" />
	</Button>
</div>
