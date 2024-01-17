<script setup>
definePageMeta({ layout: "calculator" });
import { ref } from "vue";
const step = ref(1);
</script>

<template>
	<UContainer>
		<div class="bg-white border border-[#E9EFFA] rounded-2xl shadow p-5 py-10">
			<div class="mb-5" v-if="step">
				<CalculatorStepper
					:num="1"
					:arr="['Shipper', 'Pickup', 'Delivery', 'Thank you!']" />
				<button
					class="bg-[#98C9FF]/20 hover:bg-[#98C9FF]/70 duration-150 p-2 px-4 text-[#005BA8] gap-1 flex items-center rounded-xl">
					<Icon
						name="material-symbols:arrow-left-alt-rounded"
						class="text-2xl" />
					<span class="font-[700]">Back</span>
				</button>
			</div>
			<div class="flex justify-between gap-14">
				<div class="w-[65%]">
					<CalculatorStart v-if="step == 0" />
					<CalculatorFirst v-if="step == 1" />
				</div>
				<div class="w-[35%]">
					<CalculatorRightside />
				</div>
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
