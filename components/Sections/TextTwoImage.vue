<script setup>
defineProps(["title", "text", "img1", "img2", "order", "button"]);
</script>

<template>
	<UContainer>
		<div class="lg:flex items-center justify-between mb-10">
			<div
				class="lg:w-1/2 md:m-0 mb-5"
				:class="order == '1' ? '' : 'order-last'">
				<h2 class="text-[#024E90] lg:text-[24px] text-[16px] mb-10">
					{{ title }}
				</h2>
				<div
					v-html="text"
					class="text-[#5D5D5F] lg:text-[16px] text-[14px] font-[400]"></div>
				<h2
					v-if="!button"
					class="lg:text-[24px] my-5 text-[18px] text-[#214690]">
					Now it's time to take the next step. Let`s use our live cost
					calculator for your shipment
				</h2>
				<router-link
					v-if="!button"
					to="/calculator"
					class="text-[24px] font-[700] text-center text-lg bg-[#E52E2E] text-white rounded-xl p-2 px-4">
					Use live cost calculator
				</router-link>
			</div>
			<div class="text-center">
				<img
					class="shadow-xl hover:rotate-6 duration-300 lg:h-full mt-5 ml-16 lg:w-[486px] w-[85%] z-1"
					:src="`/img/${img1}`" />
				<img
					class="shadow-xl hover:rotate-6 duration-300 lg:h-full mt-[-50px] lg:w-[486px] w-[85%] z-0"
					:src="`/img/${img2}`" />
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
