import { base } from "@/store/mainURL";
export const actions = {
	async createContact(body) {
		try {
			const res = await useFetch(`${base}/application/create`, {
				method: "post",
				body: { ...body },
			});
			return res;
		} catch (err) {
		}
	},
};
