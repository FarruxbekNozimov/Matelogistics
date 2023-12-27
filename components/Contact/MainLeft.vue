<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const options = [
	"I want to get a quote",
	"I want to book a quote",
	"I have an order",
	"I need an accounting department",
	"I am a carrier",
];

const state = reactive({
	name: "",
	email: "",
	nbm: "",
	subject: options[0],
	message: "",
});
</script>

<template>
	<div class="space-y-4">
		<UFormGroup label="Name" name="name">
			<UInput
				color="blue"
				variant="none"
				v-model="state.name"
				inputClass="text-gray-500 p-2 px-3 rounded-xl text-[16px] font-[400] bg-[#E8F0FF] border border-white focus:border-blue-500"
				placeholder="Mike Thomas" />
		</UFormGroup>
		<UFormGroup label="Email" name="email">
			<UInput
				color="blue"
				variant="none"
				v-model="state.email"
				type="email"
				inputClass="text-gray-500 p-2 px-3 rounded-xl text-[16px] font-[400] bg-[#E8F0FF] border border-white focus:border-blue-500"
				placeholder="Your email" />
		</UFormGroup>
		<UFormGroup label="Phone" name="phone">
			<UInput
				color="blue"
				variant="none"
				v-model="state.nbm"
				type="number"
				inputClass="text-gray-500 p-2 px-3 rounded-xl text-[16px] font-[400] bg-[#E8F0FF] border border-white focus:border-blue-500"
				placeholder="Your phone number" />
		</UFormGroup>
		<UFormGroup label="Phone" name="phone">
			<USelectMenu
				color="blue"
				variant="none"
				v-model="state.subject"
				selectClass="text-gray-500 p-2 px-3 rounded-xl text-[16px] font-[400] bg-[#E8F0FF] border border-white focus:border-blue-500"
				:options="options" />
		</UFormGroup>
		<UTextarea
			autoresize
			selectClass="text-gray-500 p-2 px-3 rounded-xl text-[16px] font-[400] bg-[#E8F0FF] border border-white focus:border-blue-500"
			placeholder="Search..."
			model-value="" />

		<UButton
			type="submit"
			class="bg-[#008AFF] hover:bg-blue-500 rounded-xl p-3 px-7 text-[16px]">
			Send message
		</UButton>
	</div>
</template>
