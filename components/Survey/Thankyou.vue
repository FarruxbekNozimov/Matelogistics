<script setup>
defineProps(["data"]);
import { ref } from "vue";

const copied = ref(false);
</script>

<template>
	<div
		class="bg-white border border-[#ECF3FF] p-5 rounded-2xl shadow-xl space-y-3 mb-5">
		<img src="/img/check-img-1.png" class="mx-auto h-[67px]" alt="" />
		<h3 class="text-[#214690] font-[700] text-[24px] text-center">
			Thanks a ton!
		</h3>
		<p class="text-[#868686] font-[600] text-[16px] text-center">
			We're thrilled to hear about your experience and truly appreciate your
			feedback. Your words mean the world to us and keep our team motivated.
		</p>
		<div
			class="relative text-[12px] font-[600] text-[#868686] bg-[#E8F0FF] p-2 rounded-lg border-2 border-dashed border-[#A5AFD3] tracking-tight">
			{{ data.text }}
			<Icon
				name="bi:clipboard"
				class="text-2xl absolute bottom-1 right-1 cursor-pointer text-[#008AFF] bg-white p-[1px] rounded"
				v-if="!copied"
				@click="() => (copied = true)" />
			<Icon
				name="bi:clipboard-check"
				class="text-2xl absolute bottom-1 right-1 cursor-pointer text-[#008AFF] bg-white p-[1px] rounded"
				v-else />
		</div>
	</div>
	<router-link
		to="/"
		class="block w-2/3 mx-auto bg-gradient-to-r from-[#008aff] to-[#005ba8] rounded-2xl p-[2px] hover:scale-105 duration-300">
		<button class="bg-white w-full rounded-2xl p-2.5">
			<span class="text-[16px] font-[900] text-gradient">
				Go to the Home page
			</span>
		</button>
	</router-link>
</template>

<style scoped>
.text-gradient {
	background: -webkit-linear-gradient(#008aff, #005ba8);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
