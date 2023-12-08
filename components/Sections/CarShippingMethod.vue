<script setup>
import { ref } from "vue";

const importImage = (imageName) => {
	const images = import.meta.globEager("@/assets/img/*");
	const imageKeys = Object.keys(images);
	const imageKey = imageKeys.find((key) => key.endsWith(imageName));
	return images[imageKey].default;
};

const methods = ref([
	{
		title: "Open car shipping",
		text: "Open car shipping is a popular and cost-effective method of transporting vehicles.",
		img: "method-1.png",
	},
	{
		title: "Enclosed car shipping",
		text: "Enclosed car shipping is a premium method of transporting vehicles.",
		img: "method-2.png",
	},
	{
		title: "Expedited car shipping",
		text: "Expedited car shipping is a service that prioritizes the quick transportation of vehicles.",
		img: "method-3.png",
	},
	{
		title: "Hawaii car shipping",
		text: "Hawaii car shipping involves the transportation of vehicles to and from these unique states.",
		img: "method-4.png",
	},
]);
</script>

<template>
	<Container :px="`p-2`">
		<div class="mb-10">
			<TitleBar title="Explore car shipping methods: " no="1" />
			<TitleBar title="A guide to common auto transportation options" />
			<div class="grid lg:grid-cols-4 md:grid-cols-2 mt-10 gap-5">
				<CardsMethodCard
					v-for="el in methods"
					:img="importImage(el.img)"
					:title="el.title"
					:text="el.text" />
			</div>
		</div>
	</Container>
</template>

<style scoped></style>
