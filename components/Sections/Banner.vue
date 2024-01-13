<script setup>
defineProps(["title", "text", "noForm"]);
</script>

<template>
	<!-- MAIN BANNER -->
	<UContainer>
		<div
			data-aos="fade-down"
			class="bg-[url('@/assets/img/banner-car.png')] bg-center bg-no-repeat bg-cover rounded-[30px] md:flex items-center justify-between lg:px-10 p-4 pt-5 lg:min-h-[355px] mb-5"
			v-lazy:background-image="'@/assets/img/banner-car.png'">
			<div class="z-1 text-center lg:w-[80%] mx-auto">
				<h3 class="lg:text-[50px] text-[28px] text-white font-semibold">
					{{ title }}
				</h3>
				<p
					class="lg:text-[24px] text-[17px] my-3 text-white lg:font-[600] font-thin">
					{{ text }}
				</p>
			</div>
			<QuoteGetQuoteForm v-if="!noForm" />
		</div>
	</UContainer>
</template>

<style scoped></style>
