import { createStore } from 'vuex';
import keyword from './keyword';
import movies from './movies';
import movie from './movie';

export default createStore({
	modules: {
		keyword,
		movies,
		movie,
	},
});
