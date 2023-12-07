<script setup>
const counters = {
	"Carrier network": "10,000+",
	"Satisfied customers": "1,100+",
	"Vehicles delivered": "1,220+",
};
</script>

<template>
	<div class="flex items-center justify-around pr-32 mb-5">
		<div class="relative" v-for="(el, i) in counters">
			<img src="@/assets/img/back-pattern.png" class="h-[145px]" alt="" />
			<div
				class="bg-white absolute top-[30px] left-1/2 rounded-full w-auto text-center p-4 shadow-lg w-[225px]">
				<p class="text-[25px] space-between text-[#024E90] font-[700]">
					{{ el }}
				</p>
				<p class="text-[16px] space-between text-[#9A999B] font-[400]">
					{{ i }}
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
