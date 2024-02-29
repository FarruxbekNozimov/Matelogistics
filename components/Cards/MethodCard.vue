<script setup>
defineProps(["img", "title", "text","link"]);
</script>

<template>
	<router-link
		:to="`/${link}`"
		data-aos="flip-down"
		class="bg-[#056AC4] overflow-hidden rounded-3xl cursor-pointer hover:shadow-2xl duration-300 p-5 relative">
		<img
			:src="`/img/${img}`"
			class="w-full cursor-pointer hover:scale-105 duration-300" />
		<div class="pt-2">
			<h2 class="md:text-[30px] text-[24px] text-white mb-3 font-bold">
				{{ title }}
			</h2>
			<p class="md:text-[18px] text-[14px] text-white mb-10">{{ text }}</p>
			<button class="absolute bottom-5 text-lg text-white gap-2">
				Learn more
				<Icon class="text-xl" name="material-symbols:chevron-right" />
			</button>
		</div>
	</router-link>
</template>

<style scoped></style>
