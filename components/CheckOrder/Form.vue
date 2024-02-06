<script setup></script>

<template>
	<div
		class="max-w-[400px] font-[500] space-y-3 shadow-xl bg-white p-4 rounded-3xl"
		style="
			box-shadow: 7px 10px 85px 79px rgba(115, 171, 255, 0.29);
			-webkit-box-shadow: 11px 10px 85px 79px rgba(115, 171, 255, 0.29);
			-moz-box-shadow: 11px 10px 85px 79px rgba(115, 171, 255, 0.29);
		">
		<h2 class="text-[#012A44] lg:text-2xl font-[600] text-xl mb-3">
			Check the order status online or call us now
			<a href="tel:+19295923003" class="text-[#008AFF]">(929) 592-3003</a>
		</h2>

		<div class="text-[20px] relative">
			<QuoteLabel title="Enter the order ID" />
			<UInput
				type="text"
				variant="none"
				inputClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] md:text-[18px] text-[15px] outline-none cursor-pointer text-gray-500"
				placeholder="30400000-ML">
			</UInput>
		</div>

		<button
			class="bg-gradient-to-r from-[#008AFF] to-[#005BA8] text-white bg-[#E52E2E] w-full font-[700] text-[20px] rounded-3xl p-2">
			Check status
		</button>
		<button
			class="text-[#008AFF] hover:bg-[#008AFF] hover:text-white duration-300 w-full font-[700] text-[20px] rounded-2xl p-2 border border-[#008AFF]">
			Get an instant new quote
		</button>
	</div>
</template>

<style scoped></style>
