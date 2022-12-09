<template>
	<main><Movies :movies="movies" :searched="searched" /></main>
	<nav v-if="searched">
		<Pagenation :currentPage="currentPage" :totalPage="totalPage" />
	</nav>
</template>

<script>
	import Movies from '@/components/Movies';
	import Pagenation from '@/components/Pagenation';

	export default {
		components: {
			Movies,
			Pagenation,
		},
		computed: {
			movies() {
				return this.$store.state.movies.searchedMovies;
			},
			searched() {
				return this.$store.state.movies.searched;
			},
			currentPage() {
				return this.$store.state.movies.currentPage;
			},
			totalPage() {
				return this.$store.getters['movies/totalPage'];
			},
		},
	};
</script>
