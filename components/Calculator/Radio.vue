<script setup>
defineProps(["legend", "options", "model"]);
</script>

<template>
	<div class="mt-3 mb-5 space-y-2">
		<h3 class="text-[#024E90] text-[18px]">
			{{ legend }} <span class="text-red-500">*</span>
		</h3>
		<div class="flex items-center gap-5">
			<label
				v-for="(el, i) in options"
				:for="legend + i"
				class="flex items-center w-full p-4 px-5 bg-[#F4F8FF] rounded-xl border cursor-pointer checked:bg-black"
				:class="el.value == model ? 'border-[#008AFF]' : 'border-[#D2DBEC]'">
				<input
					:checked="el.value == model"
					:id="legend + i"
					type="radio"
					value=""
					:name="legend"
					class="w-6 h-6 text-blue-600 checked:bg-black"
					@change="() => (model = el.value)" />
				<span class="w-full ms-2 text-[#5D5D5F] text-[16px] font-[500]">
					{{ el.label }}
				</span>
			</label>
		</div>
	</div>
</template>

<style scoped></style>
