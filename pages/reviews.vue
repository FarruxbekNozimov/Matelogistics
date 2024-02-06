<script setup>
import { reviews } from "@/data/reviews";
</script>

<template>
	<div>
		<SectionsBanner
			title="Mate Logistics Reviews"
			text="We strive to create an environment where every interaction is marked by excellence, where satisfaction isn’t just a goal but an expectation."
			noForm="1" />
		<UContainer>
			<h3
				class="text-[#024E90] md:px-24 lg:text-[28px] text-[20px] font-[600] mb-5 text-center">
				At Mate Logistics, our 4.6-star rating speaks volumes about our
				commitment to exceptional customer service. We're dedicated to going
				above and beyond, striving to provide an outstanding experience for
				every customer we serve.
			</h3>
		</UContainer>
		<SectionsReviews />
		<UContainer>
			<h3
				class="text-[#024E90] md:px-24 lg:text-[28px] text-[20px] font-[600] my-5 mb-10 text-center">
				You can find selections here, but for more detailed information and
				additional reviews, I recommend checking Google and the BBB for a
				comprehensive overview.
			</h3>

			<div class="grid md:grid-rows-2 md:grid-cols-8 gap-10">
				<CardsReviewOverviewCardBig
					:data="reviews[0]"
					class="row-span-4 col-span-3" />
				<CardsReviewOverviewCard
					:data="reviews[1]"
					class="row-span-2 col-span-5" />
				<CardsReviewOverviewCard
					:data="reviews[2]"
					class="row-span-2 col-span-5" />
				<CardsReviewOverviewCard
					:data="reviews[3]"
					class="row-span-2 col-span-5" />
				<CardsReviewOverviewCardBig
					:data="reviews[4]"
					class="row-span-4 col-span-3" />
				<CardsReviewOverviewCard
					:data="reviews[5]"
					class="row-span-2 col-span-5" />
				<CardsReviewOverviewCardBig
					:data="reviews[6]"
					class="row-span-4 col-span-3" />
				<CardsReviewOverviewCard
					:data="reviews[7]"
					class="row-span-2 col-span-5" />
				<CardsReviewOverviewCard
					:data="reviews[8]"
					class="row-span-2 col-span-5" />
			</div>
		</UContainer>
		<SectionsLetWorkTransport class="mt-24" />
	</div>
</template>

<style scoped></style>
