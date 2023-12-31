<script setup>
defineProps(["topTitle", "mainTitle", "text"]);
</script>

<template>
	<UContainer>
		<div class="mb-10 mt-5">
			<TitleBar :title="topTitle" no="1" />
			<TitleBar :title="mainTitle" class="mb-5" />
		</div>
		<div class="mb-10 text-[#5D5D5F] text-[16px]" v-html="text"></div>
	</UContainer>
</template>

<style scoped></style>
