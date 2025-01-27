<script lang="ts">
    import { Text, Show, Icon, Button } from "$lib/components";

    let props = $props();

    let confirm = $state(false);
    let timeout: ReturnType<typeof setTimeout>;
</script>

<Button
    type={props.type}
    onClick={() => {
        if (!confirm) {
            confirm = true;
            timeout = setTimeout(() => {
                confirm = false;
            }, 2000);
        } else {
            clearTimeout(timeout);
            props.onClick();
            confirm = false;
        }
    }}
>
    {#if !confirm}
        {@render props.children()}
    {:else if props.confirm}
        {@render props.confirm()}
    {:else}
        {@render props.children()}
    {/if}
</Button>
