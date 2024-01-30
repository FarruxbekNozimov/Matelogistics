<script setup>
defineProps(["next"]);
</script>

<template>
	<h3 class="text-[#024E90] text-[24px] font-[700] mb-3">Delivery details</h3>
	<p class="text-[14px] text-[#96ADC1] font-[400]">
		Where are we delivering the vehicle?
	</p>
	<div class="mt-3 mb-5 space-y-2">
		<h3 required class="text-[#024E90] text-[18px]">
			Exact pickup address <span class="text-red-500">*</span>
		</h3>
		<div class="grid grid-cols-2 gap-5">
			<CalculatorInput placeholder="Street address" />
			<CalculatorInput placeholder="Apt, Suite etc (optional)" />
		</div>
	</div>
	<CalculatorRadio
		legend="New York, NY 10025 is"
		:options="[
			{ value: 'residential', label: 'A residential address' },
			{ value: 'business', label: 'A business address' },
		]"
		model="residential" />
	<CalculatorRadio
		legend="Who do we contact about the pick up?"
		:options="[
			{ value: 'me', label: 'Contact me' },
			{ value: 'else', label: 'Contact someone else' },
		]"
		model="me" />
	<div class="mt-3 mb-5 space-y-2">
		<h3 class="text-[#024E90] text-[18px]">
			Do you have any special instructions?
		</h3>
		<UTextarea
			variant="none"
			autoresize
			:rows="4"
			textareaClass="block p-3 w-full rounded-xl bg-[#F4F8FF] border border-gray-300 outline-none text-[#024E90] text-[16px]"
			placeholder="Type more about it here" />
	</div>
	<CalculatorRedButton title="Book shipment" :func="next" />
	<br /><br />
	<CalculatorPhone />
</template>

<style scoped>
.dollar {
	background: -webkit-linear-gradient(#008aff, #005ba8);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
