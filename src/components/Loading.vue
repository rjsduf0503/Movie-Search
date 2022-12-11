<template>
	<div class="loading">
		<div>
			<RingLoader color="#FFFFFF" size="100%" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.loading {
		background-color: rgba($color: black, $alpha: 0.5);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;

		div {
			width: 20rem;
			height: 20rem;

			@media (max-width: 698px) {
				width: 10rem;
				height: 10rem;
			}
		}
	}
</style>
