export default {
	namespaced: true,
	state() {
		return {
			title: '',
		};
	},
	getters: {},
	mutations: {
		updateTitle(state, payload) {
			const { title } = payload;

			state.title = title;
		},
	},
	actions: {},
};
