<script lang="js">
import '../app.postcss';

import Lenis from '$lib/util/Lenis.svelte';
import { Header, Footer, Show } from '$lib/components';
import Message from '$lib/Message.svelte';
import GotoCartButton from '$lib/GotoCartButton.svelte';

import '$lib/products';
import '$lib/cart';

import { message } from '$lib/messages';
import Intro from '$lib/Intro.svelte';
</script>

<svelte:head>
	<title>Morph App - Home</title>
</svelte:head>

{#if $message}
	<Message message={$message.message} type={$message.type} />
{/if}

<GotoCartButton />

<Intro />

<Header />

<Lenis />

<slot />

<Footer />
