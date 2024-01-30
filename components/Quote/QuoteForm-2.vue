<script setup>
defineProps(["func"]);
import { actions } from "@/store/car";
import { reactive, ref } from "vue";

const models = ref();
const makes = ref();

const form = reactive({
	car_year: "",
	makes: "BMW",
	model: "M5",
	runs: true,
	selected_makes: {},
});

const getMakes = async () => {
	makes.value = await actions.getMakes();
	return makes.value;
};

const searchModels = async (val) => {
	models.value = await actions.getModels(val);
	form.model = models.value.data?.results[0].name;
	return models.value;
};

getMakes();
searchModels(4);
</script>

<template>
	<div class="">
		<div class="text-[20px]">
			<label class="font-[500]">Vehicle year</label>
			<UInput
				type="number"
				inputClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[18px]  outline-none cursor-pointer text-gray-500 "
				placeholder="2024"
				v-model="form.car_year" />
		</div>
		<div class="text-[20px] relative">
			<QuoteLabel title="Vehicle make" />
			<USelectMenu
				v-model="form.makes"
				selectClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[18px]  outline-none cursor-pointer text-gray-500 "
				:options="makes?.data?.results"
				placeholder="BMW"
				value-attribute="name"
				option-attribute="name"
				@change="
					(e) => {
						console.log(e);
						form.selected_makes = e.target;
						searchModels(makes?.data?.results[0].id);
					}
				" />
		</div>

		<div class="text-[20px] relative">
			<QuoteLabel title="Vehicle model" />
			<USelectMenu
				v-model="form.model"
				selectClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[18px] outline-none cursor-pointer text-gray-500 "
				:options="models?.data?.results"
				placeholder="M5"
				value-attribute="name"
				option-attribute="name" />
		</div>

		<div class="text-[20px] flex items-center gap-2">
			<label class="text-[#012A44] text-[20px] font-[500] mr-2">
				Is it operable?
			</label>
			<span class="text-[#012A44] text-[17px] font-[500] mr-2">NO</span>
			<UToggle
				:ui="{ inactive: 'bg-gray-400', active: 'bg-blue-500' }"
				v-model="form.runs" />
			<span class="text-[#012A44] text-[17px] font-[500] mr-2">YES</span>
		</div>
		<RedButton
			title="Confirmation details"
			:func="
				() => func(form.car_year, `${form.makes} ${form.model}`, form.runs)
			" />
		<div class="">
			<QuoteStepQuote num="2" />
		</div>
	</div>
</template>

<style scoped></style>
