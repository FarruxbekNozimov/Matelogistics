<script setup>
definePageMeta({ layout: "quote" });
</script>

<template>
	<div class="w-full h-screen">
		<HeaderTop />
		<div class="w-full flex item-center justify-center p-5">
			<img src="@/assets/img/logo.png" alt="" />
		</div>
		<div class="flex items-center justify-center w-full md:px-20 py-20">
			<QuoteGetQuoteForm />
		</div>
	</div>
</template>

<style scoped></style>
