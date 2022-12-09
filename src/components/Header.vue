<template>
	<header>
		헤더
		<input type="text" />
		<button @click="searchMovie">검색</button>
	</header>
</template>

<script>
	export default {
		methods: {
			searchMovie() {
				console.log('검색');
			},
		},
	};
</script>
