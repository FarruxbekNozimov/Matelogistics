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
	<div class="mx-auto sm:w-full lg:w-[1212px]">
		<div class="px-8 bg-gradient-to-r from-[#008AFF]/20 to-[#005BA8]/20 pt-5 pb-1 rounded-[23px]">
			<div
				data-aos="zoom-in"
				class="flex items-center md:justify-around justify-between text-center md:pr-32 pr-20 mb-5 ">
				<div class="relative" v-for="(el, i) in counters">
					<img src="/img/back-pattern.png" class="md:h-[145px] h-[45px]" alt="" />
					<div
						class="bg-white absolute lg:top-[30px] top-1 left-1/2 rounded-full text-center md:p-4 p-1 shadow-lg md:w-[224px] w-[110px] z-50">
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
		</div>
	</div>
</template>

<style scoped></style>
