<script setup>
defineProps(["data"]);
const cutter = (num, text) => {
	console.log(text);
	let res = text.slice(0, num);
	console.log(text);
	if (res.length != text.length) {
		res += "...";
	}
	return res;
};
</script>

<template>
	<router-link
		:to="`/articles/${data.slug}`"
		class="block bg-white rounded-xl mr-5 h-[420px] shadow hover:shadow-2xl duration-300">
		<img
			:src="`${data.image}`"
			alt="image"
			class="h-[200px] w-full object-cover rounded-t-xl" />
		<div class="p-5 space-y-2">
			<div class="flex items-center gap-2 text-[#C2C2C3]">
				<Icon name="material-symbols:calendar-today" />
				<p class="text-[13px]">Posted on: {{ data.created_date }}</p>
			</div>
			<h3 class="lg:text-[24px] text-[20px] text-[#024E90] font-[600] h-20">
				{{ data.title }}
			</h3>
			<p class="text-[#5D5D5F] lg:text-[14px] text-[12px]">
				{{ cutter(70, data.subtitle) }}
			</p>
			<router-link
				:to="`/articles/${data.slug}`"
				class="flex items-center text-[#024E90] text-[15px]">
				Read more <Icon name="ic:baseline-chevron-right" />
			</router-link>
		</div>
	</router-link>
</template>

<style scoped></style>
