<script setup>
defineProps(["img", "title", "text"]);
</script>

<template>
	<div
		class="rounded-xl lg:p-7 p-4 shadow hover:shadow-2xl lg:hover:scale-105 duration-300 bg-[#F5F7FA] hover:bg-white">
		<div class="mb-5 w-full">
			<img
				:src="`/img/expF/${img}`"
				alt=""
				class="m-5 mx-auto h-[98px] w-[98px] object-cover" />
			<h3 class="text-[15px] font-[700] text-[#3391D9] text-center">
				{{ title }}
			</h3>
		</div>
		<p class="text-[#5D5D5F] text-[16px] text-center">{{ text }}</p>
	</div>
</template>

<style scoped></style>
