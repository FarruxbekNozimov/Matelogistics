<script setup>
import { experience } from "@/data/experience";

const importImage = (imageName) => {
	const images = import.meta.globEager("@/assets/img/exp/*");
	const imageKeys = Object.keys(images);
	const imageKey = imageKeys.find((key) => key.endsWith(imageName));
	return images[imageKey].default;
};
</script>

<template>
	<UContainer>
		<div class="mb-10">
			<TitleBar title="Experience the excellence:" no="1" />
			<TitleBar title="What you get when you choose to work with us" />
			<div class="grid lg:grid-cols-3 md:grid-cols-2 mt-10 gap-5">
				<CardsExperienceCard
					v-for="el in experience"
					:img="importImage(el.img)"
					:title="el.title"
					:text="el.text" />
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
