export default {
	namespaced: true,
	state() {
		return {
			title: '',
		};
	},
	getters: {
    trimmedTitle(state) {
      return state.title.trim();
    }
  },
	mutations: {
		updateTitle(state, payload) {
			const { title } = payload;

			state.title = title;
		},
	},
	actions: {},
};
