<script setup>
defineProps(["title", "text", "img"]);
</script>

<template>
	<div class="mx-auto mt-11 min-w-[300px] max-w-[1366px] h-full. p-2 flex">
		<div class="mx-auto ml-1 w-[600px] h-auto">
			<h2 class="lg:text-[24px] text-[18px] text-[#024E90]">{{ title }}</h2>
			<p class="mt-7 md:text-[16px] font-[400] text-[14px] text-[#5D5D5F]">
				{{ text }}
			</p>
		</div>
		<div class="">
			<img class="lg:h-[250px] mt-5 w-[486px]" src="/img/our-vision.png" />
		</div>
	</div>
</template>

<style scoped></style>
