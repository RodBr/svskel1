<script lang="ts">
	import { AvailableShifts } from '$lib';
	import { locationAllowed, notificationsAllowed } from '$lib/stores.js';

	let version = '3.0';
	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};
	console.log('page.svlelte');

	// beforeUpdate(() => {
	const successCallback = (position: any) => {
		console.log('position');
		console.log(position);
		$locationAllowed = true;
	};

	const errorCallback = (error: any) => {
		console.log('error');
		console.log(error);
	};
	console.log('get loc');
	navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
	console.log('location: ' + $locationAllowed);

	Notification.requestPermission().then((result) => {
		if (result == 'granted') {
			$notificationsAllowed = true;
		} else {
			$notificationsAllowed = false;
		}
		console.log('notifications: ' + $notificationsAllowed);
	});
	// });
</script>

{#if $notificationsAllowed && $locationAllowed}
	<div class="mx-auto">
		<!-- <ShowDetails /> -->
		<AvailableShifts />
	</div>
{:else}
	<div
		class="card flex h-20 my-[30svh] mx-8 justify-center items-center !text-on-warning-token !bg-warning-500"
	>
		<h1 class="h3">Please enable Notifications and Location</h1>
	</div>
{/if}

<div class="flex text-xs justify-end mr-4">v{version}</div>

<style lang="postcss">
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
