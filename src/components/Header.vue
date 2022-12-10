<template>
	<header>
		<form class="input-container" @submit="onSubmit">
			<input
				ref="input"
				v-model="title"
				type="text"
				placeholder="Please enter the title"
			/>
			<div @click="onSubmit">
				<FontAwesomeIcon icon="fa-solid fa-search" />
			</div>
		</form>
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
			onSubmit(e) {
				e.preventDefault();
				this.$refs.input.blur();
				this.searchMovie();
			},
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
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.input-container {
		width: 40%;
		min-width: 19rem;
		height: 3rem;
		position: relative;
		transition: all 300ms ease-out;
		display: flex;
		flex-direction: row;

		&:focus-within {
			transform: scale(1.2);
		}

		input {
			width: calc(100% - 1rem);
			min-width: 15rem;
			height: 3rem;
			font-size: 1.4rem;
			font-weight: bold;
			border: 0;
			border-radius: 5rem 0 0 5rem;
			outline: none;
			padding-left: 1rem;
			background-color: rgb(68, 68, 68);
			color: white;

			&::placeholder {
				color: rgba($color: rgb(158, 158, 158), $alpha: 0.8);
			}
		}

		div {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.7rem;
			cursor: pointer;
			background-color: rgb(53, 53, 53);
			height: 3rem;
			width: 5rem;
			min-width: 3rem;
			border-radius: 0 5rem 5rem 0;
		}
	}
</style>
