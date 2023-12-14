<script setup>
defineProps(["num", "title", "text"]);
</script>

<template>
	<div
		class="round ed-xl lg:p-7 p-4 shadow hover:shadow-2xl lg:hover:scale-105 duration-100 bg-white">
		<div class=" w-full flex items-center gap-5">
			<div class="mb-[120px] bg-[#E8F0FF] p-8 rounded-3xl md:text-3xl text-[20px] font-[1000] text-[#024E90]">
				{{num}}
			</div>
            <div>
			<h3 class="md:text-2xl text-[20px] font-[700] text-[#024E90]">
				{{ title }}
			</h3>
		    <p class="text-[#5D5D5F] md:text-lg text-[14px]">{{ text }}</p>
            </div>
		</div>
	</div>
</template>

<style scoped></style>
