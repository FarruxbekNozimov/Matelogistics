<script setup>
import { reactive } from "vue";
const data = reactive({
	distance: null,
	date: null,
	vehicle_runs: null,
	ship_via_id: null,
	price_first_tarif: null,
	email: "",
	nbm: "",
	car_year: "",
	vehicle: null,
	ship_from: null,
	ship_to: null,
});
const steps = ref({ first: true, second: false, third: false });
const firstStepFunc = (ship_from, ship_to, ship_via_id) => {
	console.log(ship_from, steps.value);
	data.ship_from = ship_from;
	data.ship_to = ship_to;
	data.ship_via_id = ship_via_id;
	steps.value.first = false;
	steps.value.second = true;
};
const secondStepFunc = (date, vehicle) => {
	console.log(ship_from, steps.value);
	data.ship_from = ship_from;
	data.ship_to = ship_to;
	data.ship_via_id = ship_via_id;
	steps.value.first = false;
	steps.value.second = true;
};
const thirdStepFunc = (ship_from, ship_to, ship_via_id) => {
	console.log(ship_from, steps.value);
	data.ship_from = ship_from;
	data.ship_to = ship_to;
	data.ship_via_id = ship_via_id;
	steps.value.first = false;
	steps.value.second = true;
};
</script>

<template>
	<!-- <QuoteWait /> -->
	<div
		class="md:w-[400px] font-[500] space-y-3 shadow-xl bg-white p-4 rounded-3xl">
		<!-- <QuoteForm-1 :func="firstStepFunc" v-if="steps.first" /> -->
		<QuoteForm-2 :func="secondStepFunc" />
		<QuoteForm-3 :func="thirdStepFunc" v-if="steps.third" />
	</div>
</template>

<style scoped></style>
