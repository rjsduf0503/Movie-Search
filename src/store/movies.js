import { API_END_POINT } from '../utils/constants';
import { API_KEY } from '../utils/api_key';

export default {
	namespaced: true,
	state() {
		return {
			searchedMovies: [],
			totalResults: '',
			searched: false,
			currentPage: '',
		};
	},
	getters: {
		totalPage(state) {
			return Math.ceil(parseInt(state.totalResults) / 10).toString();
		},
	},
	mutations: {
		updateMovies(state, payload) {
			const { searchedMovies, totalResults, searched, currentPage } = payload;

			state.searchedMovies = searchedMovies;
			state.totalResults = totalResults;
			state.searched = JSON.parse(searched.toLowerCase());
			state.currentPage = currentPage;
		},
	},
	actions: {
		async fetchMovies({ commit }, payload) {
			const { title, currentPage = '1' } = payload;

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
		},
	},
};
