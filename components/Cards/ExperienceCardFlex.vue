<script setup>
defineProps(["img", "title", "text"]);
</script>

<template>
	<div
		class="bg-[#F5F7FA] py-4 rounded-lg hover:rounded-2xl hover:scale-110 hover:bg-white duration-300">
		<div class="border-x border-white p-2 h-full">
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
	</div>
</template>

<style scoped></style>
