<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton';
	export let isChecked: boolean = true;
</script>

<SlideToggle name="show-details" bind:checked={isChecked} size="sm">
	<span class="inline-block w-[100px] text-left"> {isChecked ? 'Close all' : 'Open all'}</span>
</SlideToggle>
