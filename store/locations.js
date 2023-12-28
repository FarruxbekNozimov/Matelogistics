import { base } from "@/store/mainURL";
export const actions = {
	async getStates() {
		const res = await useFetch(`/states`, { params: { page_size: 60 } });
		return res.results;
	},
	async getCities() {
		return await useFetch(`${base}/cities`);
	},
	async getCurrentCity(payload) {
		const res = await useFetch(`/city/${payload.currentCity}`);
		return res;
	},
	async getSearchCities(payload) {
		const res = await useFetch(`${base}/cities?page_size=50&q=${payload}`);
		return res;
	},
	async getSearchStates(payload) {
		const res = await useFetch(`/states?page_size=100&q=${payload}`);
		return res;
	},
};
