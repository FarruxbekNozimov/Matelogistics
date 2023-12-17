<script setup>
defineProps(["tree"]);
</script>

<template>
	<div class="flex items-center">
		<div v-for="(el, i) in tree" class="flex items-center">
			<span
				v-if="i != tree.length - 1"
				class="text-[#008AFF] text-[14px] font-[400]">
				{{ el }}
			</span>
			<Icon
				v-if="i != tree.length - 1"
				name="ic:baseline-navigate-next"
				class="text-[#9A999B] text-lg[14px]" />
			<span
				v-if="i == tree.length - 1"
				class="text-[#9A999B] text-[14px] font-[400]">
				{{ tree[i] }}
			</span>
		</div>
	</div>
</template>

<style scoped></style>
