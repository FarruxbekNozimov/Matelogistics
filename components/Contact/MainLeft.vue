<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const state = reactive({
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: "",
});
</script>

<template>
	<div class="space-y-4">
		<UFormGroup label="Name" name="name">
			<UInput
				v-model="state.name"
				inputClass="p-2 px-3 rounded-xl text-[16px] font-[400] bg-[#E8F0FF]"
				placeholder="Mike Thomas" />
		</UFormGroup>
		<UFormGroup label="Email" name="email">
			<UInput
				v-model="state.email"
				type="email"
				inputClass="p-2 px-3 rounded-xl text-[16px] font-[400] bg-[#E8F0FF]"
				placeholder="Your email" />
		</UFormGroup>

		<UButton
			type="submit"
			class="bg-[#008AFF] hover:bg-blue-500 rounded-2xl p-3 px-7 text-[16px]">
			Send message
		</UButton>
	</div>
</template>
