<template>
	<div class="card-container">
		<img :src="movie.Poster" :alt="movie.Title" />
		<div>{{ movie.Title }}</div>
		<div>개봉 년도: {{ movie.Year }}</div>
	</div>
</template>

<script>
	export default {
		props: {
			movie: Object,
		},
	};
</script>

<style lang="scss" scoped>
	.card-container {
		background-color: gray;
	}
</style>
