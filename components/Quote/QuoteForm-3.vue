<script setup></script>

<template>
	<div class="text-[20px]">
		<label class="font-[500]">Email to send a quote</label>
		<input
			type="number"
			class="p-2 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[20px] outline-none border border-gray-200"
			placeholder="Your email" />
	</div>
	<div class="text-[20px]">
		<label class="font-[500]">First available date</label>
		<input
			type="date"
			class="p-2 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[20px] outline-none border border-gray-200 text-gray-400"
			placeholder="Toyota" />
	</div>
	<div class="text-[20px]">
		<label class="font-[500]">Phone number</label>
		<input
			type="text"
			class="p-2 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[20px] outline-none border border-gray-200"
			placeholder="Your phone" />
	</div>
	<p class="text-[#012A44] text-[10px]">
		By providing your phone number and email, you are agreeing to our
		<router-link to="/privacy">Terms</router-link> ,
		<router-link to="/privacy">Privacy Policy</router-link>, which allows us to
		contact you via calls, texts, and emails. Agreeing to our terms is not a
		requirement for purchasing products, goods, or services. You may opt out of
		these communications at any time.
	</p>
	<button
		class="w-full outline-none text-white bg-[#E52E2E] hover:bg-red-700 font-[700] rounded-xl px-5 py-2.5 mb-2 text-[20px]">
		Request a quote
	</button>
	<div class="">
		<QuoteStepQuote num="3" />
	</div>
</template>

<style scoped></style>
