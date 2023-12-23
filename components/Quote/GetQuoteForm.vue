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
</script>

<template>
	<!-- <QuoteWait /> -->
	<!-- <QuoteForm-1 v-if="!(data.ship_from && data.ship_to)" /> -->
	<!-- <QuoteForm-2 v-if="!(data.car_year && data.ship_to && data.vehicle_runs)" /> -->
	<!-- <QuoteForm-3 v-if="!(data.email && data.date && data.ship_to)" /> -->
</template>

<style scoped></style>
