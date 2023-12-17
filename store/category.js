import { base } from "@/store/mainURL";
export const getArticles = async () => {
	return await useFetch(`${base}/articles`);
};
