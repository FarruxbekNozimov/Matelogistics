<script setup></script>

<template>
	<div
		class="md:w-[400px] font-[500] shadow-xl space-y-3 bg-white p-4 rounded-3xl">
		<div class="text-[20px]">
			<label class="font-[500]">Vehicle year</label>
			<input
				type="number"
				class="p-2 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[20px] outline-none border border-gray-200"
				placeholder="2024" />
		</div>
		<div class="text-[20px]">
			<label class="font-[500]">Vehicle make</label>
			<input
				type="text"
				class="p-2 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[20px] outline-none border border-gray-200"
				placeholder="Toyota" />
		</div>
		<div class="text-[20px]">
			<label class="font-[500]">Vehicle model</label>
			<input
				type="text"
				class="p-2 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[20px] outline-none border border-gray-200"
				placeholder="Camry" />
		</div>
		<div class="text-[20px] flex items-center gap-2">
			<label class="font-[500] mr-2">Is it operable?</label>
			<div class="flex items-center">
				<input
					name="radio"
					id="radio-1"
					type="radio"
					class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
					checked />
				<label
					for="radio-1"
					class="ms-2 text-[16px] font-medium text-[#9A999B]">
					Yes
				</label>
			</div>
			<div class="flex items-center">
				<input
					name="radio"
					id="radio-2"
					type="radio"
					class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
				<label
					for="radio-2"
					class="ms-2 text-[16px] font-medium text-[#9A999B]">
					No
				</label>
			</div>
		</div>
		<button
			class="w-full outline-none text-white bg-[#E52E2E] hover:bg-red-700 font-[700] rounded-xl px-5 py-2.5 mb-2 text-[20px]">
			Confirmation details
			<Icon name="ic:outline-chevron-right" class="text-2xl" />
		</button>
		<div class="">
			<QuoteStepQuote num="2" />
		</div>
	</div>
</template>

<style scoped></style>
