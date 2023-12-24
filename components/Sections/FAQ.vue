<script setup>
import { faq } from "@/data/faq";
import { ref } from "vue";
const faqOne = ref(null);

const changeAcc = (num) => {
	console.log(faqOne.value, num, faqOne.value, num);
	if (faqOne.value == num) faqOne.value = null;
	else faqOne.value = num;
};
</script>

<template>
	<div class="bg-gradient-to-r from-[#008AFF] to-[#005BA8] mb-5 py-10">
		<Container :px="`p-2`">
			<div class="mb-10">
				<h2 class="text-white md:text-[48px] text-[24px] font-bold">
					Frequently asked questions
				</h2>
				<div v-if="!no" class="w-56 h-1 bg-white rounded-full"></div>
			</div>
			<div class="md:flex items-end justify-between gap-10">
				<div class="md:w-1/2">
					<div
						v-for="(el, i) in faq"
						class="flex items-center justify-center bg-white p-3 rounded-xl mb-3 cursor-pointer shadow"
						@click="changeAcc(i)">
						<div class="w-[97%]">
							<h3 class="text-[20px] text-[#024E90] font-[700]">
								{{ el.label }}
							</h3>
							<p
								:class="faqOne == i ? 'text-[16px]' : 'text-[0px]'"
								class="text-[#5D5D5F] duration-150 ease-in-out">
								{{ el.content }}
							</p>
						</div>
						<Icon
							name="ic:baseline-keyboard-arrow-down"
							:class="faqOne == i ? '' : '-rotate-180'"
							class="text-[#024E90] text-3xl duration-300" />
					</div>
				</div>
				<div class="md:w-1/2 py-4">
					<h3 class="text-[40px] text-white font-[700]">
						Still have a question?
					</h3>
					<p class="text-[24px] font-[400] text-white mb-5">
						If you can not find answers to your questions, you can always
						contact us. We are here to answer. Call (929) 592-3003
					</p>
					<router-link
						to="/contact"
						class="text-[24px] font-[400] bg-[#E52E2E] px-4 p-2 rounded-xl text-white font-[700] lg:inline block lg:text-start text-center">
						Contact us!
					</router-link>
				</div>
			</div>
		</Container>
	</div>
</template>

<style scoped></style>
