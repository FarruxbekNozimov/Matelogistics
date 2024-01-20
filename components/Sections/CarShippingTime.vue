<script setup>
import { ref } from "vue";

const services = ref([
	{
		title: "How long does pick-up take?",
		text: "The duration of the pick-up process for car shipping can vary depending on the availability of carriers, the location of the vehicle, and the scheduling arrangements made with the car shipping company. Typically, it takes around 1-4 business days with standard shipping and up to 36 hours with expedited shipping",
		img: "refresh-arrow.png",
	},
	{
		title: "How long does delivery take?",
		text: "The duration of car shipping delivery can vary depending on factors such as the distance between the pickup and delivery locations, the chosen shipping method (open or enclosed carrier), and any potential delays due to weather or unforeseen circumstances. Typically, car shipping delivery can take anywhere from a few days to a couple of weeks (magic formula destination/400= +-1 delivery date).",
		img: "destination.png",
	},
]);
</script>

<template>
	<UContainer>
		<div class="mb-10">
			<TitleBar title="Timely transportation: " no="1" />
			<TitleBar title="How long does car shipping take?" />
			<div class="w-full lg:flex items-start lg:gap-24 mt-10">
				<div class="lg:w-2/5 w-full space-y-14 mb-5">
					<div
						data-aos="fade-right"
						v-for="el in services"
						:key="el.title"
						class="flex items-start justify-center gap-5">
						<img
							:src="`/img/${el.img}`"
							:alt="el.title"
							class="lg:h-[64px] h-[30px]" />
						<div class="">
							<h2 class="lg:text-[30px] text-[18px] text-[#024E90]">
								{{ el.title }}
							</h2>
							<p class="lg:text-[16px] text-sm text-[#5D5D5F]">{{ el.text }}</p>
						</div>
					</div>
				</div>
				<div data-aos="fade-bottom" class="h-[480px] lg:w-auto w-full relative">
					<img
						src="/img/car-shipping-time-car.png"
						class="w-full h-full rounded-2xl" />
					<router-link
						to="/calculator"
						class="absolute text-center text-lg bg-[#E52E2E] text-white rounded-xl p-2 inset-x-2 bottom-2">
						Use live cost calculator
					</router-link>
				</div>
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
