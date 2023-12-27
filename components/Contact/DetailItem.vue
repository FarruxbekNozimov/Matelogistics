<script setup>
defineProps(["data", "noIcon"]);
</script>

<template>
	<div
		class="flex items-center justify-between mb-3 border-b-2 border-[#008AFF4D] pb-3">
		<div class="flex items-center gap-2">
			<Icon
				v-if="!noIcon"
				:name="data.icon"
				class="text-[#008AFF4D] text-2xl" />
			<span class="text-[#5D5D5F] text-[16px] font-[400]">
				{{ data.title }}
			</span>
		</div>
		<div class="text-[#5D5D5F] text-[16px] font-[400]" v-html="data.text"></div>
	</div>
</template>

<style scoped></style>
