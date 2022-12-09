<template>
	<div>{{ currentPage + '/' + totalPage }}</div>
</template>

<script>
	export default {
		props: {
			currentPage: String,
			totalPage: String,
		},
	};
</script>
