import { filename } from "pathe/utils";

const glob = import.meta.glob("/img/*.png", { eager: true });
const images = Object.fromEntries(
	Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
export default { images };

// const importImage = (imageName) => {
// 	const images = import.meta.globEager("/img/*");
// 	const imageKeys = Object.keys(images);
// 	const imageKey = imageKeys.find((key) => key.endsWith(imageName));
// 	return images[imageKey].default;
// };
