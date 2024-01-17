<script setup>
definePageMeta({ layout: "calculator" });
</script>

<template>
	<UContainer>
		<div
			class="bg-white border border-[#E9EFFA] rounded-2xl shadow flex justify-between p-5 py-10 gap-20">
			<div class="w-2/3">
				<CalculatorStart />
			</div>
			<div class="w-1/2">
				<CalculatorLeftside />
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
