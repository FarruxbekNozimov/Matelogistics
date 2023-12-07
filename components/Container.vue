<template>
	<div class="mx-auto min-w-[320px] max-w-[1366px] h-full" :class="px">
		<slot />
	</div>
</template>

<script setup>
defineProps(["px"]);
</script>

<style lang="scss"></style>
