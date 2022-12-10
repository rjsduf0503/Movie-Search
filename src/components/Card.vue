<template>
	<div class="flip">
		<div class="card">
			<div class="card-front">
				<img :src="movie.Poster" :alt="movie.Title" />
			</div>
			<div class="card-back">
				<div>{{ movie.Title }}</div>
				<div>Released: {{ movie.Year }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			movie: Object,
		},
	};
</script>

<style lang="scss" scoped>
	.flip {
		width: 100%;
		aspect-ratio: 119/176;

		&:hover .card {
			transform: rotateY(180deg);
		}
	}
	.card {
		width: 100%;
		height: 100%;
		position: relative;
		transition: 800ms;
		transform-style: preserve-3d;
		cursor: pointer;

		img {
			width: 100%;
			aspect-ratio: 119/176;
			cursor: pointer;
			border-radius: 2rem;
		}

		&-back,
		&-front {
			border-radius: 2rem;
			width: 100%;
			height: 100%;
			position: absolute;
			backface-visibility: hidden;
		}

		&-back {
			width: calc(100% - 2rem);
			padding: 0 1rem 0 1rem;
			transform: rotateY(180deg);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: rgba($color: #2f2f2f, $alpha: 0.7);
		}
	}
</style>
