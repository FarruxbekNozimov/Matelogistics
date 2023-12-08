<script setup>
defineProps(["img", "title", "text"]);
</script>

<template>
	<div
		class="rounded-xl p-7 shadow-xl hover:shadow-2xl duration-300 ring- bg-white">
		<div class="mb-5 w-full flex items-center gap-5">
			<div class="bg-[#E8F0FF] p-3 rounded-2xl">
				<img :src="img" alt="" />
			</div>
			<h3 class="text-2xl font-[700] text-[#024E90]">{{ title }}</h3>
		</div>
		<p class="text-[#5D5D5F] text-md">{{ text }}</p>
	</div>
</template>

<style scoped></style>
