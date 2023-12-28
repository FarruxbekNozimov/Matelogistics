import { base } from "@/store/mainURL";
export const actions = {
	async createContact(body) {
		try {
			console.log(body);
			const res = await useFetch(`${base}/application/create`, {
				method: "post",
				body: { ...body },
			});
			console.log(res);
			return res;
		} catch (err) {
			console.log(err);
		}
	},
};
