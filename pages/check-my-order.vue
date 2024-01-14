<script setup></script>

<template>
	<div class="pt-20 flex items-center justify-center">
		<div
			class="w-[400px] font-[500] space-y-3 shadow-xl bg-white p-4 rounded-3xl">
			<h2 class="text-[#012A44] lg:text-2xl font-[600] text-xl mb-3">
				Check the order status online or call us now
				<a href="tel:(929) 592-3003" class="text-[#008AFF]">(929) 592-3003</a>
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
				class="text-white bg-[#E52E2E] w-full font-[700] text-[20px] rounded-3xl p-2">
				Check status
			</button>
			<button
				class="text-[#008AFF] bg-white w-full font-[700] text-[20px] rounded-3xl p-2 border border-[#008AFF]">
				Get an instant new quote
			</button>
		</div>
	</div>
</template>
<style scoped></style>
