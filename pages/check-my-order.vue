<script setup>
definePageMeta({ layout: "quote" });
</script>

<template>
	<div class="w-full h-screen bg-white">
		<HeaderTop />
		<div class="w-full flex item-center justify-center p-5">
			<router-link to="/">
				<img src="/img/logo.png" alt="" />
			</router-link>
		</div>
		<div class="flex items-center justify-center w-full md:px-20 py-20">
			<CheckOrderForm
				style="
					box-shadow: 11px 10px 85px 79px rgba(115, 171, 255, 0.29);
					-webkit-box-shadow: 11px 10px 85px 79px rgba(115, 171, 255, 0.29);
					-moz-box-shadow: 11px 10px 85px 79px rgba(115, 171, 255, 0.29);
				" />
		</div>
	</div>
</template>
<style scoped></style>
