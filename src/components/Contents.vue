<template>
	<main><Movies /></main>
	<nav><Pagenation /></nav>
</template>

<script>
	import Movies from '@/components/Movies';
	import Pagenation from '@/components/Pagenation';
	export default {
		components: {
			Movies,
			Pagenation,
		},
	};
</script>
