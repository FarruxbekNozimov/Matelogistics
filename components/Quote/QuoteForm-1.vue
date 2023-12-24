<script setup>
defineProps(["func"]);
import { actions } from "@/store/locations";
import { ref } from "vue";

const cities = ref();
const form = reactive({
	from: "",
	from_active: false,
	to: "",
	to_active: false,
	type: "",
});
const data = reactive({
	ship_from: "",
	ship_to: "",
	ship_via_id: 1,
});

const searchCities = async (val) => {
	if (!val) {
		cities.value = [];
	} else {
		cities.value = await actions.getSearchCities(val);
	}
	return cities.value;
};
</script>

<template>
	<h2 class="text-[#012A44] lg:text-2xl font-[600] text-xl mb-3 pr-6">
		Get an instant quote or call us now
		<span class="text-[#008AFF]">(929) 592-3003</span>
	</h2>
	<div class="text-[20px] relative">
		<label class="text-[#012A44] font-[500] lb">Transport car FROM</label>
		<UInput
			type="text"
			inputClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[18px] outline-none cursor-pointer text-gray-500"
			placeholder="Zip or city"
			v-model="form.from"
			@input="(e) => searchCities(e.target.value)"
			@focus="(form.from_active = true), (form.to_active = false)" />
		<div
			v-if="cities?.data?.results.length && form.from_active"
			class="z-10 absolute top-20 rounded-xl w-full max-h-52 overflow-y-auto bg-white border border-gray-300 shadow-lg">
			<div v-if="cities?.pending" class="text-center">
				<Icon name="eos-icons:bubble-loading" class="text-2xl text-[#005BA8]" />
			</div>
			<div v-else v-for="el in cities.data.results">
				<p
					@click="
						() => {
							form.from = `${el.name} ${el.zip}`;
							data.ship_from = el.id;
							form.from_active = false;
						}
					"
					class="w-full px-3 pt-2 hover:bg-gray-200 duration-300 cursor-pointer text-[15px] text-[#024E90]">
					{{ el.name }} {{ el.zip }}
				</p>
			</div>
		</div>
	</div>

	<div class="text-[20px] relative">
		<label class="text-[#012A44] font-[500]">Transport car TO</label>
		<UInput
			type="text"
			inputClass="py-2.5 px-4 bg-[#E8F0FF] w-full rounded-xl font-[400] text-[18px] outline-none cursor-pointer text-gray-500"
			placeholder="Zip or city"
			v-model="form.to"
			@input="(e) => searchCities(e.target.value)"
			@focus="(form.to_active = true), (form.from_active = false)" />
		<div
			v-if="cities?.data?.results.length && form.to_active"
			class="z-10 absolute top-20 rounded-xl w-full max-h-52 overflow-y-auto bg-white border border-gray-300 shadow-lg">
			<div v-if="cities?.pending" class="text-center">
				<Icon name="eos-icons:bubble-loading" class="text-2xl text-[#005BA8]" />
			</div>
			<div v-else v-for="el in cities.data.results">
				<p
					@click="
						() => {
							form.to = `${el.name} ${el.zip}`;
							data.ship_to = el.id;
							form.to_active = false;
						}
					"
					class="w-full px-3 pt-2 hover:bg-gray-200 duration-300 cursor-pointer text-[15px] text-[#024E90]">
					{{ el.name }} {{ el.zip }}
				</p>
			</div>
		</div>
	</div>
	<div class="text-[20px] flex items-center gap-2 mb-5">
		<label class="text-[#012A44] font-[500] mr-2">Transport type</label>
		<div class="flex items-center">
			<input
				name="radio"
				id="radio-1"
				type="radio"
				class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
				checked
				@change="() => (data.ship_via_id = 1)" />
			<label for="radio-1" class="ms-2 text-[16px] font-medium text-[#9A999B]">
				Open
			</label>
		</div>
		<div class="flex items-center">
			<input
				name="radio"
				id="radio-2"
				type="radio"
				class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
				@change="() => (data.ship_via_id = 2)" />
			<label for="radio-2" class="ms-2 text-[16px] font-medium text-[#9A999B]">
				Enclosed
			</label>
		</div>
	</div>
	<RedButton
		title="Model of your car"
		:func="() => func(data.ship_from, data.ship_to, data.ship_via_id)" />
</template>

<style scoped></style>
