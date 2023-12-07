<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import { showDetails } from '../stores.js';
	let isChecked: boolean = true;

	function updateStore() {
		$showDetails = isChecked;
	}
</script>

<SlideToggle name="show-details" bind:checked={isChecked} size="sm" on:change={updateStore}>
	<span class="inline-block w-[100px] text-left"> {isChecked ? 'Close all' : 'Open all'}</span>
</SlideToggle>
