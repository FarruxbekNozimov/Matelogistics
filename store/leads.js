import { base } from "@/store/mainURL";
export const actions = {
	async createLead(body) {
		const res = await useFetch(`${base}/leads/create`, {
			method: "post",
			body,
		});
	},
	async getModels(payload) {
		const res = await useFetch(`${base}/car_models?make=${payload}`);
		return res;
	},
};
