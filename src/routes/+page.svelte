<script>
	import AvailableShifts from '$lib/AvailableShifts.svelte';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="space-y-2">
			<h3>The following shifts are available!</h3>
		</div>
		<AvailableShifts />

		<p>Call the Help Desk on 02 1234 5678 if you're intrested.</p>

		<div class="flex justify-center space-x-2">
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
