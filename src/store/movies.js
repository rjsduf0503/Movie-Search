import { API_END_POINT } from '../utils/constants';
import { API_KEY } from '../utils/api_key';

export default {
	namespaced: true,
	state() {
		return {
			searchedMovies: [],
			totalResults: '',
			searched: false,
			currentPage: undefined,
			isLoading: false,
		};
	},
	getters: {
		totalPage(state) {
			return Math.ceil(parseInt(state.totalResults) / 10);
		},
	},
	mutations: {
		updateMovies(state, payload) {
			const { searchedMovies, totalResults, searched, currentPage } = payload;

			state.searchedMovies = searchedMovies;
			state.totalResults = totalResults;
			state.searched = JSON.parse(searched.toLowerCase());
			state.currentPage = parseInt(currentPage);
		},
		updateLoading(state, payload) {
			state.isLoading = payload;
		},
	},
	actions: {
		async fetchMovies({ commit }, payload) {
			const { title, currentPage = 1 } = payload;

			commit('updateLoading', true);

			const {
				Search: searchedMovies,
				totalResults,
				Response: searched,
			} = await fetch(
				`${API_END_POINT}?apikey=${API_KEY}&s=${title}&page=${currentPage}`,
			).then((res) => res.json());

			if (searched === 'True') {
				commit('updateMovies', {
					searchedMovies,
					totalResults,
					searched,
					currentPage,
				});
			}

			commit('updateLoading', false);
		},
	},
};
