<script setup>
defineProps(["data"]);
</script>

<template>
	<a
		:href="data.link"
		target="_blank"
		class="bg-white font-[400] p-5 px-7 border border-[#ECF3FF] shadow cursor-pointer rounded-2xl relative hover:shadow-xl duration-300">
		<Icon
			name="fluent:open-12-regular"
			class="absolute right-3 top-3 text-2xl text-[#008AFF]" />
		<h3 class="text-[#024E90] font-[500] text-[20px]">{{ data.title }}</h3>
		<div class="flex items-center gap-3">
			<div class="flex items-center">
				<Icon
					name="material-symbols-light:kid-star"
					class="text-yellow-400 text-xl"
					v-for="el in 5" />
			</div>
			<span class="text-[#9A999B] text-[16px]">{{ data.date }}</span>
		</div>
		<p class="text-[#5D5D5F] text-[15px] mb-10">{{ data.content }}</p>
		<img
			:src="`/img/${data.img}`"
			alt="logo"
			class="absolute bottom-3 right-3" />
	</a>
</template>

<style scoped></style>
