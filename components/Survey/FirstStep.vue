<script setup>
defineProps(["func"]);
import { reactive } from "vue";
const data = reactive({
	rate: 0,
	text: "",
});
</script>

<template>
	<div
		class="bg-white border border-[#ECF3FF] p-5 rounded-2xl shadow-xl space-y-3">
		<h3 class="text-[#214690] font-[700] text-[20px]">
			Do you love using our service?
		</h3>
		<p class="text-[#868686] font-[600] text-[16px]">
			We'd really appreciate hearing your thoughts on your recent experience
			with our service, what you like about it and why you'd recommend it. It
			means a lot to us!
		</p>
		<div class="flex flex-row-reverse justify-center gap-2 cursor-pointer">
			<Icon
				v-for="el in 5"
				@click="() => (data.rate = 6 - el)"
				name="material-symbols:kid-star"
				:class="5 - el < data.rate ? '[&:not(:hover)]:text-yellow-300' : ''"
				class="text-gray-300 peer peer-hover:text-yellow-300 hover:text-yellow-300 text-4xl" />
		</div>
		<UTextarea
			v-model="data.text"
			color="grey"
			autoresize
			textareaClass="text-[#868686] bg-[#E8F0FF] text-[16px] rounded-xl shadow mb-3"
			placeholder="Write your comment here..." />
		<button
			@click="() => (!data.rate || !data.text ? '' : func(data))"
			class="w-full rounded-2xl p-2.5 text-white text-[16px] font-[900]"
			:class="
				!data.rate || !data.text
					? 'bg-[#E52E2E]/50 cursor-auto'
					: 'bg-[#E52E2E]'
			">
			Submit
		</button>
	</div>
</template>

<style scoped></style>
