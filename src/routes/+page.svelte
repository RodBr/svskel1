<script>
	import AvailableShifts from '$lib/AvailableShifts.svelte';
</script>

<div class="justify-center items-center text-center">
	<p class="wrapper h-[5svh]" />

	<h3>The following shifts are available!</h3>
	<p class="wrapper h-1" />
	<AvailableShifts />

	<p class="my-4">
		Call the Help Desk on (02 1234 5678)
		<br />if you're intrested.
	</p>

	<a class="btn variant-filled-primary mt-4" href="https://prospecthill.flowlogic.com.au">
		Go to FlowLogic
	</a>
</div>
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
