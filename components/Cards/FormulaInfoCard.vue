<script setup>
defineProps(["img", "title", "text"]);
</script>

<template>
	<div
		class="rounded-2xl p-2 drop-shadow-2xl lg:hover:scale-105 duration-300 ring- bg-white">
		<div class="w-full flex items-center gap-5">
			<div class="bg-[#E8F0FF] p-3 rounded-2xl">
				<img :src="`/img/${img}`" alt="img" class="" />
			</div>
			<div class="">
				<h3 class="lg:text-2xl text-[16px] font-[700] text-[#024E90]">
					{{ title }}
				</h3>
				<p class="lg:text-[15px] text-[12px] text-[#5D5D5F]">
					{{ text }}
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
