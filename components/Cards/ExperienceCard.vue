<script setup>
defineProps(["img", "title", "text"]);
</script>

<template>
	<div
		class="rounded-xl lg:p-7 p-4 shadow hover:shadow-2xl lg:hover:scale-105 duration-300 bg-white">
		<div class="mb-5 w-full flex items-center gap-5">
			<div class="bg-[#E8F0FF] p-5 rounded-2xl">
				<img :src="img" alt="" />
			</div>
			<h3 class="md:text-2xl text-[20px] font-[700] text-[#024E90]">
				{{ title }}
			</h3>
		</div>
		<p class="text-[#5D5D5F] text-[20px]">{{ text }}</p>
	</div>
</template>

<style scoped></style>
