<template>
	<div :class="`${searched ? 'searched' : ''}`">
		<Header />
		<Contents v-if="searched" />
	</div>
	<!-- <RouterView /> -->
</template>

<script>
	import Header from '@/components/Header.vue';
	import Contents from '@/components/Contents.vue';

	export default {
		components: {
			Header,
			Contents,
		},
		computed: {
			searched() {
				return this.$store.state.movies.searched;
			},
		},
	};
</script>

<style lang="scss" scoped>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		height: 100%;
		min-height: 100vh;
	}

	.searched {
		justify-content: flex-start;
	}
</style>
