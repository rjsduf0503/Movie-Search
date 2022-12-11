import { request } from '../utils/api';

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
			} = await request({ s: title, page: currentPage });

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
