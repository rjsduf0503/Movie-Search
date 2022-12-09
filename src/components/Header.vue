<template>
	<header>
		<input v-model="title" type="text" placeholder="Please enter the title" />
		<button @click="searchMovie">검색</button>
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
