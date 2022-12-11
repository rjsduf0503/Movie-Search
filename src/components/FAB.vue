<template>
	<div class="search-button" @click="onClick">
		<FontAwesomeIcon icon="fa-solid fa-search" />
	</div>
</template>

<script>
	export default {
		methods: {
			onClick() {
				window.scrollTo(0, 0);
				document.querySelector('.input-title').focus();
			},
		},
	};
</script>

<style lang="scss" scoped>
	.search-button {
		cursor: pointer;
		position: fixed;
		right: 2rem;
		bottom: 1.5rem;
		font-size: 1.8rem;

		background-color: rgb(53, 53, 53);
		box-shadow: 4px 4px 10px rgba($color: #000000, $alpha: 0.5);
		width: 4rem;
		height: 4rem;
		border-radius: 50%;

		display: flex;
		justify-content: center;
		align-items: center;

		transition: all 200ms ease-out;
		&:hover {
			scale: 1.2;
		}
	}
</style>
