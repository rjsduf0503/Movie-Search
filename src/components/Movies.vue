<template>
	<div v-if="!searched">Nothing searched yet</div>
	<div class="cards-container">
		<template v-for="movie in movies" :key="movie.imdbID">
			<Card v-if="searched" :movie="movie" />
		</template>
	</div>
</template>

<script>
	import Card from './Card.vue';

	export default {
		components: {
			Card,
		},
		props: {
			movies: Array,
			searched: Boolean,
		},
	};
</script>

<style lang="scss" scoped>
	.cards-container {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	}
</style>
