<script setup>
definePageMeta({ layout: "calculator" });
</script>

<template>
	<UContainer>
		<div
			class="bg-white border border-[#E9EFFA] rounded-2xl shadow flex justify-between p-5 py-10 gap-14">
			<div class="w-[65%]">
				<CalculatorStart />
			</div>
			<div class="w-[35%]">
				<CalculatorRightside />
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
