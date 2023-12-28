<script setup>
defineProps(["func"]);
import { reactive } from "vue";

const form = reactive({
	email: "",
	date: "",
	nbm: "",
});
</script>

<template>
	<div class="text-[20px]">
		<label class="font-[500]">Email to send a quote</label>
		<UInput
			type="email"
			inputClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[18px]  outline-none cursor-pointer text-gray-500 "
			placeholder="Your email"
			v-model="form.email" />
	</div>
	<div class="text-[20px]">
		<label class="font-[500]">First available date</label>
		<UInput
			type="date"
			inputClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[18px]  outline-none cursor-pointer text-gray-500 "
			placeholder="Date"
			v-model="form.date" />
	</div>
	<div class="text-[20px]">
		<label class="font-[500]">Phone number</label>
		<UInput
			type="number"
			inputClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[18px]  outline-none cursor-pointer text-gray-500 "
			placeholder="(___) ___ - ___"
			v-model="form.nbm" />
	</div>
	<p class="text-[#012A44] text-[10px]">
		By providing your phone number and email, you are agreeing to our
		<router-link to="/terms" class="text-blue-400">Terms</router-link> ,
		<router-link to="/privacy" class="text-blue-400">Privacy Policy</router-link
		>, which allows us to contact you via calls, texts, and emails. Agreeing to
		our terms is not a requirement for purchasing products, goods, or services.
		You may opt out of these communications at any time.
	</p>
	<RedButton
		title="Request a quote"
		:func="() => func(form.email, form.date, form.nbm)" />
	<div class="">
		<QuoteStepQuote num="3" />
	</div>
</template>

<style scoped></style>
