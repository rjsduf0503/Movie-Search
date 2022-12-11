import { API_END_POINT } from '../utils/constants';
import { API_KEY } from '../utils/api_key';

export default {
	namespaced: true,
	state() {
		return {
			searched: false,
			detail: {},
			isLoading: false,
		};
	},
	getters: {
		fineDisplayPoster(state) {
			return state.detail.Poster.replace('SX300', 'SX700');
		},
	},
	mutations: {
		updateMovie(state, payload) {
			let searched = false;

			if (Object.keys(payload).length > 0) {
				searched = JSON.parse(payload.Response.toLowerCase());
			}

			state.searched = searched;
			state.detail = payload;
		},
		updateLoading(state, payload) {
			state.isLoading = payload;
		},
	},
	actions: {
		async fetchMovie({ commit }, payload) {
			const { imdbID, plot = 'short' } = payload;

			commit('updateLoading', true);

			const response = await fetch(
				`${API_END_POINT}?apikey=${API_KEY}&i=${imdbID}&plot=${plot}`,
			).then((res) => res.json());

			if (response.Response === 'True') {
				commit('updateMovie', response);
			}

			commit('updateLoading', false);
		},
	},
};
