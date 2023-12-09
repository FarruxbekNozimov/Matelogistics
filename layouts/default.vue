<script setup></script>

<template>
	<div
		class="bg-[url('@/assets/img/back-road.png')] bg-no-repeat bg-cover bg-fixed bg-right">
		<div class="bg-white/80">
			<!-- HEADER -->
			<Header />
			<div class="">
				<slot class="bg-gray-500 font-['Mulish']" />
			</div>
			<!-- HEADER -->
			<Footer />
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
