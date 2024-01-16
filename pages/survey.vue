<script setup>
definePageMeta({ layout: "survey" });
const toast = useToast();
import { reactive } from "vue";
const comment = reactive({
	rate: 0,
	text: "We'd really appreciate hearing your thoughts on your recent experience with our service, what you like about it and why you'd recommend it. It means a lot to us! We'd really appreciate hearing your thoughts on your recent experience with our service, what you like about it and why you'd recommend it. It means a lot to us! We'd really appreciate hearing your thoughts on your recent experience with our service, what you like about it and why you'd recommend it. It means a lot to us! We'd really appreciate hearing your thoughts on your recent experience with our service, what you like about it and why you'd recommend it. It means a lot to us!",
	fullname: "",
	email: "",
});
const steps = reactive({ first: true, second: false, end: false });
const showError = (title) => {
	return toast.add({
		title: title,
		icon: "material-symbols:error",
		color: "red",
		timeout: 3000,
	});
};
const firstStep = (data) => {
	comment.rate = data.rate;
	comment.text = data.text;
	steps.first = false;
	steps.second = true;
};
const secondStep = (data) => {
	comment.fullname = data.fullname;
	comment.email = data.email;
	steps.second = false;
	steps.end = true;
};
const backFirst = () => {
	steps.first = true;
	steps.second = false;
};
</script>

<template>
	<div class="z-50 w-[430px]">
		<img src="/img/logo.png" alt="" class="z-50 mx-auto py-5" />
		<SurveyFirstStep :func="firstStep" v-if="steps.first" />
		<SurveySecondStep
			:back="backFirst"
			:func="secondStep"
			v-if="steps.second" />
		<SurveyThankyou :data="comment" v-if="steps.end" />
	</div>
</template>

<style scoped></style>
