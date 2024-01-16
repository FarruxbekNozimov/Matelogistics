<script setup>
definePageMeta({ layout: "survey" });
</script>

<template>
	<div class="z-50 w-[430px]">
		<img src="/img/logo.png" alt="" class="z-50 mx-auto py-5" />
		<div
			class="bg-white border border-[#ECF3FF] p-5 rounded-2xl shadow-xl space-y-3">
			<SurveyFirstStep />
			<!-- <SurveySecondStep /> -->
		</div>
	</div>
</template>

<style scoped></style>
