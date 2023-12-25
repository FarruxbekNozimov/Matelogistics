<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const state = reactive({
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: "",
});

async function onSubmit(event: FormSubmitEvent<any>) {
	console.log(event.data);
}
</script>

<template>
	<div class="space-y-4" @submit="onSubmit">
		<UFormGroup label="Email" name="email">
			<UInput v-model="state.email" />
		</UFormGroup>

		<UFormGroup label="Password" name="password">
			<UInput v-model="state.password" type="password" />
		</UFormGroup>

		<UButton type="submit"> Submit </UButton>
	</div>
</template>
