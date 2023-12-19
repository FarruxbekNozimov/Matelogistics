<script setup>
defineProps(["title", "text"]);
</script>

<template>
	<!-- MAIN BANNER -->
	<Container :px="`p-2`">
		<div
			class="bg-[url('@/assets/img/banner-car.png')] bg-no-repeat bg-cover relative rounded-[30px] md:flex items-center justify-between lg:px-10 p-4 pt-5">
			<div class="z-1 lg:w-[60%] w-full">
				<h3 class="lg:text-[50px] text-[28px] text-white font-semibold">
					{{ title }}
				</h3>
				<p
					class="lg:text-[24px] text-[17px] my-3 text-white lg:font-[600] font-thin">
					{{ text }}
				</p>
			</div>
			<QuoteGetQuoteForm />
		</div>
	</Container>
</template>

<style scoped></style>
