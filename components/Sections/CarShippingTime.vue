<script setup>
import { ref } from "vue";

const importImage = (imageName) => {
	const images = import.meta.globEager("@/assets/img/*");
	const imageKeys = Object.keys(images);
	const imageKey = imageKeys.find((key) => key.endsWith(imageName));
	return images[imageKey].default;
};

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
	<Container :px="`p-2`">
		<div class="mb-10">
			<TitleBar title="Timely transportation: " no="1" />
			<TitleBar title="How long does car shipping take?" />
			<div class="w-full lg:flex items-start lg:gap-24 mt-10">
				<div class="lg:w-2/5 w-full space-y-14 mb-5">
					<div
						v-for="el in services"
						:key="el.title"
						class="flex items-start justify-center gap-5">
						<img
							:src="importImage(el.img)"
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
				<div class="lg:w-auto w-full relative">
					<img
						src="@/assets/img/car-shipping-time-car.png"
						class="lg:h-[480px]" />
					<RedButton
						to="/calculator"
						class="absolute text-center text-lg bg-[#E52E2E] text-white rounded-xl p-2 w-[95%] bottom-3 left-3">
						Use live cost calculator
					</RedButton>
				</div>
			</div>
		</div>
	</Container>
</template>

<style scoped></style>
