<script setup>
defineProps(["func"]);
import { actions } from "@/store/car";
import { reactive, ref } from "vue";

const models = ref();
const makes = ref();
const form = reactive({
  vehicle_year: "",
  vehicle_make: "",
  vehicle_model: "",
  runs: true,
  selected_makes: {},
});
const make = async () => {
getMakes();
};

const getMakes = async () => {
  makes.value = await actions.getMakes();
  for (let index = 0; index < makes.value.data.results.length; index++) {
    if (form.makes == makes.value.data.results[index].name) {
      if (index == 0) {
        index;
		console.log("index +1");
      }
      searchModels( makes.value.data.results[index].id);
    }
  }

  return makes.value;
};
const searchModels = async (val) => {
  console.log(val);
  models.value = await actions.getModels(val);
  form.model = models.value.data?.results[0].name;
  return models.value;
};

getMakes();
</script>

<template>
  <div class="text-[20px]">
    <label class="font-[500]">Vehicle year</label>
    <UInput
      type="number"
      inputClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[18px]  outline-none cursor-pointer text-gray-600 "
      placeholder="2024"
      v-model="form.car_year"
    />
  </div>
  <div class="text-[20px] relative">
    <QuoteLabel title="Vehicle make" />
    <USelectMenu
      v-model="form.makes"
      selectClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[100] text-[18px]  outline-none cursor-pointer text-gray-600 "
      :options="makes?.data?.results"
      placeholder="Select"
      :style="{ color: form.makes ? '#616161' : '#9E9E9E' }"
      searchable
      value-attribute="name"
      option-attribute="name"
      @change="make"
    />
  </div>

  <div class="text-[20px] relative">
    <QuoteLabel title="Vehicle model" />
    <USelectMenu
      v-model="form.model"
      selectClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[18px] outline-none cursor-pointer text-gray-600 "
      :options="models?.data?.results"
      placeholder="Select"
      :style="{ color: form.makes ? '#616161' : '#9E9E9E' }"
      searchable
      value-attribute="name"
      option-attribute="name"
    />
  </div>

  <div class="text-[20px] flex items-center gap-2">
    <label class="text-[#012A44] text-[20px] font-[500] mr-2">
      Is it operable?
    </label>
    <span class="text-[#012A44] text-[17px] font-[500] mr-2">NO</span>
    <UToggle
      :ui="{ inactive: 'bg-gray-400', active: 'bg-blue-500' }"
      v-model="form.runs"
    />
    <span class="text-[#012A44] text-[17px] font-[500] mr-2">YES</span>
  </div>
  <RedButton
    title="Confirmation details"
    :func="() => func(form.car_year, form.makes, form.model, form.runs)"
  />
  <div class="">
    <QuoteStepQuote num="2" />
  </div>
</template>

<style scoped></style>
