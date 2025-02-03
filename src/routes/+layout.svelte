<script lang="js">
import '../app.postcss';

import Lenis from '$lib/util/Lenis.svelte';
import { Header, Footer, Show } from '$lib/components';
import Message from '$lib/Message.svelte';
import GotoContactButton from '$lib/GotoContactButton.svelte';

import '$lib/products';
import '$lib/cart';

import { message } from '$lib/messages';
import Intro from '$lib/Intro.svelte';
</script>

<svelte:head>
	<title>Adamec - Home</title>
</svelte:head>

{#if $message}
	<Message message={$message.message} type={$message.type} />
{/if}

<GotoContactButton />

<Intro />

<Header />

<!-- <Lenis /> -->

<slot />

<Footer />
