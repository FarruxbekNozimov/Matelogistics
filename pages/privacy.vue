<script setup>
useSeoMeta({ title: "MateLogistics" });
import { privacy } from "@/data/privacy";
</script>

<template>
	<div>
		<SectionsBanner
			title="Transparent Pricing with No Hidden Fees for Your Auto Needs"
			text="At Mate Logistics, we are dedicated to provide you with comprehensive and reliable auto transport solutions. " />
		<br />
		<Container>
			<div v-for="(el, i) in privacy" class="px-20 mb-10">
				<h3 class="text-[#214690] text-[30px] font-[700] mb-5">{{ i }}</h3>
				<p class="text-[#5D5D5F] text-[16px]">{{ el }}</p>
			</div>
		</Container>
	</div>
</template>

<style scoped></style>
