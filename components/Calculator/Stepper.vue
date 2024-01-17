<script setup>
defineProps(["num", "arr"]);
</script>

<template>
	<div class="flex items-center justify-around mb-5">
		<div class="" v-for="(el, i) in 4">
			<div
				class="mx-auto w-14 h-14 flex items-center justify-center rounded-full border-8"
				:class="el == num ? 'border-[#008AFF]' : 'border-[#0071ED]/20'">
				<img
					v-if="el < num"
					src="/img/check-img-1.png"
					alt="check"
					class="w-full h-full" />
				<span v-else class="text-[#024E90] text-[20px] font-[700]">
					{{ el }}
				</span>
			</div>
			<p
				class="text-center text-[20px] font-[700]"
				:class="el == num ? 'text-[#008AFF]' : 'text-[#0071ED]/20'">
				{{ arr[i] }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
