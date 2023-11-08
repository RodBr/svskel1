<script lang="ts">
	import { Accordion, AccordionItem, SlideToggle } from '@skeletonlabs/skeleton';

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
			line3: 'HTR-GV1 Lock Box 1187'
		}
	];
	let isChecked: boolean = true;
	let label: string = isChecked ? 'Close all' : 'Open all';
</script>

<div class="responsive-container !max-h-80 !overflow-y-scroll !w-full*.9 !m-2">
	<div class="card p-4 bg-gradient-to-br variant-gradient-primary-secondary w-screen mr-5">
		<Accordion>
			{#each shiftTexts as row, i}
				<AccordionItem open={isChecked}>
					<svelte:fragment slot="lead">😃</svelte:fragment>
					<svelte:fragment slot="summary"><h2>{row.line1}</h2></svelte:fragment>
					<svelte:fragment slot="content">
						{row.line2}

						{#if row.line3 != ''}
							<br />{row.line3}
						{/if}
					</svelte:fragment>
				</AccordionItem>
			{/each}

			<!-- ... -->
		</Accordion>
	</div>
</div>
<SlideToggle name="show-details" bind:checked={isChecked}>
	<span class="inline-block w-[100px] text-left"> {isChecked ? 'Cloae all' : 'Open all'}</span>
</SlideToggle>
