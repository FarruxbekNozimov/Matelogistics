<script setup>
defineProps(["title", "func", "to"]);
</script>

<template>
	<router-link
		:to="to ? to : ''"
		@click="func"
		class="block text-center w-full outline-none text-white bg-[#E52E2E] hover:bg-red-700 font-[700] rounded-2xl lg:py-2.5 px-2 mb-2 lg:text-[17px] text-[15px]">
		{{ title }}
		<Icon name="ic:outline-chevron-right" class="text-2xl" />
	</router-link>
</template>

<style scoped></style>
