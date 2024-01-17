<script setup>
defineProps(["title", "func"]);
</script>

<template>
	<button
		class="text-center outline-none text-white bg-[#E52E2E] hover:bg-red-700 font-[700] rounded-xl lg:py-2.5 px-5 mb-2 lg:text-[17px] text-[15px]">
		{{ title }}
		<Icon name="material-symbols:arrow-right-alt-rounded" class="text-2xl" />
	</button>
</template>

<style scoped></style>
