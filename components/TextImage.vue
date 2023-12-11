<script setup>
defineProps(["title", "text", "img", "isButton", "order"]);

const importImage = (imageName) => {
	const images = import.meta.globEager("@/assets/img/*");
	const imageKeys = Object.keys(images);
	const imageKey = imageKeys.find((key) => key.endsWith(imageName));
	return images[imageKey].default;
};
</script>

<template>
	<div class="flex justify-between ...">
		<div :class="order ? '' : ''">
			<img :src="importImage(img)" alt="" />
		</div>
		<div class="">03</div>
	</div>
</template>

<style scoped></style>
