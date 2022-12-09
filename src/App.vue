<template>
	<div class="app-container">
		<Header />
		<Contents />
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
	};
</script>

<style lang="scss">
	.app-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		height: 100%;
	}
</style>
