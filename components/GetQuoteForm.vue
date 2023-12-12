<script setup></script>

<template>
	<div
		class="md:w-[400px] font-[500] shadow-xl space-y-3 bg-white p-4 rounded-3xl">
		<h2 class="lg:text-2xl font-[600] text-xl mb-3 pr-6">
			Get an instant quote or call us now
			<span class="text-[#008AFF]">(929) 592-3003</span>
		</h2>
		<div class="text-[20px]">
			<label class="font-[500]">Transport car FROM</label>
			<input
				type="text"
				class="p-2 px-4 bg-[#E8F0FF] w-full rounded-2xl font-[400] text-[20px] outline-none ring-1"
				placeholder="Zip or city" />
		</div>
		<div class="text-[20px]">
			<label class="font-[500]">Transport car TO</label>
			<input
				type="text"
				class="p-2 px-4 bg-[#E8F0FF] w-full rounded-2xl font-[400] text-[20px] outline-none ring-1"
				placeholder="Zip or city" />
		</div>
		<div class="text-[20px] flex items-center gap-2">
			<label class="font-[500] mr-2">Transport type</label>
			<div class="flex items-center">
				<input
					name="radio"
					id="radio-1"
					type="radio"
					class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
				<label for="radio-1" class="ms-2 text-sm font-medium text-gray-900">
					Open
				</label>
			</div>
			<div class="flex items-center">
				<input
					name="radio"
					id="radio-2"
					type="radio"
					class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
				<label for="radio-2" class="ms-2 text-sm font-medium text-gray-900">
					Enclosed
				</label>
			</div>
		</div>

		<button
			type="button"
			class="w-full outline-none text-white bg-[#E52E2E] hover:bg-red-700 font-[700] rounded-2xl px-5 py-2.5 mb-2 text-[20px]">
			Model of your cars
			<Icon name="ic:outline-chevron-right" class="text-2xl" />
		</button>
	</div>
</template>

<style scoped></style>
