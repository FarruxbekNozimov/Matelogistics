<script setup>
import { calculation } from "@/data/calculation";
</script>

<template>
	<div>
		<SectionsBanner
			title="How much is shipping a car?"
			text="Quickly calculate costs for your car shipping in real-time, making informed decisions easier than ever." />
		<SectionsCustomerComments />
		<SectionsTextImage
			title="How much does car shipping cost?"
			text="The fewer the distance, the higher cost per mile. We can divide the distance into 3 categories, 1-short 0-500 miles (~$1.63/mile), 2-medium 501-1500 miles (~$0.92/mile), 3-long 1501+ miles (~$0.62/mile).<br/><br/>Let’s show some example, 300 miles distance could cost around $489, 800 miles distance could cost around $736, or 1800 miles distance could cost around $1,116.<br/><br/>Car shipping costs vary based on several factors such as distance, vehicle size, transport type, vehicle condition, season, demand and additional services."
			img="open-car-2.png"
			firstImg="1"
			isButton="1" />
		<SectionsTextImage
			title="How to get a transparent quote for your car shipping?"
			text="Obtaining a transparent quote for car shipping involves a few key steps to ensure clarity and accuracy in pricing. Make sure to ask any personal preferences, expedited pickup or any additional info.<br/><br/>To ensure you receive the most transparent and current car shipping estimate, it's essential to be provide with accurate information such as:<br/><br/> ● Vehicle pickup and delivery destination (city, state, zip code)<br/> ● Car transport trailer type (open or enclosed trailer)<br/> ● Vehicle year, make, and model (inform if there are any modifications)<br/> ● Operational status (can be driven forward or reverse for loading on and unloading from a trailer)<br/> ● Earliest available pick up date"
			img="shipment.png" />
		<UContainer>
			<TitleBar title="6 factors in auto transport cost calculation" />
		</UContainer>
		<SectionsTextImage
			v-for="(el, i) in calculation"
			:title="el.title"
			:text="el.text"
			:img="el.img"
			:firstImg="i % 2 == 0 ? '1' : ''"
			isButton="1" />
		<SectionsExperienceFlex />
		<SectionsLetWorkTransport />
	</div>
</template>

<style scoped></style>
