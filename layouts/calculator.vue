<script setup>
useSeoMeta({ title: "MateLogistics" });
</script>

<template>
	<div>
		<div class="bg-[#FCFCFC]">
			<!-- HEADER -->
			<HeaderCalculator />
			<div class="py-5">
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
