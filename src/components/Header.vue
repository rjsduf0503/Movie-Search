<template>
	<header>
		<div class="input-container">
			<input v-model="title" type="text" placeholder="Please enter the title" />
			<div @click="searchMovie">🔍</div>
		</div>
	</header>
</template>

<script>
	export default {
		computed: {
			title: {
				get() {
					return this.$store.state.keyword.title;
				},
				set(value) {
					this.$store.commit('keyword/updateTitle', { title: value });
				},
			},
		},
		methods: {
			searchMovie() {
				const title = this.$store.state.keyword.title.trim();

				if (title.length === 0) {
					alert('제목을 입력해주세요.');
					return;
				}

				this.$store.dispatch('movies/fetchMovies', {
					title: this.$store.state.keyword.title,
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	header {
		width: 100%;
		height: 4rem;
		margin-top: 2rem;
		align-items: center;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.input-container {
		width: 40%;
		min-width: 240px;
		height: 3rem;
		position: relative;

		input {
			width: calc(100% - 5rem);
			min-width: 220px;
			height: 3rem;
			font-size: 1.4rem;
			font-weight: bold;
			border: 0;
			border-radius: 5rem;
			outline: none;
			padding-left: 1rem;
			background-color: rgb(68, 68, 68);
			padding-right: 4rem;
			color: white;

			&::placeholder {
				color: rgba($color: rgb(158, 158, 158), $alpha: 0.8);
			}
		}

		div {
			position: absolute;
			font-size: 2rem;
			right: 1rem;
			top: 0.5rem;
			cursor: pointer;
		}
	}
</style>
