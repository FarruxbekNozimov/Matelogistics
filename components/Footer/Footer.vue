<script setup>
import { footerLinks } from "@/data/footerLinks";
</script>

<template>
	<div class="pt-10 lg:pb-0 bg-[#214690]">
		<Container class="grid grid-cols-5 gap-10 pb-5">
			<div class="lg:text-[18px] text-[16px]">
				<img src="@/assets/img/matelogo-footer.png" class="w-full mb-3" />
				<div class="text-white font-[400] p-2">
					<div class="flex items-center justify-between gap-5 mb-2">
						<a href="">
							<Icon name="bi:instagram" class="text-2xl text-white" />
						</a>
						<a href="">
							<Icon name="brandico:facebook-rect" class="text-2xl text-white" />
						</a>
						<a href=""><Icon name="bi:google" class="text-2xl text-white" /></a>
						<a href="">
							<Icon name="simple-icons:linkedin" class="text-2xl text-white" />
						</a>
					</div>
					<p class="mb-2">6534 Myrtle Ave, Queens NY, 11385, USA</p>
					<p>(929) 592-3003</p>
					<p>MC: 1380151</p>
				</div>
			</div>
			<div v-for="(el, i) in footerLinks" class="block">
				<h3 class="text-white text-[20px] font-[700] mb-5">{{ i }}</h3>
				<router-link
					v-for="(link, name) in el"
					:to="link"
					class="block text-white text-[18px] mb-2 font-[400]">
					{{ name }}
				</router-link>
			</div>
			<div class="block">
				<h3 class="text-white text-[18px] font-[700] mb-5">
					Join us and get a discount
				</h3>
				<p class="text-white text-[18px] mb-2 font-[400]">
					Receive $50 discount and get our latest updates.
				</p>
				<input
					type="text"
					placeholder="Enter e-mail"
					class="p-3 w-full rounded-xl bg-inherit outline-none border border-white text-white mb-5" />
				<button
					type="button"
					class="w-full outline-none text-white bg-[#E52E2E] hover:bg-red-700 rounded-xl px-5 py-2.5 mb-2 font-bold">
					I want $50
				</button>
			</div>
		</Container>
		<Container>
			<div class="w-full border-b"></div>
		</Container>
		<Container class="flex items-center justify-between py-5 text-white">
			<span class="text-[18px] lg:block hidden">
				Mate Logistics 2023. All rights reserved
			</span>
			<span class="text-[17px]">Copyright © 2022-2023 Mate Logistics Inc</span>
		</Container>
	</div>
</template>

<style scoped></style>
