<script setup>
defineProps(["num"]);
</script>

<template>
	<div class="flex items-center justify-between block px-3">
		<div
			class="w-14 h-14 flex items-center justify-center rounded-full border-8 border-[#0071ED]/30"
			v-for="el in 3">
			<img
				v-if="el < num"
				src="@/assets/img/check-img-1.png"
				alt="check"
				class="w-full h-full" />
			<span v-else class="text-[#024E90] text-[20px] font-[700]">{{ el }}</span>
		</div>
	</div>
</template>

<style scoped></style>
