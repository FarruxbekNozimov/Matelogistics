import { base } from "@/store/mainURL";
export const actions = {
	async getMakes() {
		return await useFetch(`${base}/car_makes?page_size=100`);
	},
	async getModels(payload) {
		const res = await useFetch(`${base}/car_models?make=${payload}`);
		return res;
	},
};
