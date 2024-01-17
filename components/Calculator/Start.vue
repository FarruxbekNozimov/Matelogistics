<script setup>
defineProps(["next"]);
import { ref } from "vue";
const cards = [
	{
		title: "Discounted cash price",
		price: 197,
		text: "Once we schedule a carrier for a pickup, partial payment will be charged and the balance due on delivery in cash",
	},
	{
		title: "Regular price",
		price: 297,
		text: "Once we schedule a carrier for a pickup, full payment will be charged by using online payment apps or credit/debit card",
	},
	{
		title: "Expedited shipment price",
		price: 477,
		text: "We provide one-day pick up in the emergency moment. (Recommended only if you have strict timeframe for pickup)",
	},
];
const checked = ref(1);
</script>

<template>
	<h3 class="text-[#024E90] text-[24px] font-[700] mb-3">Check this out!</h3>
	<div
		class="bg-[#F4F8FF] p-5 space-y-2 rounded-xl text-[#0070CE] font-[400] mb-5">
		<div class="flex items-center gap-1">
			<Icon name="lucide:mail" class="text-xl" />
			<p class="text-[16px]">Your quote has been sent via email.</p>
		</div>
		<div class="flex items-center gap-1">
			<Icon name="gravity-ui:shield-check" class="text-xl" />
			<p class="text-[16px]">
				Ready to book? Cheers! Choose one from pricing options to book it with
				<span class="uppercase font-[900]">due now $0</span>
			</p>
		</div>
	</div>

	<div class="md:flex items-center space-y-5 gap-7 mb-10">
		<div v-for="(el, i) in cards">
			<input
				type="radio"
				:id="i"
				name="price"
				:value="i"
				class="hidden peer"
				required
				@change="() => (checked = i)" />
			<label
				:for="i"
				class="inline-flex px-3 py-5 bg-[#D9D9D954] rounded-2xl shadow cursor-pointer duration-150 relative"
				:class="
					checked == i
						? 'border-blue-600 bg-gradient-to-r from-[#008AFF] to-[#005BA8] scale-110'
						: ''
				">
				<img
					src="/img/check-img-1.png"
					alt="check"
					class="absolute top-2 right-2 size-10"
					:class="checked == i ? 'block' : 'hidden'" />
				<div class="block text-center">
					<h3
						class="text-nowrap text-[16px] font-[700]"
						:class="checked == i ? 'text-white' : 'text-[#214690]'">
						{{ el.title }}
					</h3>
					<p
						class="text-[40px] font-[700]"
						:class="checked == i ? 'text-white' : 'dollar'">
						${{ el.price }}
					</p>
					<p
						class="text-[14px] font-[400] leading-[20px]"
						:class="checked == i ? 'text-white' : 'text-[#868686]'">
						{{ el.text }}
					</p>
				</div>
			</label>
		</div>
	</div>
	<CalculatorRedButton title="Start booking process" :func="next" />
	<p class="text-[#868686] text-[16px] font-[400] mb-3">
		Aren’t you sure about the date? No worries, you can change it at any time
		with NO EXTRA COST.
	</p>
	<CalculatorPhone />
</template>

<style scoped>
.dollar {
	background: -webkit-linear-gradient(#008aff, #005ba8);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
