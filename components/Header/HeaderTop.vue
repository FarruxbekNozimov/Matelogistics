<script setup></script>

<template>
	<div
		class="bg-[#F5F5F5] h-[40px] overflow-hidden gap-5 p-2.5 flex justify-center items-center">
		<p class="text-xs text-gray-500 whitespace-nowrap">
			Ware open now! Try our first real time car shipping cost calculator. Mate
			Logistics has shipped over 720 vehicles to all 50 states last 12 months.
		</p>
		<div class="flex items-center gap-3">
			<router-link to="/contact" class="text-sm text-gray-500"
				>Contact us</router-link
			>
			<Icon name="ic:baseline-circle" class="text-blue-500" />
			<router-link
				to="/check-my-order"
				class="text-sm border-2 border-blue-400 text-blue-500 text-semibold bg-gray-300 hover:bg-gray-200 duration-300 rounded-full px-2 p-1">
				Check my order status
			</router-link>
		</div>
	</div>
</template>

<style scoped></style>
