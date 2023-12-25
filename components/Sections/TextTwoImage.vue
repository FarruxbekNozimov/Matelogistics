<script setup>
defineProps(["title", "text", "img1", "img2", "order", "button"]);

const importImage = (imageName) => {
	const images = import.meta.globEager("@/assets/img/*");
	const imageKeys = Object.keys(images);
	const imageKey = imageKeys.find((key) => key.endsWith(imageName));
	return images[imageKey].default;
};
</script>

<template>
	<UContainer>
		<div class="lg:flex items-center justify-between mb-10">
			<div
				class="lg:w-1/2 md:m-0 mb-5"
				:class="order == '1' ? '' : 'order-last'">
				<h2 class="text-[#024E90] lg:text-[24px] text-[16px] mb-10">
					{{ title }}
				</h2>
				<div
					v-html="text"
					class="text-[#5D5D5F] lg:text-[16px] text-[14px] font-[400]"></div>
				<h2
					v-if="!button"
					class="lg:text-[24px] mt-6 text-[18px] text-[#012A44]">
					Now it's time to take the next step. Let`s use our live cost
					calculator for your shipment
				</h2>
				<RedButton
					v-if="!button"
					to="/calculator"
					class="text-center text-lg bg-[#E52E2E] text-white rounded-2xl p-2"
					title="Use live cost calculator">
				</RedButton>
			</div>
			<div class="">
				<img
					class="shadow-xl hover:rotate-6 duration-300 lg:h-full mt-5 ml-16 w-[486px] z-1"
					:src="importImage(img1)" />
				<img
					class="shadow-xl hover:rotate-6 duration-300 lg:h-full mt-[-50px] w-[486px] z-0"
					:src="importImage(img2)" />
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
