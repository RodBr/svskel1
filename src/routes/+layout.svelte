<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	import ShowDetails from '$lib/shifts/ShowDetails.svelte';
	import { onMount } from 'svelte';
	import { locationAllowed, notificationsAllowed } from '$lib/store';
	import logo from '$lib/assets/ph_tree.svg';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	onMount(() => {
		console.log('onMount');
		const successCallback = (position: any) => {
			console.log(position);
			$locationAllowed = true;
		};

		const errorCallback = (error: any) => {
			console.log(error);
		};
		console.log('get loc');
		navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

		Notification.requestPermission().then((result) => {
			console.log('notif: ' + result);
			if (result == 'granted') {
				$notificationsAllowed = true;
			} else {
				$notificationsAllowed = false;
			}
		});
	});
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
