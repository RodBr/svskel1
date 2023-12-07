<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	import { browser } from '$app/environment';
	import logo from '$lib/assets/ph_tree.svg';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="safe-top safe-left safe-right safe-bottom">
	<div
		class="disable-scrollbars max-h-screen h-full overflow-y-scroll content-center max-w-lg justify-center items-center mx-auto"
	>
		<!-- App Shell -->
		<AppShell>
			<svelte:fragment slot="header">
				<!-- App Bar -->
				<AppBar>
					<svelte:fragment slot="lead">
						<img src={logo} alt="Prospect Hill" height="40" width="40" />
					</svelte:fragment>
					<svelte:fragment slot="trail">
						<div class=" flex justify-end">
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
