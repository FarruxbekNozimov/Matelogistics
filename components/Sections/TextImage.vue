<script setup>
defineProps(["title", "text", "img", "firstImg", "isButton"]);

const importImage = (imageName) => {
	const images = import.meta.globEager("@/assets/img/*");
	const imageKeys = Object.keys(images);
	const imageKey = imageKeys.find((key) => key.endsWith(imageName));
	return images[imageKey].default;
};
</script>

<template>
	<UContainer>
		<div class="lg:flex items-center justify-between my-5 mb-10">
			<div
				class="lg:w-1/2 lg:m-0 mb-7"
				:class="firstImg == '1' ? '' : 'order-last'">
				<div class="">
					<h3 class="text-[#214690] text-[24px] font-[600] mb-5">
						{{ title }}
					</h3>
					<div
						class="text-[#5D5D5F] text-[16px] font-[400] mb-10"
						v-html="text"></div>
					<RedButton v-if="!isButton" title="Use live cost calculator" to="/" />
				</div>
			</div>
			<div>
				<img
					:src="importImage(img)"
					class="shadow-xl rounded-2xl w-full h-full hover:scale-110 duration-300"
					alt="" />
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
