<script setup>
defineProps(["img", "title", "text"]);
</script>

<template>
	<div
		class="bg-[#056AC4] overflow-hidden rounded-3xl cursor-pointer hover:shadow-2xl duration-300">
		<img
			:src="img"
			class="w-full cursor-pointer hover:scale-105 duration-300" />
		<div class="p-4">
			<h2 class="lg:text-[30px] text-[20px] text-white mb-3 font-bold">
				{{ title }}
			</h2>
			<p class="lg:text-lg text-[14px] text-white mb-2">{{ text }}</p>
			<button
				class="lg:text-lg text-[14px] text-white flex items-center justify-center gap-2">
				Learn more
				<Icon class="text-xl" name="material-symbols:chevron-right" />
			</button>
		</div>
	</div>
</template>

<style scoped></style>
