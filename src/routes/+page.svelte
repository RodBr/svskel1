<script>
	import AvailableShifts from '$lib/AvailableShifts.svelte';
</script>

<div class="justify-center items-center">
	<div class="text-center">
		<br />

		<h3 class="my-4">The following shifts are available!</h3>
		<AvailableShifts />

		<p class="my-4">
			Call the Help Desk on (02 1234 5678)
			<br />if you're intrested. v2.1
		</p>

		<div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
			<a class="btn variant-filled-primary" href="https://prospecthill.flowlogic.com.au">
				Go to FlowLogic
			</a>
		</div>
	</div>
</div>

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
