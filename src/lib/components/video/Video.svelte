<script lang="ts">
    import { Button } from "$lib/components";

    export let props: object = {};
    export let style: string = "";

    export let videoContainer: HTMLDivElement;
    export let video: HTMLVideoElement;

    let paused = false;

    function togglePlay() {
        if (video.paused) {
            video.play();
            paused = false;
        } else {
            video.pause();
            paused = true;
        }
    }
</script>

<div bind:this={videoContainer} class={`relative ${style}`} {...props}>
    <video
        class="w-[100%] h-[100%] object-cover object-center rounded-lg"
        bind:this={video}
        on:click={() => togglePlay()}
        autoplay
        loop
        muted
        playsinline
    >
        <slot />
    </video>

    <Button
        onClick={() => togglePlay()}
        style="btn-icon bg-white absolute bottom-8 right-8"
    >
        {#if paused}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                {...$$props}
            >
                <g fill="none">
                    <g clip-path="url(#gravityUiPlayFill0)">
                        <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M14.756 10.164c1.665-.962 1.665-3.366 0-4.329L6.251.918C4.585-.045 2.5 1.158 2.5 3.083v9.834c0 1.925 2.085 3.128 3.751 2.164z"
                            clip-rule="evenodd"
                        />
                    </g>
                </g>
            </svg>
        {:else}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                {...$$props}
            >
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M1.5 3.5a2 2 0 0 1 2-2H5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3.5a2 2 0 0 1-2-2zm7.5 0a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2z"
                    clip-rule="evenodd"
                />
            </svg>
        {/if}
    </Button>
</div>
