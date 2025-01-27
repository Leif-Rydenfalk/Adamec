<script>
	import { goto } from '$app/navigation';
	import {Show, Text, LinkButton} from '$lib/components';
</script>

<Show delay={0.2}>
	<Text timing={{ delay: 0.1 }} size="sm_header" text="Quick links" />
	<div class="h-[0.25rem]"></div>

	<LinkButton
		timing={{ delay: 0.1 }}
		text="Homepage"
		onClick={() => {
			goto('/')
		}}
	/>
	<LinkButton
		timing={{ delay: 0.2 }}
		text="About"
		onClick={() => {
			goto('/about')
		}}
	/>
</Show>
