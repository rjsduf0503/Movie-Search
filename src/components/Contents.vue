<template>
	<main><Movies :searched="searched" /></main>
	<nav v-if="searched">
		<Pagenation />
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
			searched() {
				return this.$store.state.movies.searched;
			},
		},
	};
</script>

<style lang="scss" scoped>
	main {
		width: 100%;
	}
</style>
