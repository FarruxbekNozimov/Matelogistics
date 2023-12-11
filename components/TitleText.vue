<script setup>
defineProps(["topTitle", "mainTitle", "text"]);
</script>

<template>
	<Container :px="`p-2`">
		<div class="mb-10 mt-5">
			<TitleBar :title="topTitle" no="1" />
			<TitleBar :title="mainTitle" class="mb-5" />
			<p class="text-[#5D5D5F] text-[16px]">{{ text }}</p>
		</div>
	</Container>
</template>

<style scoped></style>
