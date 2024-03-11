<script setup>
const toast = useToast();
import { actions } from "@/store/leads";
import { useRouter } from "vue-router";
const router = useRouter();

import { reactive } from "vue";
const data = reactive({
	date: null,
	vehicle_runs: null,
	ship_via_id: null,
	email: "",
	nbm: "",
	car_year: "",
	vehicle: null,
	vehicle_model: null,
	ship_from: null,
	ship_to: null,
});

const formatDate = (date) => {
	var parts = date.split("-");
	var formattedDate = [parts[1], parts[2], parts[0]].join("/");
	return formattedDate;
};
const showError = (title) => {
	return toast.add({
		title: title,
		icon: "material-symbols:error",
		color: "red",
		timeout: 3000,
	});
};

const steps = ref({ first: true, second: false, third: false, end: false });
const firstStepFunc = (ship_from, ship_to, ship_via_id) => {
	if (ship_from && ship_to && ship_via_id) {
		data.ship_from = ship_from;
		data.ship_to = ship_to;
		data.ship_via_id = ship_via_id;
		steps.value.first = false;
		steps.value.second = true;
	} else {
		showError("These cities are not available");
	}
};
const secondStepFunc = (car_year, vehicle, vehicle_model, vehicle_runs) => {
	if (car_year && vehicle && vehicle_model && vehicle_runs) {
		data.car_year = car_year;
		data.vehicle = vehicle;
		data.vehicle_model = vehicle_model;
		data.vehicle_runs = vehicle_runs ? "Yes" : "No";
		steps.value.second = false;
		steps.value.third = true;
	} else {
		showError("Please fill out the form");
	}
};
const thirdStepFunc = async (email, date, nbm) => {
	if (email && date && nbm) {
		if (nbm) {
			data.email = email;
			data.date = formatDate(date);
			data.nbm = nbm;
			steps.value.third = false;
			steps.value.end = true;
			await createLead(data);
		} else {
			showError("Phone number is incorrect");
		}
	} else {
		showError("Please fill out the form");
	}
};

const createLead = async (body) => {
	const payload = {
		date: body.date,
		vehicle_runs: body.vehicle_runs,
		ship_via_id: body.ship_via_id,
		email: body.email,
		nbm: `${body.nbm}`,
		car_year: body.car_year,
		vehicle: body.vehicle,
		vehicle_model: body.vehicle_model,
		ship_from: body.ship_from,
		ship_to: body.ship_to,
	};
	await actions.createLead(payload);
	steps.value.end = false;
	router.push("/thank-you");
};
</script>

<template>
	<div
		class="md:w-[300px] lg:w-[400px] font-[500] space-y-3 shadow-xl bg-white p-4 rounded-3xl">
		<QuoteWait v-if="steps.end" />
		<QuoteForm-1 :func="firstStepFunc" v-if="steps.first" />
		<QuoteForm-2 :func="secondStepFunc" v-if="steps.second" />
		<QuoteForm-3 :func="thirdStepFunc" v-if="steps.third" />
	</div>
</template>

<style scoped></style>
