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
	data.ship_from = ship_from;
	data.ship_to = ship_to;
	data.ship_via_id = ship_via_id;
};
</script>

<template>
	<!-- <QuoteWait /> -->
	<QuoteForm-1 :func="firstStepFunc" v-if="steps.first" />
	<QuoteForm-2 :func="firstStepFunc" v-if="steps.second" />
	<QuoteForm-3 :func="firstStepFunc" v-if="steps.third" />
</template>
/

<style scoped></style>
