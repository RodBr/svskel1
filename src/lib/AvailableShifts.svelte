<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

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
			line3: 'HTR-GV1 Lock Box 1187'
		},
		{
			line1: 'Open Shift Available4',
			line2: 'Start Mon 11/11 at 9am - End Tue 12/11 at 2am',
			line3: 'HTR-GV1 Lock Box 1187'
		}
	];
</script>

<div class="responsive-container !max-h-80 !overflow-y-scroll">
	<div class="card p-4 bg-gradient-to-br variant-gradient-primary-secondary">
		<Accordion>
			{#each shiftTexts as row, i}
				<AccordionItem open>
					<svelte:fragment slot="lead">😃</svelte:fragment>
					<svelte:fragment slot="summary"><h2>{row.line1}</h2></svelte:fragment>
					<svelte:fragment slot="content">
						{row.line2}
						<br />{row.line3}
					</svelte:fragment>
				</AccordionItem>
			{/each}

			<!-- ... -->
		</Accordion>
	</div>
</div>
