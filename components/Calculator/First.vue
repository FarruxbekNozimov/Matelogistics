<script setup>
import { reactive } from "vue";

const data = reactive({
	acting: "individual",
	fullname: "",
	companyName: "",
	email: "",
	phones: [""],
});
</script>

<template>
	<h3 class="text-[#024E90] text-[24px] font-[700] mb-3">Shipper</h3>
	<p class="text-[14px] text-[#96ADC1] font-[400]">
		Where are we picking the vehicle up?
	</p>
	<CalculatorRadio
		legend="You are acting"
		:options="[
			{ value: 'individual', label: 'As an individual' },
			{ value: 'business', label: 'On behalf of a business' },
		]"
		:model="data.acting" />
	<div class="mt-3 mb-5 space-y-2">
		<h3 required class="text-[#024E90] text-[18px]">
			Your full name <span class="text-red-500">*</span>
		</h3>
		<div class="grid grid-cols-2 gap-5">
			<CalculatorInput placeholder="John Smith" />
		</div>
	</div>
	<div class="mt-3 mb-5 space-y-2">
		<h3 required class="text-[#024E90] text-[18px]">
			Your email <span class="text-red-500">*</span>
		</h3>
		<div class="grid grid-cols-2 gap-5">
			<CalculatorInput placeholder="johnsmith@gmail.com" />
		</div>
	</div>
	<div class="mt-3 mb-5 space-y-2">
		<h3 required class="text-[#024E90] text-[18px]">
			Your email <span class="text-red-500">*</span>
		</h3>
		<div class="grid grid-cols-2 gap-5">
			<CalculatorInput
				v-if="data.phones.length == 1"
				placeholder="(224) 300-5367"
				type="number" />
			<div
				v-if="data.phones.length > 1"
				v-for="(el, i) in data.phones"
				class="relative">
				<CalculatorInput placeholder="(224) 300-5367" type="number" />
				<Icon
					@click="() => data.phones.splice(i, 1)"
					name="radix-icons:cross-2"
					class="absolute right-5 top-4 text-2xl text-[#024E90] bg-[#F4F8FF] cursor-pointer" />
			</div>
			<div
				@click="() => data.phones.push('')"
				class="border border-dashed rounded-xl border-[#B5BED1] text-center flex items-center justify-center cursor-pointer p-4 px-5">
				<span class="text-[#024E90] text-[16px] font-[600]"
					>+ Add another number</span
				>
			</div>
		</div>
	</div>
	<CalculatorRedButton title="Pickup info" />
	<br />
	<p class="text-[#868686] text-[10px] font-[400] w-[485px]">
		By submitting your details, you agree to our privacy policy and the receipt
		of SMS notifications. Standard message and data rates may be applicable. To
		opt out, text STOP.
	</p>
	<br />
	<CalculatorPhone />
</template>

<style scoped>
.dollar {
	background: -webkit-linear-gradient(#008aff, #005ba8);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
