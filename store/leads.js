import { base } from "@/store/mainURL";
export const actions = {
	async createLead(body) {
		const res = await useFetch(`${base}/leads/create`, {
			method: "post",
			body,
		});
		console.log(res);
	},
	async getModels(payload) {
		console.log(`${base}/car_models?make=${payload}`);
		const res = await useFetch(`${base}/car_models?make=${payload}`);
		return res;
	},
};
