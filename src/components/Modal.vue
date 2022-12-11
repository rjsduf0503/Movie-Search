<template>
	<teleport to="body">
		<template v-if="modalVisible">
			<div class="modal" @click="offModal">
				<div class="modal__inner" @click.stop>
					<slot></slot>
				</div>
			</div>
		</template>
	</teleport>
</template>

<script>
	export default {
		props: {
			modalVisible: {
				type: Boolean,
				default: false,
			},
		},
		emits: ['update:modalVisible'],
		watch: {
			modalVisible(newValue) {
				if (newValue) {
					window.addEventListener('keyup', this.keyupHandler);
				} else {
					window.removeEventListener('keyup', this.keyupHandler);
				}
			},
		},
		methods: {
			offModal() {
				this.$emit('update:modalVisible', false);
        this.$store.commit('movie/updateMovie', {});
			},
			keyupHandler() {
				if (event.key === 'Escape') {
					this.offModal();
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.modal {
		background-color: rgba($color: #000000, $alpha: 0.5);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 9;
		display: flex;
		justify-content: center;
		align-items: center;

		&__inner {
			position: relative;
			background-color: rgb(29, 29, 29);
			box-sizing: border-box;
			border-radius: 3rem;
			box-shadow: 0 10px 10px rgba($color: black, $alpha: 0.2);
			width: 40rem;

			@media (max-width: 698px) {
				& {
					width: 20rem;
				}
			}
		}
	}
</style>
