<script setup>
import { onMounted, reactive } from "vue";
const counters = reactive({
	"Carrier network": [0, 10000],
	"Satisfied customers": [0, 1100],
	"Vehicles delivered": [0, 1220],
});

onMounted(() => {
	setInterval(() => {
		for (let i in counters) {
			if (counters[i][0] > 1000) {
				counters[i][0] = counters[i][1];
			}
			if (counters[i][0] < counters[i][1]) {
				counters[i][0] += 1;
			}
		}
	}, 1);
});
</script>

<template>
	<UContainer>
		<div class="md:flex items-center justify-around text-center md:pr-32 mb-5">
			<div class="relative" v-for="(el, i) in counters">
				<img src="@/assets/img/back-pattern.png" class="md:h-[145px]" alt="" />
				<div
					class="bg-white absolute top-[30px] left-1/2 rounded-full text-center p-4 shadow-lg md:w-[224px] w-[113px]">
					<p
						class="md:text-[25px] text-[13px] space-between text-[#024E90] font-[700]">
						{{ el[0] }}+
					</p>
					<p
						class="md:text-[16px] text-[9px] space-between text-[#9A999B] font-[400]">
						{{ i }}
					</p>
				</div>
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
