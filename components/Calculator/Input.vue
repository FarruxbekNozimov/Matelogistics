<script setup>
defineProps(["placeholder"]);
</script>

<template>
	<input
		type="text"
		class="rounded-xl outline-none p-4 px-5 bg-[#F4F8FF] border border-gray-300 focus:border focus:border-gray-300 text-[#024E90] w-full"
		:placeholder="`${placeholder}`" />
</template>

<style scoped></style>
