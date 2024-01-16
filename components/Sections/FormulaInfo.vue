<script setup>
import { formulaInfo } from "@/data/formulaInfo";
</script>

<template>
	<UContainer>
		<div class="mb-10 md:flex items-start gap-10">
			<div class="md:w-1/2 w-full">
				<TitleBar title="Unveiling the formula: " no="1" />
				<TitleBar title="How car shipping costs are calculated?" />
				<p class="mt-7 font-[400] md:text-[20px] text-[14px] text-[#5D5D5F]">
					Shipping costs are calculated based on several factors, including the
					distance between the pickup and delivery locations, the size and
					weight of the vehicle, the chosen shipping method (open or enclosed
					carrier), the current fuel prices, and any additional services or
					requirements. Car shipping companies typically consider these factors
					and use them to determine a fair and competitive price for
					transporting your vehicle as the cost can vary depending on the
					specific details of your shipment.
				</p>
				<p
					class="text-[#012A44] my-2 mt-8 md:text-[24px] text-[18px] font-[400]">
					Now it's time to take the next step. Let`s use our live cost
					calculator for your shipment
				</p>
				<button
					class="w-full outline-none text-white bg-[#E52E2E] hover:bg-red-700 font-[700] rounded-xl px-5 py-2.5 mb-2 text-[20px]">
					Use live cost calculator
				</button>
			</div>
			<div class="md:w-1/2 space-y-5 py-5">
				<CardsFormulaInfoCard
					v-for="el in formulaInfo"
					:img="el.img"
					:title="el.title"
					:text="el.text" />
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
