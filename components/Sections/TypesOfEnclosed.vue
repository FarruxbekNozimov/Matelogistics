<script setup></script>

<template>
	<UContainer>
		<div class="lg:flex items-center justify-between">
			<div class="lg:w-1/2 md:m-0 mb-5">
				<h2 class="text-[#024E90] lg:text-[24px] text-[16px]">
					Types of enclosed Auto Transport options
				</h2>
				<p class="text-[#5D5D5F] lg:text-[16px] text-[14px] font-[400]">
					When it comes to enclosed auto transport, there are two main types of
					transport options: single-car transport and multi-car transport.
					Single-car transport involves shipping your vehicle in a dedicated
					enclosed trailer. This option provides the highest level of protection
					and is ideal for individuals who want complete peace of mind knowing
					that their vehicle is the only one being transported. Multi-car
					transport, on the other hand, involves shipping multiple vehicles in
					the same enclosed trailer. While this option may be more
					cost-effective, it does come with some trade-offs in terms of
					individual attention and protection. However, reputable enclosed auto
					transport companies take great care to ensure that each vehicle is
					properly secured and protected, regardless of the number being
					transported.
				</p>
				<h2 class="lg:text-[24px] mt-6 text-[18px] text-[#012A44]">
					Now it's time to take the next step. Let`s use our live cost
					calculator for your shipment
				</h2>
				<RedButton
					to="/calculator"
					class="text-center text-lg bg-[#E52E2E] text-white rounded-2xl p-2"
					title="Use live cost calculator">
				</RedButton>
			</div>
			<div class="">
				<img
					class="lg:h-full mt-5 ml-16 w-[486px]"
					src="@/assets/img/typesofenclosed1.png" />
				<img
					class="lg:h-full mt-[-50px] w-[486px] z-0"
					src="@/assets/img/typesofenclosed2.png" />
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
