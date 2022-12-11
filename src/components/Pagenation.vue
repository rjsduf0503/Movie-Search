<template>
	<span class="pagenation">
		<div class="button button__left" @click="onClick(1)">
			<FontAwesomeIcon icon="fa-solid fa-angles-left" />
		</div>
		<div class="button button__left" @click="onClick(currentPage - 1)">
			<FontAwesomeIcon icon="fa-solid fa-angle-left" />
		</div>
		<div class="page">
			{{ currentPage + ' / ' + totalPage }}
		</div>
		<div class="button button__right" @click="onClick(currentPage + 1)">
			<FontAwesomeIcon icon="fa-solid fa-angle-right" />
		</div>
		<div class="button button__right" @click="onClick(totalPage)">
			<FontAwesomeIcon icon="fa-solid fa-angles-right" />
		</div>
	</span>
</template>

<script>
	export default {
		computed: {
			title() {
				return this.$store.getters['keyword/trimmedTitle'];
			},
			currentPage() {
				return this.$store.state.movies.currentPage;
			},
			totalPage() {
				return this.$store.getters['movies/totalPage'];
			},
		},
		methods: {
			onClick(nextPage) {
				const { totalPage, currentPage, fetchMovies } = this;

				if (nextPage < 1 || nextPage > totalPage || nextPage === currentPage)
					return;

				fetchMovies(nextPage);
			},
			fetchMovies(nextPage) {
				const { title, $store } = this;

				$store.dispatch('movies/fetchMovies', {
					title,
					currentPage: nextPage,
				});

				window.scrollTo(0, 0);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.pagenation {
		height: 3rem;
		background-color: #353535;
		padding: 0 2rem 0 2rem;
		margin-bottom: 1rem;
		border-radius: 2rem;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		font-size: 1.2rem;

		.page {
			margin: 0 2rem 0 2rem;
		}

		.button {
			cursor: pointer;

			&:hover {
				scale: 1.3;
			}
			&__left {
				margin-right: 1rem;
			}
			&__right {
				margin-left: 1rem;
			}
		}
	}
</style>
