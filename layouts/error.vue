<script setup>
useSeoMeta({ title: "MateLogistics" });
</script>

<template>
	<div
		class="bg-[url('/img/back-road.png')] bg-no-repeat bg-cover bg-fixed bg-right">
		<div class="bg-white/90">
			<!-- HEADER -->
			<Header />
			<div class="min-h-screen py-5">
				<NuxtLoadingIndicator color="#214690" :height="3" :duration="5000" />
				<slot />
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
