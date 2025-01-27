<script lang="js">
    import { page } from "$app/stores";
    import { Text, Show } from "$lib/components";

    // import mojs from "@mojs/core";
    // import { onMount } from "svelte";

    // onMount(() => {

    //     const bouncyCircle = new mojs.Shape({
    //         parent: "#bouncyCircle",
    //         shape: "circle",
    //         fill: { "#F64040": "#FC46AD" },
    //         radius: { 20: 80 },
    //         duration: 2000,
    //         isYoyo: true,
    //         isShowStart: true,
    //         easing: "elastic.inout",
    //         repeat: 1,
    //     });

    //     bouncyCircle.play();
    // });
</script>

<div class="h-[100vh] flex flex-col justify-center text-center">
    <Show>
        <Text text="About" size="xl_title" />
    </Show>
    <div id="bouncyCircle"></div>
</div>
