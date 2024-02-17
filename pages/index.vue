<script setup>
useSeoMeta({
	title: "Transparent Auto Transport Company | Mate Logistics",
	ogTitle: "Transparent Auto Transport Company | Mate Logistics",
	description: "Transparent Pricing with No Hidden Fees for Your Auto Transportation Needs",
	ogDescription: "At Mate Logistics, we are dedicated to provide you with comprehensive and reliable auto transport solutions.",
	ogImage: "https://example.com/image.png",
	twitterCard: "summary_large_image",
});
</script>

<template>
	<div>
		<SectionsBanner
			title="Transparent Pricing with No Hidden Fees for Your Auto Transportation Needs"
			text="At Mate Logistics, we are dedicated to provide you with comprehensive and reliable auto transport solutions. " />
		<SectionsCustomerComments />
		<SectionsCarShipping />
		<div class="relative">
			<img src="/img/Ellipse-2.png" class="absolute left-0 -top-5 z-0" alt="" />
			<SectionsCarShippingTime />
		</div>
		<div class="relative">
			<img src="/img/Ellipse-2.png" class="absolute left-0 -top-5 z-0" alt="" />
			<SectionsCarShippingMethod />
		</div>
		<div class="bg-gradient-to-r from-[#008AFF]/20 to-[#005BA8]/20 pt-5 pb-1">
			<SectionsCountViewers />
		</div>
		<div class="relative">
			<img src="/img/Ellipse-2.png" class="absolute left-0 -top-5 z-0" alt="" />
			<SectionsExperience />
		</div>
		<!-- <div class="relative">
			<img
				src="/img/Ellipse-3.png"
				class="absolute -left-56 -top-5 z-10"
				alt="" />

			</div> -->
			<SectionsFormulaInfo class="z-0" />
		<SectionsFAQ />
		<SectionsMap />
		<SectionsReviews />
		<SectionsLatestStories title="The latest stories for you" />
	</div>
</template>

<style scoped></style>
