<script setup>
defineProps(["title", "no"]);
</script>

<template>
	<div>
		<h2 class="text-[#214690] lg:text-[48px] text-[24px] font-bold">
			{{ title }}
		</h2>
		<div
			v-if="!no"
			class="w-56 h-1 bg-gradient-to-r from-[#008AFF] to-[#005BA8] rounded-full"></div>
	</div>
</template>

<style scoped></style>
