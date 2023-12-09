<script setup>
import { faq } from "@/data/faq";
import { ref } from "vue";
const faqOne = ref(null);

const changeAcc = (num) => {
	console.log(faqOne.value);
	if (faqOne.value == num) faqOne.value = null;
	faqOne.value = num;
};
</script>

<template>
	<div class="bg-gradient-to-r from-[#008AFF] to-[#005BA8] mb-5 py-10">
		<Container :px="`p-2`">
			<div class="mb-10">
				<h2 class="font-[500] text-white lg:text-[48px] text-[24px] font-bold">
					Frequently asked questions
				</h2>
				<div v-if="!no" class="w-56 h-1 bg-white rounded-full"></div>
			</div>
			<div class="flex items-center justify-between gap-10">
				<div class="w-1/2">
					<div
						v-for="(el, i) in faq"
						class="flex items-center justify-center bg-white p-3 rounded-xl mb-3 cursor-pointer shadow"
						@click="changeAcc(i)">
						<div class="w-[97%]">
							<h3 class="text-[20px] text-[#024E90] font-[700]">
								{{ el.title }}{{ i }}{{ faqOne }}
							</h3>
							<p
								:class="faqOne == i ? 'block' : 'hidden'"
								class="text-[16px] text-[#5D5D5F] transition-2">
								{{ el.text }}
							</p>
						</div>
						<Icon name="ic:baseline-keyboard-arrow-down" class="text-xl" />
					</div>
				</div>
				<div class=""></div>
			</div>
		</Container>
	</div>
</template>

<style scoped></style>
