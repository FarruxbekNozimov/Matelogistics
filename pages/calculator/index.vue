<script setup>
definePageMeta({ layout: "calculator" });
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const step = ref(0);

const nextPage = () => {
	if (step.value == 3) {
		router.push("/calculator/thank-you");
	} else {
		step.value++;
	}
};
</script>

<template>
	<UContainer>
		<div class="bg-white border border-[#E9EFFA] rounded-2xl shadow p-5 py-10">
			<div class="mb-5" v-if="step">
				<CalculatorStepper
					:num="step"
					:arr="['Shipper', 'Pickup', 'Delivery', 'Thank you!']" />
				<button
					class="bg-[#98C9FF]/20 hover:bg-[#98C9FF]/70 duration-150 p-2 px-4 text-[#005BA8] gap-1 flex items-center rounded-xl">
					<Icon
						name="material-symbols:arrow-left-alt-rounded"
						class="text-2xl" />
					<span class="font-[700]">Back</span>
				</button>
			</div>
			<div class="lg:flex justify-between gap-14">
				<div class="lg:w-[65%] lg:m-0 mb-5">
					<CalculatorStart :next="nextPage" v-if="step == 0" />
					<CalculatorFirst :next="nextPage" v-if="step == 1" />
					<CalculatorSecond :next="nextPage" v-if="step == 2" />
					<CalculatorThird :next="nextPage" v-if="step == 3" />
					<CalculatorThird :next="nextPage" v-if="step == 4" />
				</div>
				<div class="lg:w-[35%]">
					<CalculatorRightside />
				</div>
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
