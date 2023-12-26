<script setup>
defineProps(["func"]);
import { actions } from "@/store/car";
import { reactive, ref } from "vue";

const models = ref();
const makes = ref();

const options = [{ label: "YES" }, { label: "NO" }];
const form = reactive({
	date: "",
	makes: makes?.data?.results[0].name,
	model: "",
	runs: "yes",
});

const getMakes = async (val) => {
	makes.value = await actions.getMakes();
};

const searchModels = async () => {
	models.value = await actions.getModels(form.makes);
};

const people = [
	{ id: 1, name: "Wade Cooper" },
	{ id: 2, name: "Arlene Mccoy" },
	{ id: 3, name: "Devon Webb" },
	{ id: 4, name: "Tom Cook" },
];
const selected = ref(people[0].name);

getMakes();
// await searchModels();
</script>

<template>
	<div class="text-[20px]">
		<label class="font-[500]">Vehicle year</label>
		<UInput
			type="number"
			inputClass="p-2 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[17px] outline-none"
			placeholder="2024" />
	</div>
	<div class="text-[20px] relative">
		<QuoteLabel title="Vehicle make" />
		{{ makes?.data?.results[0].name }}
		<USelectMenu
			v-model="form.makes"
			selectClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[18px] outline-none cursor-pointer text-gray-500 "
			:options="makes?.data?.results"
			placeholder="Toyota"
			value-attribute="name"
			option-attribute="name" />
	</div>

	<div class="text-[20px] relative">
		<QuoteLabel title="Vehicle model" />
		<USelectMenu
			v-model="form.model"
			selectClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[18px] outline-none cursor-pointer text-gray-500 "
			:options="models?.data?.results"
			placeholder="Camry"
			value-attribute="name"
			option-attribute="name" />
	</div>

	<div class="text-[20px] flex items-center gap-2">
		<label class="text-[#012A44] text-[20px] font-[500] mr-2">
			Is it operable?
		</label>
		<div class="flex items-center">
			<input
				name="radio"
				id="radio-1"
				type="radio"
				class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
				checked />
			<label for="radio-1" class="ms-2 text-[16px] font-medium text-[#9A999B]">
				Yes
			</label>
		</div>
		<div class="flex items-center">
			<input
				name="radio"
				id="radio-2"
				type="radio"
				class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
			<label for="radio-2" class="ms-2 text-[16px] font-medium text-[#9A999B]">
				No
			</label>
		</div>
	</div>
	<RedButton
		title="Confirmation details"
		:func="() => func(form.name, `${form.makes} ${form.model}`)" />
	<div class="">
		<QuoteStepQuote num="2" />
	</div>
</template>

<style scoped></style>
