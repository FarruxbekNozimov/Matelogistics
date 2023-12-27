<script setup>
useSeoMeta({ title: "MateLogistics" });
import { privacy } from "@/data/privacy";
</script>

<template>
	<div>
		<SectionsBanner
			title="Terms and Conditions"
			text="At Mate Logistics, we are dedicated to provide you with comprehensive and reliable auto transport solutions. "
			noForm="1" />
		<br />
		<UContainer>
			<div v-for="(el, i) in privacy" class="px-20 mb-10">
				<h3 class="text-[#214690] text-[30px] font-[700] mb-5">{{ i }}</h3>
				<p class="text-[#5D5D5F] text-[16px]">{{ el }}</p>
			</div>
			<div class="px-20 mb-10">
				<p class="text-[#5D5D5F] text-[16px]">
					By submitting the Service Agreement, you acknowledge that you have
					read, understood, and agreed to these terms and conditions.
				</p>
				<br />
				<br />
				<p class="text-[#5D5D5F] text-[16px]">
					This Agreement is effective as of December 15, 2023.
				</p>
			</div>
		</UContainer>
		<SectionsLetWorkTransport />
	</div>
</template>

<style scoped></style>
