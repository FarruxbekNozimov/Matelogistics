<script setup></script>

<template>
	<h3 class="text-[#214690] font-[700] text-[20px]">
		Do you love using our service?
	</h3>
	<p class="text-[#868686] font-[600] text-[16px]">
		We'd really appreciate hearing your thoughts on your recent experience with
		our service, what you like about it and why you'd recommend it. It means a
		lot to us!
	</p>
	<Rate />
	<UTextarea
		color="grey"
		class="text-[#868686] bg-[#E8F0FF] text-[16px]"
		resize
		rows="4"
		placeholder="Write your comment here..." />
	<button
		class="bg-[#E52E2E] w-full rounded-2xl p-2.5 text-white text-[16px] font-[900]">
		Submit
	</button>
</template>

<style scoped></style>
