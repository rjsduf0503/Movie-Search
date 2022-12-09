import { createStore } from 'vuex';
import keyword from './keyword';
import movies from './movies';

export default createStore({
	modules: {
		keyword,
		movies,
	},
});
