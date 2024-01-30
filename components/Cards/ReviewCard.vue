<script setup>
defineProps(["title", "reviews", "number", "img"]);
</script>

<template>
	<div class="bg-white p-5 px-7 rounded-2xl shadow-lg">
		<div class="flex items-center gap-20">
			<div class="">
				<h3 class="text-[#214690] text-[20px]">{{ title }}</h3>
				<Icon
					name="ic:sharp-star"
					v-for="el in 4"
					class="text-yellow-400 text-xl" />
				<Icon name="ic:sharp-star-half" class="text-yellow-400 text-xl" />
				<p class="text-[20px] text-[#5D5D5F] font-[400]">
					({{ reviews }}+ reviews)
				</p>
			</div>
			<div class="">
				<h3 class="text-[40px] text-[#214690]">{{ number }}</h3>
				<img :src="`/img/${img}`" alt="" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
