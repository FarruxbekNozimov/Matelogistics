<script setup>
defineProps(["num", "title", "text"]);
</script>

<template>
	<div
		class="rounded-xl lg:p-7 p-4 shadow hover:shadow-2xl lg:hover:scale-105 duration-300 bg-white">
		<div class="w-full flex items-start gap-5">
			<div
				class="bg-[#E8F0FF] p-5 px-7 rounded-full md:text-3xl text-[20px] font-[700] text-[#024E90]">
				{{ num }}
			</div>
			<div>
				<h3 class="text-[24px] font-[700] text-[#024E90]">
					{{ title }}
				</h3>
				<p class="text-[#5D5D5F] font-[400] text-[14px]">{{ text }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
