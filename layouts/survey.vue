<script setup>
useSeoMeta({ title: "MateLogistics" });
</script>

<template>
	<div class="h-screen overflow-hidden relative">
		<img
			src="@/assets/img/Ellipse-1.png"
			class="-z-10 absolute top-0 right-0" />
		<img
			src="@/assets/img/Ellipse-4.png"
			class="-z-10 absolute bottom-0 right-0" />
		<img src="@/assets/img/Ellipse-3.png" class="-z-10 absolute top-0 left-0" />
		<img
			src="@/assets/img/Ellipse-3.png"
			class="-z-10 absolute bottom-0 left-0" />

		<div class="h-full flex justify-center pt-20">
			<slot />
		</div>
	</div>
</template>

<style scoped></style>
