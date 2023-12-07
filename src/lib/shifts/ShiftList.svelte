<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	import { showDetails } from '../stores.js';

	let shiftTexts = [
		{
			line1: 'Open Shift Available',
			line2: 'Start Mon 11/11 at 9am - End Tue 12/11 at 2am',
			line3: 'HTR-GV1 Lock Box 1187'
		},
		{
			line1: 'Open Shift Available2',
			line2: 'Start Mon 11/11 at 9am - End Tue 12/11 at 2am',
			line3: 'HTR-GV1 Lock Box 1187'
		},
		{
			line1: 'Open Shift Available3',
			line2: 'Start Mon 11/11 at 9am - End Tue 12/11 at 2am',
			line3: ''
		},
		{
			line1: 'Open Shift Available4',
			line2: 'Start Mon 11/11 at 9am - End Tue 12/11 at 2am',
			line3: 'HTR-GV1 Lock Box 1187',
			line4: 'HTR-GV1 Lock Box 1187'
		}
	];
</script>

<div class="flex h-[50svh] max-h-full overflow-y-scroll">
	<div class="card enable-scrollbars w-11/12 mx-auto">
		<Accordion padding=" px-4 py-1">
			{#each shiftTexts as row, i}
				<AccordionItem open={$showDetails} class="!py-0">
					<svelte:fragment slot="lead">😃</svelte:fragment>
					<svelte:fragment slot="summary"><h2>{row.line1}</h2></svelte:fragment>
					<svelte:fragment slot="content">
						{#if row.line2 != ''}
							{row.line2}
						{/if}
						{#if row.line3 != ''}
							<br />{row.line3}
						{/if}
						{#if row.line4 != ''}
							<br />{row.line4}
						{/if}
					</svelte:fragment>
				</AccordionItem>
			{/each}

			<!-- ... -->
		</Accordion>
	</div>
</div>
