<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	import ShowDetails from '$lib/ShowDetails.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="safe-top safe-left safe-right safe-bottom mx-4mx-4">
	<div class="disable-scrollbars max-h-screen h-full overflow-y-scroll content-center">
		<!-- App Shell -->
		<AppShell>
			<svelte:fragment slot="header">
				<!-- App Bar -->
				<AppBar>
					<svelte:fragment slot="lead">
						<strong class="text-l uppercase">Prospect Hill</strong>
					</svelte:fragment>
					<svelte:fragment slot="trail">
						<div class=" flex justify-end">
							<ShowDetails />
							<LightSwitch />
						</div>
					</svelte:fragment>
				</AppBar>
			</svelte:fragment>
			<!-- Page Route Content -->
			<slot />
		</AppShell>
	</div>
</div>
