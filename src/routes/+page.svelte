<script>
	import AvailableShifts from '$lib/shifts/AvailableShifts.svelte';
	import { locationAllowed, notificationsAllowed } from '$lib/store';

	console.log('notifications: ' + $notificationsAllowed);
	console.log('location: ' + $locationAllowed);
</script>

{#if $notificationsAllowed && $locationAllowed}
	<div class="mx-auto">
		<AvailableShifts />
	</div>
{:else}
	<div
		class="card flex h-20 my-[30svh] mx-6 justify-center items-center !text-on-warning-token !bg-warning-500"
	>
		<h1 class="h3">Please enable Notifications and Location</h1>
	</div>
{/if}

<div class="flex text-xs justify-end mr-4">v2.1</div>

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
