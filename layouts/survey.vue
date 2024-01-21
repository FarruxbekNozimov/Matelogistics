<script setup>
useSeoMeta({ title: "MateLogistics" });
</script>

<template>
	<div class="overflow-hidden relative">
		<img src="/img/Ellipse-1.png" class="-z-10 absolute top-0 right-0" />
		<img src="/img/Ellipse-4.png" class="-z-10 absolute bottom-0 right-0" />
		<img src="/img/Ellipse-3.png" class="-z-10 absolute top-0 left-0" />
		<img src="/img/Ellipse-3.png" class="-z-10 absolute bottom-0 left-0" />

		<div class="h-screen overflow-y-auto flex justify-center pt-20 p-2">
			<slot />
		</div>
	</div>
</template>

<style scoped></style>
