<template>
	<div :class="`app-container ${searched ? 'searched' : ''}`">
		<Header />
		<Loading v-if="isMoviesLoading || isMovieLoading" />
		<!-- <Loading v-if="isMovieLoading" /> -->
		<Contents v-if="searched && !isMoviesLoading" />
	</div>
</template>

<script>
	import Header from '@/components/Header.vue';
	import Contents from '@/components/Contents.vue';

	export default {
		components: {
			Header,
			Contents,
		},

		computed: {
			searched() {
				return this.$store.state.movies.searched;
			},
			isMoviesLoading() {
				return this.$store.state.movies.isLoading;
			},
			isMovieLoading() {
				return this.$store.state.movie.isLoading;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.app-container {
		background-image: url('./assets/images/space.png');
		background-size: cover;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		height: 100%;
		min-height: 100vh;
	}

	.searched {
		justify-content: space-between;
	}
</style>
