<script setup>
const toast = useToast();
definePageMeta({ layout: "survey" });
import { reactive } from "vue";
const comment = reactive({
	rate: 0,
	text: "We'd really appreciate hearing your thoughts on your recent experience with our service, what you like about it and why you'd recommend it. It means a lot to us! We'd really appreciate hearing your thoughts on your recent experience with our service, what you like about it and why you'd recommend it. It means a lot to us! We'd really appreciate hearing your thoughts on your recent experience with our service, what you like about it and why you'd recommend it. It means a lot to us! We'd really appreciate hearing your thoughts on your recent experience with our service, what you like about it and why you'd recommend it. It means a lot to us!",
	fullname: "",
	email: "",
});
const steps = reactive({ first: true, second: false });
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
	comment.rate = data.rate;
	steps.first = false;
	steps.second = true;
};
</script>

<template>
	<div class="z-50 w-[430px]">
		<img src="/img/logo.png" alt="" class="z-50 mx-auto py-5" />
		<!-- <SurveyFirstStep :func="firstStep" v-if="steps.first" />
			<SurveySecondStep v-if="steps.second" /> -->
		<SurveyThankyou :data="comment" />
	</div>
</template>

<style scoped></style>
