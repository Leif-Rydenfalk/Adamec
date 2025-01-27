<script lang="ts">
import Lenis from 'lenis';
import Snap from 'lenis/snap';
import { lenis_store } from '$lib/stores/lenisStore';
import { useFrame } from '$lib/util/useFrame';
import { onMount } from 'svelte';

onMount(async () => {
	const snap_instance = await lenis_store.getSnap();
	if (snap_instance) {
		snap_instance.stop();
	}
});

onMount(() => {
	window.history.scrollRestoration = 'manual';

	const lenis_instance = new Lenis({
		duration: 0.3
	});

	lenis_store.setInstance(lenis_instance);
	lenis_store.createSnap();
});

useFrame(async (time) => {
	const lenis_instance = await lenis_store.getInstance();
	if (lenis_instance) {
		lenis_instance.raf(time);
	}
});
</script>

<slot />
