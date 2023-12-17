<script setup></script>

<template>
	<div
		class="bg-[url('@/assets/img/back-road.png')] bg-no-repeat bg-cover bg-fixed bg-right">
		<div class="bg-white/90">
			<!-- HEADER -->
			<Header />
			<div class="min-h-screen">
				<NuxtLoadingIndicator color="#214690" height="3" duration="5000" />
				<NuxtPage />
			</div>
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
