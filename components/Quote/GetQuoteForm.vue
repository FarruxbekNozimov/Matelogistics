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
	ship_from: null,
	ship_to: null,
});

const formatDate = (date) => {
	var parts = date.split("-");
	var formattedDate = [parts[1], parts[2], parts[0]].join("/");
	console.log(formattedDate);
	return formattedDate;
};
const showError = (title) => {
	return toast.add({
		title: title,
		icon: "material-symbols:error",
		color: "red",
		timeout: 5000,
	});
};

const steps = ref({ first: true, second: false, third: false, end: false });
const firstStepFunc = (ship_from, ship_to, ship_via_id) => {
	console.log(ship_from && ship_to && ship_via_id);
	if (ship_from && ship_to && ship_via_id) {
		console.log(ship_from, ship_to, ship_via_id);
		data.ship_from = ship_from;
		data.ship_to = ship_to;
		data.ship_via_id = ship_via_id;
		steps.value.first = false;
		steps.value.second = true;
	} else {
		showError("These cities are not available");
	}
};
const secondStepFunc = (car_year, vehicle, vehicle_runs) => {
	console.log(car_year, vehicle, vehicle_runs);
	if (car_year && vehicle && vehicle_runs) {
		data.car_year = car_year;
		data.vehicle = vehicle;
		data.vehicle_runs = vehicle_runs ? "Yes" : "No";
		steps.value.second = false;
		steps.value.third = true;
	} else {
		showError("Please fill out the form");
	}
};
const thirdStepFunc = async (email, date, nbm) => {
	console.log(email, date, nbm);
	if (email && date && nbm) {
		var myPhoneRegex =
			/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})\s*(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)\s*)?$/i;
		if (myPhoneRegex.test(nbm)) {
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
	console.log(body, body.date);
	const payload = {
		date: body.date,
		vehicle_runs: body.vehicle_runs,
		ship_via_id: body.ship_via_id,
		email: body.email,
		nbm: `${body.nbm}`,
		car_year: body.car_year,
		vehicle: body.vehicle,
		ship_from: body.ship_from,
		ship_to: body.ship_to,
	};
	console.log(body);
	await actions.createLead(payload);
	steps.value.end = false;
	router.push("/thanks");
};
</script>

<template>
	<div
		class="max-w-[400px] font-[500] space-y-3 shadow-xl bg-white p-4 rounded-3xl">
		<QuoteWait v-if="steps.end" />
		<QuoteForm-1 :func="firstStepFunc" v-if="steps.first" />
		<QuoteForm-2 :func="secondStepFunc" v-if="steps.second" />
		<QuoteForm-3 :func="thirdStepFunc" v-if="steps.third" />
	</div>
</template>

<style scoped></style>
