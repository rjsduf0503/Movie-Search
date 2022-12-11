import { API_END_POINT } from './constants.js';
// import { API_KEY } from './api_key.js';
const API_KEY = '7035c60c';

export const request = async (query = {}) => {
	try {
		let queryString = '';
		Object.entries(query).forEach((q) => (queryString += `&${q[0]}=${q[1]}`));

		const response = await fetch(
			`${API_END_POINT}?apikey=${API_KEY}${queryString}`,
		);

		if (!response.ok) {
			throw new Error(response.status);
		}

		return await response.json();
	} catch (e) {
		alert(e.message);
	}
};
