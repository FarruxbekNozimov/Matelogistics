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
		title: "Book your quote",
		text: "Get a Free Quote: Book Your Car Shipping Service Now!",
		img: "services-1.png",
	},
	{
		title: "Get your car picked up",
		text: "Convenient Car Pickup: Schedule Your Shipping Today!",
		img: "car-key.png",
	},
	{
		title: "Enjoy your car",
		text: "Hit the Road: Enjoy Your Car After Seamless Delivery!",
		img: "protection.png",
	},
]);
</script>

<template>
	<div
		class="bg-[url('@/assets/img/back-road.png')] bg-no-repeat bg-cover bg-fixed bg-right">
		<div class="bg-white/90">
			<UContainer class="">
				<div class="mb-10 mt-5">
					<TitleBar title="Effortless car shipping: " no="1" />
					<TitleBar title="A 3-step process" class="mb-5" />
					<div class="w-full text-start lg:flex items-center justify-between">
						<img
							data-aos="fade-right"
							src="@/assets/img/car-shipping.png"
							class="" />
						<div class="space-y-14">
							<div
								v-for="el in services"
								:key="el.title"
								class="flex items-center justify-center gap-5">
								<img
									:src="importImage(el.img)"
									:alt="el.title"
									class="lg:h-[64px] h-[38px]" />
								<div class="">
									<h2 class="lg:text-[30px] text-[18px] text-[#024E90]">
										{{ el.title }}
									</h2>
									<p class="lg:text-[16px] text-[12px] text-[#5D5D5F]">
										{{ el.text }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</UContainer>
		</div>
	</div>
</template>

<style scoped></style>
