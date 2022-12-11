<template>
	<div class="movie-wrapper" v-if="movieDetail.Title">
		<img :src="fineDisplayPoster" :alt="movieDetail.Title" />
		<div class="movie-detail">
			<h1>{{ movieDetail.Title }}</h1>
			<div><b>Released</b> | {{ movieDetail.Released }}</div>
			<div><b>Runtime</b> | {{ movieDetail.Runtime }}</div>
			<div><b>Genre</b> | {{ movieDetail.Genre }}</div>
			<div><b>Director</b> | {{ movieDetail.Director }}</div>
			<div><b>Writer</b> | {{ movieDetail.Writer }}</div>
			<div><b>Actors</b> | {{ movieDetail.Actors }}</div>
			<div><b>Language</b> | {{ movieDetail.Language }}</div>
			<div><b>Country</b> | {{ movieDetail.Country }}</div>
			<div><b>Plot</b> | {{ movieDetail.Plot }}</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			movieDetail() {
				return this.$store.state.movie.detail;
			},
			fineDisplayPoster() {
				return this.$store.getters['movie/fineDisplayPoster'];
			},
		},
	};
</script>

<style lang="scss" scoped>
	.movie-wrapper {
		display: grid;
		grid-template-columns: 20rem 20rem;
		max-height: 30rem;

		img {
			max-height: 30rem;
			border-radius: 3rem 0 0 3rem;
			aspect-ratio: 119/176;
		}

		@media (max-width: 698px) {
			& {
				display: flex;
				flex-direction: column;
				height: 100%;
				width: 100%;
				max-height: 29.5rem;
				flex-wrap: nowrap;

				overflow-y: scroll;
				overflow-x: hidden;
				-ms-overflow-style: none;
				scrollbar-width: none;

				&::-webkit-scrollbar {
					display: none;
				}

				img {
					width: 100%;
					aspect-ratio: 119/176;
					border-radius: 3rem;
				}
			}
		}

		.movie-detail {
			display: flex;
			flex-direction: column;

			margin: 1.5rem 3rem 1.5rem 3rem;
			height: 27rem;

			overflow-y: scroll;
			overflow-x: hidden;

			-ms-overflow-style: none;
			scrollbar-width: none;

			&::-webkit-scrollbar {
				display: none;
			}
			div {
				font-size: 1rem;
			}

			@media (max-width: 698px) {
				& {
					height: 100%;
					width: calc(100% - 2rem);
					flex: 0 0 auto;
					margin: 1rem 1rem 2rem 1rem;

					overflow-y: scroll;
					overflow-x: hidden;

					img {
						width: 100%;
						aspect-ratio: 119/176;
						border-radius: 3rem;
					}
				}
			}
		}
	}
</style>
