<script setup>
useSeoMeta({ title: "Matelogistics Quote" });
</script>

<template>
	<div
		class="bg-[url('/img/back-road.png')] bg-no-repeat bg-cover bg-fixed bg-right">
		<div class="bg-white/80 w-full h-screen p-[16px]">
			<NuxtLoadingIndicator color="#214690" height="3" duration="5000" />
			<NuxtPage class="bg-gray-500 font-['Mulish']" />
		</div>
		<UNotifications />
	</div>
</template>

<style scoped>
/* ROUTER LINK STYLES */
.router-link-exact-active {
	border-bottom: 2px solid rgb(6 182 212);
	border-radius: 10px 10px 5px 5px;
}
</style>
