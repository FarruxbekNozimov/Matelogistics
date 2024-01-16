<script setup>
defineProps(["func", "back"]);
import { reactive } from "vue";
const data = reactive({
	fullname: "",
	email: "",
});
</script>

<template>
	<div
		class="bg-white border border-[#ECF3FF] p-5 rounded-2xl shadow-xl space-y-3">
		<button
			@click="back"
			class="flex items-center text-[#024E90] text-[12px] font-[400]">
			<Icon name="tabler:arrow-left" class="text-lg" />
			<span>Back</span>
		</button>
		<h3 class="text-[#214690] font-[700] text-[20px]">One more thing... 😇</h3>
		<p class="text-[#868686] font-[600] text-[16px]">
			We'd love to know who's behind this feedback! Please fill in the following
			details.
		</p>
		<div class="flex items-center gap-5 mb-5">
			<UFormGroup required label="Fullname">
				<UInput
					v-model="data.fullname"
					variant="none"
					inputClass="text-[16px] font-[600] text-gray-600 bg-[#E8F0FF]"
					placeholder="John Smith" />
			</UFormGroup>
			<UFormGroup required label="Email">
				<UInput
					v-model="data.email"
					variant="none"
					inputClass="text-[16px] font-[600] text-gray-600 bg-[#E8F0FF]"
					placeholder="your@example.com" />
			</UFormGroup>
		</div>
		<button
			@click="() => (!data.fullname || !data.email ? '' : func(data))"
			class="w-full rounded-2xl p-2.5 text-white text-[16px] font-[900]"
			:class="
				!data.fullname || !data.email
					? 'bg-[#E52E2E]/50 cursor-auto'
					: 'bg-[#E52E2E]'
			">
			Done
		</button>

		<p class="text-[#868686] text-[10px] font-[600] text-center">
			By submitting your feedback, you agree to our terms, privacy policy, and
			grant permission for its use across social channels and in our marketing
			efforts.
		</p>
	</div>
</template>

<style scoped></style>
