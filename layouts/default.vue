<script setup>
useSeoMeta({
	title: "MateLogistics",
	description:
		"Matelogistics is a prominent logistics company specializing in the efficient and seamless management of supply chain operations. With a focus on providing comprehensive logistics solutions, Matelogistics leverages cutting-edge technology and a robust network to streamline the movement of goods from manufacturers to end-users. The company prides itself on offering a range of services, including transportation, warehousing, distribution, and inventory management, to meet the diverse needs of its clients. Matelogistics stands out for its commitment to reliability, timeliness, and cost-effectiveness, ensuring that businesses can optimize their operations and deliver exceptional service to their customers. With a customer-centric approach and a dedication to innovation, Matelogistics continues to play a crucial role in the success of businesses across various industries by providing tailored logistics solutions tailored to meet the ever-evolving demands of the market.",
});
</script>

<template>
	<div>
		<div class="bg-white/90">
			<!-- HEADER -->
			<Header />
			<div class="min-h-screen py-5">
				<NuxtLoadingIndicator color="#214690" :height="3" :duration="5000" />
				<NuxtPage />
			</div>
			<UNotifications />
			<!-- HEADER -->
			<Footer class="md:block hidden" />
			<FooterMini class="lg:hidden block" />
		</div>
	</div>
</template>

<style scoped>
/* ROUTER LINK STYLES */
.router-link-exact-active {
	border-bottom: 2px solid rgb(6 182 212);
	border-radius: 10px 10px 5px 5px;
}
</style>
