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
	MenuIcon
} from '$lib/components';

export let set_tab = () => {};
</script>

<Show timing="smooth">
	<div class="h-[3rem]">
		<Show timing="smooth">
			<Button
				delay={0.1}
				onClick={() => {
					set_tab('');
					goto('/');
				}}
			>
				<Text timing={{ delay: 0.2 }} text="Home" size="md" />
			</Button>
		</Show>
	</div>
	<div class="h-[3rem]">
		<Show timing="smooth">
			<Button
				delay={0.2}
				onClick={() => {
					set_tab('');
					goto('/about');
				}}
			>
				<Text timing={{ delay: 0.3 }} text="About" size="md" />
			</Button>
		</Show>
	</div>
	<div class="h-[3rem]">
		<Show timing="smooth">
			<Button
				delay={0.3}
				onClick={() => {
					set_tab('');
					goto('/projects');
				}}
			>
				<Text timing={{ delay: 0.4 }} text="Projects" size="md" />
			</Button>
		</Show>
	</div>
	<div class="h-[3rem]">
		<Show timing="smooth">
			<Button
				delay={0.4}
				onClick={() => {
					set_tab('');
					goto('/projects/movies');
				}}
			>
				<Text timing={{ delay: 0.5 }} text="Movies" size="md" />
			</Button>
		</Show>
	</div>
	<div class="h-[3rem]">
		<Show timing="smooth">
			<Button
				delay={0.5}
				onClick={() => {
					set_tab('');
					goto('/contact');
				}}
			>
				<Text timing={{ delay: 0.6 }} text="Contact" size="md" />
			</Button>
		</Show>
	</div>
</Show>
