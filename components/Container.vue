<script setup>
defineProps(["px"]);
</script>

<template>
	<div class="mx-auto min-w-[300px] max-w-[1366px] h-full" :class="px">
		<slot />
	</div>
</template>

<style lang="scss"></style>
