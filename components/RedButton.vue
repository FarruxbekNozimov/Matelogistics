<script setup>
defineProps(["title", "func"]);
</script>

<template>
	<button
		@click="func"
		class="w-full outline-none text-white bg-[#E52E2E] hover:bg-red-700 font-[700] rounded-xl lg:py-2.5 py-2 mb-2 lg:text-[17px] text-[15px]">
		{{ title }}
		<Icon name="ic:outline-chevron-right" class="text-2xl" />
	</button>
</template>

<style scoped></style>
