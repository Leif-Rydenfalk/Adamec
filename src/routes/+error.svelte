<script lang="ts">
    import { page } from '$app/stores';
    import { Text, Show } from '$lib/components';
</script>

<div class='h-[100vh] flex flex-col justify-center text-center'>
    <Show>
        <Text text={$page.status.toString()} size='xl_title' />
        <Text timing={{delay:0.2}} text={$page.error?.message} size='xl_title' />
    </Show>
</div>


