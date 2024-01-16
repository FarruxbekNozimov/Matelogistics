<script setup>
defineProps(["img", "title", "text"]);
</script>

<template>
	<div
		data-aos="flip-down"
		class="bg-[#056AC4] overflow-hidden rounded-3xl cursor-pointer hover:shadow-2xl duration-300 p-5">
		<img
			:src="`/img/${img}`"
			class="w-full cursor-pointer hover:scale-105 duration-300" />
		<div>
			<h2 class="text-[30px] text-white mb-3 font-bold">
				{{ title }}
			</h2>
			<p class="text-lg text-white mb-2 h-28">{{ text }}</p>
			<button class="text-lg text-white flex items-center justify-center gap-2">
				Learn more
				<Icon class="text-xl" name="material-symbols:chevron-right" />
			</button>
		</div>
	</div>
</template>

<style scoped></style>
