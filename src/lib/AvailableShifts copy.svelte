<script lang="ts">
	import { Accordion, AccordionItem, Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';

	let shifts = [
		{ date: '28/11/2023', from: '11pm', to: '2am', site: 'Site1' },
		{ date: '29/11/2023', from: '11pm', to: '2am', site: 'Site2' },
		{ date: '30/11/2023', from: '11pm', to: '2am', site: 'Site3' },
		{ date: '28/11/2023', from: '11pm', to: '2am', site: 'Site4' },
		{ date: '29/11/2023', from: '11pm', to: '2am', site: 'Site5' },
		{ date: '30/11/2023', from: '11pm', to: '2am', site: 'Site6' }
	];

	const shiftTable: TableSource = {
		// A list of heading labels.
		head: ['Date', 'From', 'To', 'Site'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(shifts, ['date', 'from', 'to', 'site'])
	};

	let shiftTexts = [
		{ line1: 'Open Shift Available', line2: '11pm', line3: '2am', line4: 'Site1' },
		{ line1: '28/11/2023', line2: '11pm', line3: '2am', line4: 'Site1' },
		{ line1: '28/11/2023', line2: '11pm', line3: '2am', line4: 'Site1' },
		{ line1: '28/11/2023', line2: '11pm', line3: '2am', line4: 'Site1' },
		{ line1: '28/11/2023', line2: '11pm', line3: '2am', line4: 'Site1' }
	];
</script>

<div>
	<Table source={shiftTable} />
</div>

<!-- Responsive Container (recommended) -->
<div class="responsive-container !max-h-48 !overflow-y-scroll">
	<!-- Native Table Element -->
	<table class="table !overflow-y-scroll">
		<thead class="sticky top-0">
			<tr>
				<th>Date</th>
				<th>From</th>
				<th>To</th>
				<th>Site</th>
			</tr>
		</thead>

		<tbody>
			{#each shifts as row, i}
				<tr>
					<td>{row.date}</td>
					<td>{row.from}</td>
					<td>{row.to}</td>

					<td>{row.site}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="responsive-container !max-h-48 !overflow-y-scroll">
	<!-- Native Table Element -->
	<table class="table !overflow-y-scroll table-hover">
		<thead class="sticky top-0" /><tbody>
			{#each shiftTexts as row, i}
				<tr class="card">
					<header class="card-header">row.line3</header>
					<section class="p-4">
						{row.line1}
						<br />
						{row.line2}
					</section>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<div class="responsive-container !max-h-48 !overflow-y-scroll">
	<Accordion>
		<AccordionItem open>
			<svelte:fragment slot="lead">😃</svelte:fragment>
			<svelte:fragment slot="summary">Shift Available!</svelte:fragment>
			<svelte:fragment slot="content">
				Start Mon 11/11 at 9am - End Tue 12/11 at 2am HTR-GV1
				<br />Lock Box 1187
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem open>
			<svelte:fragment slot="lead">😃</svelte:fragment>
			<svelte:fragment slot="summary">Shift Available!</svelte:fragment>
			<svelte:fragment slot="content">
				Start Mon 11/11 at 9am - End Tue 12/11 at 2am HTR-GV1
				<br />Lock Box 1187
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem open>
			<svelte:fragment slot="lead">😃</svelte:fragment>
			<svelte:fragment slot="summary">Shift Available!</svelte:fragment>
			<svelte:fragment slot="content">
				Start Mon 11/11 at 9am - End Tue 12/11 at 2am HTR-GV1
				<br />Lock Box 1187
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem open>
			<svelte:fragment slot="lead">😃</svelte:fragment>
			<svelte:fragment slot="summary">Shift Available!</svelte:fragment>
			<svelte:fragment slot="content">
				Start Mon 11/11 at 9am - End Tue 12/11 at 2am HTR-GV1
				<br />Lock Box 1187
			</svelte:fragment>
		</AccordionItem>
		<!-- ... -->
	</Accordion>
</div>
