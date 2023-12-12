<script setup>
defineProps(["title", "text"]);
</script>

<template>
	<!-- MAIN BANNER -->
	<Container :px="`p-2`">
		<div
			class="lg:bg-[url('@/assets/img/banner-car.png')] bg-[url('@/assets/img/banner-sm.png')] bg-no-repeat bg-cover relative rounded-[30px] md:flex items-center justify-between md:px-10 p-4 pt-10">
			<div class="z-1 lg:w-[60%] w-full">
				<h3 class="lg:text-[50px] text-[28px] text-white font-semibold">
					Transparent Pricing with No Hidden Fees for Your Auto Transportation
					Needs
				</h3>
				<p
					class="lg:text-[24px] text-[17px] my-3 text-white lg:font-bold font-thin">
					At Mate Logistics, we are dedicated to provide you with comprehensive
					and reliable auto transport solutions.
				</p>
			</div>
			<div class="z-1 lg:w-[30%]">
				<GetQuoteForm />
			</div>
		</div>
	</Container>
</template>

<style scoped></style>
