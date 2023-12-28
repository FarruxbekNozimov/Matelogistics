<script setup>
defineProps(["data"]);

const importImage = (imageName) => {
	const images = import.meta.globEager("@/assets/img/*");
	const imageKeys = Object.keys(images);
	const imageKey = imageKeys.find((key) => key.endsWith(imageName));
	return images[imageKey].default;
};
</script>

<template>
	<a
		:href="data.link"
		target="_blank"
		class="bg-white font-[400] p-5 px-7 border border-gray-100 shadow cursor-pointer rounded-2xl relative hover:shadow-xl duration-300">
		<Icon
			name="fluent:open-12-regular"
			class="absolute right-3 top-3 text-2xl text-[#008AFF]" />
		<h3 class="text-[#024E90] font-[500] text-[25px]">{{ data.title }}</h3>
		<div class="flex items-center">
			<Icon
				name="material-symbols-light:kid-star"
				class="text-yellow-400 text-xl"
				v-for="el in 5" />
		</div>
		<p class="text-[#9A999B] text-[16px] mb-5">{{ data.date }}</p>
		<p class="text-[#5D5D5F] text-[16px] mb-10">{{ data.content }}</p>
		<img
			:src="importImage(data.img)"
			alt="logo"
			class="absolute bottom-3 right-3" />
	</a>
</template>

<style scoped></style>
