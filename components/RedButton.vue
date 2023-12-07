<script setup>
defineProps(["to", "class"]);
</script>

<template>
	<router-link :to="to" :class="class"> <slot /></router-link>
</template>

<style scoped></style>
